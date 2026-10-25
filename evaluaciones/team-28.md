# Auditoría Técnica Profunda: Rastro (Team 28)

**Track Oficial:** 🤝 Trust  
**Repositorio:** [platanus-hack-26-ve-team-28](https://github.com/platanus-hack/platanus-hack-26-ve-team-28)  
**Commit en HEAD Auditado:** `9225c5a | lapq14 | readme`  
**Stack Tecnológico:** `Solidity (Base Sepolia), TypeScript, Viem, Wagmi, Next.js, Supabase, Vercel`  
**Métricas de Código:** 27 archivos de código · ~1,850 LOC · 0 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Plataforma de donaciones en custodia (escrow) desplegada en Base Sepolia que retiene fondos y solo los libera a fundaciones por tramos conforme presentan facturas verificadas.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
web/src/
├── lib/ (chain.ts, api.ts, env.ts, supabase.ts)
├── App.tsx
└── types.ts
supabase/ (functions/_shared/core.ts)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El frontend corre en React/Vite en `web/src/main.tsx` conectando con la blockchain mediante Viem configurado en `web/src/lib/chain.ts` apuntando a Base Sepolia.

### 3.2 Lógica de Negocio y Algoritmos Centrales
En `web/src/lib/chain.ts` y contratos en Base, los donantes depositan fondos en un contrato de custodia. La fundación carga las facturas a Supabase Storage y solicita la liberación del tramo. El contrato verifica las firmas autorizadas y transfiere el monto correspondiente.

### 3.3 Calidad de Código y Deuda Técnica Detectada
La validación de que una factura realmente corresponde a un gasto legítimo de la fundación sigue dependiendo de la aprobación manual de un administrador humano en Supabase, lo que traslada la confianza del smart contract al criterio subjetivo de quien opera el panel.

### 3.4 Auditoría de Testing y Cobertura Real
> [!CAUTION]
> Cero tests unitarios o de integración en el frontend y en las funciones de Supabase. No se incluyen tests de Hardhat o Foundry para auditar reentrancy o control de accesos en los contratos.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    7.3    │   1.095   │ Fondo de donaciones en custodia con liberación por tramos basada en comprobación documental de
                   │      │           │           │ facturas.
   Ambición        │ 20%  │    7.5    │   1.500   │ Obligar a las ONGs a rendir cuentas con hitos verificables antes de recibir desembolsos.
   Ejecución       │ 20%  │    7.0    │   1.400   │ Despliegue funcional en Base Sepolia y frontend en Vercel; la aprobación de las facturas sigue
                   │      │           │           │ dependiendo de una firma multisig manual de administradores.
   Impacto         │ 20%  │    7.8    │   1.560   │ Muy valioso para restaurar la confianza en campañas benéficas y colectas solidarias.
   Aspecto Técnico │ 25%  │    6.8    │   1.700   │ Implementación concisa (~1.8k LOC); falta un oráculo de OCR o ZK-proofs que vincule
                   │      │           │           │ criptográficamente la factura fiscal con la transacción on-chain.
   TOTAL           │ 100% │ 7.25 / 10 │ 7.25 / 10 │ TRANSPARENCIA CON SMART CONTRACTS; FALTAN ORÁCULOS DE AUDITORÍA AUTOMÁTICA
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Escribir una suite de tests exhaustiva en Foundry para los contratos de escrow en Solidity verificando protección contra ataques de reentrada.
2. Integrar un oráculo de OCR descentralizado con Chainlink Functions o TLSNotary para verificar facturas electrónicas fiscales sin intermediación humana.
3. Añadir soporte para reembolsos automáticos a los donantes si la fundación no cumple los hitos en los plazos fijados.

