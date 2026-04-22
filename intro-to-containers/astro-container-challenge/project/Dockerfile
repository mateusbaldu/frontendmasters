## build stage
FROM node:20 as node-builder
RUN mkdir /build
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .


## run stage
FROM nginx:alpine
COPY --from=node-builder /build/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]