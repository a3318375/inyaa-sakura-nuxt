FROM node:16-alpine3.14
WORKDIR /home
ADD .output .output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]

