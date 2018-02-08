FROM node:4
ADD ./package.json /scorumjs/package.json
WORKDIR /scorumjs
RUN npm install
ADD . /scorumjs
RUN npm test
