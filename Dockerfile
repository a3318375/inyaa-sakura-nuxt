FROM node:16-alpine3.14
WORKDIR /home
ADD . .
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

