# Apostador de Bananas 🍌

> **Jaula de apuestas cuantificadas para la Platanus Hack 26: Caracas ft. Yummy Project.**

Una plataforma interactiva para gestionar tu bankroll de **1.000 bananas** apostando a los proyectos de la hackathon con ventaja matemática calibrada contra los resultados reales del mercado.

---

## 🎯 Filosofía del Modelo Calibrado

La mayoría de las personas apuestan a ciegas en las hackathons dejándose llevar por el carisma del orador, mientras que las auditorías estáticas ingenuas caen en la trampa de premiar **tests unitarios de relleno generados en segundos por IA**.

En el **Apostador de Bananas v2.0**, calibramos la valuación combinando la realidad del mercado de predicción con la verdadera calidad de implementación de software:

$$\text{Puntaje Hackathon} = (\text{Demo en Vivo y Pitch} \times 0.60) + (\text{Arquitectura e Implementación Real} \times 0.40)$$

1. **Demo en Vivo y Tracción en Escenario (60%):** Capacidad del equipo para entregar un producto funcional ante el público y jurados, resolver imprevistos con resiliencia y generar impacto de mercado tangible.
2. **Arquitectura y Complejidad Real (40%):** Evaluación de ingeniería profunda (shaders GLSL, renderizado 3D con límites de draw calls, redes mesh BLE off-grid, sistemas serverless en edge y simulación física), eliminando el fetichismo de contar archivos de tests sintéticos.
3. **Cuotas y Kelly Criterion:** Cuotas inversamente proporcionales a la probabilidad del prediction market real, con Kelly fraccional para optimizar apuestas de Valor Esperado positivo (+EV).

---

## 🏆 Podio Oficial de la Hackathon

1. 🥇 **mus3o (Team 5) — 34.5% Market:** Ganador indiscutido. Palacio de la memoria 3D en primera persona, validación en 4 capas (Vitest sin GPU, `<300` draw calls WebGL), shaders GLSL de desgaste cromático y fallback procedural tolerante a fallos.
2. 🥈 **Arvi (Team 2) — 19.7% Market:** Subcampeón. Guía turístico con visión artificial interactiva y agentes de voz en tiempo real.
3. 🥉 **VanGUARD (Team 22) — 15.5% Market:** Firewall runtime en Cloudflare Workers Edge con SQL D1 para defensa de agentes de IA.

---

## 🚀 Características

- 🍌 **Bankroll Inicial:** 1.000 bananas para distribuir en tus apuestas favoritas.
- 🎚️ **Slider de Demo y Pitch en Vivo:** Ajustá la nota de pitch de 1.0 a 10.0 y observá cómo varían el Valor Esperado (+EV) y la recomendación matemática en tiempo real.
- 💡 **Recomendaciones Cuantificadas:**
  - `SEGURO`: Alta complejidad técnica real, resiliencia demostrada en vivo y favoritismo de mercado (ej. mus3o).
  - `VALOR ALTO`: Fuerte tracción de mercado (≥10%), ejecución técnica sólida y cuota con gran retorno matemático.
  - `ESPECULATIVO`: Alta ambición técnica pero con fricción de adopción o riesgo en escenario (ej. Tridi, Céflow).
  - `TRAMPA`: Proyectos inflados con tests artificiales o código burocrático pero con bajo volumen de mercado (ej. Aló Mamá, Agent Zero, Constancia).
  - `DESCALIFICADO`: Repositorios sin código fuente ni entregables auditables (Team 9).
- 📜 **Auditoría Completa Integrada:** Desplegá cada tarjeta para ver la arquitectura real, stack en HEAD y los señalamientos del jurado.
- 🏆 **Tabla Oficial de Mercado vs. Técnica:** Clasificación comparativa conmutativa entre probabilidad de mercado y calidad técnica.
- 💾 **Persistencia Automática:** Tus apuestas y notas de pitch se sincronizan en `localStorage`.

---

## 📂 Informes de Auditoría

En la carpeta [`evaluaciones/`](./evaluaciones/) se encuentran los reportes técnicos detallados y el ranking consolidado:

- [`ranking-general.md`](./evaluaciones/ranking-general.md): Podio oficial, comparativa de los 24 equipos y post-mortem sobre la falacia de tests de IA.
- [`team-5.md`](./evaluaciones/team-5.md): **mus3o (Ganador absoluto)** — Análisis del motor 3D, protocolo de 4 capas y fallback procedural.
- [`team-2.md`](./evaluaciones/team-2.md): **Arvi (Subcampeón)** — Guía de turismo inmersivo.
- [`team-22.md`](./evaluaciones/team-22.md): **VanGUARD (Top 3)** — Cloudflare Workers Edge security.
- [`team-15.md`](./evaluaciones/team-15.md): **Meshy (Top 4)** — Red mesh Bluetooth off-grid.
- [`team-12.md`](./evaluaciones/team-12.md): **Qubbot (Top 5)** — IDE visual 3D con agentes.
- ... y las fichas de los 24 equipos.

---

## 🛠️ Stack Tecnológico

- **Framework:** React 18 + Vite 5 + TypeScript (strict mode)
- **Estilos:** Tailwind CSS
- **Iconos:** Lucide React
- **Package Manager:** `pnpm` (obligatorio)

---

## 💻 Instalación y Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/Jrgil20/apostador-de-bananas.git
cd apostador-de-bananas

# Instalar dependencias con pnpm
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build
```

---

Creado para la **Platanus Hack 26: Caracas ft. Yummy Project**. ¡Que ganen las mejores bananas! 🍌
