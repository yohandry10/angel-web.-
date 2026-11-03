# Hero NEXTELCO — referencia del usuario

Fecha: 3 de noviembre de 2026.

Se reproduce la composición de la primera referencia aportada: fondo blanco con azul cobalto, titular negro/azul, campana negra levantada por una mano, laptop sobre bandeja sostenida por otra mano, flecha curva y franja de contacto. La composición se adapta a una página web horizontal y a móvil, manteniendo los objetos y la jerarquía de la referencia.

El contenido dentro de la pantalla es HTML real, encuadrado sobre la fotografía con coordenadas proporcionales. Incluye DEVOPS, ERP, CRM, WEB, SISTEMAS y SOPORTE. Los enlaces abren secciones existentes o la página ERP. El botón principal y la navegación abren el formulario de contacto existente; no se simularon envíos.

## Recursos

- `public/media/hero/nextelco-reveal.webp`: escena generada con la herramienta integrada image_gen, 1536 × 1024, 60 536 bytes. La conversión de PNG a WebP conserva el encuadre.
- `public/media/hero/nextelco-reveal.png`: original generado.
- `public/media/brand/nextelco-stacked-transparent.png`: extracción del logo aportado, PNG RGBA 1448 × 1086. El encuadre SVG elimina el margen visual sin recortar ni deformar la marca.
- El logo horizontal que aparece dentro de la laptop reutiliza el recurso de marca existente.
- No se usaron fotografías externas ni se añadieron testimonios o métricas comerciales.

## Guías aplicadas

imagegen y design-taste-frontend. Se consultaron e instalaron las guías oficiales de Emil Kowalski desde https://github.com/emilkowalski/skills: emil-design-eng, animate, review-animations y mobile-native.

La referencia explícita del usuario prevalece sobre las preferencias genéricas de la skill de diseño: se mantienen el rótulo superior, el titular azul, la flecha y las tarjetas de servicios dentro de una interfaz real. Las excepciones están comentadas junto al código.

Movimiento: entrada breve de la copia mediante transform y opacity; respuesta de pulsación a 160 ms con cubic-bezier(0.23,1,0.32,1). Hover limitado a ratón y variante prefers-reduced-motion. La escena permanece estática para preservar la referencia.

## Comprobación

Revisión visual en Chrome con tamaños de escritorio, tableta y móvil. Se verificó el encuadre dentro del bisel, las seis tarjetas completas y la ausencia de desbordamiento horizontal. Menú móvil y formulario comprobados sin enviar datos. Las capturas son `desktop-1440.jpg`, `tablet-768.jpg`, `mobile-390.jpg` y `desktop-native.jpg`.

TypeScript sin emisión, ESLint de los archivos TSX modificados, Prettier de los tres archivos, lint de la skill y compilación Vite de cliente/SSR. Las comprobaciones de escritorio emulan los tamaños móviles; no sustituyen una prueba táctil en un teléfono físico.

Evaluación visual interna sobre la referencia, no una medición automática de identidad de píxeles: diseño 8.5/10, usabilidad 8.5/10, fidelidad conceptual 9/10 y contenido 8.5/10. Las diferencias inevitables son el formato web adaptable, el logo propio y la escena regenerada. No se afirma identidad píxel a píxel con la imagen original.

La publicación se realiza desde este repositorio en el proyecto Vercel `angel-web`, asociado al dominio `www.nextelco.cloud`. El hero reemplaza el anterior en la página principal de Nextelco.

## Prompt final de la escena — herramienta integrada image_gen

Use case: product-mockup. Asset type: wide website hero background, photorealistic.
REFERENCE: the attached first image (ServerHub poster) defines the EXACT objects, aesthetic, camera, materials and scene. Re-create the same theatrical product reveal: a glossy midnight-black serving cloche with vivid electric-blue rim lighting, lifted by a dark black-gloved human hand entering from the TOP RIGHT; a front-facing open black premium laptop sitting on a thin oval silver serving platter, supported from underneath by a second black-gloved hand that enters from the bottom. The cloche is above and behind the laptop, tilted open toward the lower left. Preserve realistic elegant hands, the cloche and blue reflections, metallic laptop keyboard and platter. The laptop screen is a clean, EMPTY uniform very dark navy rectangle, almost perfectly front-facing, straight horizontal top and bottom edges, with thin black bezels; it will receive a real HTML software interface later.
COMPOSITION: landscape image, 1536 by 1024. Very pale almost-white cool background, subtly blue at the far right, deep cobalt blue concentrated only in bottom right corner. ENTIRE LEFT 42 PERCENT must stay clean and white with NO objects so we can put a logo and large heading there. Place laptop screen with upper-left near (745,445), upper-right near (1385,445), lower-left near (745,835), lower-right near (1385,835). Laptop base and silver platter are below the screen near y=900, centered around x=1060. The supporting gloved hand extends down from under the platter to bottom edge around x=970. The black dome is upper right, roughly x=1000 to 1500, y=130 to 520, and the upper gloved hand reaches in from top right to pinch its knob. A little white space between the cloche and laptop. Objects must never intrude into the left 42 percent. Laptop and platter fit fully within the image, without cropped left or right edges. Rich black lacquer, brushed aluminum, precise sharp blue rim reflections, premium commercial studio product photography. Match the supplied reference very closely, same tasteful white-and-cobalt lighting.
REMOVE all original brand names, all poster lettering, all arrows, all website content, all text, logos and contact bars. Do not draw any characters on the laptop screen. No extra objects, no floating interface panels, no captions, no watermark. Main goal: the original reference scene recreated faithfully in a wide website composition with the same laptop and cloche rather than a different concept.

## Prompt final del logo — herramienta integrada image_gen, transparencia activada

Use case: background-extraction. Edit target: the attached NEXTELCO logo image. Primary request: Remove the white/off-white background and return ONLY this EXACT existing logo on a genuinely transparent alpha background. Preserve its identity precisely: the large metallic sculptural N icon, silver diagonal bridge, glossy cyan/electric-blue upright on the right, the curved blue swoosh under the N, and the word NEXTELCO underneath with black metallic letters and its blue X. Keep the icon above the word, same centered arrangement, same shapes, exact same lettering NEXTELCO, all original details, edge definition, brushed metal and blue illumination. Do NOT redesign or reinterpret the mark. Remove all white background around and in the negative spaces between the parts of the N and around the swoosh. Remove the diffuse white ground shadow. Output a tightly framed, clean, high-resolution transparent PNG cutout, with small transparent margin. No canvas, no white rectangle, no checkerboard printed into image, no added elements.

## Variante para pantallas grandes

Se generó una segunda composición 2:1 para ventanas de al menos 1800 px, aumentando la laptop y acercándola al texto. Archivo final: `public/media/hero/nextelco-reveal-wide.webp`, 1774 × 887, 66 482 bytes. Se conserva el PNG fuente. La etiqueta picture y la precarga por media query seleccionan solamente la composición correspondiente. La UI recibe coordenadas específicas para su bisel.

Prompt final de esta variante — herramienta integrada image_gen:

Use case: product-mockup. Asset type: very wide website hero image. Create a landscape image with EXACT aspect ratio 2:1, 2560 by 1280 pixels.
Inputs: Image 1 is the original poster reference for the exact artistic scene, Image 2 is our existing generated scene for exact material, object and lighting consistency. Make a wider desktop version of this SAME scene, NOT a different concept.
Reproduce the glossy midnight black serving cloche, dark black gloved right hand pinching the knob from the TOP RIGHT corner, black front-facing laptop on the thin oval silver platter, and the second black gloved hand supporting the platter from underneath, entering from bottom. Keep the same shapes, photographic materials and vivid blue rim illumination as the inputs. The cloche opens toward lower left behind the laptop. Cool almost-white studio backdrop with rich cobalt blue in lower right. Photorealistic, premium product photography. The foreground objects should be substantially LARGER and closer together across the right 65% than in Image 2, avoiding a big empty center.
The LEFT 36% (x=0 through x=920) stays completely clean almost-white with no objects for live text. Composition geometry: the laptop screen's front-facing rectangular inner display should extend approximately from x=1040,y=405 to x=2180,y=1000; the overall laptop and platter extend x=850 to x=2370, around y=1100. The second hand is underneath and extends toward the bottom edge around x=1500. The cloche dome is in the upper right, around x=1650 through x=2460, y=110 through y=620; its open rim points lower left, and its right-side rim sits behind the upper-right corner of the laptop. The top glove enters from the TOP RIGHT of the image, not from the middle of the right edge.
The laptop display must be EMPTY uniform very dark navy, no reflections or text, with near-perfectly horizontal screen top and bottom edges and near-vertical sides for an HTML overlay. Keep laptop and platter entirely in frame. Leave a little room around the platter so it is not cut off. Follow the two-input art direction very closely.
NO words, NO typography, NO logos, NO arrow, NO contact strip, NO drawn UI, NO extra objects. This is just the background scene, with blank laptop display. Exact 2:1 aspect ratio is essential.


