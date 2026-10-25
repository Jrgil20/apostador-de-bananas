# Auditoría Técnica Profunda: MAMÁ (Team 27)

**Track Oficial:** 🚨 Emergencias  
**Repositorio:** [platanus-hack-26-ve-team-27](https://github.com/platanus-hack/platanus-hack-26-ve-team-27)  
**Commit en HEAD Auditado:** `b3b5767 | Daniel Ross | Merge pull request #168 from platanus-hack/fix/central-movil`  
**Stack Tecnológico:** `Kotlin (Android Nativo), Go (Backend), BitChat Mesh (BLE), WhatsApp API, Render`  
**Métricas de Código:** 391 archivos de código · ~67,542 LOC · 157 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Sistema de seguridad personal encubierto que simula una llamada cariñosa interactiva de 'Mamá' mientras analiza la voz con IA para detectar coacción o secuestro, disparando alertas silenciosas por WhatsApp y retransmisión por malla BitChat BLE.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
app/src/main/java/com/team27/mama/
├── ui/ (home/, call/)
├── emergency/ (EmergencyOrchestrator.kt, OfflineFallback.kt, payload/SealedBox.kt)
└── permissions/ (PermissionSync.kt, PermissionSnapshot.kt)
mesh/src/main/java/com/team27/mama/mesh/
└── model/ (FragmentPayload.kt, RoutedPacket.kt, IdentityAnnouncement.kt)
server/
├── internal/ (duress/chain.go, call/engine.go, voice/service.go, emergency/ingest/)
└── cmd/ (pushagent/, evals/score.go)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
En Android inicia en `MainActivity.kt` gestionando permisos rigurosos en HyperOS/Android. El servidor de ingest y motor telefónico arranca en Go en `server/internal/call/engine.go`.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `server/internal/duress/chain.go`, ejecuta una cadena de decisión crítica: evalúa primero reglas deterministas duras y solo escala a un LLM (con timeout estricto de 6s en `DefaultLLMTimeout`) si el resultado es dudoso. La regla de seguridad estipula que el LLM jamás puede desactivar una alerta confirmada por reglas (priorizando recall sobre precisión). Si no hay internet, `EmergencyOrchestrator.kt` encripta un `SealedBox.kt` y lo fragmenta en paquetes de 13 bytes (`FragmentPayload.kt`) transmitidos por Bluetooth mesh compatible con iOS BitChat.

### 3.3 Calidad de Código y Deuda Técnica Detectada
La arquitectura es asombrosamente completa (+160 PRs mergeados), pero la dependencia de los servicios en segundo plano en capas agresivas de personalización de Android (MIUI / HyperOS de Xiaomi) exige configuraciones manuales de batería por parte del usuario para evitar que el sistema cierre el listener de la alarma.

### 3.4 Auditoría de Testing y Cobertura Real
Extraordinaria suite de 157 archivos de tests que prueban el sincronizador de permisos (`PermissionSyncTest.kt`), orquestación de emergencias (`EmergencyOrchestratorTest.kt`), fragmentación BLE (`EmergencyFramesTest.kt`) y calibración de falsas alarmas del detector de coacción en `server/cmd/evals/score.go`.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    9.5    │   1.425   │ Disfrazar una alarma silenciosa de secuestro o peligro extremo detrás de una llamada interactiva
                   │      │           │           │ verosímil de 'Mamá' con detección de coacción por IA.
   Ambición        │ 20%  │    9.6    │   1.920   │ Resolver el problema de rescate integrando app nativa de Android, backend en Go, disparador
                   │      │           │           │ telefónico, red de respaldo BitChat mesh y notificación WhatsApp.
   Ejecución       │ 20%  │    9.4    │   1.880   │ APK compilado y disponible para descarga inmediata, backend en Render, más de 150 tests y más de 160
                   │      │           │           │ Pull Requests mergeados disciplinadamente.
   Impacto         │ 20%  │    9.7    │   1.940   │ Impacto social desgarrador y salvador de vidas en un país con antecedentes de extorsión, robos y
                   │      │           │           │ detenciones arbitrarias.
   Aspecto Técnico │ 25%  │    9.3    │   2.325   │ Ingeniería de software colosal (+70.000 líneas entre Kotlin y Go), arquitectura offline-first, firma
                   │      │           │           │ de payloads criptográficos y manejo exhaustivo de permisos en HyperOS/Android.
   TOTAL           │ 100% │ 9.49 / 10 │ 9.49 / 10 │ PROYECTO GANADOR ABSOLUTO: PERFECCIÓN CONCEPTUAL, AUDACIA TÉCNICA Y RELEVANCIA HUMANA MÁXIMA
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Implementar un asistente de configuración inicial que guíe al usuario para desactivar optimizaciones de batería agresivas en marcas críticas (Xiaomi, Huawei, Samsung).
2. Añadir un mecanismo de handshake de confirmación acústica inaudible (ultrasonido) entre dispositivos para confirmar recepción de paquetes mesh.
3. Extender la integración de alertas más allá de WhatsApp hacia canales SMS directos mediante módems GSM locales de bajo costo.

