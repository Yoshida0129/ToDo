FROM node:8.11.3-alpine

WORKDIR /app

RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g vue-cli && \
    npm audit

EXPOSE 9000

CMD ["/bin/sh"]