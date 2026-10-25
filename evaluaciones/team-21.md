# Auditoría Técnica Profunda: Veridian (Team 21)

**Track Oficial:** 🛡️ AI Security  
**Repositorio:** [platanus-hack-26-ve-team-21](https://github.com/platanus-hack/platanus-hack-26-ve-team-21)  
**Commit en HEAD Auditado:** `2bcb7f5 | José Miguel Gómez Acosta | docs: fill project metadata and description`  
**Stack Tecnológico:** `Python, FastAPI, Render (Fuera de repositorio oficial)`  
**Métricas de Código:** 0 archivos de código · ~0 LOC · 0 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Middleware de ciberseguridad para FastAPI que bloquea en caliente a atacantes que utilizan credenciales corporativas robadas evaluando anomalías de navegación con IA.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
> [!WARNING]
> **Repositorio sin código fuente:** No se encontró código de aplicación en la rama principal.

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
Inexistentes en el repositorio oficial. El equipo desplegó instancias en Render (`veridian-landing.onrender.com`, `veridian-demo.onrender.com`, `veridian-panel.onrender.com`), pero no sincronizó el código fuente.

### 3.2 Lógica de Negocio y Algoritmos Centrales
De acuerdo a su documentación, el producto opera como un middleware en FastAPI que intercepta cada petición post-login, construye un perfil determinista de rutas habituales, horarios y redes, y despacha desvíos a un evaluador LLM para bloquear IPs en tiempo real.

### 3.3 Calidad de Código y Deuda Técnica Detectada
Infracción crítica de las reglas de hackathon abierto: no sincronizar el código fuente con la organización anula la capacidad del jurado de auditar la originalidad, seguridad, cobertura de tests y estándares de programación.

### 3.4 Auditoría de Testing y Cobertura Real
0 tests en el repositorio oficial. La suite de pruebas y la implementación técnica no pueden ser verificadas.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    7.9    │   1.185   │ Middleware liviano que detecta anomalías comportamentales en el uso de credenciales corporativas
                   │      │           │           │ mediante perfiles dinámicos y arbitraje por LLM.
   Ambición        │ 20%  │    8.0    │   1.600   │ Proteger a startups de credential stuffing mediante bloqueo adaptativo en milisegundos sin fricción
                   │      │           │           │ en el login.
   Ejecución       │ 20%  │    4.0    │   0.800   │ CERO líneas de código de backend o middleware en el repositorio oficial de la organización.
                   │      │           │           │ Mantuvieron el código en repositorios externos privados violando las pautas de auditoría
                   │      │           │           │ transparente.
   Impacto         │ 20%  │    7.5    │   1.500   │ El dolor de mercado es inmenso ($4.99M costo promedio de brechas); la demo en Render funciona, pero
                   │      │           │           │ la opacidad del código anula la confianza de auditoría.
   Aspecto Técnico │ 25%  │    4.5    │   1.125   │ Solo se pueden auditar los archivos Markdown y la landing estática. La incapacidad de revisar la
                   │      │           │           │ suite de tests, el middleware real o el modelo invalida la nota técnica.
   TOTAL           │ 100% │ 6.21 / 10 │ 6.21 / 10 │ EXCELENTE PITCH Y DOCUMENTACIÓN, PERO CÓDIGO FUENTE NO DISPONIBLE EN EL REPO OFICIAL
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Hacer commit y push de todo el backend y middleware en el repositorio oficial para posibilitar la revisión por pares y el cumplimiento de las bases del evento.
2. Añadir pruebas unitarias y de estrés que comprueben la latencia introducida por el middleware en el ciclo de vida de la petición HTTP.
3. Demostrar que la llamada al modelo LLM no bloquea el hilo principal de FastAPI utilizando arquitecturas asíncronas de colas.

