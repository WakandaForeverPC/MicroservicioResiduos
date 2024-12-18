# MicroservicioResiduos

## Descripcion

El microservicio de Residuos es una aplicación desarrollada con Spring Boot que gestiona datos de residuos. El objetivo principal de este microservicio es ofrecer una API que devuelva datos de residuos y una interfaz web para visualizar estos datos mediante gráficos interactivos.

## Estructura del Proyecto

### `MicroservicioResiduosApplication.java`

Esta es la clase principal que inicia la aplicación Spring Boot.

### PackageController

#### `ResiduosController`

- Este controlador maneja las solicitudes HTTP relacionadas con los datos de residuos.
- mostrarPantallaResiduos(): Maneja las solicitudes GET a /residuos y devuelve la vista para mostrar los datos de residuos.
- obtenerDatosResiduos(): Maneja las solicitudes GET a /residuos/data y devuelve un mapa con los datos de residuos.

### Resources

#### `static.residuos`

##### script.js
- Este archivo JavaScript obtiene los datos de residuos del servidor y actualiza los gráficos.

##### styles.css
- Este archivo CSS contiene los estilos para los gráficos de datos de residuos.

#### `templates`

##### residuos.html

- Este archivo HTML es la vista principal para mostrar los gráficos de datos de residuos.

#### `properties`

##### application.properties

- Este archivo contiene las propiedades de configuración para la aplicación Spring Boot, incluyendo el puerto del servidor, el cliente Eureka y las configuraciones de Prometheus.

URL: https://github.com/WakandaForeverPC/MicroservicioResiduos.git


