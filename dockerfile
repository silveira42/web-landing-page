FROM node:18-alpine

# This is the directory "inside" the container
WORKDIR /web-landing-page/

# Copying necessary files
COPY public/ /web-landing-page/public
COPY src/ /web-landing-page/src
COPY package.json /web-landing-page/

# Installing node modules
RUN npm install

# Starting the server
CMD ["npm", "start"]
