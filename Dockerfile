FROM node:8.11.3-alpine

WORKDIR /app

COPY package*.json ./

RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g vue-cli && \
    npm audit

COPY . . 
EXPOSE 18080:18080

CMD ["/bin/sh"]