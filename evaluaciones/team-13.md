# Auditoría Técnica Profunda: Manito (Team 13)

**Track Oficial:** 🚨 Emergencias  
**Repositorio:** [platanus-hack-26-ve-team-13](https://github.com/platanus-hack/platanus-hack-26-ve-team-13)  
**Commit en HEAD Auditado:** `279113f | miguel la corte | updated project logo`  
**Stack Tecnológico:** `TypeScript, React, Node.js, Web Speech API, Express`  
**Métricas de Código:** 88 archivos de código · ~5,698 LOC · 10 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Asistente de voz empático para censo inmediato de damnificados por catástrofes naturales y vinculación con oportunidades laborales a través de Impaktemos.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
apps/ (web client, speech-interface)
services/ (census-service, impaktemos-bridge)
docs/ (arquitectura-flujo.md)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
Aplicación web SPA montada en React que inicializa el reconocimiento de voz en el navegador mediante `Web Speech API` y se comunica con un backend Node/Express.

### 3.2 Lógica de Negocio y Algoritmos Centrales
Guía al usuario afectado por una conversación fluida en lenguaje natural, identificando habilidades laborales previas (carpintería, albañilería, cocina) y estructurando un perfil laboral de emergencia que envía automáticamente a la API de Impaktemos para generar contrataciones inmediatas en las obras de reconstrucción.

### 3.3 Calidad de Código y Deuda Técnica Detectada
La solución asume erróneamente que una zona de desastre (como el deslave de La Guaira) cuenta con conectividad 4G estable para procesar audio en la nube. La persistencia no implementa IndexedDB local para almacenar registros en frío cuando se corta el enlace.

### 3.4 Auditoría de Testing y Cobertura Real
10 tests en el backend que validan la serialización de datos de los censados. No hay pruebas de accesibilidad por voz ni de simulación de cortes de red en medio de la encuesta.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    7.8    │   1.170   │ Asistente de voz empático para censo inmediato de damnificados post-catástrofe y reconexión laboral
                   │      │           │           │ según oficios reales.
   Ambición        │ 20%  │    7.6    │   1.520   │ Articular la respuesta post-crisis desde la dignidad económica y la intermediación laboral en lugar
                   │      │           │           │ del mero asistencialismo.
   Ejecución       │ 20%  │    7.2    │   1.440   │ Buena demo funcional conversacional; depende de conectividad continua a Internet justo cuando la
                   │      │           │           │ infraestructura de telecomunicaciones suele colapsar.
   Impacto         │ 20%  │    8.2    │   1.640   │ Impacto social conmovedor y directo para acelerar la reconstrucción comunitaria tras desastres.
   Aspecto Técnico │ 25%  │    7.0    │   1.750   │ Stack ligero y funcional; pero la persistencia depende de APIs de terceros sin caché local tolerante
                   │      │           │           │ a cortes de enlace.
   TOTAL           │ 100% │ 7.52 / 10 │ 7.52 / 10 │ ENFOQUE HUMANO EXCELENTE; DEBE REFORZAR ROBUSTEZ OFFLINE Y LATENCIA
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Implementar una arquitectura offline-first con Service Workers y SQLite en WASM (IndexedDB) para registrar damnificados sin conexión y sincronizar en ráfaga.
2. Incorporar modelos de reconocimiento de voz locales pequeños (Whisper Tiny en ONNX Web) para operar en modo avión.
3. Añadir confirmaciones auditivas simples que no requieran que el usuario mire la pantalla si el teléfono tiene el display dañado.

