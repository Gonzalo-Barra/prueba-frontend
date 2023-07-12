# Utiliza una imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json
COPY package.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos del proyecto
COPY . .

# Expone el puerto en el que se ejecuta tu aplicación
EXPOSE 3000

# Comando para iniciar tu aplicación
CMD ["npm", "start"]
