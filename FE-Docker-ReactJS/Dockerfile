FROM node:16.18.0-buster

WORKDIR /code

COPY package.json /package.json
COPY package-lock.json /package-lock.json

RUN npm install 

COPY . .

CMD ["npm","run","dev"]