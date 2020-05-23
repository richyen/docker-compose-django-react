FROM node:current-alpine

WORKDIR /app/frontend
COPY package.json /app/frontend
COPY yarn.lock /app/frontend

RUN yarn

EXPOSE 3000
CMD ["yarn", "start"]
