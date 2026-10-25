# Auditoría Técnica Profunda: Meshy (Team 15)

**Track Oficial:** 🤝 Trust / 🚨 Emergencies  
**Repositorio:** [platanus-hack-26-ve-team-15](https://github.com/platanus-hack/platanus-hack-26-ve-team-15)  
**Commit en HEAD Auditado:** `a98b5c4 | thebug-code | Merge branch 'backend/reply-page': reply page in the app's d`  
**Stack Tecnológico:** `TypeScript, React, Web Bluetooth API, Capacitor, Node.js`  
**Métricas de Código:** 567 archivos de código · ~131,281 LOC · 188 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Red de mensajería de emergencia P2P que permite emitir balizas SOS que rebotan entre teléfonos cercanos mediante Bluetooth Low Energy hasta encontrar un nodo con internet.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
apps/web/ (UI PWA, mapa de balizas, reply page)
packages/mesh-core/ (inundación de paquetes, TTL, deduplicación)
packages/bluetooth/ (adaptadores Web Bluetooth / Capacitor BLE)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
La app híbrida arranca en React con adaptadores Capacitor BLE para interactuar con el hardware de radio del teléfono.

### 3.2 Lógica de Negocio y Algoritmos Centrales
Implementa un algoritmo de propagación epidémica con fragmentos de paquetes de 13 bytes, control de Time-To-Live (TTL) y deduplicación por hash SHA-256 para prevenir loops infinitos de broadcast en la malla. Cuando un nodo alcanza conectividad celular, vuelca la cola de mensajes al backend.

### 3.3 Calidad de Código y Deuda Técnica Detectada
Aunque el código base es masivo (+130k LOC por dependencias compiladas y wrappers de Bluetooth), la limitación fundamental radica en que Web Bluetooth en navegadores y Capacitor en iOS/Android no pueden mantener escaneo BLE continuo en segundo plano con la pantalla apagada por restricciones del sistema operativo.

### 3.4 Auditoría de Testing y Cobertura Real
Cuenta con una suite robusta de 188 archivos de tests en `packages/mesh-core/` que simulan topologías de red en malla de hasta 50 nodos y prueban particionamiento de grafos. Sin embargo, carece de pruebas en hardware físico real con interferencia de radiofrecuencia.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    8.5    │   1.275   │ Baliza SOS multi-salto sobre Bluetooth Low Energy que convierte teléfonos cercanos en una malla de
                   │      │           │           │ retransmisión sin internet.
   Ambición        │ 20%  │    8.9    │   1.780   │ Construir un protocolo de inundación mesh tolerante a fragmentación en un hackathon de 48 horas.
   Ejecución       │ 20%  │    7.8    │   1.560   │ La aplicación web/PWA logra simular y emitir beacons; no obstante, en iOS y Android modernos el
                   │      │           │           │ escaneo continuo de BLE en background es bloqueado por el OS.
   Impacto         │ 20%  │    8.8    │   1.760   │ Crucial para eventos sísmicos, deslaves o apagones prolongados donde la infraestructura celular
                   │      │           │           │ queda inoperativa.
   Aspecto Técnico │ 25%  │    8.2    │   2.050   │ Volumen notable de código (+130k LOC incluyendo librerías compiladas y adaptadores); los algoritmos
                   │      │           │           │ de deduplicación de paquetes en la malla requieren optimización para evitar tormentas de broadcast.
   TOTAL           │ 100% │ 8.43 / 10 │ 8.43 / 10 │ INGENIERÍA DE RED DESCENTRALIZADA MUY AMBICIOSA; LIMITADA POR RESTRICCIONES DE BLE EN SEGUNDO PLANO
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Desarrollar un servicio nativo en Kotlin/Swift en primer plano (Foreground Service con notificación persistente) para esquivar la suspensión de BLE por el SO.
2. Optimizar el tamaño del payload comprimiendo las coordenadas GPS mediante codificación Geohash o Varint para que quepan en un único anuncio BLE de 31 bytes sin fragmentar.
3. Incorporar cifrado asimétrico E2E en los mensajes SOS para evitar que nodos intermedios de la malla puedan espiar las solicitudes de ayuda.

