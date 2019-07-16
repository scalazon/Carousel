FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


ENV PORT=3003
EXPOSE 3003

CMD [ "node", "server/server.js" ]