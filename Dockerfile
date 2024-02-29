FROM node:20-alpine
RUN apk add pango-dev g++ make jpeg-dev giflib-dev librsvg-dev pkgconfig

WORKDIR /src/app
COPY . .


