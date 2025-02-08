# Usa Node.js como base
FROM node:22 AS dev

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json e instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto 4200 para Angular
EXPOSE 4200

# Comando para ejecutar Angular en modo desarrollo
CMD ["npm", "run", "start"]
