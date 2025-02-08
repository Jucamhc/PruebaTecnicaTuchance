<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# Guía para Iniciar el Backend
Nota: Los valores de las variables de entorno se han dejado predefinidos para facilitar la configuración y ejecución del proyecto.

Este comando realizará las siguientes acciones:

1. **Migraciones**: Creará las tablas en la base de datos.
2. **Seeders**: Insertará 50 alumnos en la base de datos automáticamente.

---

## Consumo del Backend y Importación de Peticiones en Postman

### Importar la colección de peticiones en Postman
1. Descarga el archivo **JSON** de la colección de peticiones desde el repositorio.
2. Abre **Postman** y ve a la sección **Collections**.
3. Haz clic en **Import** y selecciona el archivo **.json** descargado.

---

## 📡 Endpoints Disponibles

### 1️⃣ **Crear Usuario y Obtener Credenciales**
📌 Método: **GET**  
🔗 URL: `http://localhost:8000/api/setup-user`

**Respuesta esperada:**
```json
{
    "message": "Usuario creado",
    "password": "12345679",
    "api_token": "TOKEN_GENERADO"
}
```

---

### 2️⃣ **Generar Token de Autenticación**
📌 Método: **POST**  
🔗 URL: `http://localhost:8000/api/login`

🔹 **Solicitud:** (Enviar en el **Body** con formato **JSON**)
```json
{
    "email": "pruebaTecnica@tuchance.com",
    "password": "12345679"
}
```

🔹 **Respuesta esperada:**
```json
{
    "message": "Login exitoso",
    "api_token": "TOKEN_GENERADO"
}
```

---

### 3️⃣ **Crear un Alumno**
📌 Método: **POST**  
🔗 URL: `http://localhost:8000/api/crear-alumno`

🔹 **Requisitos:**
- **Autenticación:** Se debe enviar un **Bearer Token** en los headers con el **TOKEN_GENERADO**.

🔹 **Solicitud:** (Enviar en el **Body** con formato **form-data**)
```
nombre: camilo
fecha_nacimiento: 22/05/1996
nombre_padre: camilo
nombre_madre: camilo
grado: 5
seccion: 6
fecha_ingreso: 10/08/2010
```

---

### 4️⃣ **Consultar Alumnos**  
📌 **Método:** GET  
🔗 **URL:** `http://localhost:8000/api/consultar-alumno`  

🔹 **Parámetros opcionales:**  
Puedes enviar los siguientes parámetros en la URL para filtrar los resultados:  

- `grado` → Filtra por grado (Ej: `?grado=5` devuelve todos los alumnos del grado 5).  
- `alumno` → Filtra por un alumno específico (Ej: `?alumno=10` devuelve solo el alumno con ID 10).  

🔹 **Requisitos:**  
- **Autenticación:** Se debe enviar un **Bearer Token** en los headers con el **TOKEN_GENERADO**.  

🔹 **Ejemplos de Uso:**  
✅ Obtener todos los alumnos:  
```
GET: http://localhost:8000/api/consultar-alumno
```  
✅ Obtener alumnos de un grado específico:  
```
GET: http://localhost:8000/api/consultar-alumno?grado=5
```  
✅ Obtener un alumno específico:  
```
GET: http://localhost:8000/api/consultar-alumno?alumno=10
```   

---

 

