# Auditoría Técnica Profunda: Presente (Team 25)

**Track Oficial:** 🚨 Emergencias  
**Repositorio:** [platanus-hack-26-ve-team-25](https://github.com/platanus-hack/platanus-hack-26-ve-team-25)  
**Commit en HEAD Auditado:** `846cf82 | jkou | style(pitch): el QR de la lámina 2 un poco más grande`  
**Stack Tecnológico:** `Kotlin (Android Nativo), Python (ONNX Audio), Next.js, TypeScript, Vercel, Google Play`  
**Métricas de Código:** 90 archivos de código · ~12,038 LOC · 8 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Sistema de alerta y vigilancia preventiva doméstica que combina app Android nativa con clasificación de audio ONNX local (gritos, alarmas, rotura de vidrios) y fichas médicas de emergencia.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
app/android/app/src/main/kotlin/ve/equipo25/casa/ (Guardia.kt, Sirena.kt, MainActivity.kt)
dashboard/ (src/types.ts, charts.ts, data.ts)
web/src/app/api/ (vigilar/route.ts, telegram/webhook/route.ts, kapso/webhook/route.ts)
experimentos/modelos-audio/ (comparar.py, exportar_onnx.py)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
La app Android nativa se orquesta en `ve.equipo25.casa.MainActivity.kt` y levanta el servicio centinela `Guardia.kt`. La web de gestión y webhook corre en Next.js en Vercel.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `Guardia.kt` y `Sirena.kt`, ejecuta un servicio en segundo plano que escucha audio ambiental del micrófono y lo pasa por el modelo neuronal exportado en `experimentos/modelos-audio/exportar_onnx.py` sin enviar audio crudo a internet. Si clasifica un evento crítico, dispara alertas a Telegram y la sirena local del teléfono.

### 3.3 Calidad de Código y Deuda Técnica Detectada
El modelo ONNX de audio presenta una tasa moderada de falsos positivos con ruidos cotidianos de cocina o televisión a volumen alto. El QR médico complementario en la PWA no cifra la información sensible de salud del usuario.

### 3.4 Auditoría de Testing y Cobertura Real
Posee 8 tests de integración en la web (`web/src/lib/familia/factura.test.ts`), pero carece de tests unitarios nativos con JUnit/Espresso para verificar el ciclo de vida del servicio `Guardia.kt` bajo ahorro de batería de Android.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    8.3    │   1.245   │ Ficha médica de emergencia y triaje inmediato activada por QR físico para rescatistas y paramédicos
                   │      │           │           │ con soporte offline total.
   Ambición        │ 20%  │    8.0    │   1.600   │ Asegurar que la información vital de un paciente (alergias, tipo de sangre, contactos) esté
                   │      │           │           │ disponible en menos de 5 segundos bajo estrés de campo.
   Ejecución       │ 20%  │    8.4    │   1.680   │ Publicación real en canal de prueba de Google Play, PWA complementaria y múltiples escenarios
                   │      │           │           │ interactivos de demo testeados.
   Impacto         │ 20%  │    8.7    │   1.740   │ Ahorro directo de minutos de oro en emergencias médicas donde el paciente está inconsciente o
                   │      │           │           │ desorientado.
   Aspecto Técnico │ 25%  │    7.8    │   1.950   │ Desarrollo móvil nativo y web balanceado; la encriptación local del QR debería incluir una firma
                   │      │           │           │ digital para evitar suplantación maliciosa de datos médicos.
   TOTAL           │ 100% │ 8.21 / 10 │ 8.21 / 10 │ EJECUCIÓN IMPECABLE EN CAMPO: RÁPIDO, INTUITIVO Y CON PRUEBAS REALES EN PLAY STORE
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Introducir calibración de umbral de ruido ambiental de fondo en `Guardia.kt` para evitar falsas alarmas con ruidos comunes del hogar.
2. Cifrar el contenido del QR médico con AES-GCM derivando la llave de un PIN de emergencia o token de paramédico.
3. Incorporar tests automatizados en Android con Roboelectric para garantizar que el micrófono no sea cerrado por el recolector de basura del SO.

