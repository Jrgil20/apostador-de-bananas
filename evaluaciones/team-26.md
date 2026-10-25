# Auditoría Técnica Profunda: Tridi (Team 26)

**Track Oficial:** 🧊 Three-Dimensional  
**Repositorio:** [platanus-hack-26-ve-team-26](https://github.com/platanus-hack/platanus-hack-26-ve-team-26)  
**Commit en HEAD Auditado:** `6895888 | Pastor José Jiménez Lucena | docs: submission files tell today's product, and the skeleton over the landing's Capture video`  
**Stack Tecnológico:** `Python, JavaScript, Three.js, MediaPipe/Pose, YOLOv11, MuJoCo WASM (tridi-physics), WebGL`  
**Métricas de Código:** 101 archivos de código · ~23,266 LOC · 0 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Pipeline de ingeniería que transforma videos cotidianos de celular en trayectorias cinemáticas 3D y las transfiere a un simulador de física real (MuJoCo) para entrenar robots humanoides.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
data/ (models.py: YOLOv11-pose + MediaPipe Heavy landmarker)
physics/ (integración con simulación física)
web/
├── src/ (robot-host.js, training.js, state.js, router.js)
└── scripts/ (make-video-overlay.py)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El frontend de visualización interactiva corre con Vite en `web/src/robot-host.js`. El pipeline de procesamiento de video en Python se articula en torno a `data/models.py`.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `data/models.py`, orquesta un pipeline dual: utiliza `yolo11s-pose.pt` para detección rápida de bounding box (20ms) y aísla la figura humana para pasarla por el modelo `MediaPipe Heavy Pose Landmarker` en float16, extrayendo coordenadas espaciales 3D estabilizadas. En `web/src/robot-host.js`, monta `createSimView` sobre MuJoCo compilado a WebAssembly (`tridi-physics`) para simular la estabilidad articular del robot en el navegador.

### 3.3 Calidad de Código y Deuda Técnica Detectada
El talón de Aquiles actual es la ausencia absoluta de tests automatizados (0 tests). La traslación de cinemática inversa (IK) a pares de torsión en los actuadores del robot depende de factores de escala empíricos que pueden inducir inestabilidad en modelos humanoides de distinto peso.

### 3.4 Auditoría de Testing y Cobertura Real
> [!CAUTION]
> Cero tests automatizados. La validación se realiza exclusivamente de forma visual en el visor de MuJoCo en el navegador.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    9.4    │   1.410   │ Conversión de video monocameral de celular en datasets de movimiento 3D cinemático y entrenamiento
                   │      │           │           │ de robots humanoides en simulación física.
   Ambición        │ 20%  │    9.5    │   1.900   │ Atacar el cuello de botella más grande del mundo en robótica humanoide (datos de entrenamiento)
                   │      │           │           │ desde un hackathon.
   Ejecución       │ 20%  │    8.3    │   1.660   │ Demo operativa en tridi-alpha.vercel.app con visualización de esqueleto 3D sobre video; la física
                   │      │           │           │ completa aún depende de simuladores headless externos.
   Impacto         │ 20%  │    9.1    │   1.820   │ Mercado global multimillonario; democratiza la generación de datos para locomoción humanoide sin
                   │      │           │           │ necesidad de trajes MoCap de $50k.
   Aspecto Técnico │ 25%  │    8.6    │   2.150   │ Pipeline de visión computacional y modelos espaciales muy avanzado; falta cerrar el lazo cerrado de
                   │      │           │           │ teleoperación sim-to-real con soporte ROS2 nativo.
   TOTAL           │ 100% │ 8.94 / 10 │ 8.94 / 10 │ PIONEROS EN ROBÓTICA HUMANOIDE: AMBICIÓN DE NIVEL SILICON VALLEY CON BASE TÉCNICA REAL
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Crear una suite de pruebas de regresión cinemática comparando las salidas articulares contra datasets canónicos de captura de movimiento (ej. CMU MoCap).
2. Añadir soporte para exportación directa a URDF y formatos compatibles con ROS2 / Isaac Sim.
3. Optimizar la carga de la librería MuJoCo WASM mediante Web Workers dedicados para evitar caídas de frames en el renderizado 3D de la interfaz.

