FROM node:22-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm ci

COPY app .

RUN addgroup -S nodegroup && \
    adduser -S nodeuser -G nodegroup

USER nodeuser

EXPOSE 3000

CMD ["npm", "start"]