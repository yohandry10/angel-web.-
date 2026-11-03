# Revisión visual de NEXTELCO ERP

Fecha: 3 de noviembre de 2026. Alcance: la landing /erp completa, sus temas oscuro y claro y tamaños de 320, 390, 768 y 1440 px. Cambios disponibles en la vista previa local.

## Hallazgos corregidos

- **P1 · Variables fuera de ámbito.** El bloque ERP de Tailwind usaba `@theme` en lugar de `@theme inline`. Los alias se calculaban en la raíz del documento, donde los tokens ERP no existían. El fondo se volvía transparente, el texto secundario heredaba blanco y el borde `line-soft` heredaba el color del texto. Se corrigió la resolución de los tokens.
- **P1 · Cambio de tema engañoso.** El botón modificaba la clase de `html`, pero los estilos esperaban `.erp-root.light`. El estado ahora vive en la landing y actualiza su clase real mediante React.
- **P2 · Tres familias de fondos.** Hero marino, página corporativa visible bajo el fondo transparente y tarjetas neutras. Se estableció una paleta marina común, con superficies y separaciones de la misma familia.
- **P2 · Contraste y jerarquía.** Se unificaron cuatro niveles de texto, sin grises excesivamente oscuros. Las descripciones de módulos pasan de 12,5 a 14 px; las respuestas de FAQ tienen 15 px y ya no dependen de una altura máxima que pudiera recortarlas.
- **P2 · Botones diferentes para la misma acción.** Se unificaron color, color de texto, hover y radio de los CTA. Las áreas principales de interacción miden al menos 44 px de alto.
- **P2 · Navegación estrecha.** Se evita mostrar toda la navegación de escritorio en tablet. A 320 px, los cuatro recorridos se presentan en dos filas completas, sin cortar el último.
- **P2 · Marca en tema claro.** Se usa el archivo oscuro original del logotipo, sin invertir el azul de la marca con filtros.
- **P2 · Cursor ajeno al producto.** Se retiró el cursor de terminal y su animación continua únicamente en la ruta ERP.
- **P3 · Ornamento y tipografía.** Se retiraron rótulos repetidos encima de los títulos, numeración decorativa de FAQ, brillos de tarjetas y gradientes de texto. El wordmark del pie ahora cabe sin recortes.
- **P3 · Superficies auxiliares.** El aviso de cookies hereda la misma paleta y tipografía. La selección y el foco utilizan colores del sistema.

## Contraste de la paleta

Ratios calculados según luminancia relativa sRGB. La medición cubre pares de tokens de superficies sólidas; no constituye una certificación de accesibilidad de cada fotograma del video.

| Par | Ratio |
| --- | ---: |
| Texto secundario oscuro / superficie elevada | 9,84:1 |
| Texto más atenuado oscuro / superficie elevada | 5,93:1 |
| Texto secundario claro / superficie elevada | 7,74:1 |
| Texto más atenuado claro / superficie elevada | 4,98:1 |
| Enlace azul oscuro / tarjeta | 7,14:1 |
| Enlace azul claro / superficie elevada | 5,18:1 |
| Texto del CTA / azul de marca | 7,34:1 |

## Comprobaciones

- Inspección visual completa en escritorio y móvil, además de navegación de tablet y comprobación de ancho a 320 px.
- Modo claro aplicado a contenido y navegación; logo original con colores correctos.
- FAQ abre y cierra; las respuestas tienen regiones asociadas a su pregunta.
- Selector de recorridos operable con flechas, Inicio y Fin; verificado el cambio Venta → Compra con teclado.
- Los cuatro recorridos caben completos a 320 px, con botones de 44 px.
- El video conserva reproducción automática sin controles, retención del último plano y reinicio al volver al hero.
- TypeScript sin errores; compilación cliente/SSR y revisión de espacios del diff.
- Detector Impeccable: ninguna incidencia en los componentes revisados. El gradiente tipográfico antiguo se corrigió. La revisión final de CSS señaló siete declaraciones de Geist y una importación de Inter, ambas tipografías preexistentes: se registraron excepciones para esos dos valores exclusivamente en src/styles.css. La rejilla decorativa preexistente de las rutas corporativas index y experiencia queda como observación; no se usa en ERP y no se modificó en esta revisión.

## Archivos principales

Sistema de color: `src/styles.css`. Integración cinematográfica: `src/components/erp/Hero.css` y `Hero.tsx`. Estado de tema: `src/routes/erp.tsx` y `src/components/erp/Nav.tsx`. Ajustes de lectura y componentes: `Ecosystem.tsx`, `EventArchitecture.tsx`, `FAQ.tsx`, `FinalCTA.tsx`, `Footer.tsx`, `Logos.tsx`, `Testimonials.tsx`, `CookieBanner.tsx` e `ITCursor.tsx`.

Evidencia: `dark-modules-final.jpg`, `light-modules.jpg`, `final-hero.jpg` y capturas completas antes/después en este directorio. Las capturas largas pueden omitir la superficie de video del navegador; la captura normal del hero conserva el plano real.
