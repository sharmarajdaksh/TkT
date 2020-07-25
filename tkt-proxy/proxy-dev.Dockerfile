FROM nginx:1.19-alpine
COPY ./dev.default.conf /etc/nginx/conf.d/default.conf