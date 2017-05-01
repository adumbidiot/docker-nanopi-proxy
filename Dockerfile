FROM hypriot/rpi-node:latest 

ADD ./package.json ./package.json
RUN npm install

ADD ./ ./

EXPOSE 8080 

CMD node index.js
