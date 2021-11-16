FROM node:latest
WORKDIR /home
ADD .output output
ENV process.env.NUXT_HOST 0.0.0.0
EXPOSE 3000
CMD ["node", "output/server/index.mjs"]

