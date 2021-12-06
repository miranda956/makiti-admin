FROM node:12

WORKDIR /usr/projects/makitiadmin/backend


COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]