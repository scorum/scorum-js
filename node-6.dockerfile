FROM node:6
ADD ./package.json /scorumjs/package.json
WORKDIR /scorumjs
RUN npm install
ADD . /scorumjs
RUN npm test
