# Propuesta de Estructura y Contenidos
## CQuibel Propiedades — Sitio Web 2026

**Cliente:** Patricio Scordo / Cecilia Quibel Negocios Inmobiliarios  
**Equipo:** Magalí Amato · Martina Ruiz  
**Fecha:** Abril 2026  
**Versión:** 1.0 — Para validación de estructura y textos

---

> Este documento está pensado para ser aprobado **antes del diseño y la maquetación**. Una vez que el cliente valide estructura y textos, se procede con los mockups. Es normal que en esa etapa surjan ajustes menores de copy o layout.

---

## 1. Contexto y objetivo del proyecto

El sitio web de CQuibel Propiedades se construye desde cero con un propósito claro y bien definido, tal como lo expresó Patricio Scordo en la reunión de kickoff:

> *"No somos Remax. La gente va a ir a validar que nosotros existamos. Yo le muestro un departamento a un cliente, le digo que trabajo en CQuibel y va a buscar en la web a ver si existe y a ver si tenemos esas propiedades que le estamos mostrando."*

**El sitio no es un portal masivo de búsqueda de propiedades. Es una herramienta de validación de identidad y confianza**, complementaria al trabajo de calle y al seguimiento en Toco Broker. Esto define todo: la estructura debe ser simple, la navegación inmediata, y el mensaje tiene que transmitir legitimidad en los primeros segundos.

---

## 2. Los 5 requisitos del cliente

Definidos por Patricio Scordo en la reunión del 9 de abril de 2026:

| # | Requisito | Descripción |
|---|---|---|
| 1 | **Seguro** | Sitio robusto, con buenas prácticas de seguridad web |
| 2 | **Escalable** | Arquitectura que permita crecer sin rehacerlo todo |
| 3 | **Customer centric** | Intuitivo, liviano, fácil para el usuario. Inspirado en la simplicidad de Google, ZonaProp, Argenprop |
| 4 | **Independencia de edición** | Patricio puede cambiar textos simples sin requerir al equipo técnico |
| 5 | **Sincronización con Toco Broker** | Las propiedades se publican, modifican y dan de baja automáticamente. El sitio es un espejo fiel de Toco |

---

## 3. Filosofía de diseño

**Lema de referencia del cliente:** *"El mejor buscador o la página más usada es Google, porque justamente es muy simple."*

**Tres palabras que definen el tono visual:** Elegancia · Confianza · Modernidad

### Principios que guían cada decisión de diseño

**Simplicidad ante todo.** Cada elemento que se agrega debe justificarse. Si no aporta valor al usuario, no va. Nada de banners en movimiento, pop-ups, animaciones innecesarias ni columnas cargadas de información.

**El color lima es sagrado.** El `#d9f203` (verde lima) es el color de acción de la marca. Se usa **exclusivamente** para botones primarios y llamadas a la acción concretas. No se usa como decoración, fondo de secciones ni elemento visual. Su escasez le da poder.

**Velocidad.** El usuario de hoy no espera. El sitio debe cargar rápido, responder rápido y no poner obstáculos entre el usuario y lo que busca.

**Confianza antes que creatividad.** El sitio debe comunicar solidez. Una inmobiliaria con 37 años de trayectoria no necesita fuegos artificiales; necesita transmitir que es real, profesional y confiable.

---

## 4. Público objetivo

A partir del análisis del negocio y la reunión de kickoff, se identifican tres perfiles de usuario principales:

### Perfil 1 — El prospecto que valida
**Quién es:** Persona que ya tuvo contacto con la inmobiliaria (vio una propiedad, recibió una llamada, fue referida). Entra al sitio para confirmar que CQuibel existe y que tiene las propiedades que le mostraron.  
**Qué necesita:** Ver el logo, las propiedades actualizadas, los datos de contacto. Entrar y salir en menos de 2 minutos con la certeza de que es una inmobiliaria real y confiable.  
**Por qué importa:** Es el usuario más frecuente. El sitio tiene que estar a la altura de esa primera impresión.

### Perfil 2 — El comprador o inquilino activo
**Quién es:** Persona buscando propiedad en CABA, que llegó al sitio por redes sociales, boca en boca o búsqueda orgánica.  
**Qué necesita:** Filtrar propiedades por tipo de operación y características, ver fotos y precio, y poder contactar fácilmente si algo le interesa.  
**Por qué importa:** Es el usuario de conversión. El buscador y los filtros tienen que ser tan intuitivos como ZonaProp.

### Perfil 3 — El propietario que quiere vender o alquilar
**Quién es:** Dueño de una propiedad en CABA que busca una inmobiliaria de confianza para gestionar su activo.  
**Qué necesita:** Sentir que CQuibel tiene experiencia, trayectoria y un trato personalizado. Quiere saber con quién está tratando antes de llamar.  
**Por qué importa:** Es el otro lado del negocio. Sin propiedades captadas no hay propiedades para mostrar.

---

## 5. Mapa del sitio (Arquitectura de información)

### Páginas propuestas

```
cquibel.com.ar
│
├── / (Inicio)
├── /propiedades?op=venta        → Propiedades en Venta
├── /propiedades?op=alquiler     → Propiedades en Alquiler
├── /emprendimientos             → Nuevos desarrollos
└── /nosotros                   → Quiénes somos + Contacto
```

**Decisiones tomadas:**
- **Se elimina "Proyectos Sustentables"** — confirmado por el cliente en la reunión.
- **Emprendimientos se mantiene** como sección independiente con su propia entrada en el menú.
- **Contacto no tiene página propia** — vive dentro de Nosotros y está accesible desde el header (WhatsApp) y el footer.
- **Newsletter** se desarrolla técnicamente pero se deja inactivo/oculto hasta que el cliente decida activarlo.

### Navegación principal (header)

```
[Logo CQuibel]    Inicio · Venta · Alquiler · Emprendimientos · Nosotros    [WhatsApp: 11 5347-3533]
```

**Justificación UX:** La navegación replica el patrón estándar de portales inmobiliarios que el usuario ya conoce (ZonaProp, Argenprop). "Venta" y "Alquiler" son palabras de acción directa, no "Propiedades". El teléfono/WhatsApp en el header es el CTA persistente más importante del sitio.

---

## 6. Página por página

---

### 6.1 INICIO (/)

**Objetivo:** Primera impresión. En 5 segundos el usuario tiene que saber quiénes son, qué hacen y cómo buscar una propiedad.

**Estructura propuesta:**

```
SECCIÓN 1 — HERO
SECCIÓN 2 — BUSCADOR RÁPIDO
SECCIÓN 3 — PROPIEDADES DESTACADAS (Toco Broker)
SECCIÓN 4 — QUIÉNES SOMOS (resumen)
SECCIÓN 5 — CLIENTES QUE CONFÍAN (trust)
SECCIÓN 6 — CONTACTO
SECCIÓN 7 — INSTAGRAM (feed)
```

---

#### SECCIÓN 1 — HERO

**Función:** Establecer quiénes son y generar confianza inmediata. Imagen de fondo de una propiedad real (tomada de Toco Broker automáticamente).

**Propuesta de texto — Opción A (recomendada):**

> **ETIQUETA SUPERIOR:** Cecilia Quibel · Negocios Inmobiliarios · CABA
>
> **TITULAR H1:** 37 años conectando personas con su próxima propiedad
>
> **SUBTÍTULO:** Una inmobiliaria familiar que opera en toda la Ciudad de Buenos Aires. Honestidad, experiencia y trato personalizado en cada operación.
>
> **CTA PRINCIPAL (lima):** Ver propiedades en venta
> **CTA SECUNDARIO (outline):** Ver alquileres

**Propuesta de texto — Opción B:**

> **ETIQUETA SUPERIOR:** Cecilia Quibel · Negocios Inmobiliarios · CABA
>
> **TITULAR H1:** La inmobiliaria que trabaja como si fuera la primera vez
>
> **SUBTÍTULO:** Desde 1987, acompañamos a familias, empresas y embajadas en sus operaciones inmobiliarias en Capital Federal. Con la misma dedicación de siempre.
>
> **CTA PRINCIPAL (lima):** Ver propiedades en venta
> **CTA SECUNDARIO (outline):** Ver alquileres

**Justificación UX/UX Researcher:** El hero debe responder tres preguntas en segundos: ¿Qué es esto? ¿Por qué debería confiar? ¿Qué hago ahora? Las opciones A y B responden las tres. Se evita el genérico "Descubrí tu próximo hogar" porque no diferencia ni comunica trayectoria.

---

#### SECCIÓN 2 — BUSCADOR RÁPIDO

**Función:** Permitir al usuario iniciar una búsqueda de propiedad desde la página de inicio, siguiendo el patrón estándar del mercado (ZonaProp, Argenprop).

**Campos propuestos:**

| Campo | Opciones |
|---|---|
| Operación | Venta / Alquiler |
| Tipo de propiedad | Departamento / Casa / PH / Oficina / Local |
| Ambientes | 1 / 2 / 3 / 4+ |
| [Botón CTA lima] | Buscar |

**Justificación UX Architect:** Menos campos = más conversión. El usuario ya sabe cómo funciona este patrón. No hay que enseñarle. El botón de búsqueda en color lima es el único elemento de ese color en la sección, lo que dirige la atención sin necesidad de competir.

---

#### SECCIÓN 3 — PROPIEDADES DESTACADAS

**Función:** Mostrar las propiedades más recientes sincronizadas con Toco Broker. Cumple el rol de validación: "Sí, tienen propiedades reales."

**Texto de sección:**

> **ETIQUETA:** Propiedades destacadas
> **TÍTULO:** Lo más reciente

**Comportamiento:**
- Muestra las últimas 6 propiedades cargadas en Toco Broker
- Tabs de filtrado rápido: Todas / Venta / Alquiler
- Botón al final: **"Ver todas las propiedades"** (outline)

**Justificación UX:** Mostrar propiedades reales y actualizadas es el argumento más poderoso de confianza del sitio. Esta sección valida la identidad de la inmobiliaria mejor que cualquier texto.

---

#### SECCIÓN 4 — QUIÉNES SOMOS (resumen en inicio)

**Función:** Humanizar la inmobiliaria y reforzar la confianza con trayectoria y valores. Versión condensada; la versión completa vive en /nosotros.

**Estructura:** Imagen del equipo (izquierda) + texto (derecha).

**Propuesta de texto:**

> **ETIQUETA:** Quiénes somos
>
> **TÍTULO:** El mercado cambia. Nosotros, no.
>
> **PÁRRAFO 1:** Somos una inmobiliaria familiar con presencia en toda la Ciudad de Buenos Aires. Desde 1987 acompañamos a familias, empresas y organismos internacionales en la compra, venta y alquiler de propiedades en CABA.
>
> **PÁRRAFO 2:** No somos un portal. Somos personas que conocen el mercado, los barrios y a cada cliente. Esa diferencia se nota desde el primer llamado.
>
> **STATS:**
> - `37+` años en el mercado
> - `CUCICBA` MP. 2278
> - `500+` operaciones acompañadas
>
> **CTA (lima):** Conocenos

**Justificación UX Researcher:** El stat de "100% compromiso" que existía antes no comunica nada medible. "500+ operaciones" (número estimado a confirmar con el cliente) es concreto y genera confianza real. Si el cliente prefiere no especificar un número, se puede usar "Años de operaciones" o simplemente omitir esa stat.

> **PUNTO A VALIDAR CON EL CLIENTE:** ¿Tenemos un número aproximado de operaciones realizadas en 37 años? Podría ser una stat muy poderosa si es real.

---

#### SECCIÓN 5 — CLIENTES QUE CONFÍAN

**Función:** Social proof. Las embajadas y empresas multinacionales son el argumento de confianza más fuerte que tiene la inmobiliaria. Esta sección lo hace visible.

**Decisión de diseño:** Se mantiene esta sección tal como fue confirmado en la reunión. Se propone mejorar el formato actual (texto plano en cajas grises) para darle más impacto.

**Propuesta de texto:**

> **ETIQUETA:** Quienes confían en nosotros
>
> **TÍTULO:** Respaldo que se construye con el tiempo
>
> **SUBTÍTULO:** Embajadas, empresas multinacionales y familias de CABA que eligieron nuestra experiencia.

**Clientes a mostrar** (confirmar con el cliente cuáles mantener y si hay que agregar):
- Embajada de Italia
- Embajada de España
- Embajada de Francia
- Empresas multinacionales
- Familias de CABA
- nb&a arquitectura

**Formato propuesto:** Cards horizontales o carrusel simple. Cada card muestra el nombre del cliente. Si el cliente tiene logos o puede obtenerlos, el impacto visual sería significativamente mayor.

> **PUNTO A VALIDAR CON EL CLIENTE:** ¿Se cuenta con logos de alguna de estas instituciones para usar? ¿Hay algún cliente que prefiera no aparecer?

---

#### SECCIÓN 6 — CONTACTO

**Función:** Captar consultas directas. Es la sección de conversión principal para el Perfil 2 y Perfil 3.

**Estructura:** Información de contacto (izquierda) + Formulario (derecha).

**Texto del bloque de información:**

> **ETIQUETA:** Contacto
>
> **TÍTULO:** Hablemos sin vueltas
>
> **SUBTÍTULO:** Tenemos 37 años de experiencia y ninguna respuesta de catálogo. Contanos qué necesitás y te orientamos honestamente.
>
> **Teléfono / WhatsApp:** +54 11 5347-3533
> **Email:** cquibel.propiedades@gmail.com
> **Horarios:** Lun–Vie: 9:00–18:00 · Sáb: 10:00–13:00

> **PUNTO A VALIDAR CON EL CLIENTE:** Confirmar horario de atención exacto. Actualmente hay inconsistencia en la web: una página dice 10–15 hs y otra dice 9–18 hs.

**CTA de WhatsApp (lima):** Escribinos por WhatsApp

**Formulario — campos:**

| Campo | Tipo | Obligatorio |
|---|---|---|
| Nombre completo | Texto | Sí |
| Email | Email | Sí |
| Teléfono | Tel | No |
| Me interesa | Select | No |
| Mensaje | Textarea | Sí |

**Opciones del select "Me interesa":**
- Comprar una propiedad
- Alquilar una propiedad
- Vender / tasar mi propiedad ← **importante: incluir esta opción para el Perfil 3**
- Emprendimientos
- Otra consulta

**Nota de privacidad:** *"Tu información es confidencial y no será compartida."*

**Botón de envío (lima):** Enviar consulta

---

#### SECCIÓN 7 — INSTAGRAM

**Función:** Conectar el sitio con la actividad en redes sociales. Muestra que la inmobiliaria tiene vida y presencia activa.

**Propuesta de texto:**

> **Handle:** @cquibel.propiedades
> **Subtítulo:** Seguinos para ver las últimas novedades
>
> **CTA (outline):** Seguir en Instagram →

**Contenido:** Los últimos 3 reels/posts embebidos directamente desde Instagram.

---

#### NEWSLETTER (oculto / inactivo al lanzar)

**Función futura:** Captación de leads para campañas de email marketing.

**El componente se desarrolla pero se mantiene oculto hasta que el cliente decida activarlo.** Cuando se active, puede aparecer como:
- Sección al final de la página de inicio
- Pop-up con delay
- Banner fijo en el footer

**Texto propuesto para cuando se active:**

> **TÍTULO:** Recibí las últimas novedades
> **SUBTÍTULO:** Nuevas propiedades, emprendimientos y novedades del mercado inmobiliario directamente en tu correo.
>
> **Campo:** Tu email
> **CTA (lima):** Suscribirme

---

### 6.2 PROPIEDADES (/propiedades)

**Objetivo:** Que el usuario encuentre rápido lo que busca. Mismo patrón que ZonaProp / Argenprop pero en escala de la inmobiliaria.

**Estructura propuesta:**

```
HERO DE PÁGINA (título dinámico según operación)
TABS DE OPERACIÓN (Todas / Venta / Alquiler)
PANEL DE FILTROS
GRILLA DE RESULTADOS (paginada)
```

**Hero de página — textos dinámicos:**

| URL | Etiqueta | Título | Descripción |
|---|---|---|---|
| /propiedades | Propiedades | Todas las propiedades | Encontrá la propiedad ideal en CABA |
| /propiedades?op=venta | Venta | Propiedades en Venta | Oportunidades de compra en Capital Federal |
| /propiedades?op=alquiler | Alquiler | Propiedades en Alquiler | Propiedades disponibles para alquilar en CABA |

**Filtros disponibles:**

| Filtro | Opciones |
|---|---|
| Tipo de propiedad | Departamento / Casa / PH / Oficina / Local comercial |
| Ambientes | 1 / 2 / 3 / 4+ |
| Moneda | USD / ARS |
| Precio mínimo | Campo numérico |
| Precio máximo | Campo numérico |
| Superficie mínima (m²) | Campo numérico |

**Ordenamiento:**
- Más recientes (default)
- Precio: menor a mayor
- Precio: mayor a menor
- Mayor superficie

**Estado sin resultados:**

> *"Sin resultados"*
> Probá con otros filtros o consultanos directamente.
> **[Botón lima: Contactar por WhatsApp]**

**Justificación UX Architect:** El panel de filtros aplana la curva de aprendizaje porque replica exactamente lo que el usuario ya sabe hacer en otros portales. No hay necesidad de innovar aquí; la familiaridad genera confianza y velocidad.

---

### 6.3 DETALLE DE PROPIEDAD (/propiedad?id=...)

**Objetivo:** Que el usuario vea todos los detalles de la propiedad y tome la decisión de contactar.

**Estructura propuesta:**

```
GALERÍA DE FOTOS (pantalla completa, navegable)
DATOS CLAVE (precio, operación, tipo, ambientes, superficie)
DESCRIPCIÓN (texto desde Toco Broker)
CARACTERÍSTICAS (cochera, amenities, antigüedad, etc.)
CTA DE CONTACTO (fijo en sidebar o al final)
MAPA (si Toco Broker provee coordenadas)
PROPIEDADES RELACIONADAS
```

**CTA principal en detalle de propiedad:**

> **Botón lima:** Consultar por esta propiedad → abre WhatsApp con texto predefinido: *"Hola Cecilia, me interesa la propiedad [dirección/ID]. ¿Podemos hablar?"*

**Texto para "Propiedades relacionadas":**

> **TÍTULO:** También puede interesarte

---

### 6.4 EMPRENDIMIENTOS (/emprendimientos)

**Objetivo:** Mostrar nuevos desarrollos y proyectos en construcción.

**Estructura propuesta:**

```
HERO DE PÁGINA
GRILLA DE EMPRENDIMIENTOS (Toco Broker)
CTA DE CONTACTO AL FINAL
```

**Propuesta de texto:**

> **ETIQUETA:** Nuevos desarrollos
>
> **TÍTULO:** Emprendimientos
>
> **SUBTÍTULO:** Proyectos nuevos y en construcción en Capital Federal. Unidades desde el pozo con respaldo de 37 años de experiencia.

**CTA al final (si no hay emprendimientos disponibles):**

> *"Por el momento no tenemos emprendimientos publicados."*
> Si buscás oportunidades de inversión desde el pozo, consultanos directamente.
> **[Botón lima: Consultar por WhatsApp]**

---

### 6.5 NOSOTROS (/nosotros)

**Objetivo:** Humanizar la inmobiliaria, construir confianza profunda y cerrar con un llamado a la acción. Es la página más importante para el Perfil 3 (propietario que evalúa con quién trabajar).

**Estructura propuesta:**

```
SECCIÓN 1 — HERO DE PÁGINA
SECCIÓN 2 — HISTORIA Y BIO
SECCIÓN 3 — VALORES
SECCIÓN 4 — CLIENTES QUE CONFÍAN (misma que inicio)
SECCIÓN 5 — CTA FINAL
```

---

#### SECCIÓN 1 — HERO DE NOSOTROS

**Propuesta de texto:**

> **ETIQUETA:** Experiencia en movimiento
>
> **TÍTULO:** La inmobiliaria que lleva 37 años diciendo la verdad
>
> **SUBTÍTULO:** Una empresa familiar con historia en Capital Federal. Honestidad, transparencia y compromiso en cada operación, desde 1987.

---

#### SECCIÓN 2 — HISTORIA Y BIO

**Estructura:** Foto de Cecilia (izquierda) + texto (derecha).

**Propuesta de texto:**

> **ETIQUETA:** Nuestra historia
>
> **TÍTULO:** Desde 1987 en Capital Federal
>
> **PÁRRAFO 1:** Cecilia Quibel Propiedades nació con una convicción simple: que cada persona merece ser acompañada con honestidad en una de las decisiones más importantes de su vida.
>
> **PÁRRAFO 2:** Desde 1987 operamos en la Ciudad de Buenos Aires, construyendo relaciones de largo plazo con familias, empresas y organismos internacionales. Nuestra matrícula CUCICBA N° 2278 respalda cada operación con el marco legal y ético que toda transacción inmobiliaria merece.
>
> **PÁRRAFO 3:** Hoy, con más de tres décadas de experiencia, seguimos siendo la misma inmobiliaria que empezó: cercana, transparente y comprometida con cada cliente.

**STATS:**
- `37+` años de trayectoria
- `CUCICBA` MP. 2278
- `CABA` Ciudad de Buenos Aires

---

#### SECCIÓN 3 — VALORES

**Estructura:** Grid de 6 cards (3 columnas en desktop, 1 en mobile).

**Propuesta de texto:**

> **ETIQUETA:** Lo que nos define
>
> **TÍTULO:** Nuestros valores
>
> **SUBTÍTULO:** Principios que guían cada conversación, cada visita y cada firma.

| Ícono | Valor | Texto |
|---|---|---|
| Escudo | **Honestidad** | Si una propiedad no te conviene, te lo decimos. Siempre. |
| Círculo info | **Transparencia** | Nada se esconde bajo el contrato. Todo se explica antes de firmar. |
| Personas | **Trato personalizado** | No gestionamos expedientes. Acompañamos personas. |
| Pulso | **Agilidad** | La experiencia acorta caminos. Sabemos cuáles tomar y cuáles evitar. |
| Casa | **Conocimiento local** | Décadas en el mercado porteño. Precios, tendencias y barrios en tiempo real. |
| Check | **Compromiso** | La firma no es el final. Es donde empieza el seguimiento. |

---

#### SECCIÓN 4 — CLIENTES QUE CONFÍAN

*(Misma sección que en Inicio — se reutiliza el componente)*

---

#### SECCIÓN 5 — CTA FINAL

**Propuesta de texto:**

> **ETIQUETA (lima sobre fondo oscuro):** Trabajemos juntos
>
> **TÍTULO:** ¿Querés vender, alquilar o comprar una propiedad?
>
> **SUBTÍTULO:** Contactanos sin compromiso. Te asesoramos con la misma dedicación de siempre.
>
> **CTA 1 (lima):** Escribinos por WhatsApp
> **CTA 2 (outline claro):** Ver propiedades

---

## 7. Componentes globales

### Header (fijo en scroll)

```
[Logo SVG CQuibel]    Inicio · Venta · Alquiler · Emprendimientos · Nosotros    [Ícono WA + "11 5347-3533"]
```

- En mobile: menú hamburguesa
- El header se vuelve opaco al hacer scroll (en hero es transparente)
- WhatsApp en el header es el CTA de contacto más rápido del sitio

### Footer

```
[Logo]                   Propiedades      Nosotros       Contacto
Cecilia Quibel           En Venta         Quiénes somos  +54 11 5347-3533
Negocios Inmobiliarios   En Alquiler      Contacto       Email
CUCICBA · MP. 2278       Emprendimientos  Instagram      WhatsApp
[IG] [WA]

© 2026 CQuibel Propiedades · Cecilia Quibel Negocios Inmobiliarios
Protección de datos personales
```

**Cambios respecto al footer actual:**
- Se elimina la dirección física (ya no hay local)
- Se agrega Emprendimientos en la columna de Propiedades
- Se elimina la referencia a Proyectos Sustentables

### WhatsApp flotante

Botón fijo en la esquina inferior derecha, visible en todas las páginas. Abre directamente la conversación con texto predefinido: *"Hola Cecilia, los contacto desde su web."*

### Meta SEO (título y descripción por página)

| Página | Título | Meta description |
|---|---|---|
| Inicio | CQuibel Propiedades — Cecilia Quibel, CABA | Cecilia Quibel Negocios Inmobiliarios. 37 años de experiencia en CABA. Venta, alquiler y emprendimientos inmobiliarios con honestidad y transparencia. |
| Venta | Propiedades en Venta — CQuibel, CABA | Propiedades en venta en Capital Federal. CQuibel Propiedades — Cecilia Quibel Negocios Inmobiliarios. CUCICBA MP. 2278. |
| Alquiler | Propiedades en Alquiler — CQuibel, CABA | Propiedades en alquiler en Capital Federal. CQuibel Propiedades — Cecilia Quibel Negocios Inmobiliarios. |
| Emprendimientos | Emprendimientos — CQuibel, CABA | Nuevos emprendimientos inmobiliarios en CABA. CQuibel Propiedades — Cecilia Quibel Negocios Inmobiliarios. |
| Nosotros | Quiénes somos — CQuibel Propiedades | 37 años de experiencia en el mercado inmobiliario de CABA. Conocé la historia y los valores de Cecilia Quibel Propiedades. |

---

## 8. Directrices de marca aplicadas

### Uso del color lima `#d9f203`

El color lima es el activo más poderoso de la marca. Se usa **únicamente** en:

| Uso permitido | Uso prohibido |
|---|---|
| Botón primario de CTA | Fondos de secciones decorativas |
| Botón de búsqueda | Textos corridos |
| Botón de WhatsApp principal | Íconos decorativos |
| Botones de acción clave en formularios | Bordes o separadores |

### Tipografía

- **Títulos y headings:** Funnel Display (ya instalada)
- **Cuerpo de texto:** Helvetica Neue / sistema (ya definida)

### Nombre de la marca — jerarquía

| Contexto | Nombre a usar |
|---|---|
| Logo, dominio, redes sociales | CQuibel Propiedades |
| Nombre legal / matrícula | Cecilia Quibel Negocios Inmobiliarios |
| Conversación informal | Cecilia Quibel / CQuibel |

**No mezclar las tres variantes en la misma sección.**

---

## 9. Sincronización con Toco Broker

El sitio funciona como un **espejo exacto** de Toco Broker. Esto significa:

| Acción en Toco Broker | Resultado en la web |
|---|---|
| Alta de propiedad | Aparece automáticamente en la web |
| Baja de propiedad | Desaparece automáticamente de la web |
| Cambio de precio | Se actualiza en tiempo real |
| Cambio de descripción | Se actualiza en tiempo real |
| Alta de emprendimiento | Aparece en /emprendimientos |

**No se requiere ninguna acción adicional en el sitio.** La carga en Toco es suficiente.

---

## 10. Independencia de edición

Para que Patricio pueda modificar textos simples sin requerir al equipo, se propone:

- Los textos editables del sitio (hero, secciones estáticas) estarán claramente identificados
- Se entregará una guía simple de qué textos puede cambiar y cómo
- Los textos dinámicos (propiedades, emprendimientos) se editan exclusivamente desde Toco Broker

---

## 11. Puntos a validar con el cliente

Antes de avanzar con el diseño, se solicita validación de los siguientes puntos:

### Textos

- [ ] **Hero:** ¿Opción A o Opción B? ¿O preferís una versión combinada?
- [ ] **Stat de operaciones:** ¿Tenemos un número aproximado de operaciones en 37 años? (ej: 300+, 500+, 1000+)
- [ ] **Horario de atención:** ¿Cuál es el horario correcto? Lun–Vie ¿9–18 hs o 10–15 hs? ¿Sábados?
- [ ] **Clientes:** ¿Todos los clientes listados siguen vigentes? ¿Hay alguno que no quieras mostrar o alguno nuevo para agregar?

### Estructura

- [ ] ¿Se confirma la eliminación de Proyectos Sustentables?
- [ ] ¿El menú de navegación con Emprendimientos está bien o preferís que vaya dentro de Propiedades como submenu?
- [ ] ¿Querés incluir una sección explícita para propietarios que quieran vender/alquilar, o con el formulario de contacto es suficiente?

### Imágenes

- [ ] ¿Hay foto actualizada de Cecilia para la sección "Nuestra historia"?
- [ ] ¿Hay foto del equipo actual?
- [ ] ¿Se pueden usar las mismas imágenes del sitio anterior?

### Técnico

- [ ] ¿Se confirma que el acceso a Hostinger ya fue compartido con el equipo?
- [ ] ¿Hay logo en formato vectorial (SVG o AI) además del que está en el SVG inline del código actual?

---

## 12. Próximos pasos acordados

| Tarea | Responsable | Estado |
|---|---|---|
| Validar este documento (estructura y textos) | Patricio Scordo | Pendiente |
| Crear grupo de WhatsApp del proyecto | Martina Ruiz | Pendiente |
| Compartir acceso a Hostinger | Patricio Scordo | Pendiente |
| Confirmar imágenes disponibles (Cecilia, equipo) | Patricio Scordo | Pendiente |
| Avanzar con mockups una vez aprobado este doc | Magalí Amato | Pendiente |
| Reunión semanal de seguimiento | Todos | Martes 13:00 hs |

---

*Documento preparado por el equipo de desarrollo · Abril 2026*  
*Versión 1.0 — Para revisión y aprobación del cliente*
