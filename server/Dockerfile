FROM node:14-alpine3.15
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD set DATABASE_URL=mongodb://root:pupabarcamp7@mongo:27017/Topics; node index.js
EXPOSE 3001
