import { TeamEvaluation } from '../types';

export const TEAMS_DATA: TeamEvaluation[] = [
  {
    id: 27,
    name: "MAMÁ",
    track: "🚨 Emergencias",
    technicalScore: 9.49,
    originalityScore: 9.5,
    ambitionScore: 9.6,
    executionScore: 9.4,
    impactScore: 9.7,
    architectureScore: 9.3,
    verdictLabel: "PROYECTO GANADOR ABSOLUTO: PERFECCIÓN CONCEPTUAL Y AUDACIA TÉCNICA",
    summary: "Alarma silenciosa de secuestro disfrazada de llamada interactiva de 'Mamá' con detección de coacción por IA, APK Android nativo, Go backend y malla BLE BitChat.",
    stack: ["Kotlin", "Go", "BitChat Mesh", "WhatsApp API", "Render"],
    loc: 67542,
    testsCount: 157,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-27",
    keyStrengths: [
      "Detector de coacción híbrido en Go (reglas primero + LLM acotado a 6s sin falso positivo)",
      "Cifrado SealedBox.kt y fragmentación compatible con protocolo BitChat iOS",
      "+150 tests automatizados y +160 PRs mergeados disciplinadamente"
    ],
    criticalFlaws: [
      "Dependencia de permisos en segundo plano sensibles a optimizaciones agresivas de batería en Xiaomi HyperOS"
    ],
    penalties: {
      originality: "Disfrazar una alarma silenciosa detrás de una llamada maternal verosímil con IA.",
      ambition: "Integrar Android nativo, Go backend, BitChat mesh y WhatsApp API en 48 horas.",
      execution: "APK compilado para descarga inmediata, backend en Render y 157 tests.",
      impact: "Salvavidas real en un entorno con altos índices de extorsión y robos.",
      technical: "Arquitectura offline-first impecable; requiere afinar permisos en capas de Xiaomi."
    }
  },
  {
    id: 4,
    name: "Agent Zero",
    track: "🛡️ AI Security",
    technicalScore: 9.15,
    originalityScore: 9.0,
    ambitionScore: 9.3,
    executionScore: 9.0,
    impactScore: 9.1,
    architectureScore: 9.3,
    verdictLabel: "SUITE EXCEPCIONAL DE RED-TEAMING AUTÓNOMO; MÁXIMA ROBUSTEZ",
    summary: "Workbench integral de red-teaming distribuido para LLMs que genera mutaciones de ataque y sintetiza políticas de flujo de información para neutralizar jailbreaks.",
    stack: ["Python", "FastAPI", "TypeScript", "React", "Biome", "Docker"],
    loc: 54962,
    testsCount: 296,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-4",
    keyStrengths: [
      "296 archivos de test que cubren oráculos, replay de grafos y síntesis formal",
      "Síntesis automática de reglas (untrusted_origin, exceeds, not_session_owner)",
      "Frontend pulido con Biome y arquitectura por capas estricta"
    ],
    criticalFlaws: [
      "EventStore en memoria sin persistencia en disco que puede agotar RAM en ataques prolongados"
    ],
    penalties: {
      originality: "Workbench adversarial autónomo con mutación dinámica de vectores.",
      ambition: "Framework completo distribuido con validación formal de parches.",
      execution: "296 tests unitarios y de integración; leve consumo alto de memoria en trazas SSE.",
      impact: "Ahorra miles de dólares en auditorías de ciberseguridad para agentes empresariales.",
      technical: "Base de código ejemplar (+50k LOC) con Biome y tipado estricto."
    }
  },
  {
    id: 22,
    name: "VanGUARD",
    track: "🛡️ AI Security",
    technicalScore: 9.02,
    originalityScore: 8.9,
    ambitionScore: 9.3,
    executionScore: 8.6,
    impactScore: 9.0,
    architectureScore: 9.2,
    verdictLabel: "PESO PESADO DE INGENIERÍA: FIREWALL EN CLOUDFLARE EDGE",
    summary: "Firewall y observabilidad en tiempo real para agentes autónomos en Cloudflare Workers y D1 SQL, con modo Under-Attack automatizado y mitigación de inyección indirecta.",
    stack: ["TypeScript", "Cloudflare Workers", "D1 SQL", "Next.js", "Python (Voice Agent)"],
    loc: 97028,
    testsCount: 186,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-22",
    keyStrengths: [
      "186 tests automatizados y schemas SQL estrictos en Cloudflare D1",
      "Acción de contención inmediata under-attack.ts para aislar zonas vulneradas",
      "Presupuesto estricto de tokens de Claude en la capa de inferencia"
    ],
    criticalFlaws: [
      "Límite de tiempo de CPU de 50ms en Workers estándar exige recortar análisis semántico profundo"
    ],
    penalties: {
      originality: "Firewall e interceptor en el Edge para agentes de lenguaje.",
      ambition: "Casi 100k LOC, multi-zona y testing riguroso.",
      execution: "Despliegue operativo en officialvanguard.com; setup inicial denso.",
      impact: "Gobernanza indispensable para agentes conectados a bases de datos y herramientas.",
      technical: "Dominio avanzado de Workers y D1; latencia eventual por delegación a colas."
    }
  },
  {
    id: 24,
    name: "Constancia",
    track: "🤝 Trust",
    technicalScore: 8.49,
    originalityScore: 8.4,
    ambitionScore: 8.6,
    executionScore: 8.2,
    impactScore: 8.5,
    architectureScore: 8.7,
    verdictLabel: "SOBERBIA IMPLEMENTACIÓN DE ESTÁNDARES CRIPTOGRÁFICOS W3C VC",
    summary: "Consorcio descentralizado para emisión y revocación de credenciales verificables W3C 2.0 con consenso por quórum mayoritario y firmas Ed25519.",
    stack: ["TypeScript", "Node.js", "Prisma", "Vitest", "Zod", "W3C VC 2.0"],
    loc: 31196,
    testsCount: 32,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-24",
    keyStrengths: [
      "Adhesión estricta al estándar W3C Verifiable Credentials 2.0 y Data Integrity",
      "Quórum mayoritario de acreditación entre entidades miembro",
      "32 tests E2E con Vitest y esquemas Zod en todas las fronteras de datos"
    ],
    criticalFlaws: [
      "Consenso gestionado sobre base de datos relacional (Prisma) en vez de gossip protocol P2P"
    ],
    penalties: {
      originality: "Consorcio con tolerancia a fallas bizantinas simplificada.",
      ambition: "Ledger con quórum dinámico y especificaciones W3C.",
      execution: "Verificación instantánea; curva de aprendizaje técnica para emisores.",
      impact: "Combate la falsificación documental en certificados, diplomas y constancias.",
      technical: "Ingeniería de software de primer nivel con Prisma y Ed25519."
    }
  },
  {
    id: 15,
    name: "Meshy",
    track: "🤝 Trust",
    technicalScore: 8.43,
    originalityScore: 8.5,
    ambitionScore: 8.9,
    executionScore: 7.8,
    impactScore: 8.8,
    architectureScore: 8.2,
    verdictLabel: "RED MESH DESCENTRALIZADA MUY AMBICIOSA; RETO EN BLE BACKGROUND",
    summary: "Baliza SOS multi-salto sobre Bluetooth Low Energy que convierte teléfonos cercanos en una malla de retransmisión comunitaria sin internet.",
    stack: ["TypeScript", "React", "Web Bluetooth API", "Capacitor", "Node.js"],
    loc: 131281,
    testsCount: 188,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-15",
    keyStrengths: [
      "188 tests que simulan grafos de red mesh de 50 nodos y particiones",
      "Propagación epidémica con fragmentos de 13 bytes y control TTL",
      "Deduplicación por hash SHA-256 para evitar tormentas de broadcast"
    ],
    criticalFlaws: [
      "Restricciones del sistema operativo móvil (iOS/Android) que apagan el escaneo BLE continuo en background"
    ],
    penalties: {
      originality: "Baliza SOS de salto en salto sobre BLE sin dependencia de internet.",
      ambition: "Protocolo mesh tolerante a fragmentación en un hackathon.",
      execution: "La PWA emite beacons pero se suspende con la pantalla apagada por el SO.",
      impact: "Vital para terremotos, deslaves o apagones masivos.",
      technical: "Volumen masivo de código; requiere Foreground Service nativo."
    }
  },
  {
    id: 26,
    name: "Tridi",
    track: "🧊 Three-Dimensional",
    technicalScore: 8.42,
    originalityScore: 9.4,
    ambitionScore: 9.5,
    executionScore: 7.2,
    impactScore: 9.1,
    architectureScore: 7.5,
    verdictLabel: "PIONEROS EN ROBÓTICA HUMANOIDE; PENALIZADO POR CERO TESTS",
    summary: "Extracción cinemática 3D de personas a partir de video común de celular para simular y entrenar robots humanoides en física real (MuJoCo WASM).",
    stack: ["Python", "JavaScript", "Three.js", "MediaPipe Heavy", "YOLOv11", "MuJoCo WASM"],
    loc: 23266,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-26",
    keyStrengths: [
      "Pipeline de visión dual de alto rendimiento (YOLOv11s-pose en 20ms + MediaPipe Heavy)",
      "Simulador de física MuJoCo corriendo en WebAssembly dentro del navegador",
      "Problema de frontera tecnológica y mercado multimillonario"
    ],
    criticalFlaws: [
      "CERO tests automatizados en todo el repositorio",
      "Factores de escala empíricos en cinemática inversa que causan inestabilidad articular"
    ],
    penalties: {
      originality: "Conversión de video móvil en datasets de física para robots humanoides.",
      ambition: "Abordar el cuello de botella mundial de datos de entrenamiento en robótica.",
      execution: "Demo en Vercel llamativa, pero castigada severamente por tener 0 tests.",
      impact: "Democratiza la captura de movimiento sin trajes MoCap de $50k.",
      technical: "Algoritmos avanzados pero frágiles por falta de regresión y cobertura."
    }
  },
  {
    id: 25,
    name: "Presente",
    track: "🚨 Emergencias",
    technicalScore: 8.21,
    originalityScore: 8.3,
    ambitionScore: 8.0,
    executionScore: 8.4,
    impactScore: 8.7,
    architectureScore: 7.8,
    verdictLabel: "EJECUCIÓN IMPECABLE EN CAMPO CON CLASIFICACIÓN DE AUDIO ONNX",
    summary: "Ficha médica de triaje rápido activada por QR y app Android nativa con clasificador de audio neuronal ONNX local para detectar gritos, rotura de vidrios o alarmas.",
    stack: ["Kotlin", "Android Nativo", "ONNX Audio", "TypeScript", "Next.js", "Google Play"],
    loc: 12038,
    testsCount: 8,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-25",
    keyStrengths: [
      "Servicio Guardia.kt en Android nativo que procesa audio localmente sin subirlo a la nube",
      "Publicación real en canal de prueba de Google Play",
      "Disparo automático de sirena local y webhook a Telegram"
    ],
    criticalFlaws: [
      "Tasa moderada de falsos positivos en audio doméstico y falta de cifrado en el QR médico"
    ],
    penalties: {
      originality: "Ficha de triaje y escucha preventiva con modelos neuronales en el borde.",
      ambition: "Asegurar datos médicos vitales en 5 segundos y vigilancia acústica.",
      execution: "App funcional en Google Play y múltiples escenarios testeados.",
      impact: "Minutos de oro salvados en rescates de emergencia.",
      technical: "Balance móvil y web sólido; requiere firma digital en el QR médico."
    }
  },
  {
    id: 10,
    name: "Prais",
    track: "🤝 Trust",
    technicalScore: 8.11,
    originalityScore: 8.0,
    ambitionScore: 8.4,
    executionScore: 7.9,
    impactScore: 8.5,
    architectureScore: 7.8,
    verdictLabel: "TRANSPARENCIA PÚBLICA CON SCRAPING DE LICITACIONES Y LLMS",
    summary: "Auditoría ciudadana que extrae licitaciones oficiales con Firecrawl y las compara con precios de mercado abiertos mediante modelos de OpenAI.",
    stack: ["TypeScript", "Python", "Next.js", "Firecrawl", "OpenAI", "Supabase"],
    loc: 25657,
    testsCount: 23,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-10",
    keyStrengths: [
      "Pipeline de ingesta documental conectado a usaprais.com",
      "Comparativa automática de partidas presupuestarias contra catálogo de precios",
      "23 tests de endpoints y parsing"
    ],
    criticalFlaws: [
      "Agotamiento de cuotas y bloqueos 429 en la API de Firecrawl"
    ],
    penalties: {
      originality: "Fiscalización algorítmica de compras públicas.",
      ambition: "Ingesta masiva de compras estatales y reconciliación semántica.",
      execution: "Desplegado en usaprais.com; errores 429 por límite de cuota en scraping.",
      impact: "Gran valor cívico contra el sobreprecio en contrataciones.",
      technical: "Híbrido Python/TS bien planteado; OCR sensible a PDFs torcidos."
    }
  },
  {
    id: 20,
    name: "SmartTraffic",
    track: "🤝 Trust",
    technicalScore: 8.05,
    originalityScore: 8.1,
    ambitionScore: 8.3,
    executionScore: 7.6,
    impactScore: 8.4,
    architectureScore: 7.9,
    verdictLabel: "FOTOMULTAS INTELIGENTES CON YOLO; SENSIBLE A VIBRACIÓN",
    summary: "Convierte teléfonos fijos en semáforos en cámaras de fiscalización vial, detectando cruces de luz roja con cálculo vectorial de intersección y clip de video probatorio.",
    stack: ["TypeScript", "Python", "YOLO", "OpenCV", "PostgreSQL", "Prisma"],
    loc: 32898,
    testsCount: 85,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-20",
    keyStrengths: [
      "85 tests unitarios en Vitest con fixtures vectoriales y reglas de negocio",
      "Tracking de cajas delimitadoras con OpenCV y generación de evidencia en video",
      "Integración de pasarela de pago para infractores"
    ],
    criticalFlaws: [
      "Coordenadas de parada fijas que se desalinean si el viento hace vibrar el poste de la cámara"
    ],
    penalties: {
      originality: "Transformar smartphones en fiscalizadores viales de bajo costo.",
      ambition: "Detección, LPR en el borde y pasarela de cobro unificada.",
      execution: "Procesa bien los clips; efectividad baja bajo lluvia nocturna.",
      impact: "Orden vial urgente y recaudación municipal transparente.",
      technical: "Matemática vectorial sólida; requiere auto-calibración de línea de parada."
    }
  },
  {
    id: 5,
    name: "mus3o",
    track: "🧊 Three-Dimensional",
    technicalScore: 7.65,
    originalityScore: 7.5,
    ambitionScore: 8.0,
    executionScore: 7.8,
    impactScore: 6.8,
    architectureScore: 8.0,
    verdictLabel: "PALACIO DE MEMORIA CON SHADERS; PECADO DE FEATURE-STUFFING",
    summary: "Entorno 3D navegable que transforma apuntes en habitaciones espaciales y aplica shaders de degradación cromática para simular el olvido mnemotécnico.",
    stack: ["TypeScript", "Next.js", "Three.js", "React Three Fiber", "TailwindCSS"],
    loc: 43990,
    testsCount: 106,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-5",
    keyStrengths: [
      "Shaders GLSL elegantes que disuelven objetos según el paso del tiempo sin repasar",
      "106 tests unitarios en el paquete dungeon-core",
      "Navegación espacial fluida con React Three Fiber"
    ],
    criticalFlaws: [
      "Feature-stuffing: inclusión de mazmorras medievales y A* ajenos al estudio mnemotécnico",
      "API externa de Poly Pizza rota en producción (403)"
    ],
    penalties: {
      originality: "Degradación en shader genial; pero mecánica básica de galería 3D.",
      ambition: "Cayeron en feature-stuffing con A* y dungeon-core innecesarios.",
      execution: "1.000 tests sí, pero Poly Pizza roto en prod (403) y fotos volátiles.",
      impact: "Caminar a 1.7 m/s en 3D es más lento que Anki para memorizar.",
      technical: "Shaders de alto nivel; DSL con regex frágiles y sin tests E2E de WebGL."
    }
  },
  {
    id: 14,
    name: "ZeroID",
    track: "🤝 Trust",
    technicalScore: 7.58,
    originalityScore: 7.6,
    ambitionScore: 7.8,
    executionScore: 7.5,
    impactScore: 7.4,
    architectureScore: 7.6,
    verdictLabel: "IDENTIDAD SOBERANA PRÁCTICA EN PASAJES DE AUTOBÚS",
    summary: "Billetera digital para divulgación selectiva de identidad aplicada a la compra y abordaje de pasajes interurbanos en 'Expreso Caribe'.",
    stack: ["TypeScript", "Next.js", "TailwindCSS", "Ed25519", "Vercel"],
    loc: 14261,
    testsCount: 15,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-14",
    keyStrengths: [
      "Caso de uso concreto de abordaje de pasajeros sin compartir cédula completa",
      "Flujo de checkout integrado y 15 tests criptográficos",
      "UI limpia en Next.js App Router"
    ],
    criticalFlaws: [
      "Fragmentaron la demo de Expreso Caribe a otro repositorio, rompiendo la trazabilidad del código"
    ],
    penalties: {
      originality: "Identidad selectiva aplicada al transporte de pasajeros.",
      ambition: "Solucionar la verificación obligatoria sin ceder datos personales.",
      execution: "Checkout funcional en Vercel; validación criptográfica en cliente.",
      impact: "Útil ante alcabalas de control de identidad en rutas nacionales.",
      technical: "Estructura limpia pero dividieron el repo para la demo."
    }
  },
  {
    id: 13,
    name: "Manito",
    track: "🚨 Emergencias",
    technicalScore: 7.52,
    originalityScore: 7.8,
    ambitionScore: 7.6,
    executionScore: 7.2,
    impactScore: 8.2,
    architectureScore: 7.0,
    verdictLabel: "CENSO POR VOZ EMPÁTICO; DEPENDE DE CONEXIÓN A INTERNET",
    summary: "Asistente de voz que entrevista a damnificados post-desastre para relevar sus oficios y conectarlos inmediatamente con trabajos de reconstrucción en Impaktemos.",
    stack: ["TypeScript", "React", "Node.js", "Web Speech API", "Express"],
    loc: 5698,
    testsCount: 10,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-13",
    keyStrengths: [
      "Enfoque de dignidad económica y reactivación laboral post-crisis",
      "Interacción fluida por voz natural",
      "10 tests de serialización en el backend"
    ],
    criticalFlaws: [
      "Requiere conexión continua a Internet que suele estar caída en catástrofes"
    ],
    penalties: {
      originality: "Censo por voz conversacional con colocación laboral inmediata.",
      ambition: "Reactivación comunitaria desde el empleo y no solo la beneficencia.",
      execution: "Demo fluida pero no tolera modo avión o cortes de señal celular.",
      impact: "Impacto humano conmovedor y reconstructor.",
      technical: "Ligero pero sin almacenamiento local offline-first (IndexedDB)."
    }
  },
  {
    id: 2,
    name: "Arvi",
    track: "🤝 Trust",
    technicalScore: 7.28,
    originalityScore: 8.2,
    ambitionScore: 7.5,
    executionScore: 7.2,
    impactScore: 6.8,
    architectureScore: 7.0,
    verdictLabel: "GUÍA TURÍSTICO 3D CON IA; RETOS DE LATENCIA DE VOZ",
    summary: "Guía turístico interactivo que sitúa próceres en 3D en monumentos caraqueños y conversa por voz en streaming, activando escenas de batalla y visión con la cámara.",
    stack: ["Python", "FastAPI", "React Native", "Three.js", "Whisper", "TTS"],
    loc: 12256,
    testsCount: 8,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-2",
    keyStrengths: [
      "Orquestación streaming que sintetiza audio frase por frase en paralelo al LLM",
      "Disparo de escenas [ESCENA:batalla] y preguntas visuales LookEvent",
      "Modelos 3D de personajes históricos"
    ],
    criticalFlaws: [
      "Assets 3D muy pesados para redes 4G lentas y latencia inicial de respuesta >3.5s"
    ],
    penalties: {
      originality: "Avatares históricos 3D conversacionales en sitios patrimoniales.",
      ambition: "Integrar visión, geolocalización, avatares y TTS en móvil.",
      execution: "Modelos 3D pesados y latencias altas en el primer audio.",
      impact: "Culturalmente valioso; sacar el teléfono en la calle en Caracas impone riesgo.",
      technical: "FastAPI y React bien compuestos; audio no usa WebSockets bidireccionales."
    }
  },
  {
    id: 16,
    name: "Vía AR",
    track: "🧊 Three-Dimensional",
    technicalScore: 7.25,
    originalityScore: 8.0,
    ambitionScore: 8.2,
    executionScore: 6.2,
    impactScore: 7.0,
    architectureScore: 7.1,
    verdictLabel: "NAVEGACIÓN URBANA AR; GRAN SPEC PERO PROTOTIPO INCOMPLETO",
    summary: "Navegación peatonal aumentada con mallas 3D de relieve urbano real para evitar que las indicaciones atraviesen edificios o desniveles.",
    stack: ["TypeScript", "Vite", "Three.js", "WebGL", "Supabase", "Python"],
    loc: 11318,
    testsCount: 3,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-16",
    keyStrengths: [
      "Documentación y especificación matemática de vanguardia (SPEC-3D-STREETS.md)",
      "Coordenadas ENU locales y carga de chunks de 50 metros",
      "Occluder shader para ocultar la ruta detrás de fachadas reales"
    ],
    criticalFlaws: [
      "Solo 3 tests y el pipeline de fotogrametría no alcanzó automatización"
    ],
    penalties: {
      originality: "Reconstrucción 3D para oclusión y rasante real en calles.",
      ambition: "Especificación técnica sumamente profesional y detallada.",
      execution: "La implementación práctica quedó rezagada respecto al diseño teórico.",
      impact: "Útil en ciudades con pendientes pronunciadas; requiere captura masiva.",
      technical: "Three.js bien configurado; falta fusionar IMU para estabilizar la cámara."
    }
  },
  {
    id: 1,
    name: "sIsA",
    track: "🤝 Trust",
    technicalScore: 7.19,
    originalityScore: 7.2,
    ambitionScore: 7.8,
    executionScore: 6.5,
    impactScore: 7.0,
    architectureScore: 7.4,
    verdictLabel: "IDENTIDAD CIEGA CON HARDWARE ESP32; ALTA FRICCIÓN DE ADOPCIÓN",
    summary: "Protocolo de autenticación anónima con atributos firmados en ECDSA P-256 e integración con microcontroladores ESP32 para lectura de tarjetas.",
    stack: ["Go", "pgx/v5", "SvelteKit", "TypeScript", "ESP32 C++", "PostgreSQL"],
    loc: 16978,
    testsCount: 28,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-1",
    keyStrengths: [
      "Backend en Go concurrente con pool de conexiones pgx/v5 impecable",
      "Firmas crudas IEEE P1363 (r || s) sobre curvas elípticas",
      "28 tests con fuzzing y serialización de bytes"
    ],
    criticalFlaws: [
      "Exige hardware físico ESP32 conectado por serial, imposibilitando adopción masiva sin lector"
    ],
    penalties: {
      originality: "Identidades ciegas saladas sobre microcontrolador ESP32.",
      ambition: "Abarcar hardware, backend Go, frontend Svelte y PWA dispersó el foco.",
      execution: "Requiere hardware físico; demo web depende de mocks locales.",
      impact: "Pedir un lector ESP32 a cada comercio es inviable logísticamente.",
      technical: "Go muy limpio; llaves privadas de prueba en repo y esquema no estándar."
    }
  },
  {
    id: 28,
    name: "Rastro",
    track: "🤝 Trust",
    technicalScore: 6.85,
    originalityScore: 7.3,
    ambitionScore: 7.5,
    executionScore: 6.5,
    impactScore: 7.5,
    architectureScore: 6.0,
    verdictLabel: "ESCROW EN BASE SEPOLIA; PENALIZADO POR CERO TESTS EN SOLIDITY",
    summary: "Donaciones en custodia on-chain liberadas a fundaciones por tramos una vez que cargan facturas respaldatorias aprobadas.",
    stack: ["Solidity", "Base Sepolia", "Viem", "TypeScript", "React", "Supabase"],
    loc: 1850,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-28",
    keyStrengths: [
      "Contrato de custodia en Base Sepolia operativo",
      "Frontend moderno con Viem y Tailwind",
      "Intención clara de transparencia en donaciones"
    ],
    criticalFlaws: [
      "CERO tests automatizados en los contratos inteligentes de Solidity",
      "Aprobación de facturas manual por admin en Supabase (punto único de centralización)"
    ],
    penalties: {
      originality: "Fondos en custodia con liberación por hitos de facturación.",
      ambition: "Exigir rendición de cuentas on-chain antes de desembolsar.",
      execution: "Despliegue funcional; aprobación manual rompe la promesa descentralizada.",
      impact: "Recupera la confianza en causas benéficas.",
      technical: "1.8k LOC mínimas; sin tests en Foundry/Hardhat ni oráculos descentralizados."
    }
  },
  {
    id: 8,
    name: "Arkangel",
    track: "🛡️ AI Security",
    technicalScore: 6.36,
    originalityScore: 6.8,
    ambitionScore: 6.5,
    executionScore: 6.0,
    impactScore: 6.2,
    architectureScore: 6.4,
    verdictLabel: "CENTINELA EN ELECTRON; FRÁGIL POR ACOPLAMIENTO A CDP",
    summary: "Aplicación de escritorio Electron que inspecciona peticiones de navegador vía Chrome DevTools Protocol para interceptar prompt injections dirigidos a LLMs.",
    stack: ["JavaScript", "Electron", "Python", "Anthropic API"],
    loc: 7445,
    testsCount: 13,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-8",
    keyStrengths: [
      "Uso de Chrome DevTools Protocol para monitoreo de campos de texto",
      "13 tests de evaluación de prompt",
      "Panel de alertas en Electron"
    ],
    criticalFlaws: [
      "Extrema fragilidad: si el navegador no se lanza con flags de depuración remota, el sistema no funciona"
    ],
    penalties: {
      originality: "Proxy de escritorio para interceptar prompts maliciosos.",
      ambition: "Quisieron montar un firewall para LLMs en un sprint corto.",
      execution: "Timeouts y reglas estáticas de palabras clave eludibles fácilmente.",
      impact: "Un filtro por regex es fácilmente sorteable con base64 o leetspeak.",
      technical: "Python monolítico y dependencia invasiva del puerto de depuración de Chrome."
    }
  },
  {
    id: 21,
    name: "Veridian",
    track: "🛡️ AI Security",
    technicalScore: 4.10,
    originalityScore: 7.9,
    ambitionScore: 8.0,
    executionScore: 1.5,
    impactScore: 6.5,
    architectureScore: 1.5,
    verdictLabel: "SEVERAMENTE PENALIZADO: CERO CÓDIGO FUENTE EN EL REPOSITORIO",
    summary: "Middleware para FastAPI contra credential stuffing. Documentación y demos en Render de gran nivel, pero NINGUNA línea de código en el repo oficial.",
    stack: ["Python", "FastAPI", "Render (Código retenido fuera de la org)"],
    loc: 0,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-21",
    keyStrengths: [
      "Problema comercial de inmenso valor (costo de brechas de seguridad)",
      "Excelente pitch y documentación descriptiva"
    ],
    criticalFlaws: [
      "VIOLACIÓN DE BASES: Cero código subido al repositorio de la organización; inauditable"
    ],
    penalties: {
      originality: "Middleware contra robo de credenciales con IA.",
      ambition: "Protección en caliente sin fricción para el usuario legítimo.",
      execution: "CERO líneas de código en el repositorio; descalificación técnica parcial.",
      impact: "El mercado lo necesita, pero la opacidad destruye la confianza.",
      technical: "Imposible auditar código inexistente en la plataforma oficial."
    }
  },
  {
    id: 3,
    name: "Team 3 (Sin Entrega)",
    track: "🚨 Emergencias",
    technicalScore: 1.00,
    originalityScore: 1.0,
    ambitionScore: 1.0,
    executionScore: 1.0,
    impactScore: 1.0,
    architectureScore: 1.0,
    verdictLabel: "DESCALIFICADO POR ABANDONO",
    summary: "Repositorio sin commits de desarrollo.",
    stack: ["Ninguno"],
    loc: 0,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-3",
    keyStrengths: [],
    criticalFlaws: ["Sin entrega"],
    penalties: { originality: "Sin entrega.", ambition: "Sin entrega.", execution: "Sin entrega.", impact: "Sin entrega.", technical: "Sin entrega." }
  },
  {
    id: 6,
    name: "Team 6 (Sin Entrega)",
    track: "🛡️ AI Security",
    technicalScore: 1.00,
    originalityScore: 1.0,
    ambitionScore: 1.0,
    executionScore: 1.0,
    impactScore: 1.0,
    architectureScore: 1.0,
    verdictLabel: "DESCALIFICADO POR ABANDONO",
    summary: "Repositorio sin commits de desarrollo.",
    stack: ["Ninguno"],
    loc: 0,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-6",
    keyStrengths: [],
    criticalFlaws: ["Sin entrega"],
    penalties: { originality: "Sin entrega.", ambition: "Sin entrega.", execution: "Sin entrega.", impact: "Sin entrega.", technical: "Sin entrega." }
  },
  {
    id: 9,
    name: "Team 9 (Sin Entrega)",
    track: "🚨 Emergencias",
    technicalScore: 1.00,
    originalityScore: 1.0,
    ambitionScore: 1.0,
    executionScore: 1.0,
    impactScore: 1.0,
    architectureScore: 1.0,
    verdictLabel: "DESCALIFICADO POR ABANDONO",
    summary: "Repositorio sin commits de desarrollo.",
    stack: ["Ninguno"],
    loc: 0,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-9",
    keyStrengths: [],
    criticalFlaws: ["Sin entrega"],
    penalties: { originality: "Sin entrega.", ambition: "Sin entrega.", execution: "Sin entrega.", impact: "Sin entrega.", technical: "Sin entrega." }
  },
  {
    id: 12,
    name: "Team 12 (Sin Entrega)",
    track: "🛡️ AI Security",
    technicalScore: 1.00,
    originalityScore: 1.0,
    ambitionScore: 1.0,
    executionScore: 1.0,
    impactScore: 1.0,
    architectureScore: 1.0,
    verdictLabel: "DESCALIFICADO POR ABANDONO",
    summary: "Repositorio sin commits de desarrollo.",
    stack: ["Ninguno"],
    loc: 0,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-12",
    keyStrengths: [],
    criticalFlaws: ["Sin entrega"],
    penalties: { originality: "Sin entrega.", ambition: "Sin entrega.", execution: "Sin entrega.", impact: "Sin entrega.", technical: "Sin entrega." }
  },
  {
    id: 18,
    name: "Team 18 (Sin Entrega)",
    track: "Desconocido",
    technicalScore: 1.00,
    originalityScore: 1.0,
    ambitionScore: 1.0,
    executionScore: 1.0,
    impactScore: 1.0,
    architectureScore: 1.0,
    verdictLabel: "DESCALIFICADO POR ABANDONO",
    summary: "Repositorio sin commits de desarrollo.",
    stack: ["Ninguno"],
    loc: 0,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-18",
    keyStrengths: [],
    criticalFlaws: ["Sin entrega"],
    penalties: { originality: "Sin entrega.", ambition: "Sin entrega.", execution: "Sin entrega.", impact: "Sin entrega.", technical: "Sin entrega." }
  },
  {
    id: 23,
    name: "Team 23 (Sin Entrega)",
    track: "🛡️ AI Security",
    technicalScore: 1.00,
    originalityScore: 1.0,
    ambitionScore: 1.0,
    executionScore: 1.0,
    impactScore: 1.0,
    architectureScore: 1.0,
    verdictLabel: "DESCALIFICADO POR ABANDONO",
    summary: "Repositorio sin commits de desarrollo.",
    stack: ["Ninguno"],
    loc: 0,
    testsCount: 0,
    repoUrl: "https://github.com/platanus-hack/platanus-hack-26-ve-team-23",
    keyStrengths: [],
    criticalFlaws: ["Sin entrega"],
    penalties: { originality: "Sin entrega.", ambition: "Sin entrega.", execution: "Sin entrega.", impact: "Sin entrega.", technical: "Sin entrega." }
  }
];
