# Documentación del GoatFramework

Introducción
------------

El GoatFramework es un framework MVC minimalista inspirado en Laravel, diseñado para facilitar el desarrollo de aplicaciones web con una estructura clara y sencilla. Utiliza Node.js para la gestión de modelos, vistas y controladores, y proporciona una configuración simple para la conexión a bases de datos.

Características Principales
---------------------------

-   **Estructura MVC**: Separación clara entre Modelos, Vistas y Controladores.
-   **Configuración Sencilla**: Configuración rápida y fácil para la conexión a bases de datos.
-   **CLI Integrado**: Herramientas de línea de comandos para la generación de modelos, vistas y controladores.
-   **Routing Simplificado**: Manejo de rutas de forma intuitiva.
-   **Basado en Node.js**: Aprovecha la flexibilidad y rendimiento de Node.js.

### Requisitos Previos

-   Node.js (versión 20.12.2 o superior)
-   NPM (gestor de paquetes de Node.js)
-   Composer (versión 2.7.6 o superior)
-   PHP (versión 8.3.7 o superior)
-   Virtual Host (Para el proyecto)

Configuración del Virtual Host
-----------
Para el correcto funcionamiento del GoatFramework, es necesario configurar un Virtual Host en tu servidor web. Un Virtual Host permite dirigir las solicitudes HTTP a la carpeta raíz de tu proyecto, mejorando la organización y facilitando el desarrollo.

### Modificar el nombre del server por el nombre de tu Host Virtual
Modificar el archivo **/app/config/Config.php** y solo modificar la siguiente línea, cambiando **host-virtual-name** por el nombre que le asignaste a tu host virtual
```
public const SERVER = "http://host-virtual-name/";
```


### Pasos de Instalación

1.  **Clonar el Repositorio**: Clona el repositorio desde GitHub y navega al directorio del proyecto:

    ```plaintext
    git clone https://github.com/ezekingcito/GoatFramework
    cd GoatFramework
    ```

2.  **Instalar las Dependencias**: Ejecuta el siguiente comando para instalar las dependencias del proyecto con npm:

    ```plaintext
    npm install
    ```

3.  **Instalar las Dependencias**: Ejecuta el siguiente comando para instalar las dependencias del proyecto con composer:

    ```plaintext
    composer install
    ```

4.  **Configurar el Archivo .env**: Configura tu archivo `.env` para la conexión a la base de datos:

    ```plaintext
    HOST = "localhost"
    PORT = "3306"
    USER = "root"
    PASSWORD = ""
    DB = "name_database"
    ```

Uso Básico
----------

### Comandos CLI

El GoatFramework incluye una CLI para facilitar la generación de componentes del framework.

-   **Crear un Modelo**:

    ```plaintext
    node goat model {sub-carpeta/raiz} NombreDelModelo
    ```

-   **Crear una Vista**:

    ```plaintext
    node goat view {sub-carpeta/raiz} nombreDeLaVista
    ```

-   **Crear un Controlador**:

    ```plaintext
    node goat controller {sub-carpeta/raiz} NombreDelControlador
    ```

### Iniciar el Servidor

Para iniciar el servidor de desarrollo:

```plaintext
npm start
```

El servidor se ejecutará en http://localhost:3000.

## Uso Avanzado

### Compilación de Archivos

Para compilar los archivos del proyecto:
```
npm run build   
```


Este comando ejecutará el script definido en el archivo package.json, que utilizará Babel para compilar los archivos del directorio src en JavaScript compatible con versiones anteriores de Node.js. El resultado se almacenará en el directorio controller.

## Estructura del Proyecto
La estructura del proyecto después de la compilación será:
```
GoatFramework/
├── app/
│   └── config/
│       └── Conexion.php
│       └── Config.php
│       └── MyRoutes.php
│       └── ORM.php
│       └── View.php
│   └── controller/
│       └── ejemploControlador.php
│   └── model/
│       └── ejemploModel.php
├── controller/
│       └── main.controller.js
├── node_modules/
├── public/
│       └── css/
│       └── img/
│       └── js/
├── src/
│       └── main.controller.js
├── vendor/
├── view/
│       └── ejemploVista.view.php
├── composer.json
├── composer.lock
├── goat.js
├── index.php
├── package-lock.json
└── package.json
```
Después de la compilación, los archivos JavaScript del directorio src se compilarán y se almacenarán en el directorio controller.
## Contribución
¡Las contribuciones son bienvenidas! Si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-feature).
3. Realiza tus cambios y commitea (git commit -m 'Añadir nueva feature').
4. Sube tus cambios (git push origin feature/nueva-feature).
5. Abre un Pull Request.
## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
## Autores y Agradecimientos
-   **Autor Principal:** Ezequiel Mendoza (Ezekingcito)