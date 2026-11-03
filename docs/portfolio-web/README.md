# Portafolio web de NEXTELCO

## Ruta e integración

Nueva ruta `/portafolio-web`, enlazada desde la navegación de escritorio y móvil del Home y desde el servicio WEB dentro de su laptop. Incluye hero, ocho servicios, 18 proyectos, filtros, fichas y contacto de NEXTELCO. Se incorpora la ruta al sitemap y a los metadatos sociales y canónicos.

## Migración

Origen: `C:/Users/PC/Desktop/yohandry-architect-code`.
Se consultaron `src/components/site/Services.tsx`, `Projects.tsx`, `ProjectModal.tsx` y `src/data/projects.ts`.

Los 18 registros y las siete categorías se copian a `src/data/portfolio-projects.ts`. Se compararon todos los campos con el origen ejecutando ambos módulos de datos; únicamente cambia el directorio y formato de las imágenes. Nombres, descripciones, objetivos, soluciones, resultados, características, tecnologías y URLs permanecen iguales. `migration-check.json` documenta el resultado.

Los ocho servicios conservan títulos y descripciones. Las interfaces usan componentes de React y CSS del proyecto actual, sin añadir la dependencia Framer Motion del origen. Los filtros están disponibles también en móvil. APIs y Automatizaciones no tienen proyectos en el origen; muestran un estado vacío explícito.

Cada ficha muestra todos los campos y enlaces disponibles. El diálogo nativo permite scroll, conserva el botón de cerrar visible, admite Escape y devuelve el foco al proyecto. Cotizar similar usa el contacto de NEXTELCO ya existente en ERP, con el nombre del proyecto; no se envían mensajes al probarlo. El formulario de contacto existente se conserva.

El repositorio de origen permanece intacto.

## Recursos

- Capturas: `public/media/portfolio/projects/*.webp`, 18 imágenes, 1 589 588 bytes en total. Proceden de `public/assets` del origen. Conversión a WebP y ancho máximo de 1440 px, conservando proporciones y contenido.
- Hero: `public/media/portfolio/web-creative-hero.png` y `.webp`, 1122 × 1402 px. Imagen nueva con la herramienta integrada image_gen, inspirada en la cuarta referencia del usuario. Retrato conceptual, no fotografía del equipo. Titular y controles en HTML.
- El degradado cian-azul-violeta del titular se conserva por la referencia visual solicitada. Excepción del detector `gradient-text` limitada a `src/components/WebPortfolio.css`.

### Prompt de la imagen

Generate a premium cinematic creative-agency advertising photograph as a website hero artwork for NEXTELCO web design and development. Portrait 4:5 composition. A striking photoreal young adult woman wearing a black finely ribbed turtleneck, her hair pulled back neatly, head lifted slightly and turned toward the left, shoulders filling the lower edge, strong elegant face, calm focused expression. A wide sculptural glossy luminous ribbon passes across her eyes and wraps around behind her head in a graceful orbital loop. Ribbon material transitions from electric cyan at left through cobalt blue to rich violet at right; physically convincing depth, specular reflections, translucent edges, premium commercial advertising, absolutely not cartoon. On the front visible ribbon is small crisp condensed WHITE typography, exactly 'DISEÑO → CÓDIGO → WEB', following the curved material. No other lettering anywhere. The portrait has beautiful cyan rim light from left, subtle purple light on the right, face dark navy but details visible. At the right of the portrait, a few precise tall narrow translucent glass fins slice vertically through cyan and violet light, clean elegant physical forms. Deep nearly black navy seamless backdrop #040b18, ample clean dark breathing room above the head and around the silhouette, no busy environment, no dots or grids or UI. Head and ribbon centered around 47 percent of image height, neck and shoulders lower half. The entire face and front ribbon must be visible with generous side margins. High-end editorial photographic finish, confident beautiful contrast, matching a futuristic creative web design poster. NO additional headline, NO logo, NO watermark, NO website UI, NO frames, NO decorative spheres. One photographic visual asset; all marketing headlines and buttons will be live HTML elsewhere.

## Validación

TypeScript, ESLint, Prettier, build de cliente y SSR, comparación de los datos completos con el origen, existencia de las 18 imágenes y revisión en Chrome. `responsive-checks.json` registra nueve tamaños desde 320 × 740 hasta 2560 × 1223: sin desbordamientos de página o texto, con ocho servicios y 18 proyectos accesibles.

Filtros comprobados: Todos 18; Webs 12; Sistemas 2; Ecommerce 3; Aulas virtuales 1; APIs 0; Automatizaciones 0. Fichas comprobadas en escritorio y móvil, cierre mediante Escape y retorno del foco, enlaces desde Home en ambos tamaños, menú móvil y apertura/cierre del formulario sin enviar datos. Verificación mediante viewport de escritorio, no en un dispositivo físico.
