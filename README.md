````markdown name=README.md
# Histori-IA

Mapas conceptuales dinámicos para Historia de España de 2.º de Bachillerato.

## ¿Qué es Histori-IA?

**Histori-IA** es un recurso educativo **curado manualmente** (no basado en IA generativa) que visualiza conceptos e interrelaciones de la Historia de España mediante mapas conceptuales dinámicos generados con Mermaid.js.

Está diseñado como herramienta complementaria para docentes y estudiantes de 2.º de Bachillerato, proporcionando:

- **Visualización clara** de relaciones causales y jerárquicas
- **Contenidos académicos** verificados y estructurados
- **Accesibilidad total** sin recopilación de datos personales
- **Diseño responsive** para todos los dispositivos
- **Funcionalidades de audio** mediante Web Speech API
- **Exportación a PDF** para facilitar el trabajo colaborativo

## Para qué sirve

Histori-IA permite:

1. **Localizar contenidos históricos** mediante búsqueda rápida
2. **Consultar fichas informativas** con descripción, categoría, período y utilidad didáctica
3. **Visualizar mapas conceptuales dinámicos** que muestran relaciones entre elementos históricos
4. **Escuchar explicaciones en audio** (narración en español)
5. **Descargar contenidos como PDF** para incluir en trabajos y presentaciones
6. **Cambiar tema visual** entre claro y oscuro para mayor comodidad
7. **Acceder desde cualquier dispositivo** (móvil, tablet, ordenador)

## Cómo está organizada la herramienta

### Estructura de archivos

```
histori-ia/
├── index.html          # Página principal (estructura HTML)
├── styles.css          # Estilos CSS completos (responsive + accessibility)
├── app.js              # Lógica de la aplicación (vanilla JS, sin frameworks)
├── data.js             # Contenidos históricos curados
└── README.md           # Este archivo
```

### Flujo de funcionamiento

1. **`index.html`** - Define la estructura semántica con etiquetas ARIA para accesibilidad
2. **`styles.css`** - Proporciona diseño responsivo, temas y estilos de impresión
3. **`app.js`** - Gestiona:
   - Búsqueda y filtrado de contenidos
   - Selección y visualización de fichas
   - Síntesis de voz mediante Web Speech API
   - Cambio de tema (claro/oscuro)
   - Exportación a PDF (vía impresión)
4. **`data.js`** - Array de objetos con contenidos históricos

### Estructura de datos (data.js)

Cada contenido histórico es un objeto JavaScript con esta estructura:

```javascript
{
    id: "identificador_unico",
    title: "Título del Contenido",
    category: "Categoría (Personaje/Proceso/Concepto/Marco legal)",
    period: "Período histórico (ej: 1874-1902)",
    learningGoal: "Objetivo educativo o competencia a desarrollar",
    description: "Texto descriptivo extenso (200-400 palabras)",
    speech: "Texto para narración por Web Speech API",
    mermaid: `flowchart LR
        // Código Mermaid para el diagrama visual
    `
}
```

## Cómo añadir nuevos contenidos en data.js

### Paso 1: Abrir data.js

Edita el archivo `data.js` en tu editor de código.

### Paso 2: Agregar nuevo objeto al array

Añade un nuevo objeto al final del array `historicalContent`, antes del cierre `]`:

```javascript
const historicalContent = [
    // ... contenidos existentes ...
    {
        id: "mi-nuevo-contenido",
        title: "Mi Nuevo Contenido",
        category: "Personaje histórico",
        period: "1900-1950",
        learningGoal: "Comprender la importancia de X en la historia de España",
        description: "Descripción detallada del contenido...",
        speech: "Texto que será leído en voz alta...",
        mermaid: `flowchart TD
            A[Concepto A] --> B[Concepto B]
            B --> C[Conclusión]
        `
    }
];
```

### Paso 3: Crear el diagrama Mermaid

Utiliza la sintaxis Mermaid para crear visualizaciones. Ejemplos:

```javascript
// Flowchart horizontal
mermaid: `flowchart LR
    A["🏛️ Centro"] --> B["Opción 1"]
    A --> C["Opción 2"]
    style A fill:#1e3a8a,stroke:#0f766e,stroke-width:3px,color:#fff
`

// Diagrama de árbol
mermaid: `flowchart TD
    A[Raíz] --> B[Rama 1]
    A --> C[Rama 2]
    B --> D[Hoja]
`

// Diagrama de relaciones
mermaid: `graph TB
    A["Concepto A"] ---|relación| B["Concepto B"]
    B -->|causó| C["Resultado"]
`
```

**Recomendaciones Mermaid:**

- Usa emojis para mayor claridad visual
- Aplica estilos con `style` para destacar elementos principales
- Mantén los diagramas concisos (máx. 10-15 nodos)
- Añade accesibilidad con `accTitle` y `accDescr`

```javascript
mermaid: `flowchart LR
    A["Concepto"]
    accTitle: Título accesible
    accDescr: Descripción para lectores de pantalla
`
```

### Paso 4: Guardar y desplegar

1. Guarda los cambios en `data.js`
2. Haz commit y push a tu repositorio GitHub
3. GitHub Pages actualizará automáticamente la aplicación

## Cómo publicarla en GitHub Pages

### Opción 1: Desde GitHub Web

1. En tu repositorio → **Settings** → **Pages**
2. En "Source" → selecciona rama **main** y carpeta **root**
3. Haz clic en **Save**
4. GitHub desplegará tu sitio en `https://tu-usuario.github.io/histori-ia`

### Opción 2: Desde línea de comandos

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/histori-ia.git
cd histori-ia

# Crear rama gh-pages si es necesaria
git checkout -b gh-pages

# Hacer push
git push origin gh-pages

# Habilitar Pages desde Settings del repositorio
```

### Acceso a la aplicación

Una vez desplegada, accede a:
- `https://tu-usuario.github.io/histori-ia` (si el repo es `histori-ia`)
- `https://tu-usuario.github.io` (si el repo es `tu-usuario.github.io`)

**Nota:** Los cambios pueden tardar 5-10 minutos en reflejarse.

## Privacidad y RGPD

### Política de privacidad

**Histori-IA no solicita ni almacena ningún dato personal.**

No se recopilan:
- ✗ Nombres, apellidos, correos electrónicos
- ✗ Contraseñas o credenciales
- ✗ Imágenes ni datos biométricos
- ✗ Datos de localización
- ✗ Información de navegación (cookies de seguimiento)

### Procesamiento de datos

- **Audio local:** La síntesis de voz (Web Speech API) se procesa localmente en el navegador del usuario
- **Sin servidores:** Los contenidos se cargan desde GitHub, no hay conexión a bases de datos externas
- **Sin seguimiento:** No hay herramientas de analítica que rastreen el comportamiento del usuario

### Conformidad RGPD

Histori-IA cumple con los requisitos de RGPD (Reglamento General de Protección de Datos):

- No recoge datos identificativos
- No requiere consentimiento explícito (no hay consentimiento que dar)
- No transfiere datos a terceros
- El acceso es anónimo y directo mediante URL pública

## Tecnologías utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Responsive design, temas, animaciones
- **JavaScript vanilla** - Sin frameworks ni dependencias de librerías (salvo Mermaid)
- **Mermaid.js** - Generación de diagramas vectoriales
- **Web Speech API** - Síntesis de voz (navegador)
- **LocalStorage** - Almacenamiento de preferencias (cliente)
- **GitHub Pages** - Hospedaje estático gratuito

## Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet para cargar Mermaid.js desde CDN
- Para síntesis de voz: navegador con soporte Web Speech API
- **No requiere:** Node.js, npm, base de datos, servidor backend

## Accesibilidad

Histori-IA está diseñado con accesibilidad en mente:

- ✓ Etiquetas ARIA semánticas (`role`, `aria-label`, `aria-live`)
- ✓ Contraste de colores suficiente (WCAG AA)
- ✓ Modo de alto contraste
- ✓ Navegación por teclado
- ✓ Descripciones alternativas en diagramas
- ✓ Textos legibles y bien espaciados
- ✓ Compatible con lectores de pantalla

## Licencia

Este proyecto es de uso educativo. Los contenidos históricos están curados manualmente para fines pedagógicos.

## Contacto y contribuciones

Si quieres mejorar Histori-IA:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Roadmap futuro

- [ ] Exportar a SCORM para LMS (Moodle, Classroom)
- [ ] Crear cuestionarios de evaluación anónimos
- [ ] Agregar más períodos históricos
- [ ] Traducción a otros idiomas
- [ ] Modo offline (Progressive Web App)
- [ ] Generador de fichas personalizables
- [ ] Integración con herramientas de mapas mentales

---

**Versión:** 1.0  
**Última actualización:** 2026-05-20  
**Recurso educativo para Historia de España - 2.º de Bachillerato**
````
