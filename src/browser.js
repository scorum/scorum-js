const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");

const scorum = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.scorum = scorum;
}

if (typeof global !== "undefined") {
  global.scorum = scorum;
}

exports = module.exports = scorum;
