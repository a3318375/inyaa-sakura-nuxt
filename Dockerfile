FROM node:latest
WORKDIR /home
ADD .output output
EXPOSE 3000
CMD ["node", "output/server/index.mjs"]

