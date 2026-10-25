# Auditoría Técnica Profunda: Vía AR (Team 16)

**Track Oficial:** 🧊 Three-Dimensional  
**Repositorio:** [platanus-hack-26-ve-team-16](https://github.com/platanus-hack/platanus-hack-26-ve-team-16)  
**Commit en HEAD Auditado:** `9383b0a | emilianaplaz | Merge remote-tracking branch 'origin/v2'`  
**Stack Tecnológico:** `TypeScript, Vite, Three.js, WebGL, Supabase, Python (Pipeline 3D)`  
**Métricas de Código:** 62 archivos de código · ~11,318 LOC · 3 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Sistema de navegación peatonal en realidad aumentada que utiliza modelos 3D de calles reales para proyectar rutas respetando desniveles y oclusión detrás de edificios.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
src/
├── render/ (zone.ts, scene.ts)
├── nav/ (frame.ts, hud.ts)
pipeline3d/ (capture.py, reconstruct.py)
docs/ (SPEC-3D-STREETS.md, PLAN-HUD-AR.md)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El frontend monta sobre Vite en `index.html` y `src/main.ts`. El backend de almacenamiento de geometrías conecta a Supabase.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `src/render/zone.ts`, divide la calle en chunks de ~50m descritos en un `manifest.json`. Almacena la malla en coordenadas ENU (East-North-Up) locales para acoplar la brújula y el GPS directamente a la cámara 3D sin cálculos adicionales. Utiliza la malla como un 'occluder shader' que oculta las flechas de navegación detrás de esquinas reales.

### 3.3 Calidad de Código y Deuda Técnica Detectada
La documentación arquitectónica (`SPEC-3D-STREETS.md`) es una obra maestra de ingeniería, pero el código fuente no logró alcanzar el hito Z3 prometido: el pipeline de fotogrametría (`pipeline3d/capture.py`) requiere intervención manual y el snapping al piso vibra intensamente por ruido en el GPS del navegador.

### 3.4 Auditoría de Testing y Cobertura Real
Solo 3 tests unitarios básicos en `tests/`. No hay cobertura automatizada para la carga dinámica de chunks ni para el cálculo de matrices de transformación de la cámara AR.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    8.0    │   1.200   │ Reconstrucción 3D de tramos de calles reales a partir de fotogrametría liviana para renderizar
                   │      │           │           │ oclusión y rasante real en navegación peatonal.
   Ambición        │ 20%  │    8.2    │   1.640   │ Especificación sumamente técnica y detallada (documentación impecable en SPEC.md y PLAN-HUD-AR.md);
                   │      │           │           │ apuntaron a resolver oclusión real en AR móvil.
   Ejecución       │ 20%  │    6.2    │   1.240   │ La ejecución práctica quedó rezagada respecto a la brillantez del spec; solo llegaron a chunks
                   │      │           │           │ estáticos de prueba y un pipeline semiautomatizado.
   Impacto         │ 20%  │    7.0    │   1.400   │ El problema de la navegación peatonal confusa en ciudades con pendientes pronunciadas está bien
                   │      │           │           │ diagnosticado, pero requiere escala de captura comunitaria.
   Aspecto Técnico │ 25%  │    7.1    │   1.775   │ Vite + Three.js bien configurado; sin embargo, no integraron la sincronización de orientación IMU
                   │      │           │           │ con WebXR completa y el render colapsa en cambios bruscos de punto de vista.
   TOTAL           │ 100% │ 7.25 / 10 │ 7.25 / 10 │ GRAN VISIÓN DE NAVEGACIÓN URBANA AR, PERO SE QUEDÓ EN FASE DE PROTOTIPO PREVIO
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Implementar un filtro de Kalman extendido para fusionar las lecturas de los sensores IMU del teléfono con el GPS y estabilizar el render de la malla.
2. Automatizar el pipeline de fotogrametría mediante Gaussian Splatting liviano procesado en servidor para generar mallas urbanas en minutos.
3. Añadir pruebas unitarias que verifiquen la descarga y liberación de chunks de memoria en Three.js para evitar memory leaks al caminar distancias largas.

