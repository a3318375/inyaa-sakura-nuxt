FROM node:latest
WORKDIR /home
ADD .output output
RUN EXPORT NUXT_HOST 0.0.0.0
EXPOSE 3000
CMD ["node", "output/server/index.mjs"]

