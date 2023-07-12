# Utiliza una imagen base de Nginx
FROM nginx:latest

# Copia los archivos HTML y CSS al directorio de la página web de Nginx
COPY . /usr/share/nginx/html

# Expone el puerto 80 para las solicitudes web
EXPOSE 80
