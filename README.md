# 📝 Aplicación de Registro de Usuarios

Este proyecto es una aplicación web simple que permite registrar usuarios con su **nombre, correo electrónico y contraseña**, y almacenar los datos en una base de datos PostgreSQL. Todo está contenido y orquestado con Docker.

## 🧩 Tecnologías utilizadas

- 🎨 **Frontend**: HTML, CSS, JavaScript
- ⚙️ **Backend**: Node.js con Express
- 🗃️ **Base de Datos**: PostgreSQL
- 🐳 **Docker** y `docker-compose`
- 🌐 **Nginx** como servidor web para el frontend

## 🚀 ¿Cómo ejecutar el proyecto localmente?

### 1. Clona el repositorio

```bash
git clone https://github.com/tu_usuario/user-registration-app.git
cd user-registration-app
2. Construye e inicia los contenedores
docker-compose up --build
3. Abre la aplicación
Accede a: http://localhost:8888

Desde ahí podrás registrar un usuario y ver el formulario funcionando.

📂 Estructura del proyecto

user-registration-app/
│
├── backend/                # Backend en Node.js + Express
│   ├── index.js
│   ├── db.js
│   └── package.json
│
├── frontend/               # HTML y CSS del formulario
│   └── index.html
│
├── db/                     # Script SQL de inicialización
│   └── init.sql
│
├── Dockerfile.backend      # Dockerfile para backend
├── Dockerfile.frontend     # Dockerfile para frontend
├── nginx.conf              # Configuración de Nginx para el proxy
├── docker-compose.yml      # Orquestación con Docker
└── README.md               # Este archivo
🛠️ Funcionalidades

Registro de usuario (nombre, email, contraseña)
Spinner de carga mientras se envía el formulario
Mensaje dinámico de éxito o error
Proxy de /api/register desde Nginx hacia el backend
Almacenamiento en tabla users en PostgreSQL
🗃️ Base de datos: tabla users

Este proyecto crea automáticamente la siguiente tabla en PostgreSQL al levantar el contenedor:

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
🧪 Verificación manual

Para ver si los usuarios fueron registrados correctamente:

docker exec -it user-registration-app-db-1 psql -U postgres -d usersdb
Y dentro de psql:

SELECT * FROM users;
📦 Requisitos

Docker
Docker Compose
🧑‍💻 Autor

Proyecto desarrollado por Karen Dayana Gómez como parte de un ejercicio técnico en el entorno laboral.

```
