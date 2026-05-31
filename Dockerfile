FROM node:20-alpine

WORKDIR /app

COPY app/package.json .
COPY app/server.js .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
