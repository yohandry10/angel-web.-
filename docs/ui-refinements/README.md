# Correcciones de Home y ERP

## Home

Se elimina del hero la banda de dominio y correo que cubría la mano. El contacto sigue disponible en el cierre de la página. El navbar mantiene logo horizontal, tamaño de texto, posición y altura al desplazarse. Se usa un solo azul de marca (`--brand-blue: #0050d8`), con contraste AA sobre blanco y 6.69:1 para el texto blanco de los botones; los títulos e iconos sobre fondos oscuros usan blanco. Se restauran entradas de secciones mediante IntersectionObserver y WAAPI: 500 ms, 16 px, curva ease-out y separación de 60 ms en la secuencia del proceso. El contenido permanece visible sin JavaScript y cada elemento entra una vez. Movimiento reducido usa un fundido de 160 ms sin desplazamiento.

Las métricas de infraestructura y el pipeline son ahora dos secciones independientes: la primera usa el mismo azul de marca que Proceso y ERP; la entrega usa blanco y un panel gris neutro. Los fondos azul marino del Home se sustituyen por el azul compartido. El CTA del bloque ERP es blanco sobre azul.

El hero del Home utiliza “Potentes” en peso 500 y un tamaño menor, y “sistemas.” en peso 700. `hero-case-checks.json` registra la jerarquía y ausencia de desbordamientos en cinco tamaños.

## ERP

El hero utiliza “Tu empresa.” en un tamaño y peso menores y “En control.” como énfasis. Los 16 módulos se conservan en cuatro áreas, con navegación horizontal, cabecera alineada y detalle en dos columnas; en móvil el selector pasa a 2 × 2 y el contenido a una columna. Las nueve preguntas y respuestas completas se distribuyen en tres temas, con acordeones de ancho completo. Se elimina la columna lateral vacía y se comparte el mismo borde de contenido y escala de separación entre módulos, preguntas y navbar. Se conserva el cambio de tema, navegación móvil, enlaces y contacto.

## Evidencia

- `responsive-checks.json`: Home en 8 tamaños, ERP en 10 (320–2560 px); sin desbordamiento de página ni de los textos/controles inspeccionados tras las correcciones.
- Navbar Home a scroll 0, 40 y 922 px: 16 px de letra, logo de 216 px y altura de 85 px en los tres estados. Se comprobó que las cuatro etapas del proceso y su cabecera ejecutaron su entrada.
- `interaction-checks.json`: cuatro áreas con cuatro módulos cada una; tres temas con tres preguntas cada uno; selector y acordeón; menú móvil; catálogo y ficha del portafolio; formularios abiertos y cerrados sin enviar mensajes.
- Revisión visual en Chrome de hero, módulos y preguntas en escritorio y móvil. Las capturas definitivas de producción se entregan fuera del repositorio.
- TypeScript, ESLint de los archivos afectados, Prettier y compilación cliente/SSR.

La comprobación responsive usa ventanas de Chrome; no equivale a una prueba sobre un teléfono físico.
