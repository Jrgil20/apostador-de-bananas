# Auditoría Técnica Profunda: Arvi (Team 2)

**Track Oficial:** 🤝 Trust / Cultura  
**Repositorio:** [platanus-hack-26-ve-team-2](https://github.com/platanus-hack/platanus-hack-26-ve-team-2)  
**Commit en HEAD Auditado:** `2a67071 | Jose Chourio | Added voice menu control`  
**Stack Tecnológico:** `Python (FastAPI), React Native / Expo, Three.js, WebGL, OpenAI Whisper & TTS`  
**Métricas de Código:** 136 archivos de código · ~12,256 LOC · 8 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Guía turístico inmersivo para Caracas que proyecta personajes históricos en 3D en monumentos reales y conversa por voz en tiempo real con capacidad de visión.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
backend/
├── app/
│   ├── voice/ (service.py, look.py, lipsync.py, providers/)
│   ├── api/ (voice.py, regions.py, simulations.py, zones.py)
│   └── models/ (zone.py)
frontend/
├── src/api/ (client.ts, modules/voice.ts, modules/zones.ts)
└── scripts/battle/ (build_battle.py, rig.py)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El backend expone endpoints REST y WebSocket en `backend/app/api/voice.py` mediante FastAPI. La app móvil arranca en React Native con Expo vía `frontend/app.config.js`.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `backend/app/voice/service.py`, la orquestación modela cada turno conversacional como un stream asíncrono (`transcripción -> audio por frase -> respuesta`). Sintetiza el audio por frase mientras el LLM continúa generando texto para minimizar la latencia percibida. Soporta activación de escenas 3D mediante directivas del LLM como `[ESCENA:batalla]` y anclaje visual (`LookEvent`) invocando visión de Anthropic en `look.py`.

### 3.3 Calidad de Código y Deuda Técnica Detectada
La sincronización de labios en `lipsync.py` utiliza visemas calculados de forma heurística que se desincronizan con caídas de framerate en dispositivos móviles de gama baja. Además, la carga de modelos 3D y texturas (`scripts/battle/build_battle.py`) carece de compresión Draco o LODs (Levels of Detail), sobrecargando la GPU.

### 3.4 Auditoría de Testing y Cobertura Real
Cuenta con 8 tests en `backend/tests/` (`test_voice.py`, `test_simulation_ask.py`, `test_regions.py`). Solo evalúan endpoints con mocks estáticos de respuesta; no hay pruebas de carga del WebSocket ni de latencia de síntesis de voz bajo conexiones intermitentes.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    8.2    │   1.230   │ Guía turístico que sitúa avatares 3D históricos conversacionales en el lugar geográfico exacto con
                   │      │           │           │ WebGL y síntesis de voz.
   Ambición        │ 20%  │    7.5    │   1.500   │ Integrar reconocimiento visual, geolocalización, avatares 3D Three.js y TTS en streaming en una sola
                   │      │           │           │ app de navegador móvil.
   Ejecución       │ 20%  │    7.2    │   1.440   │ La carga de assets 3D colapsa en conexiones móviles lentas; la voz sufre latencias de >3.5s entre
                   │      │           │           │ pregunta y respuesta.
   Impacto         │ 20%  │    6.8    │   1.360   │ En turismo caraqueño el valor es culturalmente alto, pero la necesidad de apuntar la cámara en vía
                   │      │           │           │ pública choca con la realidad de seguridad ciudadana.
   Aspecto Técnico │ 25%  │    7.0    │   1.750   │ Buena composición de React Three Fiber y FastAPI; pero el pipeline de audio no usa WebSockets
                   │      │           │           │ bidireccionales y procesa audio como chunks monolíticos en disco.
   TOTAL           │ 100% │ 7.28 / 10 │ 7.28 / 10 │ EXPERIENCIA INMERSIVA ATRACTIVA, PERO CON ALTA LATENCIA DE LLM Y MODELOS 3D PESADOS
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Implementar compresión Draco y texturas KTX2 en los modelos 3D para evitar congelamiento de la interfaz en conexiones móviles de Caracas.
2. Migrar el pipeline de TTS de generación monolítica a streaming WebRTC/Opus en tiempo real para reducir el retardo inicial de 3.5s.
3. Desacoplar la lógica de `LookEvent` para admitir modelos de visión locales ligeros (MobileNet/YOLO) en el cliente antes de llamar a la API de Anthropic.

