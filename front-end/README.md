# 📌 Proyecto Alumnos - Frontend

Este proyecto utiliza **Angular** como framework principal para el desarrollo del frontend y **Angular Material** para la interfaz de usuario.

## 🚀 Tecnologías Utilizadas

- **Angular** (v19.1.0)
- **Angular Material** (v19.1.3)
- **RxJS** (v7.8.0)
- **Zone.js** (v0.15.0)
- **TypeScript** (v5.7.2)

## 📌 Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de cumplir con los siguientes requisitos:

- Tener **Node.js** y **npm** instalados. Puedes descargarlos desde [Node.js](https://nodejs.org/).
- Tener **Angular CLI** instalado globalmente:
  ```sh
  npm install -g @angular/cli
  ```
- Tener **Docker** instalado si deseas ejecutarlo en un contenedor.

## 🛠️ Instalación y Ejecución

### 🔹 Opción 1: Ejecutar Localmente

1. Clona el repositorio en tu máquina local:
   ```sh
   git clone https://github.com/Jucamhc/PruebaTecnicaTuchance
   ```
2. Navega al directorio del frontend:
   ```sh
   cd front-end
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   npm start
   ```
   Esto iniciará el proyecto en `http://localhost:4200`.

### 🔹 Opción 2: Ejecutar con Docker

Si deseas ejecutar el proyecto con **Docker**, usa el siguiente comando desde el directorio raíz del proyecto:

```sh
docker-compose up -d --build
```

Esto levantará el frontend en `http://localhost:55655`.

## 🌍 Rutas y Navegación

El proyecto cuenta con un sistema de enrutamiento estructurado en módulos independientes:

### 📌 Módulo de Alumnos

- `new-alumno` → Página para crear un nuevo alumno.
- `edit/:id` → Página para editar un alumno existente.
- `list` → Página para listar los alumnos.
- `:id` → Página de detalles de un alumno.
- `**` → Redirige a `list` en caso de una ruta no encontrada.

### 📌 Módulo de Autenticación

- `login` → Página de inicio de sesión.
- `**` → Redirige a `login` en caso de una ruta no encontrada.

## 🎨 Angular Material

Este proyecto utiliza **Angular Material** para la interfaz de usuario. Los módulos importados incluyen:

- Botones, Formularios, Listas, Diálogos, Toolbars, entre otros.
- Manejo de fechas con **MatDatepickerModule** y **MatNativeDateModule**.
- Sistema de notificaciones con **MatSnackBarModule**.

