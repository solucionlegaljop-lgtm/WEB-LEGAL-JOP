# Estructura del proyecto

Este sitio es una web estatica multipagina para JOP Inmobiliaria.

## Carpetas

- `assets/css/`
  - `style.css`: estilos globales del sitio.
- `assets/js/`
  - `javascript.js`: logica compartida, tracking, formulario, catalogo y detalle dinamico de propiedades.
- `assets/images/`
  - `logo-jop.png.jpg`: imagen historica disponible del proyecto.
  - `logo-theinrestate-header.jpg`: logo recortado para la barra de navegacion.
  - `contactanos-cita.png`: imagen disponible del proyecto.
- `pages/`
  - `servicios.html`: catalogo de propiedades inmobiliarias.
  - `servicio.html`: detalle dinamico de una propiedad segun `?propiedad=...`.
  - `team.html`: presentacion del equipo.
  - `contact.html`: contacto, mapa y formulario.
- `pages/legal/`
  - `privacy.html`: politica de privacidad.
  - `disclaimer.html`: aviso legal del sitio.

## Archivo principal

- `index.html`: pagina de inicio del sitio.

## Catalogo

- Las propiedades ficticias del catalogo se administran en `assets/js/javascript.js`, dentro de `propertyCatalog`.
- Para agregar una nueva vivienda, se agrega un nuevo objeto con titulo, precio, ubicacion, imagenes, detalles y caracteristicas.
