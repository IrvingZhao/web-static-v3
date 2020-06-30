FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN mkdir -p /usr/share/nginx/html/n
COPY conf/server.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/n/
RUN chmod -R 777 /usr/share/nginx/html
