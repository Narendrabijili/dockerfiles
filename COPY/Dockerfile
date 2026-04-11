FROM almalinux:9
RUN dnf install nginx -y
RUN /usr/shar/nginx/html/index.html
COPY index.html /usr/shar/nginx/html/index.html
CMD ["nginx","-g", "daemon off;"]