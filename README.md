# Falabella clone (frontend)

## Primeros Pasos

Este documento te guiará por los pasos necesarios para configurar tu entorno de desarrollo local.

## Requisitos Previos

- Node.js (versión recomendada: 16.x o superior)
- Docker y Docker Compose
- Git

## Instalación y Configuración

### 1. Clonar el repositorio

```
https://github.com/danipel/falabella-clone.git
```

### 2. Acceder a la rama fronted y crear rama local

```
# Navega al directorio del proyecto
cd proyecto-frontend

git checkout frontend
git checkout -b mi-espacio-de trabajo
```

### 3. Instalar dependencia de node

```
# Instala las dependencias
npm install
```

### 4. Levantar el entorno con Docker

```
# Construir el contenedor
docker compose build
```

```
# Ejecutar el contenedor
docker compose up
```

### 5. Acceder al localhost

```
# El puerto puede ser cambiado en caso de que este ejecutando algo alli
http://localhost:3000
```

### Nota final

Si todos los cambios funcionan y no rompen la aplicacion, pasar los cambios de la rama local creada a la frontend.

## Arquitectura de carpetas

Se sigue una arquitectura modular basada en componentes:

```

├── components/
  ├── shared/               # Componentes reutilizables
  │   ├── navbar/           # Componentes relacionados con la barra de navegación
  │   │   ├── NavBar.tsx    # Componente principal
  │   │   ├── NavItem.tsx   # Elemento individual de navegación
  │   │   └── NavMenu.tsx   # Menú desplegable
  │   └── shopping-cart     # Componentes relacionados con el carrito de compras
  ├── action/               # Acciones del lado del servidor
  ├── hooks/                # Custom hooks
  ├── services/             # Servicios y API calls
  ├── lib/                  # Utilidades y funciones auxiliares
  ├── assets/               # Recursos estáticos (imágenes, fuentes, etc.)
  └── store/               # Manejo del estado global
```

## Creación de Nuevos Componentes

Al crear nuevos componentes, mantén la misma estructura organizativa:

1. Crea una carpeta con el nombre del componente dentro de components/
2. Dentro de esta carpeta, coloca todos los componentes relacionados
