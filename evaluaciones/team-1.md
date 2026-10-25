# Auditoría Técnica Profunda: sIsA: Sistema de Identificación Seguro y Anónimo (Team 1)

**Track Oficial:** 🤝 Trust  
**Repositorio:** [platanus-hack-26-ve-team-1](https://github.com/platanus-hack/platanus-hack-26-ve-team-1)  
**Commit en HEAD Auditado:** `fea1133 | Samuel Sanchez | Merge pull request #12 from platanus-hack/fixesAndTests`  
**Stack Tecnológico:** `Go (pgx/v5), SvelteKit, TypeScript, ESP32 C++, PostgreSQL, Docker`  
**Métricas de Código:** 171 archivos de código · ~16,978 LOC · 28 archivos de tests  

## 1. Resumen Ejecutivo y Alcance
Sistema de identidad autosoberana con atributos ciegos firmados por emisores (Nacional, Universidad) y verificados en terminales físicos por tokens de acceso.

## 2. Radiografía de Módulos y Arquitectura del Repositorio
```
api/
├── cmd/ (api, admin, keygen, testvectors)
├── internal/
│   ├── sign/ (sign_attribute.go, keys.go)
│   ├── terminal/ (terminal.go)
│   ├── kapso/ (kapso.go)
│   └── api/ (auth.go, cards.go, emision.go, terminals.go)
web/
├── src/api/ (issuer.ts, wallet.ts, terminals.ts, mock.ts)
└── tests/slj/ (fuzz.test.ts, verify.test.ts, wallet.test.ts)
```

## 3. Disección de Código Fuente en HEAD
### 3.1 Puntos de Entrada y Ciclo de Vida
El backend inicia en `api/cmd/api/main.go`, configurando un pool de conexiones PostgreSQL con `pgxpool` y exponiendo endpoints HTTP en `api/internal/api/server.go`. El frontend web corre sobre Vite/Svelte en `web/src/main.ts`.

### 3.2 Lógica de Negocio y Algoritmos Centrales
La criptografía reside en `api/internal/sign/sign_attribute.go`, implementando ECDSA P-256 con firmas crudas IEEE P1363 (r || s). Modela atributos discretos (`AttrMayor18 = 0x01`, `AttrMayor21 = 0x02`, `AttrIdentidad = 0x03`, `AttrSangre = 0x04`) emitidos por entidades (`IssuerNacional = 0x01`). La autenticación de terminales físicos en `terminal.go` valida tokens con hash SHA-256.

### 3.3 Calidad de Código y Deuda Técnica Detectada
Aunque la implementación en Go es limpia y utiliza tipos fuertes, el protocolo reinventa un esquema propietario de credenciales en lugar de adoptar estándares abiertos como W3C Verifiable Credentials o AnonCreds. En `web/src/api/mock.ts` y `walletMock.ts` se observa una fuerte dependencia de datos simulados en el cliente cuando el terminal de lectura hardware no está en línea.

### 3.4 Auditoría de Testing y Cobertura Real
Posee 28 tests en `web/tests/slj/` que incluyen fuzzing (`fuzz.test.ts`), serialización de bytes (`bytes.test.ts`) y verificación de firmas (`verify.test.ts`). Sin embargo, carece de tests de integración end-to-end con el hardware ESP32 real o mocks de puerto serial.

## 4. Resumen del Veredicto de Jurado Exigente

```
Resumen del Veredicto de Jurado Exigente

   Criterio        │ Peso │ Nota     │ Ponderado│ Lo que el Jurado Exigente penaliza
  ─────────────────┼──────┼───────────┼───────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────
   Originalidad    │ 15%  │    7.2    │   1.080   │ Uso de identidades ciegas con hash salado sobre hardware ESP32; pero conceptualmente reinventa
                   │      │           │           │ esquemas PKI estándar sin interoperabilidad W3C DID.
   Ambición        │ 20%  │    7.8    │   1.560   │ Abarcaron hardware dedicado (ESP32), API en Go, panel en Svelte y PWA; el alcance dispersó al equipo
                   │      │           │           │ y dejó puntas a medio integrar.
   Ejecución       │ 20%  │    6.5    │   1.300   │ El flujo requiere hardware físico conectado por serial o endpoints locales con certificados
                   │      │           │           │ autofirmados; la demo en web depende de mocks locales.
   Impacto         │ 20%  │    7.0    │   1.400   │ Pedirle a comercios o usuarios un dispositivo ESP32 propio en Venezuela para verificar identidad
                   │      │           │           │ tiene una barrera económica y logística prohibitiva.
   Aspecto Técnico │ 25%  │    7.4    │   1.850   │ El backend en Go es limpio y concurrente; sin embargo, las llaves privadas de prueba quedaron en
                   │      │           │           │ repositorios visibles y la verificación ZK carece de pruebas formales.
   TOTAL           │ 100% │ 7.19 / 10 │ 7.19 / 10 │ INTERESANTE ENCRIPTACIÓN PERO CON ALTA FRICCIÓN DE ADOPCIÓN
```

## 5. Recomendaciones Arquitectónicas Específicas del Jurado
A diferencia de observaciones genéricas, estas son las intervenciones prioritarias que este código concreto requiere:
1. Migrar el formato de serialización binaria bin/sign a la especificación estándar W3C VC 2.0 con suites criptográficas BBS+ para firmas ciegas interoperables.
2. Eliminar la dependencia de llaves privadas locales en los vectores de prueba y desacoplar la base de datos PostgreSQL de la lógica criptográfica de validación.
3. Implementar un canal de comunicación BLE/NFC en la PWA para evitar el requerimiento de hardware físico ESP32 en terminales de verificación.

