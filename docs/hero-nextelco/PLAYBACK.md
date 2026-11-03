# Reproducción del hero al navegar al ERP

El montaje anterior tomaba `video.ended` como estado inicial y vinculaba su efecto únicamente al primer montaje. Ahora cada entrada del router crea una sesión desde cero: pausa, silencio, tiempo cero y estado de finalización limpio. La entrada sin ancla lleva al inicio del hero. La reproducción se solicita cuando el observador confirma que el hero está visible.

Salir de la zona visible pausa el video. Regresar reinicia la secuencia; terminarla conserva el último fotograma. Cambiar la visibilidad de la pestaña no reinicia una secuencia terminada. El video conserva autoplay, muted y playsInline, sin controles ni loop.

Comprobaciones en navegador local:

- Home móvil de 320 px → menú → ERP: reproducción activa, tiempo 2.779536 s, silenciado, scroll 0.
- Home de escritorio de 1440 px → enlace ERP: navegación interna confirmada mediante un marcador de memoria conservado entre las rutas; video activo desde cero, silenciado y scroll 0.
- Volver a Home y entrar de nuevo al ERP: reproducción activa desde cero.
- Final natural: tiempo y duración 11.041667 s, ended=true, paused=true, loop=false, controls=false.
- Scroll a 1400 px y regreso al inicio: ended=false, paused=false, tiempo cero al reiniciar.
- TypeScript y compilación cliente/servidor correctos.
