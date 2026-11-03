# Hero de teclado y puerta — Portafolio web

Implementado en `/portafolio-web` a partir de la referencia de teclado, tecla Enter abierta y persona con maletín aportada por el usuario. Sustituye al anterior retrato oscuro. Se conserva el teclado arriba a la izquierda, el sello lateral y la composición inferior de titular, lista, cuatro iconos y acceso al catálogo. La última corrección del usuario sustituye el beige por blanco frío, elimina el teléfono del hero y mantiene el logo NEXTELCO con una flecha de regreso al Home siempre visibles en el navbar. El texto es HTML seleccionable: “Webs & portafolios”, con mayúsculas y minúsculas.

## Recursos

- `public/media/portfolio/keyboard-door-portrait.webp`: 1122 × 1402, para móvil y tablet vertical. PNG original junto al WebP.
- `public/media/portfolio/keyboard-door-wide.webp`: 1536 × 1024, para escritorio y tablet horizontal. PNG original junto al WebP.
- `public/fonts/anton-regular.ttf`: Anton, alojada localmente. Licencia SIL OFL en `public/fonts/ANTON-OFL.txt`. Fuente oficial: https://github.com/google/fonts/tree/main/ofl/anton.
- Escena generada mediante edición con la herramienta integrada image_gen. No hay tipografía publicitaria rasterizada. Solo se preservan las etiquetas físicas del teclado.
- Azul compartido con Home y ERP: `--brand-blue`. La anterior excepción de `gradient-text` se eliminó al retirar el titular con degradado.

## Responsive

El contenido fluye en una columna hasta 700 px. El arte usa la versión vertical hasta 700 px y también en tablet vertical hasta 1100 px; el resto usa la versión ancha. La altura depende del contenido y del ancho, evitando huecos condicionados por la altura de la ventana. Cabecera reservada y logo con regreso al Home siempre visibles, sin alternar su estructura al desplazarse.

`responsive-checks.json` contiene 19 ventanas entre 320 × 740 y 2560 × 1440: sin desbordamientos ni solapamientos entre regiones; carga de imagen y tipografía confirmada y 18 proyectos conservados. Incluye dos ventanas de 500 px con alturas distintas. Comprobaciones realizadas con Chrome y viewport de escritorio; no se utilizó hardware móvil físico.

La validación funcional posterior está en `docs/ui-refinements/interaction-checks.json`: contacto legible, apertura y cierre sin envío, acceso al catálogo, filtro Ecommerce, ficha, Escape y regreso a los 18 proyectos.

## Prompts originales de composición

Los dos prompts siguientes documentan la composición inicial. La corrección final a blanco se detalla al final de este archivo.

### Edición vertical

Edit this supplied poster into a clean photographic BACKGROUND ASSET with exactly the same composition, perspective and materials. Preserve the giant black computer keyboard in the upper left, its white Enter key opened into a luminous cyan doorway, the open white door, and the small business person seen from behind walking toward the doorway with a briefcase. Preserve the exact viewpoint and realistic relative proportions: keyboard cropped at the top and left, black Shift key lower left, open Enter door near x=43% and y=31%, man near x=45% and y=45%. Keep the same softly textured warm pale grey-beige matte studio floor and background, black sculptural keys, white door, blue-white light and long soft shadows. The keyboard and walking person occupy the upper 53% of a 4:5 portrait image. Everything below y=53% must be empty seamless pale warm grey-beige floor, matching the original. The entire upper right area x=66%..100% must likewise be empty pale warm grey-beige background. REMOVE ALL existing printed content: Kingston College logo, shield graphic, every word and letter outside the actual keyboard keys, course list, all small icons, badges, footer labels, phone numbers, location and date. Keep actual realistic keyboard key labels including Enter, Shift, brackets, quote and punctuation. Do not replace the removed printing with other content. No marketing typography, no logo, no watermark. The result is a clean faithful photographic plate for the exact same poster; live HTML will later reproduce the original text layout with different web-portfolio copy. Do not invent new objects or change the keyboard-door-person concept.

### Edición horizontal

Recompose the attached clean photographic plate into a 3:2 LANDSCAPE website hero background, 1536x1024. Preserve the exact same real objects and visual identity: massive matte black keyboard, oversized ivory Enter key opened as an outward-swinging white door, cyan-white light flooding from inside, the same small suited businessperson with briefcase walking toward it, same warm pale grey-beige lightly textured studio floor and same camera/lighting. Place the keyboard only in the UPPER LEFT region, cropped naturally by the TOP and LEFT edges. The white Enter doorway should be around x=540..750, y=130..380, and the walking person's head around x=640,y=395 and feet around y=505. Black keys should extend roughly x=0..840 and y=0..490, large and crisp, retaining readable physical keyboard labels. Let the person cast the same subtle long shadow down-left, fading by y=560. Keep the whole lower 45% of the image (y=565..1024) completely EMPTY beige floor for a large live headline, icons and footer. The right 38% of the image must be completely empty beige background from top to bottom for logo, a web-development badge and a list. Do not move the scene to the right, do not center it, do not add laptops or abstract objects. This must remain a faithful wide version of the original keyboard-door poster, not a new concept. No logos, no marketing letters, no graphics, no icons, no frame, no watermark. Only actual keyboard key labels may contain letters. High-end realistic photographic materials, cyan spill light, open door, walking man, warm pale neutral floor.

La edición final a blanco se documenta en [white-background-edit.md](white-background-edit.md).
