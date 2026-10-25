# Auditoría Técnica Profunda: Arkangel (Team 8)

**Track Oficial:** 🛡️ AI Security  
**Repositorio:** [platanus-hack-26-ve-team-8](https://github.com/platanus-hack/platanus-hack-26-ve-team-8)  
**Commit en HEAD Auditado:** `514f248 | chrisdadev13 | Merge branch 'main' of github.com:platanus-hack/platanus-hack-26-ve-team-8`  
**Stack Tecnológico:** `JavaScript, Python, Electron, Next.js, Anthropic API`  
**Métricas de Código:** 44 archivos de código · ~7,445 LOC · 13 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Agente de escritorio en Electron que actúa como centinela intermedio monitoreando llamadas a modelos de IA para neutralizar inyecciones de prompt mediante Chrome DevTools Protocol.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
desktop-agent/
├── main.js
├── preload.js
├── scripts/ (cdp-check.js, patch-plist.js)
├── renderer/ (renderer.js)
└── agent/ (guardian-demo.js, prompt.js, run.js)
services/agent/
└── tests/ (test_contract.py, test_defense.py, test_anthropic.py)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El proceso principal de Electron arranca en `desktop-agent/main.js` y expone hooks en `preload.js`. La suite de inspección backend se ejecuta con scripts Python en `services/agent/`.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `desktop-agent/agent/guardian-demo.js`, el agente se engancha al navegador usando Chrome DevTools Protocol (`scripts/cdp-check.js`) para capturar campos de entrada antes de ser enviados. Aplica heurísticas de saneamiento en `prompt.js` para detectar patrones de jailbreak conocidos antes de reenviar el payload a Anthropic.

### 3.3 Calidad de Código y Deuda Técnica Detectada
La arquitectura sufre de una gran fragilidad al acoplarse directamente a la API de CDP del navegador local. Si el navegador objetivo actualiza flags o no se ejecuta con puerto de depuración abierto (`--remote-debugging-port`), el agente queda ciego sin emitir advertencia.

### 3.4 Auditoría de Testing y Cobertura Real
Tiene 13 tests en `services/agent/tests/` enfocados en evaluar llamadas a la API de Anthropic (`test_anthropic.py`) y reglas básicas (`test_defense.py`). No hay tests del ciclo de vida de Electron ni de resiliencia del proceso ante desconexiones de CDP.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    6.8    │   1.020   │ Proxy de inspección de prompts para detectar anomalías de seguridad en llamadas a modelos LLM.
   Ambición        │ 20%  │    6.5    │   1.300   │ Trataron de emular un WAF completo para LLMs en un sprint corto de hackathon.
   Ejecución       │ 20%  │    6.0    │   1.200   │ La interfaz en Vercel sufre de timeouts en llamadas encadenadas; las reglas de detección son listas
                   │      │           │           │ estáticas de palabras clave en lugar de embeddings o clasificadores.
   Impacto         │ 20%  │    6.2    │   1.240   │ Un filtro basado en regex básicas es trivialmente eludible mediante ofuscación base64 o leetspeak,
                   │      │           │           │ reduciendo su utilidad real en producción.
   Aspecto Técnico │ 25%  │    6.4    │   1.600   │ Código Python monolítico en el proxy backend, sin separación limpia de middlewares ni manejo
                   │      │           │           │ asíncrono de streaming SSE.
   TOTAL           │ 100% │ 6.36 / 10 │ 6.36 / 10 │ PROPUESTA DE SEGURIDAD INTERESANTE PERO CON IMPLEMENTACIÓN SUPERFICIAL
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Reemplazar la interceptación invasiva por CDP con un proxy HTTP/Socks5 local transparente que capture tráfico de red sin requerir modo depuración en el navegador.
2. Migrar los filtros de texto basados en substrings estáticos a un clasificador semántico basado en embeddings locales (ej. ONNX con MiniLM).
3. Manejar el ciclo de vida de la ventana en Electron con aislamiento de contexto estricto (`contextIsolation: true`) y validación de IPC.

