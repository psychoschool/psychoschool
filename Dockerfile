FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

RUN yarn build


FROM fholzer/nginx-brotli

COPY ./www/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/dist /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
