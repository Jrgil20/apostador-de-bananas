# Auditoría Técnica Profunda: Prais (Team 10)

**Track Oficial:** 🤝 Trust  
**Repositorio:** [platanus-hack-26-ve-team-10](https://github.com/platanus-hack/platanus-hack-26-ve-team-10)  
**Commit en HEAD Auditado:** `b6dd175 | github-actions[bot] | Merge pull request #91 from platanus-hack/fix/presupuesto-firecrawl`  
**Stack Tecnológico:** `TypeScript, Python, Next.js, Firecrawl, OpenAI, Supabase, Google Cloud Build`  
**Métricas de Código:** 199 archivos de código · ~25,657 LOC · 23 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Plataforma de auditoría ciudadana que extrae licitaciones y presupuestos públicos mediante Firecrawl y los contrasta con precios de referencia mediante LLMs.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
.agents/skills/observe-whatsapp/ (overview.js, webhook-deliveries.js)
backend/ (scraping, parsers, firecrawl_client.py)
frontend/ (Next.js, usaprais.com, visualización de contrataciones)
cloudbuild.api.yaml
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El frontend corre sobre Next.js en Vercel (`usaprais.com`), mientras que los pipelines de extracción y webhook se coordinan mediante Cloud Build (`cloudbuild.api.yaml`) y Supabase functions.

### 3.2 Lógica de Negocio y Algoritmos Centrales
Automatiza la ingesta de documentos licitatorios gubernamentales, envía las URLs a Firecrawl para extracción limpia de texto estructurado y ejecuta prompts en OpenAI para aislar partidas de gasto, códigos arancelarios y montos. Compara los costos unitarios contra un catálogo base en Supabase para alertar sobrecostos.

### 3.3 Calidad de Código y Deuda Técnica Detectada
El pipeline depende fuertemente de la disponibilidad de la cuota de Firecrawl (`fix/presupuesto-firecrawl`), lo que generó bloqueos 429 durante la demo. El parser de partidas presupuestarias sufre cuando los documentos oficiales vienen escaneados en PDF torcido o con tablas complejas no tabuladas.

### 3.4 Auditoría de Testing y Cobertura Real
Posee 23 tests de endpoints y utilidades de parsing. Sin embargo, no hay tests de regresión frente a variaciones de formato documental (PDFs corruptos, tablas con celdas combinadas) ni mocks de contingencia para Firecrawl.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    8.0    │   1.200   │ Fiscalización algorítmica y comparativa de presupuestos públicos contra precios de mercado usando
                   │      │           │           │ web-scraping con Firecrawl y LLMs.
   Ambición        │ 20%  │    8.4    │   1.680   │ Integración ambiciosa de pipelines de extracción masiva de contrataciones públicas y reconciliación
                   │      │           │           │ semántica de ítems.
   Ejecución       │ 20%  │    7.9    │   1.580   │ Flujo de usuario completo en usaprais.com; sin embargo, las consultas a Firecrawl agotan la cuota de
                   │      │           │           │ presupuestos rápidamente generando errores 429.
   Impacto         │ 20%  │    8.5    │   1.700   │ Impacto cívico enorme para auditoría ciudadana y prevención de sobreprecio en compras estatales y
                   │      │           │           │ contrataciones.
   Aspecto Técnico │ 25%  │    7.8    │   1.950   │ Arquitectura híbrida JS/Python bien concebida; la normalización de monedas y partidas contables aún
                   │      │           │           │ presenta discrepancias ante formatos OCR no estándar.
   TOTAL           │ 100% │ 8.11 / 10 │ 8.11 / 10 │ MUY BUENA PROPUESTA DE TRANSPARENCIA PÚBLICA, DETALLES EN NORMALIZACIÓN DE DATOS
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Implementar un pipeline de OCR local con Tesseract/PaddleOCR como fallback ante fallos o agotamiento de créditos en la API de Firecrawl.
2. Introducir un sistema de colas (Celery o BullMQ con Redis) para procesar licitaciones pesadas de forma asíncrona evitando timeouts en HTTP.
3. Normalizar las unidades de medida y monedas históricas con tablas de ajuste por inflación para evitar falsas alarmas de sobreprecio.

