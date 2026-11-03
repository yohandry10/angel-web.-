# Home de NEXTELCO: adaptación y secciones

## Alcance

Se conserva la composición del hero aprobada por el usuario: blanco, azul cobalto, metal, campana y laptop. La escena se escala con el ancho disponible. En móvil y tablet vertical, texto, escena y contacto siguen el flujo del documento, sin alturas mínimas de pantalla ni imagen anclada al fondo.

La cabecera utiliza la marca horizontal en móvil y después de los primeros 32 px de scroll. El logo apilado queda reservado al inicio del hero de escritorio. Así se evita su superposición sobre el titular, el texto o el botón al hacer scroll o redimensionar.

Proceso, capacidades, producto, equipo e infraestructura usan la misma identidad visual. Las capacidades conservan los cuatro grupos y sus herramientas. El equipo cambia el avatar de llaves por una imagen conceptual y organiza su descripción entre investigación y operación. Los indicadores existentes se conservan sin añadir cifras. El pipeline se explica como recorrido y deja de simular una sesión de terminal. Contacto conserva formulario, correo, teléfono, ubicación y enlaces legales; se retira la disponibilidad desactualizada de Q1 2026.

No se cambia la ruta ERP ni sus componentes.

## Imagen de investigación

Herramienta integrada `image_gen`, generación nueva. El original permanece en `public/media/home/applied-research.png` (1122 × 1402) y la versión WebP conserva el encuadre. Es una representación conceptual de investigación e ingeniería, identificada como tal en el texto alternativo, no una fotografía del equipo.

Prompt:

> Create a premium photoreal advertising still life for NEXTELCO, a software engineering and applied AI research company. A single precise sculptural cube made of stacked brushed aluminum and deep cobalt-blue metal layers, slightly separated into 5 slices, with an intricate luminous blue glass computational core visible between the layers. One elegant silver caliper or precision probe resting beside it implies investigation and engineering craft; no computers or screens, no people. The object feels real, machined, weighty, sophisticated, not a toy or generic sci-fi illustration. Cube center-left, three quarter perspective, resting on a pale cool-white studio surface. Subtle dark navy inside the core, crisp electric blue reflections, beautiful brushed metal highlights, soft physically realistic contact shadows. The frame should be a 4:5 portrait studio product photograph, object generously sized with ample clean breathing room, entire sculpture and probe visible, suitable for an editorial website section. Seamless background almost white #f3f6ff, tiny cobalt light wash low down only. Beautiful high-end commercial photography matching a white, navy, cobalt and silver technology brand. No typography, no letters, no digits, no logos, no annotations, no diagram, no frame, no floating UI, no fake data. One cohesive image, not a collage.

## Validación

Revisión en Chrome mediante dimensiones de viewport; no equivale a una prueba en dispositivo físico. Se comprueban ventanas estrechas, altas, bajas y panorámicas, navegación compacta al hacer scroll, contenido del monitor, ausencia de desbordamiento de texto, selector de capacidades y apertura del formulario. Las capturas de esta carpeta documentan la revisión local. TypeScript, ESLint, Prettier y build de cliente/SSR antes de publicar.

`responsive-checks.json` registra once tamaños desde 320 × 740 hasta 2560 × 1223, incluidos 500 × 844, 500 × 1160, 1000 × 1400 y 1440 × 700. Sin desbordamientos de página, texto o contenido del monitor. En el diseño apilado hay 14 px entre texto y escena; a 500 px, la altura del hero es la misma en las dos alturas de ventana. A 40 px de scroll, la cabecera de escritorio mide 74 px y el logo apilado está oculto. Se probaron los cuatro grupos de capacidades, apertura y cierre del formulario sin enviar datos, y cierre del menú al navegar. Detector Impeccable sin hallazgos. No se añadieron excepciones.
