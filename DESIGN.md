---
name: Sistema de Precisión Hidrológica
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-metric:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin-mobile: 16px
  container-margin-desktop: 32px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Marca y Estilo

Este sistema de diseño está construido para el monitoreo ambiental de alto riesgo, donde la claridad y la confiabilidad son primordiales. La personalidad de la marca es autoritaria pero accesible, priorizando la legibilidad de los datos y la eficiencia funcional sobre los elementos decorativos.

La estética sigue un enfoque de **Minimalismo Corporativo**. Utiliza amplios espacios en blanco para reducir la carga cognitiva durante el análisis de datos y emplea un sistema de cuadrícula riguroso para organizar información compleja. La interfaz debe sentirse como un instrumento de precisión: silencioso, confiable y meticulosamente estructurado. La respuesta emocional que se busca es de "control tranquilo"—proporcionando al usuario la confianza para tomar decisiones críticas basadas en datos hidrometeorológicos en tiempo real.

## Colores

La paleta está anclada por un azul profundo y autoritario que evoca la profundidad del agua y la inmensidad de la atmósfera.

- **Primario:** Un azul marino profundo utilizado para la marca central, acciones primarias y elementos de navegación críticos para infundir confianza.
- **Secundario:** Un azul brillante y funcional utilizado para estados interactivos, resaltados de datos y texto de enlaces.
- **Neutral/Fondo:** Predominantemente blanco (`#FFFFFF`) para asegurar el máximo contraste y un espacio de trabajo limpio. Blancos rotos y grises suaves se utilizan para fondos de sección y capas de superficie para prevenir la fatiga visual.
- **Deshabilitado/Borde:** Grises de baja saturación definen límites sin competir por la atención del usuario.

## Tipografía

El sistema de diseño utiliza **Inter** por su excepcional legibilidad en contextos técnicos. La jerarquía tipográfica está diseñada para resaltar métricas críticas (niveles de agua, tasas de precipitación) mientras mantiene un flujo limpio para la información de apoyo.

- **Métricas de Visualización:** Utilizadas específicamente para el punto de datos principal en un tablero.
- **Títulos:** Reservados para títulos de sección y encabezados de modales.
- **Texto de Cuerpo:** Optimizado para legibilidad en informes y descripciones de datos.
- **Etiquetas en Mayúsculas:** Utilizadas para metadatos, unidades de medida y encabezados de tablas para proporcionar una categorización clara sin ocupar espacio significativo.

## Diseño y Espaciado

Este sistema de diseño emplea una **escala lineal de 8px** para asegurar la armonía matemática en todos los componentes.

- **Cuadrícula:** Se utiliza una cuadrícula fluida de 12 columnas para tableros de monitoreo en escritorio, transitando a un diseño de una sola columna para dispositivos móviles.
- **Márgenes:** Se aplican áreas seguras de 16px en dispositivos móviles, aumentando a 32px en escritorio para enfatizar la estética "limpia" minimalista.
- **Ritmo:** El espaciado vertical entre tarjetas y bloques de datos debe favorecer unidades "stack-lg" generosas para mantener una sensación profesional y sin desorden. Los componentes dentro de un grupo (como una etiqueta y su campo de entrada) deben usar "stack-sm".

## Elevación y Profundidad

La jerarquía visual se logra a través de **Capas Tonales** y **Sombras Sutiles** en lugar de rellenos de color intensos.

- **Nivel 0 (Base):** El fondo principal, generalmente blanco o el gris más suave.
- **Nivel 1 (Tarjetas/Superficie):** Elevado por un borde sólido de 1px en un gris suave (`#E2E8F0`). No se utiliza sombra para tarjetas estándar para mantener la interfaz plana y profesional.
- **Nivel 2 (Modales/Hojas Inferiores):** Estos elementos utilizan una sombra ambiental suave (0px 10px 25px rgba(0,0,0,0.05)) para sugerir que están flotando sobre la capa de datos.
- **Cortina:** Cuando un modal u hoja inferior está activo, se aplica una cortina azul marino con 40% de opacidad al fondo para enfocar la atención del usuario.

## Formas

El lenguaje de formas es refinado y accesible. Se aplica un radio de esquina consistente de **0.5rem (8px)** a todos los contenedores primarios, botones y campos de entrada.

Este nivel específico de redondez suaviza la naturaleza técnica de los datos sin parecer excesivamente "burbujeante" o centrado en el consumidor. Los contenedores grandes como las tarjetas de tablero pueden usar la variante `rounded-lg` (1rem) para enmarcar mejor visualizaciones de datos complejas.

## Componentes

### Botones
- **Primario:** Ancho completo en móvil, fondo azul marino, texto blanco. Alto contraste para acciones críticas como "Generar Informe".
- **Secundario/Deshabilitado:** Fondo gris suave (`#F1F5F9`) con texto pizarra. Se utiliza para "Cancelar" o estados inactivos donde los datos aún se están cargando.

### Selectores y Campos de Entrada
- **Campos de Formulario:** Bordes definidos de 1px utilizando el gris secundario. Los estados enfocados deben usar el azul primario para el borde y un sutil resplandor exterior de 2px.
- **Menús Desplegables:** Utilizan un icono de chevron hacia abajo y etiquetas claras y de alto contraste.

### Listas y Modales
- **Listas Ordenadas:** Se encuentran dentro de modales de selección. Cada elemento está separado por un divisor de línea de 1px (`#F1F5F9`).
- **Hojas Inferiores:** Esquinas superiores redondeadas (1.5rem), con un mango "agarrador" centrado en la parte superior para indicar que se puede arrastrar.

### Visualización de Datos
- **Gráficos:** Utilizan grosores de trazo delgados (1.5pt) para gráficos de líneas, asegurando que las líneas de tendencia de datos sean precisas y fáciles de leer sin saturar el espacio visual.
- **Tarjetas de Métricas:** Presentan números grandes y audaces con unidades claras, utilizando el espacio en blanco para enfatizar el valor crítico.
- **Semáforos de Estado:** Utilizan un sistema de color codificado (verde para parámetros normales, amarillo para advertencia, rojo para crítico) para permitir una evaluación rápida de las condiciones del sistema.

## Responsive y Adaptabilidad

El sistema está diseñado para funcionar en múltiples dispositivos:

- **Escritorio (≥1024px):** Pantalla completa con cuadrícula de 12 columnas, márgenes de 32px.
- **Tablet (768px - 1023px):** Cuadrícula de 8 columnas, márgenes de 24px.
- **Móvil (<768px):** Diseño de una sola columna, márgenes de 16px, elementos táctiles con altura mínima de 44px para facilitar la interacción táctil.

## Accesibilidad

- **Contraste:** Todas las combinaciones de colores cumplen con el estándar WCAG 2.1 AA (relación de contraste mínima de 4.5:1 para texto normal).
- **Tamaño de Texto:** Tamaño base mínimo de 16px para prevenir el zoom en dispositivos móviles.
- **Etiquetas:** Todos los campos de formulario e íconos funcionales tienen etiquetas ARIA y texto alternativo descriptivo.
- **Enfoque:** Indicadores de enfoque visibles para navegación por teclado.

## Animaciones y Transiciones

Las interacciones son sutiles y funcionales:

- **Transiciones:** Duración de 200ms para cambios de estado (hover, focus, active).
- **Entradas:** Las tarjetas y elementos de datos pueden tener una animación de entrada de desvanecimiento (300ms) para una aparición suave.
- **Carga:** Se utilizan esqueletos (skeleton screens) en lugar de spinners para mantener la percepción de velocidad.
- **Desplazamiento:** Scroll suave habilitado para navegación dentro de la página.
