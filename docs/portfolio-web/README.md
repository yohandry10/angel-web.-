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

## Hero y recursos actuales

El hero actual reproduce la composición de la referencia del teclado y puerta Enter, adaptada a webs y portafolios. Recursos, prompts de edición, tipografía y comprobaciones de 19 tamaños están en [hero-keyboard/README.md](hero-keyboard/README.md). Sustituye al anterior retrato con cinta y titular con degradado; esos recursos anteriores quedan como historial sin uso en la ruta.

Las capturas de los 18 proyectos están en `public/media/portfolio/projects/*.webp` y proceden de `public/assets` del origen. Conversión a WebP y ancho máximo de 1440 px, conservando proporciones y contenido.

## Validación

La comparación completa de datos con el origen está en `migration-check.json`. La comprobación de diseño actual está en `hero-keyboard/responsive-checks.json`. El archivo `responsive-checks.json` de esta carpeta corresponde a la versión inicial de la migración.

Filtros: Todos 18; Webs 12; Sistemas 2; Ecommerce 3; Aulas virtuales 1; APIs 0; Automatizaciones 0. Fichas con Escape y retorno del foco; enlaces desde Home en escritorio y móvil; menú móvil y formulario de contacto sin enviar datos. La validación funcional posterior y las correcciones de Home y ERP están en `docs/ui-refinements`.
