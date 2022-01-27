FROM node:14-alpine as builder
RUN apk add --update nodejs npm
WORKDIR /getcodedone
RUN apk add --no-cache python3 py3-pip make g++
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx
COPY --from=builder /getcodedone/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf