# Auditoría Técnica Profunda: mus3o (Team 5)

**Track Oficial:** 🧊 Three-Dimensional  
**Resultado Oficial:** 🏆 **PROYECTO GANADOR ABSOLUTO — PLATANUS HACK 26 CARACAS** (34.5% de probabilidad final en el mercado)  
**Repositorio Oficial:** [platanus-hack-26-ve-team-5](https://github.com/platanus-hack/platanus-hack-26-ve-team-5)  
**Integrantes:** Jesús Gil ([@Jrgil20](https://github.com/Jrgil20)), Gabriel Castellano ([@gdcastellano](https://github.com/gdcastellano)), Mássimo Perozo ([@massiperozo](https://github.com/massiperozo))  
**Stack Tecnológico:** `TypeScript, Next.js, Three.js, React Three Fiber, Vitest, WebGL, GLSL Shaders, TailwindCSS, Express`  
**Métricas de Código:** 331 archivos de código · ~43,990 LOC · Monorepo con validación en 4 capas  

---

## 1. Resumen Ejecutivo y Alcance

**mus3o** es un entorno inmersivo de aprendizaje activo y mnemotécnico basado en el **Método de Loci** (palacios de la memoria). Transforma apuntes de estudio, textos complejos o PDFs en galerías y salas tridimensionales interactivas donde cada concepto se traduce en un objeto navegable sobre pedestales conectados mediante grafos dirigidos acíclicos (DAG).

A diferencia de galerías 3D cosméticas, mus3o implementó un motor de **degradación visual por shaders GLSL** que agrieta y desatura los objetos tridimensionales conforme transcurre el tiempo sin repasar (simulación física de la curva del olvido de Ebbinghaus), asistido por **Aris**, un guía interactivo con síntesis de voz y verificación epistémica referenciada línea por línea a los apuntes del estudiante.

---

## 2. Radiografía de Módulos y Arquitectura del Repositorio

```
apps/
├── web/
│   ├── src/
│   │   ├── scene/ (ParrotDiorama.tsx, LobbyPoster.tsx, Canvas, Shaders)
│   │   ├── ui/ (Landing.tsx, Inspector, Controles)
│   │   └── app/page.tsx
│   └── public/models/ (dungeon, catalog.json, KayKit glTF assets)
└── server/ (apps/server/dist/index.js, endpoints de estructura, caché sha256)
packages/
└── dungeon-core/
    ├── src/
    │   ├── application/agent/ (AutonomousDungeonAgent.ts)
    │   └── application/navigation/ (AStarNavigator.ts)
    └── tests/ (astar.test.ts, agent-replan.test.ts, dungeon-episode.test.ts)
.claude/skills/
├── 3d-validation/ (Capa A, B, C, D de control de calidad)
└── architecture/ (Principios de monorepo mínimo y caché)
```

---

## 3. Excelencia Técnica e Ingeniería en HEAD

### 3.1 Protocolo de Validación en 4 Capas (3D Validation Engine)
El equipo no cayó en la trampa de generar tests unitarios de relleno; estructuró un pipeline formal de aseguramiento de calidad específico para gráficos en tiempo real:
- **Capa A (Lógica sin GPU con Vitest, $0 USD):** Pruebas de conectividad espacial y algoritmos de generación de layout (sin solapamiento de habitaciones, alineación estricta de puertas, margen libre de cuadros y reproducibilidad determinista por semilla).
- **Capa B (Rendimiento y Presupuesto de GPU):** Límite estricto de **menos de 300 draw calls** auditado mediante `gl.info.render.calls` y estabilidad de memoria (`memory.geometries`, `memory.textures`) para evitar memory leaks en WebGL.
- **Capa C (Visual con Playwright):** Batería de capturas automatizadas desde ángulos fijos para validar oclusión y materiales.
- **Capa D (Recorrido Humano en Laptop Integrada):** Comprobación de colisiones, legibilidad tipográfica a 2 metros de distancia virtual y fluidez de framerate.

### 3.2 Resiliencia y Fallback Procedural en Escenario
Durante las presentaciones en vivo, cuando las APIs externas de modelos 3D (Poly Pizza) sufrieron saturación de cuota y errores HTTP 403, mus3o activó su **arquitectura de fallback procedural** diseñada adrede en el núcleo del generador. El equipo parcheó el componente de visualización en el acto, permitiendo que la maqueta tridimensional se renderizara limpia y estable frente al jurado.

### 3.3 Shaders GLSL Propios y Pipeline Gráfico
Los shaders de envejecimiento mnemotécnico no son librerías prefabricadas: son fragment shaders en GLSL que interpolan coeficientes de rugosidad, desaturación y mapas de normales fracturadas según el timestamp de último repaso del usuario, aportando un anclaje sensorial directo a la pedagogía.

---

## 4. Veredicto Final de Auditoría Calibrada

```
Criterio          │ Peso │ Nota      │ Ponderado │ Veredicto del Jurado de Hackathon
──────────────────┼──────┼───────────┼───────────┼─────────────────────────────────────────────────────────────────────────────
Originalidad      │ 20%  │  8.4 / 10 │   1.680   │ Fusión del Método de Loci con shaders WebGL y DAGs pedagógicos.
Ambición Técnica  │ 20%  │  8.0 / 10 │   1.600   │ Renderizado 3D en primera persona, R3F y audio interactivo en maratón de 36h.
Ejecución en Vivo │ 25%  │  8.0 / 10 │   2.000   │ Resiliencia bajo fuego: el fallback procedural salvó la demo en el escenario.
Impacto de Mercado│ 20%  │  8.0 / 10 │   1.600   │ Ganador del 34.5% de probabilidad en el market de predicción; favorito del público.
Arquitectura Code │ 15%  │  7.8 / 10 │   1.170   │ Monorepo R3F con control estricto de draw calls (<300) y testing de layout en Vitest.
──────────────────┼──────┼───────────┼───────────┼─────────────────────────────────────────────────────────────────────────────
TOTAL CANÓNICO    │ 100% │ 8.00 / 10 │ 8.050 / 10│ 🏆 TECHO TÉCNICO REAL DE LA HACKATHON Y GANADOR ABSOLUTO
```

---

## 5. Lecciones Arquitectónicas para Hackathons

1. **La resiliencia vence a las dependencias:** Asumir que toda API de terceros va a fallar en una demo y programar fallbacks locales procedurales es la diferencia entre quebrar el pitch o ganar la competencia.
2. **Medir lo que importa en gráficos:** En vez de acumular cientos de mocks de backend irrelevantes, auditar draw calls (`gl.info`) y layout determinista protege la experiencia del usuario donde realmente cuenta.
3. **El software se juzga en movimiento:** El mercado premió la audacia visual y la ejecución completa de una experiencia interactiva por encima de arquitecturas burocráticas estáticas.
