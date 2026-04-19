# CLAUDE.md — C. Quibel Propiedades
> Contexto de proyecto para Claude Code. Mantené este archivo actualizado con cada decisión importante.

---

## 🏢 El proyecto

**Cliente:** Cecilia Quibel Propiedades  
**Agencia:** habla.agency  
**Contacto agencia:** Georgina Mendez  
**Año:** 2026  
**Tagline de marca:** *Experiencia en movimiento*

Sitio web inmobiliario sobre **WordPress** con integración a **Tokko Broker** vía API. El objetivo es que cada propiedad cargada en Tokko se sincronice automáticamente al sitio y a los portales (ZonaProp, MercadoLibre), eliminando la carga manual.

---

## 🎨 Identidad visual (Brandbook)

### Paleta de colores
| Rol | Color | HEX |
|-----|-------|-----|
| Principal | Violeta oscuro | `#4D374C` |
| Acento | Lima saturado | `#D9F203` |
| Neutro | Blanco hueso | `#EBEBEB` |
| Fondo oscuro | Negro | `#000000` |

**Distribución orientativa en UI:** ~70% violeta, ~25% blanco hueso, ~5% lima (el lima es foco de atención, no relleno).

### Tipografías
| Uso | Fuente |
|-----|--------|
| Titulares y destacados | **Funnel Display** (Google Fonts) |
| Textos y UI | **Helvetica Neue** (fallback: Arial, sans-serif) |

### Logo
- Isotipo: figura humana + forma de casa combinadas (concepto: unión cliente-inmobiliaria)
- Versiones disponibles: violeta solo, lima sobre negro, blanco sobre negro, en círculo (violeta y lima)
- Archivos en `/assets/logos/`

---

## 🏗️ Arquitectura del sitio

### Páginas
| Página | Ruta | Notas |
|--------|------|-------|
| Home | `/` | Hero con CTA principal, propiedades destacadas, testimonios, amenities |
| Propiedades | `/propiedades` | Venta + alquiler en una sola pestaña con filtros |
| Ficha de propiedad | `/propiedades/{slug}` | Galería, datos, amenities, WhatsApp CTA |
| Contacto | `/contacto` | Formulario conectado a mail + Tokko |

### Reglas de navegación
- ❌ Sin sección de emprendimientos
- ✅ Venta y alquiler unificados en `/propiedades` (filtro por tipo de operación)
- ✅ Call to action presente en **cada pantalla**
- ✅ Botón WhatsApp en cada ficha con link a la propiedad específica (no chat genérico)

---

## 🔌 Integración Tokko Broker

**Plugin:** [tokkoplugins.com](https://tokkoplugins.com) — $120 USD/mes o $300 USD/año (costo del cliente)

### Sincronización automática
- Stock completo de propiedades → web
- Portales: ZonaProp + MercadoLibre
- Estados en tiempo real: `Disponible` / `Vendido` / `Alquilado`

### Parámetros clave a implementar
```
destacada = true        → mostrar badge "Destacada" + posición prioritaria en listado
estado                  → filtrar y mostrar badge de estado
tipo_operacion          → "venta" | "alquiler" (filtro en /propiedades)
precio                  → ordenamiento y filtro por rango
ambientes               → filtro numérico
zona / barrio           → filtro geográfico
```

### Propiedades destacadas
Las propiedades de mayor valor se marcan desde Tokko con el parámetro `destacada`. En el Home aparecen en sección propia. En el listado van primero con badge visual en lima `#D9F203`.

### Sin límite de propiedades
El sistema no tiene número fijo de inmuebles. Escala con el stock real.

---

## 🧩 Secciones especiales

### Testimonios
- **Formato:** carrusel de cards
- **Contenido de cada card:** foto del cliente + cita clave + botón de video
- **Video:** redirige a Instagram (no embed en la web para no sobrecargar)
- **Gestión:** autoadministrable desde WordPress (sin código)

### Amenities (iconografía)
Íconos disponibles en `/assets/icons/` — fondo lima, trazo violeta, esquinas redondeadas:
- 🎉 SUM / Salón de fiestas
- 🧺 Laundry
- 🏊 Pileta
- 🔥 Parrilla
- 💪 Gimnasio

---

## 📐 Principios de UI/UX

- **Mobile First** — el tráfico principal viene de Instagram
- **Sin sobrecargar** — menos es más; cada elemento tiene un propósito
- **Velocidad** — optimización de carga para mobile como requisito, no como extra
- **Siempre hay un CTA** — el usuario nunca queda en un callejón sin salida
- **No familiar, sí cercano** — moderno, ágil, sin perder la calidez del servicio
- **Experiencia del cliente como prioridad** — mezcla entre trayectoria y agilidad

---

## ⚙️ Stack técnico

| Componente | Tecnología |
|------------|------------|
| CMS | WordPress |
| Integración propiedades | Tokko Broker API + Plugin oficial |
| Hosting | A confirmar (actual o migración ~$100 USD/año) |
| Formularios | Conectados a mail + Tokko |
| SEO | Técnico básico: estructura, títulos, meta-descriptions |

---

## 📅 Roadmap

| Fase | Semanas | Entregable |
|------|---------|------------|
| Fase 1 | 1–2 | Wireframes + arquitectura aprobados. API Tokko conectada con stock real en staging. |
| Fase 2 | 3–4 | Diseño aplicado con Brandbook. QA de filtros, WhatsApp, formularios y testimonios. GO LIVE. |

---

## 🚫 Fuera de alcance (este presupuesto)

- Fotografía profesional en locación
- Pauta Meta Ads / Google Ads (cubierta en el partnership mensual)
- Redacción de textos institucionales (guiada por habla.agency)
- Funcionalidades post-lanzamiento: calculadora de crédito, chat en vivo, etc.
- Costo del plugin Tokko ($120 USD/mes) → a cargo del cliente

---

## 🔄 Mantenimiento post-lanzamiento

Actualizaciones mínimas autoadministrables sin depender de un desarrollador:
- Fotos de propiedades institucionales
- Textos de secciones (Home, Contacto)
- Carrusel de testimonios (agregar/editar cards)
- Banners o comunicados temporales

---

## 📱 Redes sociales

Gestionadas editorialmente por **habla.agency** (no parte del alcance web):
- Instagram
- TikTok

La web referencia Instagram en la sección de testimonios (los videos redirigen al perfil).

---

*Última actualización: Abril 2026 — habla.agency*
