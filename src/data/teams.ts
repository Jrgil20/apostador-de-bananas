import { TeamEvaluation } from "../types";

export const TEAMS_DATA: TeamEvaluation[] = [
  {
    "id": 5,
    "name": "mus3o",
    "track": "\ud83e\uddca Three-Dimensional",
    "technicalScore": 8.0,
    "originalityScore": 9.8,
    "ambitionScore": 9.6,
    "executionScore": 9.5,
    "impactScore": 9.4,
    "architectureScore": 9.8,
    "finalMarketProb": 34.5,
    "isWinner": true,
    "verdictLabel": "\ud83c\udfc6 GANADOR INDISCUTIDO: ARQUITECTURA 3D EN 4 CAPAS Y RESILIENCIA EN VIVO",
    "summary": "Palacios de la memoria 3D navegables en primera persona que transforman apuntes en salas tem\u00e1ticas interactivas con shaders GLSL de desgaste crom\u00e1tico (curva del olvido) y asistente Aris.",
    "stack": [
      "TypeScript",
      "Next.js",
      "Three.js",
      "React Three Fiber",
      "Vitest",
      "GLSL Shaders",
      "TailwindCSS"
    ],
    "loc": 43990,
    "implementationQuality": "Monorepo R3F optimizado (<300 draw calls), testing de layout espacial en Vitest sin GPU y fallback procedural tolerante a fallos",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-5",
    "keyStrengths": [
      "Validaci\u00f3n rigurosa en 4 capas: l\u00f3gica espacial (Vitest), rendimiento (<300 draw calls), capturas visuales y recorrido humano",
      "Shaders GLSL custom para disoluci\u00f3n y envejecimiento de objetos seg\u00fan la curva de Ebbinghaus",
      "Mecanismo de resiliencia con fallback procedural que rescat\u00f3 la demo en vivo ante ca\u00eddas de APIs externas",
      "Monorepo con paquete dungeon-core y generaci\u00f3n procedural de salas con grafos DAG de prerrequisitos"
    ],
    "criticalFlaws": [
      "Requiere GPU dedicada para renderizado a 60 FPS estables con m\u00faltiples salas simult\u00e1neas",
      "Fricci\u00f3n inicial al cargar modelos GLTF de alta poligonalidad sin compresi\u00f3n Draco"
    ],
    "penalties": {
      "originality": "Excelente fusi\u00f3n del m\u00e9todo mnemot\u00e9cnico de Loci cl\u00e1sico con WebGL moderno.",
      "ambition": "Ambic\u00edon m\u00e1xima al modelar un palacio interactivo con audio y f\u00edsica en 36h.",
      "execution": "Demo impecable con fallback procedural en vivo tras resolver fallo externo en el escenario.",
      "impact": "Alto valor educativo; convierte lectura pasiva en exploraci\u00f3n espacial interactiva.",
      "technical": "Arquitectura limpia con separaci\u00f3n estricta de canvas, shaders y l\u00f3gica de navegaci\u00f3n."
    }
  },
  {
    "id": 2,
    "name": "Arvi",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 5.8,
    "originalityScore": 9.0,
    "ambitionScore": 9.2,
    "executionScore": 8.8,
    "impactScore": 8.9,
    "architectureScore": 8.8,
    "finalMarketProb": 19.7,
    "verdictLabel": "SUBCAMPE\u00d3N DE MERCADO: GU\u00cdA TUR\u00cdSTICO CON VISI\u00d3N E IA CONVERSACIONAL",
    "summary": "Gu\u00eda tur\u00edstico interactivo en el bolsillo: el usuario apunta su c\u00e1mara a un monumento o lugar hist\u00f3rico y personajes 3D interactivos conversan con \u00e9l en tiempo real.",
    "stack": [
      "Python (FastAPI)",
      "React Native / Expo",
      "Three.js",
      "WebGL",
      "OpenAI Whisper & TTS",
      "Docker"
    ],
    "loc": 18200,
    "implementationQuality": "Pipeline de streaming de visi\u00f3n y s\u00edntesis de voz sincronizada con avatares 3D interactivos",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-2",
    "keyStrengths": [
      "Integraci\u00f3n de c\u00e1mara en tiempo real con agentes de contexto geolocalizado",
      "S\u00edntesis de audio con baja latencia y animaci\u00f3n facial b\u00e1sica",
      "Pitch de alto impacto visual y empat\u00eda inmediata con el jurado y p\u00fablico"
    ],
    "criticalFlaws": [
      "Dependencia de conectividad 4G estable y latencia perceptible en llamadas concurrentes al LLM",
      "Consumo intensivo de bater\u00eda en dispositivos m\u00f3viles de gama media"
    ],
    "penalties": {
      "originality": "Muy buena vuelta de tuerca a audiogu\u00edas tradicionales con personajes interactivos.",
      "ambition": "Elevada complejidad al combinar Computer Vision, LLM y 3D m\u00f3vil.",
      "execution": "Demo fluida pero con momentos de buffer de audio.",
      "impact": "Potencial tur\u00edstico y cultural inmediato en Latinoam\u00e9rica.",
      "technical": "Backend monol\u00edtico funcional en FastAPI con contenedor Docker bien configurado."
    }
  },
  {
    "id": 22,
    "name": "VanGUARD",
    "track": "\ud83d\udee1\ufe0f AI Security",
    "technicalScore": 6.2,
    "originalityScore": 8.8,
    "ambitionScore": 9.3,
    "executionScore": 9.2,
    "impactScore": 9.0,
    "architectureScore": 9.4,
    "finalMarketProb": 15.5,
    "verdictLabel": "PESO PESADO DE INGENIER\u00cdA EN CLOUDFLARE EDGE Y RUNTIME AGENT DEFENSE",
    "summary": "Plataforma de seguridad y firewall runtime para proteger startups contra vulnerabilidades de agentes de IA, fugas de variables de entorno y tablas Supabase sin RLS.",
    "stack": [
      "TypeScript",
      "Cloudflare Workers",
      "Cloudflare D1 SQL",
      "Next.js",
      "TailwindCSS",
      "Python"
    ],
    "loc": 22400,
    "implementationQuality": "Arquitectura distribuida en Cloudflare Edge con Workers serverless y base de datos SQL D1",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-22",
    "keyStrengths": [
      "Despliegue serverless global con latencias submilisegundo en edge",
      "Threat modeling formal documentado y mitigaci\u00f3n activa de prompt injections",
      "Auditor\u00eda automatizada de configuraciones cloud err\u00f3neas en repositorios"
    ],
    "criticalFlaws": [
      "El panel web en Next.js es algo sobrio y t\u00e9cnico para usuarios no ingenieros",
      "Integraciones de alerta limitadas principalmente a Webhooks y Discord"
    ],
    "penalties": {
      "originality": "Soluciona el problema de moda (inseguridad de agentes creados con IA) con criterio devsecops.",
      "ambition": "Muy alta ambici\u00f3n al proteger agentes en ejecuci\u00f3n y no solo c\u00f3digo est\u00e1tico.",
      "execution": "Robusto, desplegado y probado contra escenarios reales de ataque.",
      "impact": "Imprescindible para el ecosistema startup que ship\u00e9a r\u00e1pido sin auditar.",
      "technical": "De las mejores arquitecturas Cloudflare Workers de la competencia."
    }
  },
  {
    "id": 15,
    "name": "Meshy",
    "track": "\ud83d\udea8 Emergencias",
    "technicalScore": 5.5,
    "originalityScore": 9.3,
    "ambitionScore": 9.4,
    "executionScore": 8.5,
    "impactScore": 9.2,
    "architectureScore": 8.6,
    "finalMarketProb": 10.6,
    "verdictLabel": "TOP 4: RED MESH BLUETOOTH OFF-GRID PARA SITUACIONES DE CAT\u00c1STROFE",
    "summary": "Sistema SOS de retransmisi\u00f3n celular sin conexi\u00f3n a internet ni telefon\u00eda: los paquetes de auxilio saltan de dispositivo en dispositivo v\u00eda Bluetooth Low Energy hasta tocar un nodo con red.",
    "stack": [
      "TypeScript",
      "React",
      "Web Bluetooth API",
      "Capacitor",
      "Node.js",
      "Express"
    ],
    "loc": 16900,
    "implementationQuality": "Protocolo de enrutamiento oportunista BLE implementado en web y empaquetado h\u00edbrido con Capacitor",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-15",
    "keyStrengths": [
      "Resuelve un dolor cr\u00edtico real en pa\u00edses con apagones y fallas severas de telecomunicaciones",
      "Manejo de estados de retransmisi\u00f3n store-and-forward en memoria local",
      "Demo pr\u00e1ctica en vivo con m\u00faltiples dispositivos enlazados sin internet"
    ],
    "criticalFlaws": [
      "Restricciones de iOS/Android para mantener sockets BLE activos indefinidamente en background",
      "Rendimiento decreciente si la densidad de nodos es muy baja en zonas rurales"
    ],
    "penalties": {
      "originality": "Uso brillante de Bluetooth peer-to-peer aplicado a defensa civil.",
      "ambition": "Enorme m\u00e9rito al lidiar con hardware real y protocolos de radio en 36h.",
      "execution": "La demo funcion\u00f3; persistieron peque\u00f1os retardos de propagaci\u00f3n entre saltos.",
      "impact": "Impacto social inmenso y tracci\u00f3n natural en cualquier comunidad.",
      "technical": "C\u00f3digo limpio y modularizado en monorepo de apps y backend puente."
    }
  },
  {
    "id": 12,
    "name": "Qubbot",
    "track": "\ud83d\udee1\ufe0f AI Security",
    "technicalScore": 5.2,
    "originalityScore": 9.1,
    "ambitionScore": 9.0,
    "executionScore": 8.6,
    "impactScore": 8.8,
    "architectureScore": 8.5,
    "finalMarketProb": 9.6,
    "verdictLabel": "TOP 5: ENTORNO DE DESARROLLO VISUAL 3D CON AGENTES AUT\u00d3NOMOS",
    "summary": "IDE revolucionario para no-programadores: representa repositorios como ciudades 3D donde cada m\u00f3dulo es un edificio y agentes aut\u00f3nomos coordinan cambios de c\u00f3digo explicados visualmente.",
    "stack": [
      "TypeScript",
      "Electron",
      "React",
      "Three.js",
      "Node.js",
      "Vercel"
    ],
    "loc": 19500,
    "implementationQuality": "Aplicaci\u00f3n de escritorio Electron con renderer 3D acoplado a un motor de agentes conversacionales",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-12",
    "keyStrengths": [
      "Met\u00e1fora de ciudad 3D de software muy atractiva visualmente para comunicar arquitectura",
      "Integraci\u00f3n fluida de Electron con agentes locales que ejecutan scripts de refactor",
      "Reconocimiento de mercado leg\u00edtimo (9.6% de probabilidad final en la hackathon)"
    ],
    "criticalFlaws": [
      "Empaquetado pesado de Electron con consumo significativo de RAM",
      "Dificultad de escalar la met\u00e1fora de la ciudad 3D a monorepos con miles de archivos"
    ],
    "penalties": {
      "originality": "Excelente interfaz visual para democratizar la revisi\u00f3n de c\u00f3digo.",
      "ambition": "Construir un IDE con Electron y Three.js en una hackathon es un reto masivo.",
      "execution": "Demo s\u00f3lida en el escenario; fue injustamente ignorado por an\u00e1lisis previos.",
      "impact": "Gran potencial de aceleraci\u00f3n para product managers y junior devs.",
      "technical": "Estructura desacoplada entre proceso main de Electron y renderer React."
    }
  },
  {
    "id": 27,
    "name": "Al\u00f3 Mam\u00e1",
    "track": "\ud83d\udea8 Emergencias",
    "technicalScore": 4.2,
    "originalityScore": 7.8,
    "ambitionScore": 8.2,
    "executionScore": 8.4,
    "impactScore": 8.0,
    "architectureScore": 8.4,
    "finalMarketProb": 1.6,
    "verdictLabel": "APP NATIVA ANDROID ROBUSTA PERO RECHAZADA POR EL MERCADO POR BAJO IMPACTO DIFERENCIAL",
    "summary": "Aplicaci\u00f3n Android en Kotlin con backend en Go para activar alertas discretas de socorro mediante combinaciones de botones f\u00edsicos y desv\u00edo a mensajer\u00eda de emergencia.",
    "stack": [
      "Kotlin (Android Nativo)",
      "Go",
      "BitChat BLE",
      "WhatsApp API",
      "Render"
    ],
    "loc": 28400,
    "implementationQuality": "C\u00f3digo m\u00f3vil nativo en Kotlin y backend concurrente en Go; inflado con tests de IA pero con poca tracci\u00f3n comercial",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-27",
    "keyStrengths": [
      "Implementaci\u00f3n Android nativa con acceso directo a sensores de hardware",
      "Backend concurrente en Go con tiempos de respuesta muy r\u00e1pidos",
      "Encriptaci\u00f3n asim\u00e9trica en el almacenamiento de contactos protegidos"
    ],
    "criticalFlaws": [
      "El mercado lo castig\u00f3 con apenas 1.6% de probabilidad: percepci\u00f3n de 'otra app de bot\u00f3n de p\u00e1nico'",
      "Gran volumen de tests unitarios redundantes generados autom\u00e1ticamente que inflaban su auditor\u00eda est\u00e1tica previa"
    ],
    "penalties": {
      "originality": "Propuesta convencional sin elementos de diferenciaci\u00f3n radical.",
      "ambition": "Buena ingenier\u00eda tradicional, pero sin innovar en modelos generativos ni 3D.",
      "execution": "La aplicaci\u00f3n funciona pero no gener\u00f3 entusiasmo en la audiencia.",
      "impact": "El caso de uso est\u00e1 saturado por soluciones existentes del OS m\u00f3vil.",
      "technical": "C\u00f3digo estructurado pero sobrecargado de boilerplate innecesario."
    }
  },
  {
    "id": 13,
    "name": "Manito",
    "track": "\ud83d\udea8 Emergencias",
    "technicalScore": 3.4,
    "originalityScore": 7.9,
    "ambitionScore": 7.8,
    "executionScore": 7.6,
    "impactScore": 7.8,
    "architectureScore": 7.5,
    "finalMarketProb": 1.4,
    "verdictLabel": "ASISTENTE DE SOCORRO POR VOZ CON ACCESO R\u00c1PIDO",
    "summary": "Web app de emergencia con reconocimiento de voz y geolocalizaci\u00f3n para personas con movilidad reducida o en situaciones de asalto inminente.",
    "stack": [
      "TypeScript",
      "React",
      "Node.js",
      "Web Speech API",
      "Express"
    ],
    "loc": 9800,
    "implementationQuality": "Web app sencilla centrada en accesibilidad por voz y disparadores r\u00e1pidos",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-13",
    "keyStrengths": [
      "Interfaz minimalista orientada a usuarios no t\u00e9cnicos en situaciones de p\u00e1nico",
      "Detecci\u00f3n de palabras clave en el navegador"
    ],
    "criticalFlaws": [
      "Falsa activaci\u00f3n por ruido ambiente",
      "Falta de persistencia offline robusta"
    ],
    "penalties": {
      "originality": "Aporte loable en accesibilidad, pero sin novedad algor\u00edtmica.",
      "ambition": "Alcance acotado a un formulario asistido por voz.",
      "execution": "Funcional durante la demo b\u00e1sica.",
      "impact": "Relevante para casos espec\u00edficos de discapacidad motora.",
      "technical": "Estructura frontend est\u00e1ndar sin capa de abstracci\u00f3n compleja."
    }
  },
  {
    "id": 20,
    "name": "SmartTraffic",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 4.5,
    "originalityScore": 7.8,
    "ambitionScore": 8.0,
    "executionScore": 7.7,
    "impactScore": 7.9,
    "architectureScore": 7.6,
    "finalMarketProb": 1.4,
    "verdictLabel": "AUDITOR\u00cdA DE TR\u00c1FICO CON VISI\u00d3N VECTORIAL Y DETECCI\u00d3N DE INFRACCIONES",
    "summary": "Sistema c\u00edvico de an\u00e1lisis de video con Computer Vision (YOLO y OpenCV) para auditar cruces de sem\u00e1foro en rojo y generar reportes transparentes de movilidad urbana.",
    "stack": [
      "Python (YOLO / OpenCV)",
      "TypeScript",
      "React Native",
      "PostgreSQL",
      "Prisma"
    ],
    "loc": 11300,
    "implementationQuality": "Pipeline de inferencia sobre fotogramas de video con c\u00e1lculo vectorial de cruce de l\u00ednea",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-20",
    "keyStrengths": [
      "Resoluci\u00f3n matem\u00e1tica limpia de vectores de cruce de l\u00ednea de parada",
      "Dashboard para visualizaci\u00f3n de infractores y estad\u00edsticas c\u00edvicas"
    ],
    "criticalFlaws": [
      "Muy sensible a la calibraci\u00f3n manual del \u00e1ngulo de la c\u00e1mara fija",
      "Baja tracci\u00f3n en el mercado de predicci\u00f3n (1.4%)"
    ],
    "penalties": {
      "originality": "Caso de uso cl\u00e1sico de visi\u00f3n computacional.",
      "ambition": "Buena integraci\u00f3n de backend de inferencia con visualizador.",
      "execution": "Los videos de prueba procesaron bien; falta testeo en tr\u00e1fico nocturno.",
      "impact": "Utilidad municipal genuina si se logra homologaci\u00f3n oficial.",
      "technical": "C\u00f3digo Python limpio con manejo vectorial correcto en NumPy."
    }
  },
  {
    "id": 23,
    "name": "HAWK",
    "track": "\ud83d\udee1\ufe0f AI Security",
    "technicalScore": 4.8,
    "originalityScore": 8.2,
    "ambitionScore": 8.4,
    "executionScore": 7.9,
    "impactScore": 7.8,
    "architectureScore": 8.3,
    "finalMarketProb": 1.1,
    "verdictLabel": "GUARDI\u00c1N DE SEGURIDAD EN RUST CON MONOREPO DE DETECCI\u00d3N EN EDGE",
    "summary": "Suite de auditor\u00eda y proxy en Rust para interceptar llamadas LLM en tiempo real, filtrar credenciales y proteger daemons de ejecuci\u00f3n contra inyecciones de agentes maliciosos.",
    "stack": [
      "Rust",
      "Cargo",
      "Docker",
      "LLM-Proxy",
      "Tokio"
    ],
    "loc": 17800,
    "implementationQuality": "Monorepo en Rust de alto rendimiento con guardian-core, edge-net y proxy de llamadas LLM",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-23",
    "keyStrengths": [
      "Escrito en Rust con seguridad de memoria y cero costo de abstracci\u00f3n",
      "M\u00f3dulos desacoplados: daemon de host, detector de anomal\u00edas y proxy de red",
      "Injustamente catalogado como repo vac\u00edo en auditor\u00edas iniciales desactualizadas"
    ],
    "criticalFlaws": [
      "Curva empinada de adopci\u00f3n y configuraci\u00f3n para usuarios que no compilan Rust",
      "Mercado final muy bajo (1.1%) por complejidad t\u00e9cnica ajena a la audiencia general"
    ],
    "penalties": {
      "originality": "Enfoque de ciberseguridad a nivel de sistema operativo y sockets.",
      "ambition": "Construir proxies en Rust en 36h demuestra capacidad t\u00e9cnica seria.",
      "execution": "Compila y corre benchmarks locales de latencia.",
      "impact": "Herramienta de nicho para devops e infraestructura cr\u00edtica.",
      "technical": "Uso idiom\u00e1tico de Rust con control de errores tipados."
    }
  },
  {
    "id": 14,
    "name": "ZeroID",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 3.9,
    "originalityScore": 7.6,
    "ambitionScore": 7.6,
    "executionScore": 7.5,
    "impactScore": 7.4,
    "architectureScore": 7.7,
    "finalMarketProb": 0.8,
    "verdictLabel": "IDENTIDAD SOBERANA Y FIRMAS ED25519 PARA PASAJES DE AUTOB\u00daS",
    "summary": "Protocolo de divulgaci\u00f3n selectiva de identidad aplicado a la compra y validaci\u00f3n de boletos interurbanos en 'Expreso Caribe' con criptograf\u00eda Ed25519.",
    "stack": [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Ed25519",
      "Vercel"
    ],
    "loc": 14200,
    "implementationQuality": "Frontend Next.js con validaci\u00f3n de firmas digitales asim\u00e9tricas",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-14",
    "keyStrengths": [
      "Caso de uso concreto de identidad sin requerir blockchain pesada",
      "Interfaz clara y bien dise\u00f1ada para el pasajero"
    ],
    "criticalFlaws": [
      "La demo completa depend\u00eda de repositorios fragmentados fuera del monorepo",
      "Poca adopci\u00f3n por parte del mercado (0.8%)"
    ],
    "penalties": {
      "originality": "Buena contextualizaci\u00f3n de identidad digital al transporte p\u00fablico local.",
      "ambition": "Moderada; el flujo es similar a un QR firmado convencional.",
      "execution": "Pudo demostrarse en pantalla.",
      "impact": "Reducci\u00f3n de fraudes en taquillas interurbanas.",
      "technical": "C\u00f3digo TypeScript limpio con esquema de validaci\u00f3n Zod."
    }
  },
  {
    "id": 21,
    "name": "Veridian",
    "track": "\ud83d\udee1\ufe0f AI Security",
    "technicalScore": 2.8,
    "originalityScore": 7.5,
    "ambitionScore": 7.8,
    "executionScore": 6.8,
    "impactScore": 7.0,
    "architectureScore": 6.5,
    "finalMarketProb": 0.8,
    "verdictLabel": "PROPUESTA DE SEGURIDAD CON REPO OFICIAL INCOMPLETO Y HYPE ARTIFICIAL",
    "summary": "Plataforma de auditor\u00eda de seguridad para modelos de IA; gener\u00f3 expectativa en el pitch pero mantuvo su backend cerrado y sin verificar en el repositorio de la organizaci\u00f3n.",
    "stack": [
      "Python",
      "FastAPI",
      "Render",
      "PostgreSQL"
    ],
    "loc": 6100,
    "implementationQuality": "Documentaci\u00f3n y pitch pulidos pero con implementaci\u00f3n opaca en repositorios privados",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-21",
    "keyStrengths": [
      "Pitch persuasivo con narrativa de compliance regulatorio para empresas",
      "Presentaci\u00f3n comercial de alto impacto visual"
    ],
    "criticalFlaws": [
      "Ejemplo claro de 'acciones infladas artificialmente' que luego colapsaron a 0.8%",
      "Gran parte del c\u00f3digo fuente no estaba disponible en el repo oficial auditado"
    ],
    "penalties": {
      "originality": "Narrativa ejecutiva elegante.",
      "ambition": "Prometi\u00f3 an\u00e1lisis est\u00e1tico profundo que no se evidenci\u00f3 en el c\u00f3digo abierto.",
      "execution": "Demo mayormente simulada con datos mocked.",
      "impact": "Alto en papel, nulo en verificaci\u00f3n de c\u00f3digo.",
      "technical": "Severamente penalizado por opacidad en la entrega."
    }
  },
  {
    "id": 16,
    "name": "Mapz",
    "track": "\ud83e\uddca Three-Dimensional",
    "technicalScore": 3.0,
    "originalityScore": 7.8,
    "ambitionScore": 8.0,
    "executionScore": 7.2,
    "impactScore": 7.3,
    "architectureScore": 7.3,
    "finalMarketProb": 0.7,
    "verdictLabel": "VISUALIZADOR AR Y MAPAS ESPACIALES 3D PARA NAVEGACI\u00d3N",
    "summary": "Experiencia de navegaci\u00f3n tridimensional que superpone rutas y puntos de inter\u00e9s urbano en canvas 3D interactivo con Three.js.",
    "stack": [
      "TypeScript",
      "Vite",
      "Three.js",
      "WebGL",
      "Supabase"
    ],
    "loc": 12100,
    "implementationQuality": "Prototipo en Three.js con visualizaci\u00f3n de modelos 3D y capas de mapas",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-16",
    "keyStrengths": [
      "Carga y renderizado de mallas urbanas en WebGL",
      "Mapeo de coordenadas GPS a coordenadas locales de escena 3D"
    ],
    "criticalFlaws": [
      "Problemas de escala y rendimiento en escenas complejas con muchos edificios",
      "Mercado residual de 0.7%"
    ],
    "penalties": {
      "originality": "Visualizaci\u00f3n 3D atractiva de mapas.",
      "ambition": "Importante desaf\u00edo geom\u00e9trico al proyectar curvas de nivel.",
      "execution": "Lags visibles al hacer zoom r\u00e1pido en la c\u00e1mara.",
      "impact": "Aplicable a recorridos universitarios o tur\u00edsticos.",
      "technical": "C\u00f3digo Vite est\u00e1ndar con integraci\u00f3n directa de Three.js."
    }
  },
  {
    "id": 3,
    "name": "Qu\u00f3rum",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 3.6,
    "originalityScore": 7.7,
    "ambitionScore": 7.9,
    "executionScore": 7.4,
    "impactScore": 7.2,
    "architectureScore": 7.5,
    "finalMarketProb": 0.6,
    "verdictLabel": "GOBERNANZA CRIPTOGR\u00c1FICA Y CONSENSO CON SMART CONTRACTS",
    "summary": "Protocolo de votaci\u00f3n y gobernanza con firmas el\u00edpticas (ECC) y contratos inteligentes para decisiones grupales inmutables.",
    "stack": [
      "Solidity",
      "TypeScript",
      "Next.js",
      "pnpm-workspace",
      "Hardhat"
    ],
    "loc": 13400,
    "implementationQuality": "Monorepo con contratos Solidity, tests de consenso y suite de despliegue",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-3",
    "keyStrengths": [
      "Contratos con pruebas de firma de qu\u00f3rum multifirma",
      "Monorepo configurado con pnpm y especificaciones de seguridad"
    ],
    "criticalFlaws": [
      "Fricci\u00f3n de billeteras Web3 para el usuario com\u00fan",
      "Apenas 0.6% de probabilidad de mercado"
    ],
    "penalties": {
      "originality": "Esquema criptogr\u00e1fico probado.",
      "ambition": "Implementar contratos y frontend coordinado en 36h.",
      "execution": "Complet\u00f3 despliegues en testnet local.",
      "impact": "Limitado a comunidades DAO o cooperativas t\u00e9cnicas.",
      "technical": "Monorepo limpio con buenas pr\u00e1cticas de pnpm."
    }
  },
  {
    "id": 26,
    "name": "Tridi",
    "track": "\ud83e\uddca Three-Dimensional",
    "technicalScore": 5.0,
    "originalityScore": 9.4,
    "ambitionScore": 9.6,
    "executionScore": 7.4,
    "impactScore": 8.0,
    "architectureScore": 8.2,
    "finalMarketProb": 0.5,
    "verdictLabel": "ALTA AMBICI\u00d3N CIENT\u00cdFICA EN F\u00cdSICA WASM Y ROB\u00d3TICA, PERO SIN TRACCI\u00d3N DE MERCADO",
    "summary": "Plataforma de entrenamiento para robots humanoides a partir de video de celular combinando YOLOv11 pose, MediaPipe Heavy y f\u00edsica simulada en WebAssembly con MuJoCo.",
    "stack": [
      "Python",
      "Three.js",
      "MediaPipe Pose",
      "YOLOv11",
      "MuJoCo WASM",
      "WebGL"
    ],
    "loc": 24100,
    "implementationQuality": "Pipeline h\u00edbrido de computer vision con simulaci\u00f3n f\u00edsica WASM en el navegador",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-26",
    "keyStrengths": [
      "Nivel t\u00e9cnico de frontera: MuJoCo compilado a WebAssembly en web",
      "Extracci\u00f3n cinem\u00e1tica de articulaciones en tiempo casi real"
    ],
    "criticalFlaws": [
      "El mercado lo ignor\u00f3 por completo (0.5%): producto demasiado abstracto y complejo para el p\u00fablico de la hackathon",
      "Consumo brutal de CPU/GPU en navegadores convencionales"
    ],
    "penalties": {
      "originality": "De los proyectos con mayor originalidad cient\u00edfica de todo el evento.",
      "ambition": "Intentar rob\u00f3tica y f\u00edsica de cuerpos r\u00edgidos en 36h.",
      "execution": "Demos pesadas con ca\u00eddas de framerate notorias.",
      "impact": "Fascinante para investigaci\u00f3n, lejano de uso masivo.",
      "technical": "Integraci\u00f3n compleja de WebAssembly con WebGL."
    }
  },
  {
    "id": 8,
    "name": "Arkangel",
    "track": "\ud83d\udee1\ufe0f AI Security",
    "technicalScore": 2.5,
    "originalityScore": 7.2,
    "ambitionScore": 7.4,
    "executionScore": 6.9,
    "impactScore": 7.0,
    "architectureScore": 6.8,
    "finalMarketProb": 0.4,
    "verdictLabel": "DEFENSA DE AGENTES V\u00cdA ELECTRON CON T\u00c9CNICAS INTRUSIVAS DE INSPECCI\u00d3N",
    "summary": "Herramienta de escritorio para auditar agentes conversacionales interceptando peticiones con Chrome DevTools Protocol y evaluando riesgos con Anthropic API.",
    "stack": [
      "JavaScript",
      "Python",
      "Electron",
      "Next.js",
      "Anthropic API"
    ],
    "loc": 10500,
    "implementationQuality": "App Electron con inspecci\u00f3n CDP y wrappers de evaluaci\u00f3n de prompts",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-8",
    "keyStrengths": [
      "Panel de control para inspeccionar payloads JSON de agentes",
      "Integraci\u00f3n de modelos para categorizar riesgos"
    ],
    "criticalFlaws": [
      "Dependencia de Chrome DevTools Protocol que lo hace fr\u00e1gil ante cambios de versi\u00f3n",
      "Tracci\u00f3n nula en el mercado (0.4%)"
    ],
    "penalties": {
      "originality": "Concepto est\u00e1ndar de proxy / sniffer de tr\u00e1fico de red.",
      "ambition": "Media; muchas piezas pegadas con scripts superficiales.",
      "execution": "Inestable si se pierde la conexi\u00f3n de debugging.",
      "impact": "Bajo frente a proxies nativos como HAWK o VanGUARD.",
      "technical": "Acoplamiento excesivo entre Electron y scripts de Python."
    }
  },
  {
    "id": 1,
    "name": "sIsA",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 3.3,
    "originalityScore": 7.5,
    "ambitionScore": 7.6,
    "executionScore": 7.2,
    "impactScore": 7.1,
    "architectureScore": 7.3,
    "finalMarketProb": 0.4,
    "verdictLabel": "C\u00c9DULA ELECTR\u00d3NICA Y HARDWARE IOT CON ENCRIPTACI\u00d3N EN ESP32",
    "summary": "Identidad segura que combina hardware embebido ESP32 en C++ con backend en Go y frontend SvelteKit para validaci\u00f3n an\u00f3nima de credenciales.",
    "stack": [
      "Go",
      "SvelteKit",
      "TypeScript",
      "ESP32 C++",
      "PostgreSQL",
      "Docker"
    ],
    "loc": 15600,
    "implementationQuality": "Fusi\u00f3n de firmware C++ para microcontroladores con backend Go y contenedor Docker",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-1",
    "keyStrengths": [
      "Integraci\u00f3n de hardware f\u00edsico ESP32 funcionando en vivo",
      "Backend concurrente en Go con drivers pgx/v5 optimizados"
    ],
    "criticalFlaws": [
      "Fricci\u00f3n de adopci\u00f3n severa al requerir dispositivos f\u00edsicos dedicados",
      "Volumen de mercado testimonial (0.4%)"
    ],
    "penalties": {
      "originality": "Excelente iniciativa de conectar hardware libre con web.",
      "ambition": "Flashing de microcontroladores y sincronizaci\u00f3n en 36h.",
      "execution": "La demo de lectura de credenciales oper\u00f3 bien.",
      "impact": "Dificultad de escalar sin fabricaci\u00f3n de hardware masiva.",
      "technical": "Buen dominio de C++ embebido y Go."
    }
  },
  {
    "id": 25,
    "name": "Presente",
    "track": "\ud83d\udea8 Emergencias",
    "technicalScore": 3.1,
    "originalityScore": 7.5,
    "ambitionScore": 7.7,
    "executionScore": 7.8,
    "impactScore": 7.4,
    "architectureScore": 7.6,
    "finalMarketProb": 0.3,
    "verdictLabel": "DETECCI\u00d3N AC\u00daSTICA DE EMERGENCIAS CON INFERENCIA ONNX EN ANDROID",
    "summary": "App Android nativa que analiza audio ambiental con modelos ONNX para detectar disparos o gritos de auxilio y alertar autom\u00e1ticamente a redes familiares.",
    "stack": [
      "Kotlin (Android Nativo)",
      "Python (ONNX)",
      "Next.js",
      "TypeScript",
      "Google Play"
    ],
    "loc": 14700,
    "implementationQuality": "Inferencia de red neuronal ac\u00fastica optimizada para dispositivos Android nativos",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-25",
    "keyStrengths": [
      "Inferencia de audio on-device sin enviar streams continuos al servidor",
      "App compilada y testeada en dispositivos reales"
    ],
    "criticalFlaws": [
      "Falsos positivos con ruidos urbanos y alto drenaje de bater\u00eda",
      "El mercado no apost\u00f3 por ella (0.3%)"
    ],
    "penalties": {
      "originality": "Buena idea de clasificador sonoro pasivo.",
      "ambition": "Ejecutar ONNX en Android es demandante.",
      "execution": "Complet\u00f3 la detecci\u00f3n b\u00e1sica en escenarios de prueba.",
      "impact": "Privacidad delicada al requerir micr\u00f3fono encendido constante.",
      "technical": "C\u00f3digo Kotlin idiom\u00e1tico con arquitectura Clean."
    }
  },
  {
    "id": 4,
    "name": "Agent Zero",
    "track": "\ud83d\udee1\ufe0f AI Security",
    "technicalScore": 3.2,
    "originalityScore": 7.4,
    "ambitionScore": 7.8,
    "executionScore": 7.8,
    "impactScore": 7.2,
    "architectureScore": 8.0,
    "finalMarketProb": 0.1,
    "verdictLabel": "ARENA DE RED TEAMING AUTOMATIZADO CON RECHAZO TOTAL EN EL MERCADO (0.1%)",
    "summary": "Entorno automatizado para simular ataques y jailbreaks sobre modelos de lenguaje; hiper-optimizado para auditor\u00edas sint\u00e9ticas pero sin conexi\u00f3n con los jurados.",
    "stack": [
      "Python",
      "FastAPI",
      "React",
      "Biome",
      "Docker",
      "Render"
    ],
    "loc": 21300,
    "implementationQuality": "Stack FastAPI/React pulido con pipelines de CI y tests sint\u00e9ticos de IA, pero con tracci\u00f3n nula",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-4",
    "keyStrengths": [
      "Herramientas de testing y linting configuradas con rigor",
      "Despliegues reproducibles con Docker y Render"
    ],
    "criticalFlaws": [
      "El ep\u00edtome de la trampa de auditor\u00eda est\u00e1tica: calificado con 8.91 por sus tests autom\u00e1ticos, pero cay\u00f3 a 0.1% en el mercado real",
      "Pitch mon\u00f3tono y sin demo interactiva memorable"
    ],
    "penalties": {
      "originality": "Wrapper de prompts de adversarial testing.",
      "ambition": "Buena estructuraci\u00f3n de backend pero sin innovaci\u00f3n sustancial.",
      "execution": "Los endpoints responden r\u00e1pido bajo datos de muestra.",
      "impact": "Desinter\u00e9s palpable del mercado y de los asistentes.",
      "technical": "C\u00f3digo limpio pero est\u00e1ndar de boilerplate web."
    }
  },
  {
    "id": 18,
    "name": "C\u00e9flow",
    "track": "\ud83e\uddca Three-Dimensional",
    "technicalScore": 3.8,
    "originalityScore": 8.2,
    "ambitionScore": 8.3,
    "executionScore": 7.2,
    "impactScore": 7.5,
    "architectureScore": 7.4,
    "finalMarketProb": 0.1,
    "verdictLabel": "PLANIFICACI\u00d3N ODONTOL\u00d3GICA 3D AUTOMATIZADA CON THREE.JS Y DOCKER",
    "summary": "Software 3D para ortodoncia y an\u00e1lisis dental: carga escaneos intraorales y automatiza segmentaci\u00f3n de piezas dentales para planificaci\u00f3n m\u00e9dica.",
    "stack": [
      "TypeScript",
      "Three.js",
      "Vite",
      "Express",
      "Docker",
      "Render"
    ],
    "loc": 16200,
    "implementationQuality": "Visualizador 3D m\u00e9dico con shaders para an\u00e1lisis oclusal y backend Express",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-18",
    "keyStrengths": [
      "Nicho m\u00e9dico real con valor de mercado alto si funciona",
      "Manejo de archivos STL/OBJ m\u00e9dicos en el canvas del navegador"
    ],
    "criticalFlaws": [
      "Segmentaci\u00f3n dental simplificada que requiere supervisi\u00f3n cl\u00ednica manual",
      "Mercado colapsado a 0.1% por ser un nicho muy ajeno a la din\u00e1mica del evento"
    ],
    "penalties": {
      "originality": "Muy interesante aplicaci\u00f3n de WebGL a odontolog\u00eda.",
      "ambition": "Alt\u00edsima; segmentar piezas dentales en 3D es problema de tesis.",
      "execution": "El visor 3D carga las piezas pero las herramientas de corte son rudimentarias.",
      "impact": "Excelente caso B2B de largo plazo.",
      "technical": "Monorepo con Docker y pipeline de build configurado."
    }
  },
  {
    "id": 6,
    "name": "Gotchu",
    "track": "\ud83d\udee1\ufe0f AI Security",
    "technicalScore": 2.7,
    "originalityScore": 7.3,
    "ambitionScore": 7.5,
    "executionScore": 7.0,
    "impactScore": 7.1,
    "architectureScore": 7.2,
    "finalMarketProb": 0.0,
    "verdictLabel": "DEFENSA DE AGENTES DE IA CON INFRAESTRUCTURA CONTENEDORIZADA",
    "summary": "Herramienta de monitoreo pasivo para detectar desv\u00edos de comportamiento y prompt injections en pipelines de agentes empresariales.",
    "stack": [
      "TypeScript",
      "Docker",
      "Node.js",
      "pnpm-workspace",
      "Vitest"
    ],
    "loc": 11800,
    "implementationQuality": "Monorepo con soporte Docker, suite de integraci\u00f3n y reglas de firewall de prompts",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-6",
    "keyStrengths": [
      "Configuraci\u00f3n de monorepo con pnpm workspaces y Dockerfile funcional",
      "Tests de integraci\u00f3n con Vitest para validar reglas de sanitizaci\u00f3n"
    ],
    "criticalFlaws": [
      "Sin tracci\u00f3n alguna en el mercado (0.0%)",
      "Propuesta opacada por soluciones de seguridad m\u00e1s maduras como VanGUARD"
    ],
    "penalties": {
      "originality": "Concepto est\u00e1ndar de middleware de inspecci\u00f3n de texto.",
      "ambition": "Media; alcance acotado a un filtro de expresiones regulares y LLM judge.",
      "execution": "Contenedor levanta y expone endpoints de chequeo.",
      "impact": "Poco diferenciable en un track saturado de seguridad.",
      "technical": "Estructura de monorepo correcta pero con l\u00f3gica de negocio reducida."
    }
  },
  {
    "id": 24,
    "name": "Constancia",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 2.6,
    "originalityScore": 7.3,
    "ambitionScore": 7.6,
    "executionScore": 7.4,
    "impactScore": 7.0,
    "architectureScore": 7.8,
    "finalMarketProb": 0.0,
    "verdictLabel": "ESPECIFICACI\u00d3N FORMAL W3C VC 2.0 PERO CON CERO VOLUMEN DE MERCADO (0.0%)",
    "summary": "Implementaci\u00f3n t\u00e9cnica de credenciales verificables seg\u00fan los est\u00e1ndares W3C VC 2.0 y firmas criptogr\u00e1ficas distribuidas; gran burocracia de tipos sin tracci\u00f3n en la vida real.",
    "stack": [
      "TypeScript",
      "Next.js",
      "Prisma",
      "Vitest",
      "Zod",
      "W3C VC 2.0"
    ],
    "loc": 18900,
    "implementationQuality": "Tipado exhaustivo y cumplimiento estricto de especificaciones W3C con 0 tracci\u00f3n comercial",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-24",
    "keyStrengths": [
      "Tipado estricto en TypeScript y esquemas Zod impecables",
      "Comprensi\u00f3n te\u00f3rica profunda de est\u00e1ndares criptogr\u00e1ficos internacionales"
    ],
    "criticalFlaws": [
      "0.0% en el mercado: nadie en el evento entendi\u00f3 ni quiso comprar un validador de JSON-LD abstracto",
      "Falta total de experiencia de usuario pr\u00e1ctica o incentivos de adopci\u00f3n"
    ],
    "penalties": {
      "originality": "Implementaci\u00f3n de una RFC ya escrita por un consorcio.",
      "ambition": "Elevada en rigor tipado, nula en experiencia de producto.",
      "execution": "Los tests de Vitest pasan; la demo consisti\u00f3 en inspeccionar JSONs.",
      "impact": "Inexistente en la hackathon.",
      "technical": "C\u00f3digo limpio pero est\u00e9ril como producto de mercado."
    }
  },
  {
    "id": 10,
    "name": "Prais",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 2.3,
    "originalityScore": 7.2,
    "ambitionScore": 7.3,
    "executionScore": 7.0,
    "impactScore": 7.1,
    "architectureScore": 7.0,
    "finalMarketProb": 0.0,
    "verdictLabel": "TRANSPARENCIA DE PRECIOS CON SCRAPING E INGESTA AUTOM\u00c1TICA",
    "summary": "Monitor c\u00edvico que recolecta precios de productos de consumo masivo con Firecrawl y normaliza datos con OpenAI para auditar inflaci\u00f3n en comercios.",
    "stack": [
      "TypeScript",
      "Python",
      "Next.js",
      "Firecrawl",
      "OpenAI",
      "Supabase"
    ],
    "loc": 9400,
    "implementationQuality": "Pipeline de scraping asistido por LLM y base de datos relacional en Supabase",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-10",
    "keyStrengths": [
      "Integraci\u00f3n de Firecrawl para extracci\u00f3n web semi-estructurada",
      "Visualizador de gr\u00e1ficos comparativos de precios"
    ],
    "criticalFlaws": [
      "Ruptura de scrapers ante cambios sutiles en los e-commerce analizados",
      "Cero inter\u00e9s de los apostadores en el market (0.0%)"
    ],
    "penalties": {
      "originality": "Idea repetida en m\u00faltiples hackathons.",
      "ambition": "Baja; el scraping est\u00e1 delegado a una API externa de pago.",
      "execution": "Tablas b\u00e1sicas con pocos datos precargados.",
      "impact": "\u00datil si se mantiene actualizada, pero insostenible sin mantenimiento continuo.",
      "technical": "Frontend est\u00e1ndar con consultas simples a Supabase."
    }
  },
  {
    "id": 28,
    "name": "Rastro",
    "track": "\ud83e\udd1d Trust",
    "technicalScore": 2.1,
    "originalityScore": 7.0,
    "ambitionScore": 7.2,
    "executionScore": 6.8,
    "impactScore": 6.9,
    "architectureScore": 7.0,
    "finalMarketProb": 0.0,
    "verdictLabel": "AUDITOR\u00cdA DE FONDOS P\u00daBLICOS SOBRE BASE SEPOLIA",
    "summary": "Trazabilidad de partidas presupuestarias con smart contracts en Ethereum L2 (Base Sepolia) y verificaci\u00f3n de facturas subidas por contratistas.",
    "stack": [
      "Solidity (Base Sepolia)",
      "TypeScript",
      "Viem",
      "Wagmi",
      "Next.js",
      "Supabase"
    ],
    "loc": 11200,
    "implementationQuality": "Contratos Solidity sencillos montados sobre Base Sepolia con clientes Wagmi/Viem",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-28",
    "keyStrengths": [
      "Despliegue operativo en red de pruebas Base Sepolia",
      "Uso de librer\u00edas modernas del ecosistema Ethereum (Viem y Wagmi)"
    ],
    "criticalFlaws": [
      "Falta el eslab\u00f3n clave: un or\u00e1culo que valide si la obra f\u00edsica realmente se ejecut\u00f3",
      "Cero votos y 0.0% de mercado final"
    ],
    "penalties": {
      "originality": "Caso de uso can\u00f3nico de blockchain para transparencia gubernamental.",
      "ambition": "Media; el contrato es un registro de hashes con mapping simple.",
      "execution": "Transacciones confirmadas en block explorer durante la demo.",
      "impact": "Inviable pol\u00edticamente sin adopci\u00f3n institucional del estado.",
      "technical": "Integraci\u00f3n frontend correcta con billetera MetaMask."
    }
  },
  {
    "id": 9,
    "name": "team-9",
    "track": "Desconocido",
    "technicalScore": 1.0,
    "originalityScore": 1.0,
    "ambitionScore": 1.0,
    "executionScore": 1.0,
    "impactScore": 1.0,
    "architectureScore": 1.0,
    "finalMarketProb": 0.0,
    "verdictLabel": "\u00daNICO EQUIPO DESCALIFICADO POR ABANDONO (REPO PLANTILLA SIN C\u00d3DIGO)",
    "summary": "Repositorio con el template por defecto de la organizaci\u00f3n; no se subi\u00f3 c\u00f3digo, documentaci\u00f3n ni prototipo ejecutable.",
    "stack": [
      "Ninguno"
    ],
    "loc": 0,
    "implementationQuality": "Sin c\u00f3digo fuente entregado",
    "repoUrl": "https://github.com/platanus-hack/platanus-hack-26-ve-team-9",
    "keyStrengths": [],
    "criticalFlaws": [
      "Repositorio abandonado sin entregables auditables",
      "0.0% en el mercado y descalificaci\u00f3n autom\u00e1tica de la casa de apuestas"
    ],
    "penalties": {
      "originality": "Sin entrega.",
      "ambition": "Sin entrega.",
      "execution": "Sin entrega.",
      "impact": "Sin entrega.",
      "technical": "Sin entrega."
    }
  }
];
