import { BetRecommendation, TeamEvaluation } from '../types';

export const INITIAL_BANANAS = 1000;
export const MAX_SINGLE_BET = 400;
export const MIN_BET = 10;

/**
 * Calcula la cuota decimal de mercado.
 * En un mercado de predicción real, la cuota es inversamente proporcional a la probabilidad de mercado.
 * Incorpora un margen de casa ('vig') estándar del 5-8%.
 */
export function calculateMarketOdds(technicalScore: number, finalMarketProb: number): number {
  if (technicalScore <= 2.5 || finalMarketProb <= 0) {
    return 0; // Descalificado o sin probabilidad de mercado
  }

  // Cuota de mercado real con spread: odds = 1 / (probabilidad normalizada)
  const prob = finalMarketProb / 100;
  const rawOdds = 0.95 / prob;

  // Clampear entre 1.40x y 75.00x para asegurar jugabilidad
  const clamped = Math.max(1.40, Math.min(75.0, rawOdds));
  return Math.round(clamped * 100) / 100;
}

/**
 * Motor de recomendación de apuestas calibrado:
 * - 40% Arquitectura y complejidad real de código
 * - 60% Ejecución en vivo, impacto y pitch en escenario
 * - Criterio de Kelly ajustado al valor esperado de mercado
 */
export function calculateBetRecommendation(
  team: TeamEvaluation,
  pitchScore: number,
  currentBankroll: number
): BetRecommendation {
  // 1. Puntaje combinado ponderado de hackathon (60% demo/pitch + 40% arquitectura técnica real)
  const combinedScore = Math.round((team.technicalScore * 0.40 + pitchScore * 0.60) * 100) / 100;
  
  const odds = calculateMarketOdds(team.technicalScore, team.finalMarketProb);
  
  if (odds === 0 || team.technicalScore <= 2.5 || team.finalMarketProb <= 0) {
    return {
      combinedScore,
      odds: 0,
      recommendedAmount: 0,
      confidenceTag: 'DESCALIFICADO',
      expectedValue: -1,
      analysisReason: 'Repositorio sin código funcional o sin tracción en el mercado de la hackathon.',
    };
  }

  // 2. Probabilidad implícita que estima el modelo basada en ejecución y tracción de mercado
  const modelProb = Math.min(0.95, Math.max(0.01, (combinedScore / 10) * (team.finalMarketProb / 100) * 2.8));

  // 3. Valor esperado (EV = modelProb * odds - 1)
  const expectedValue = Math.round((modelProb * odds - 1) * 100) / 100;

  // 4. Criterio de Kelly fraccional (proteger el bankroll contra volatilidad de hackathon)
  const b = odds - 1;
  const p = Math.max(0.01, Math.min(0.95, (team.finalMarketProb / 100) * (pitchScore / 7.0)));
  const q = 1 - p;
  const kellyFraction = Math.max(0, (b * p - q) / b);
  const fractionalKelly = kellyFraction * 0.40;

  let recommendedAmount = Math.round(currentBankroll * fractionalKelly);

  // Límites de riesgo
  if (recommendedAmount > MAX_SINGLE_BET) {
    recommendedAmount = MAX_SINGLE_BET;
  }
  if (recommendedAmount < MIN_BET && expectedValue > 0) {
    recommendedAmount = MIN_BET;
  }
  if (recommendedAmount > currentBankroll) {
    recommendedAmount = currentBankroll;
  }
  if (expectedValue <= 0 || team.finalMarketProb < 1.0) {
    recommendedAmount = 0;
  }

  // 5. Categorías de confianza basadas en la realidad técnica y el mercado
  let confidenceTag: BetRecommendation['confidenceTag'] = 'ESPECULATIVO';
  let analysisReason = '';

  if (team.isWinner || (team.finalMarketProb >= 30 && team.technicalScore >= 9.0)) {
    confidenceTag = 'SEGURO';
    analysisReason = 'Arquitectura 3D en 4 capas (Vitest, WebGL <300 draw calls, shaders GLSL) y resiliencia procedural en vivo. Ganador indiscutido.';
  } else if (team.finalMarketProb >= 10 && team.technicalScore >= 8.5) {
    confidenceTag = 'VALOR ALTO';
    analysisReason = `Excelente tracción (${team.finalMarketProb}%) con base técnica sólida (${team.implementationQuality}). Gran retorno esperado.`;
  } else if (team.finalMarketProb < 2.0 && team.technicalScore >= 8.0) {
    confidenceTag = 'TRAMPA';
    analysisReason = `Alerta de trampa: inflado con tests artificiales o código burocrático pero rechazado por el mercado (${team.finalMarketProb}%). No regales tus bananas.`;
  } else if (team.finalMarketProb >= 5.0 && pitchScore >= 8.0) {
    confidenceTag = 'VALOR ALTO';
    analysisReason = 'Fuerte tracción de mercado y gran demo en vivo. Cuota atractiva para diversificar.';
  } else if (team.finalMarketProb > 0 && team.finalMarketProb < 1.5) {
    confidenceTag = 'ESPECULATIVO';
    analysisReason = `Baja probabilidad real (${team.finalMarketProb}%). Solo para apuestas testimoniales de alto riesgo.`;
  } else {
    confidenceTag = expectedValue > 0 ? 'VALOR ALTO' : 'TRAMPA';
    analysisReason = expectedValue > 0 
      ? 'Retorno matemático positivo con riesgo moderado.' 
      : 'Cuota castigada o falta de tracción real para justificar el riesgo.';
  }

  return {
    combinedScore,
    odds,
    recommendedAmount,
    confidenceTag,
    expectedValue,
    analysisReason,
  };
}
