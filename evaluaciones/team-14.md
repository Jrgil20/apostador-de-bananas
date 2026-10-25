# Auditoría Técnica Profunda: ZeroID (Team 14)

**Track Oficial:** 🤝 Trust  
**Repositorio:** [platanus-hack-26-ve-team-14](https://github.com/platanus-hack/platanus-hack-26-ve-team-14)  
**Commit en HEAD Auditado:** `090193f | jesusarl | chore(demo): Expreso Caribe pasa a su propio repo`  
**Stack Tecnológico:** `TypeScript, Next.js, TailwindCSS, Vercel, Ed25519`  
**Métricas de Código:** 146 archivos de código · ~14,261 LOC · 15 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Billetera y verificador de identidad digital soberana que permite autenticación selectiva en un clic, aplicada al abordaje de pasajeros en la empresa 'Expreso Caribe'.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
apps/web/ (portal de verificación, checkout Expreso Caribe)
packages/did-core/ (firmas, credenciales, esquemas)
docs/ (especificacion-tecnica.md)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El portal web arranca en Next.js App Router en `apps/web/src/app/page.tsx` y despliega en Vercel (`platanus-hack-14.vercel.app`).

### 3.2 Lógica de Negocio y Algoritmos Centrales
Genera credenciales criptográficas firmadas con curvas elípticas en el dispositivo del usuario. Durante la compra de boletos en la maqueta de Expreso Caribe, el pasajero aprueba la cesión de atributos específicos (ej. mayor de edad, vacunación) mediante un handshake QR sin compartir su número de cédula ni fecha de nacimiento completa.

### 3.3 Calidad de Código y Deuda Técnica Detectada
El equipo tomó el atajo de extraer la demo de Expreso Caribe a un repositorio externo (`chore(demo): Expreso Caribe pasa a su propio repo`), fragmentando el código auditable. La verificación criptográfica se realiza del lado del cliente en JavaScript sin notarización en registro distribuido.

### 3.4 Auditoría de Testing y Cobertura Real
15 tests en `packages/did-core/` que cubren la emisión y validación de firmas. Falta cobertura en el flujo de expiración de credenciales y en la revocación de accesos concedidos.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    7.6    │   1.140   │ Credencial soberana selectiva aplicada al caso de uso real de compra de pasajes interurbanos en
                   │      │           │           │ 'Expreso Caribe'.
   Ambición        │ 20%  │    7.8    │   1.560   │ Resolver el dilema de privacidad vs. verificación obligatoria en terminales de pasajeros mediante
                   │      │           │           │ divulgación selectiva.
   Ejecución       │ 20%  │    7.5    │   1.500   │ Demo desplegada en Vercel con flujo de checkout conectado; la validación de la firma criptográfica
                   │      │           │           │ se ejecuta en el cliente sin notarización inmutable.
   Impacto         │ 20%  │    7.4    │   1.480   │ Muy alto en el contexto de viajes nacionales en Venezuela donde los controles de identidad en
                   │      │           │           │ alcabalas generan fricción constante.
   Aspecto Técnico │ 25%  │    7.6    │   1.900   │ Estructura limpia en Next.js; la delegación a un sub-repo para la demo de Expreso Caribe demuestra
                   │      │           │           │ pragmatismo pero divide el control de versiones.
   TOTAL           │ 100% │ 7.58 / 10 │ 7.58 / 10 │ APLICACIÓN PRÁCTICA INTELIGENTE DE IDENTIDAD, PENDIENTE MADURAR PROVEEDORES
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Reincorporar las aplicaciones cliente al monorepo principal mediante Turborepo o pnpm workspaces para mantener la trazabilidad de versiones.
2. Implementar un esquema de revocación descentralizado mediante Accumulators criptográficos o listas de revocación bitmapped (StatusList2021).
3. Validar las firmas criptográficas en el servidor del comercio mediante middlewares en lugar de confiar ciegamente en el render del navegador.

