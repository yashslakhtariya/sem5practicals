# our base image
FROM node:14-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#Creating directory
WORKDIR /home/node/app

# Copy files required for the app to run
COPY package*.json ./

#install module such as npm 
RUN npm install

#bundle app source
COPY --chown=node:node . .
EXPOSE 4202
CMD ["node","app.js"]