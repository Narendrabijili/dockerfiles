FROM alamalinux:9
RUN install nginx -y
COPY index.html /usr/share/nginx/html/index.html
CMD ["nginx", "-g", "daemon off;"]