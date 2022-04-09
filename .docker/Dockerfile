FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

ARG BACKEND_PORT=9000
EXPOSE ${BACKEND_PORT}
ENV PORT=${BACKEND_PORT}
CMD [ "node", "src/index.js" ]
