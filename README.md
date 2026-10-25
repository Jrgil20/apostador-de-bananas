# Apostador de Bananas 🍌

> **Jaula de apuestas cuantificadas para la Platanus Hack 26: Caracas ft. Yummy Project.**

Una plataforma interactiva para gestionar tu bankroll de **1.000 bananas** apostando a los proyectos de la hackathon con ventaja matemática.

---

## 🎯 Filosofía del Modelo de Apuestas

La mayoría de las personas apuestan a ciegas en las hackathons dejándose llevar únicamente por el carisma del orador. En el **Apostador de Bananas**, combinamos dos variables clave:

$$\text{Puntaje Combinado} = (\text{Auditoría Técnica en HEAD} \times 0.60) + (\text{Calificación del Pitch} \times 0.40)$$

1. **Auditoría Técnica en HEAD (60%):** Revisión exhaustiva y rigurosa del commit más reciente de cada uno de los 24 repositorios de la organización `platanus-hack` (calidad de código, presencia real de tests, arquitectura de capas, dependencias y despliegues operativos).
2. **Pitch en Vivo (40%):** Tu propia calificación en tiempo real (del 1 al 10) durante las presentaciones en el escenario.
3. **Kelly Criterion Fraccional:** El motor calcula el Valor Esperado (+EV) y la cuota de mercado para recomendarte cuántas bananas arriesgar sin quebrar tu bankroll.

---

## 🚀 Características

- 🍌 **Bankroll Inicial:** 1.000 bananas para distribuir en tus apuestas favoritas.
- 🎚️ **Slider de Pitch en Vivo:** Ajustá la nota de pitch de 1.0 a 10.0 y observá cómo cambian las cuotas y la recomendación en tiempo real.
- 💡 **Recomendaciones Cuantificadas:**
  - `SEGURO`: Proyectos con código de titanio (+150 tests) y gran pitch.
  - `VALOR ALTO`: Cuota generosa que compensa con creces el riesgo.
  - `ESPECULATIVO`: Alta ambición técnica pero 0 tests en el repositorio.
  - `TRAMPA`: Proyectos con mucho humo en el escenario pero repositorios frágiles o sin código.
  - `DESCALIFICADO`: Repositorios vacíos o sin entregable auditable.
- 📜 **Auditoría Completa Integrada:** Desplegá cada tarjeta para ver las fortalezas reales, dependencias y los señalamientos de lo que el jurado penaliza.
- 🏆 **Tabla Oficial de Auditoría:** Clasificación comparativa de los 24 equipos con podio técnico.
- 💾 **Persistencia Automática:** Tus apuestas y notas de pitch se guardan en `localStorage`.

---

## 📂 Informes de Auditoría

En la carpeta [`evaluaciones/`](./evaluaciones/) se encuentran las 24 fichas técnicas detalladas de cada equipo y el ranking consolidado:

- [`ranking-general.md`](./evaluaciones/ranking-general.md): Podio y análisis comparativo general.
- [`team-27.md`](./evaluaciones/team-27.md): MAMÁ (Top 1)
- [`team-4.md`](./evaluaciones/team-4.md): Agent Zero (Top 2)
- [`team-22.md`](./evaluaciones/team-22.md): VanGUARD (Top 3)
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
