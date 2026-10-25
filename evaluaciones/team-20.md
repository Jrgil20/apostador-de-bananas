# Auditoría Técnica Profunda: SmartTraffic (Team 20)

**Track Oficial:** 🤝 Trust  
**Repositorio:** [platanus-hack-26-ve-team-20](https://github.com/platanus-hack/platanus-hack-26-ve-team-20)  
**Commit en HEAD Auditado:** `99a87e6 | Daniel Morillo | Merge pull request #7 from platanus-hack/integracion`  
**Stack Tecnológico:** `TypeScript, Python (YOLO / OpenCV), React Native / Web, PostgreSQL, Prisma`  
**Métricas de Código:** 328 archivos de código · ~32,898 LOC · 85 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Sistema de fotomultas automatizadas que convierte teléfonos fijos en semáforos en cámaras de fiscalización inteligente, detectando infracciones de luz roja con video probatorio.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
lib/
├── vision/ (rules.ts, analyze.ts, ml-client.ts)
├── auth/ (session.ts, password.ts)
└── db.ts (Prisma client)
apps/web/ (panel de control municipal y pasarela de pago para infractores)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El motor de procesamiento corre en Node/TypeScript interactuando con Prisma y servicios de visión en Python. La interfaz de gestión arranca en Next.js.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `lib/vision/rules.ts` y `analyze.ts`, define una línea virtual de detención y un polígono de cruce. Realiza tracking de cajas delimitadoras (bounding boxes) de vehículos. Si el semáforo está en rojo y el vector de trayectoria del vehículo cruza la línea hacia la intersección, dispara la captura del clip de 5 segundos y pasa la placa por OCR.

### 3.3 Calidad de Código y Deuda Técnica Detectada
La calibración de la línea de detención en `rules.ts` utiliza coordenadas de pantalla fijas. Si el teléfono que graba sufre vibraciones por el viento o el tráfico pesado, las coordenadas se descalibran y generan falsos positivos multando a vehículos detenidos correctamente.

### 3.4 Auditoría de Testing y Cobertura Real
85 tests bien estructurados en Vitest (`vitest.config.ts`, `lib/vision/rules.test.ts`, `lib/vision/analyze.test.ts`), con fixtures de trayectorias vectoriales y validación de reglas de negocio. Excelente cobertura de lógica determinista.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    8.1    │   1.215   │ Convertir cualquier smartphone en una cámara de fotomulta que captura la infracción de semáforo con
                   │      │           │           │ clip de video probatorio y cobro en línea inmediato.
   Ambición        │ 20%  │    8.3    │   1.660   │ Abarcar detección de vehículos, lectura de placas (LPR), inferencia en el borde y pasarela de cobros
                   │      │           │           │ en un único ecosistema.
   Ejecución       │ 20%  │    7.6    │   1.520   │ El pipeline de inferencia procesa bien los clips de demostración; en condiciones de lluvia o baja
                   │      │           │           │ luminosidad la tasa de reconocimiento de placa cae drásticamente.
   Impacto         │ 20%  │    8.4    │   1.680   │ Alineado a las necesidades apremiantes de orden vial y recaudación municipal transparente en
                   │      │           │           │ ciudades de la región.
   Aspecto Técnico │ 25%  │    7.9    │   1.975   │ Modelos YOLO preentrenados adaptados eficientemente; la verificación de calibración de la línea de
                   │      │           │           │ parada del semáforo depende de coordenadas fijas que se desalinean si la cámara vibra.
   TOTAL           │ 100% │ 8.05 / 10 │ 8.05 / 10 │ SOLUCIÓN PRAGMÁTICA Y DE ALTO RETORNO CIVICO; SUSCEPTIBLE A FALSOS POSITIVOS EN CÁMARAS MOVILES
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Incorporar detección automática y estabilización de la línea de cebra mediante segmentación semántica en cada frame para resistir movimientos de la cámara.
2. Integrar una cola de revisión humana antes de la emisión legal de la citación para mitigar riesgos jurídicos por placas sucias o borrosas.
3. Optimizar el modelo YOLO cuantizándolo a INT8 (TensorRT o CoreML/NNAPI) para posibilitar la inferencia en tiempo real en el procesador del teléfono sin enviar video a la nube.

