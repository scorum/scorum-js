import get from 'lodash/get';
import { key_utils } from './auth/ecc';

module.exports = scorumAPI => {
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function scorumPower(account, gprops) {
    const vests = parseFloat(account.vesting_shares.split(' ')[0]);
    const total_vests = parseFloat(gprops.total_vesting_shares.split(' ')[0]);
    const total_vest_scorum = parseFloat(gprops.total_vesting_fund_steem.split(' ')[0]);
    const scorumpowerf = total_vest_scorum * (vests / total_vests);
    return scorumpowerf;
  }

  function processOrders(open_orders, assetPrecision) {
    const scorumpowerOrders = !open_orders
      ? 0
      : open_orders.reduce((o, order) => {
          if (order.sell_price.base.indexOf('SCR') !== -1) {
            o += order.for_sale;
          }
          return o;
        }, 0) / assetPrecision;

    return { scorumpowerOrders };
  }

  function calculateSaving(savings_withdraws) {
    let savings_pending = 0;
    savings_withdraws.forEach(withdraw => {
      const [amount, asset] = withdraw.amount.split(' ');
      savings_pending += parseFloat(amount);
    });
    return { savings_pending };
  }

  function estimateAccountValue(account, { gprops, feed_price, open_orders, savings_withdraws, scorum_power } = {}) {
    const promises = [];
    const username = account.name;
    const assetPrecision = 1000;
    let orders, savings;

    if (!scorum_power || !feed_price) {
      if (!gprops || !feed_price) {
        promises.push(
          scorumAPI.getStateAsync(`/@{username}`).then(data => {
            gprops = data.props;
            feed_price = data.feed_price;
            scorum_power = scorumPower(account, gprops);
          })
        );
      } else {
        scorum_power = scorumPower(account, gprops);
      }
    }

    if (!open_orders) {
      promises.push(
        scorumAPI.getOpenOrdersAsync(username).then(open_orders => {
          orders = processOrders(open_orders, assetPrecision);
        })
      );
    } else {
      orders = processOrders(open_orders, assetPrecision);
    }

    if (!savings_withdraws) {
      promises.push(
        scorumAPI.getSavingsWithdrawFromAsync(username).then(savings_withdraws => {
          savings = calculateSaving(savings_withdraws);
        })
      );
    } else {
      savings = calculateSaving(savings_withdraws);
    }

    return Promise.all(promises).then(() => {
      let price_per_scorum = undefined;
      const { base, quote } = feed_price;
      if (/ SCR$/.test(quote)) price_per_scorum = parseFloat(base.split(' ')[0]);
      const savings_balance = account.savings_balance;
      const savings_sbd_balance = account.savings_sbd_balance;
      const balance_scorum = parseFloat(account.balance.split(' ')[0]);
      const saving_balance_scorum = parseFloat(savings_balance.split(' ')[0]);
      const sbd_balance = parseFloat(account.sbd_balance);
      const sbd_balance_savings = parseFloat(savings_sbd_balance.split(' ')[0]);

      let conversionValue = 0;
      const currentTime = new Date().getTime();
      (account.other_history || []).reduce((out, item) => {
        if (get(item, [1, 'op', 0], '') !== 'convert') return out;

        const timestamp = new Date(get(item, [1, 'timestamp'])).getTime();
        const finishTime = timestamp + 86400000 * 3.5; // add 3.5day conversion delay
        if (finishTime < currentTime) return out;

        const amount = parseFloat(get(item, [1, 'op', 1, 'amount']).replace(' SBD', ''));
        conversionValue += amount;
      }, []);

      const total_sbd =
        sbd_balance + sbd_balance_savings + savings.savings_sbd_pending + orders.sbdOrders + conversionValue;

      const total_scorum =
        scorum_power + balance_scorum + saving_balance_scorum + savings.savings_pending + orders.scorumpowerOrders;

      return (total_scorum * price_per_scorum + total_sbd).toFixed(2);
    });
  }

  function createSuggestedPassword() {
    const PASSWORD_LENGTH = 32;
    const privateKey = key_utils.get_random_key();
    return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
  }

  return {
    reputation: function(reputation) {
      if (reputation == null) return reputation;
      reputation = parseInt(reputation);
      let rep = String(reputation);
      const neg = rep.charAt(0) === '-';
      rep = neg ? rep.substring(1) : rep;
      const str = rep;
      const leadingDigits = parseInt(str.substring(0, 4));
      const log = Math.log(leadingDigits) / Math.log(10);
      const n = str.length - 1;
      let out = n + (log - parseInt(log));
      if (isNaN(out)) out = 0;
      out = Math.max(out - 9, 0);
      out = (neg ? -1 : 1) * out;
      out = out * 9 + 25;
      out = parseInt(out);
      return out;
    },

    scorumPowerToScr: function(scorumPower, totalsSorumPower, totalVestingFundSteem) {
      return parseFloat(totalVestingFundSteem) * (parseFloat(scorumPower) / parseFloat(totalScorumPower));
    },

    commentPermlink: function(parentAuthor, parentPermlink) {
      const timeStr = new Date()
        .toISOString()
        .replace(/[^a-zA-Z0-9]+/g, '')
        .toLowerCase();
      parentPermlink = parentPermlink.replace(/(-\d{8}t\d{9}z)/g, '');
      return 're-' + parentAuthor + '-' + parentPermlink + '-' + timeStr;
    },

    amount: function(amount, asset) {
      return amount.toFixed(3) + ' ' + asset;
    },
    numberWithCommas,
    scorumPower,
    estimateAccountValue,
    createSuggestedPassword
  };
};
