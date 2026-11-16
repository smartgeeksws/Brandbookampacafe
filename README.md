# AMPA Café · Brandbook interactivo

Manual interactivo de identidad visual de AMPA Café, marca que homenajea a Amparo Ramírez Olaya y a una familia cafetera de La Primavera, Algeciras, Huila.

## Contenido

Historia, propósito, valores y voz; origen del café; dos firmas de marca; paleta cromática; tipografías; criterios de uso; fotografía; packaging y unboxing; galería de 15 aplicaciones y recursos descargables.

Incluye filtros, ampliación de imágenes, cambio de firma, copia de códigos de color, animaciones con respeto a movimiento reducido y estilos de impresión. Los criterios propuestos y los puntos pendientes para producción están identificados dentro del manual.

## Tecnologías

HTML5, Tailwind CSS 3, JavaScript y GSAP. Sitio estático sin backend, base de datos ni variables de entorno. Las imágenes, las fuentes y GSAP se sirven localmente.

## Desarrollo y verificación

Requiere Node.js 20 o superior y npm.

```bash
npm ci
npm run check
npm run build
```

Para una vista local, desde la raíz del proyecto:

```bash
python3 -m http.server 8080 --directory dist
```

Abrir http://localhost:8080. La copia de colores requiere un contexto seguro (HTTPS o localhost).

## Despliegue en Vercel

1. Importar este repositorio en Vercel.
2. Mantener la raíz del repositorio como Root Directory.
3. Usar Framework Preset **Other**.
4. Instalar con `npm ci`, construir con `npm run build` y publicar `dist`.
5. No agregar variables de entorno; no son necesarias.

`vercel.json` contiene esta configuración. Los siguientes cambios en la rama de producción se desplegarán según la configuración de Git elegida en Vercel.

## Estructura

- `dist/index.html`: contenido y estructura.
- `dist/style.css`: diseño editorial, adaptación a móvil e impresión.
- `dist/app.js`: navegación, galerías e interacciones.
- `dist/assets/`: mockups, referencias de logos, fuentes y recursos descargables.
- `styles.css` y `tailwind.config.js`: entrada y configuración de Tailwind.
- `scripts/copy-vendor.mjs`: copia GSAP al directorio publicado durante el build.

Los assets de `dist` están versionados intencionalmente: contienen el contenido estático y los recursos originales de esta entrega. No borrar ese directorio antes de compilar.

## Actualización y PDF

Editar directamente los archivos de `dist`, ejecutar la compilación y revisar el resultado. Las aplicaciones se encuentran en la galería de `index.html`; `assets/catalogo.json` es su inventario de referencia.

La opción **Vista de impresión** activa los estilos estáticos del navegador. Una edición final de PDF debe revisarse y maquetarse antes de entregarse como manual definitivo.

## Recursos y producción

Los mockups son visualizaciones conceptuales. Pueden contener variaciones de texto, color o trazo; no son artes listos para fabricar. Usar los originales maestros de la marca en producción. Las referencias raster no sustituyen logos vectoriales.

Las escenas, instalaciones y propuestas de app/web/redes no prueban la existencia de esos servicios o lugares. No se conceden derechos sobre marcas de terceros que puedan aparecer en los materiales de referencia.

Las dependencias conservan sus propias licencias. Consultar `THIRD_PARTY_NOTICES.md` y las licencias de fuentes en `dist/assets/licenses/`. Los recursos de AMPA no se ofrecen bajo una licencia pública de reutilización.
