FROM almalinux:9
RUN dnf install nginx -y
RUN rm -rf /usr/share/nginx/html/index.html
ADD https://raw.githubusercontent.com/Narendrabijili/Docker/refs/heads/main/Dockerfile
CMD ["nginx", "-g", "daemon off;"]