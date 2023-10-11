# Base Image
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./ 

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4200

CMD [ "node", "app.js" ]