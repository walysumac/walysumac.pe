# Etapa 1: Construcción de Angular
FROM node:20.14.0-slim AS build

# Crear el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código de la aplicación y construir Angular
COPY . .
RUN npm run build --prod

# Etapa 2: Servidor Node.js
FROM node:20.14.0-slim

# Crear el directorio de trabajo
WORKDIR /app

# Copiar solo las dependencias de producción
COPY package*.json ./
RUN npm install --omit=dev

# Copiar los archivos de construcción de Angular desde la etapa anterior
COPY --from=build /app/dist /app/dist

# Copiar el servidor Express
COPY server.js .

# Exponer el puerto en el que el servidor Express escuchará
EXPOSE 8080

# Comando para iniciar el servidor Express
CMD ["node", "server.js"]
