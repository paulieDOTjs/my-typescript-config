FROM node:14-alpine
WORKDIR /app

COPY . .

RUN yarn install && yarn global add typescript ts-node tsc 
RUN yarn build

RUN npm prune --production
RUN rm -rf src

EXPOSE 5000
CMD ["node", "dist/index.js"]
