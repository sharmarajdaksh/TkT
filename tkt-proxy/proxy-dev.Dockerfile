FROM nginx:alpine
COPY ./dev.default.conf /etc/nginx/conf.d/default.conf