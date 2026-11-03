# NEXTELCO ERP — rediseño del 3 de noviembre de 2026

Se conserva la identidad del Home: papel blanco, azul cobalto, negro y metal, tipografía local de Nextelco e imagen protagonista. El ERP usa una composición propia: un aro metálico conecta mercancía, documentos y un monitor con una vista ilustrativa de operaciones. El Home no se modifica.

## Cambios

- Hero estático con dos fotografías generadas, adaptadas a pantalla estándar y panorámica, y una interfaz HTML con datos de ejemplo dentro del monitor. Se reemplaza el video anterior y se conserva su archivo fuente.
- Se elimina la sección montada desde Logos y las otras cifras de clientes de la ruta ERP.
- El flujo de operaciones conserva sus cuatro recorridos y datos ilustrativos, con un documento de origen y resultados distribuidos en una cuadrícula flexible. Se retira el diagrama de posiciones absolutas.
- Los 16 módulos existentes se distribuyen en cuatro áreas de cuatro módulos cada una. Se mantienen todos los nombres y descripciones. Los botones muestran el detalle de cada área.
- Contacto y footer compactos: correo, WhatsApp de demos ya existente, Lima y enlaces legales. Se retira el wordmark gigante y el sitemap.
- Tema claro por defecto, con selector de tema conservado en escritorio y en el menú móvil. Navegación al Home, FAQ y enlaces de demo conservados.

## Recursos y procedencia

Herramienta integrada image_gen. Los PNG originales y los WebP optimizados están en `public/media/erp/connected-business-hero.*` y `public/media/erp/connected-business-wide.*`. Los WebP pesan 93 758 y 94 372 bytes respectivamente. Los datos financieros mostrados dentro del monitor son demostrativos y se identifican allí como datos de ejemplo. No son métricas comerciales de Nextelco.

## Validación

TypeScript, ESLint de los archivos modificados, Prettier y compilación Vite de cliente/SSR. Detector Impeccable sin hallazgos. Revisión en Chrome a 2560, 1440 y 390 px; pantalla del monitor sin desbordamiento; catálogo móvil sin desbordamiento horizontal; comprobados los 16 módulos únicos, cambios entre áreas, navegación móvil y flechas de teclado del selector de operaciones. Las capturas de esta carpeta documentan la revisión local. La comprobación de móvil se realiza mediante viewport de escritorio, sin dispositivo físico.

Publicación por commit y push a main, con despliegue de producción automático en Vercel, proyecto angel-web, ruta https://www.nextelco.cloud/erp.

## Prompt final — escena estándar

Use case: product-mockup. Asset type: photographic background for the NEXTELCO ERP landing-page hero.
Generate a new premium studio advertising scene in a 3:2 landscape aspect ratio, 1536x1024. It must share the visual vocabulary of the attached reference (almost-white background, polished dark metal, electric cobalt blue edge light, photoreal commercial product photography) but be a completely DIFFERENT concept. Do not repeat the serving cloche, hands, platter or laptop.
Concept: ONE CONNECTED BUSINESS. A sculptural thick cobalt-blue brushed and polished metal orbital ring, standing on edge and tilted slightly in depth, elegantly encircles a premium front-facing black widescreen desktop display. The ring is a real solid metal object with beautiful precision-machined edges and a luminous blue inner edge, not a graphic neon halo. It sits on a low, sculptural satin-silver circular pedestal. This is an extraordinary designed physical sculpture in a studio, not an ordinary office desk. The desktop display has a subtle black neck stand and polished metal foot on the pedestal. The orbit has two small clusters of real business objects precisely arranged along its far arc: two small kraft shipping boxes with dark-blue bands, and a neat fan of white invoices with generic printed lines. The boxes and paper are secondary and fully photoreal, with credible gravity and support by small metal ledges on the orbit. There are NO people, NO hands, NO serving objects, NO laptops.
Composition: LEFT 40% stays completely empty pale white to receive live headline copy. All the scene is on the RIGHT 60%, dramatic and large. The circular blue metal orbit fills roughly x=850..1510, y=115..855, upper part visible behind the monitor. The desktop monitor's inner empty screen is a near-perfect front-facing horizontal rectangle, roughly x=760..1390, y=365..735. The black display has thin bezels, no perspective slant, a horizontal top and bottom, near-vertical sides, and a uniformly EMPTY midnight-navy screen. Later a real HTML ERP dashboard will be overlaid there; do not draw interface content. Pedestal bottom around y=925. Keep the whole pedestal and entire monitor in frame. The ring can come close to the top right edge but should not be cut off. Floor and backdrop are nearly white, with a restrained wash of blue concentrated on the lower-right, seamlessly fading into almost-white at the LEFT. Beautiful specular glints, realistic brushed aluminum, rich polished cobalt lacquer, gentle soft studio contact shadows under the pedestal, absolutely premium physical materials.
Exact constraints: NO text, NO words, NO letters, NO logos, NO charts, NO numbers, NO panels of UI, NO watermark. The screen is blank dark navy. NO giant abstract gradient blobs, NO cartoon or low-poly graphics, NO floating gray UI cards. This is one cohesive, stunning, photoreal studio product composition. Use the reference only for color, material quality and lighting, never its literal scene.

## Prompt final — escena panorámica

Create a 2:1 landscape version, exactly 2048x1024, of the attached NEXTELCO ERP studio scene. Keep the SAME sculptural cobalt-blue and brushed-silver orbital ring, same physical invoices and two blue-banded kraft packages on its small ledges, same premium front-facing black desktop monitor with EMPTY midnight-navy screen, same satin-silver low circular pedestal, same white and cobalt photography. Preserve these objects and material identities. Do NOT add objects.
Recompose for a full-width desktop website hero with the LEFT 36% completely empty white for large live text. The orbit and monitor should be VERY LARGE across the RIGHT 64%, rather than making everything tiny at the far right. A big front-facing rectangular monitor screen should cover approximately x=900..1820, y=365..775, with straight horizontal top/bottom and vertical sides. The orbit rises behind it x=850..1970, y=85..900, and the pedestal fits entirely x=850..1900 around y=950. Maintain the blue metal orbit's elegant tilted sculptural shape and premium metallic specular light. Low white studio floor; blue at far lower right, not a dark page. No figures, no cloche, no hands, no laptop. Absolutely NO text, NO logo, NO letters, NO interface, NO numbers, NO watermark. Monitor screen completely blank dark navy. This is a premium advertising photograph, not a page mockup. Main requirement is EXACT 2:1 width-to-height framing and a larger screen on the right, keeping the left 36% clean.

