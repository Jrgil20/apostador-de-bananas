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
  if (technicalScore <= 1.5 || finalMarketProb <= 0) {
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
 * Motor de recomendación de apuestas calibrado con escala honesta:
 * - mus3o en 8.0 como techo técnico real de la hackathon
 * - 40% Arquitectura y complejidad real de código
 * - 60% Ejecución en vivo, impacto y pitch en escenario
 */
export function calculateBetRecommendation(
  team: TeamEvaluation,
  pitchScore: number,
  currentBankroll: number
): BetRecommendation {
  // 1. Puntaje combinado ponderado de hackathon (60% demo/pitch + 40% arquitectura técnica real)
  const combinedScore = Math.round((team.technicalScore * 0.40 + pitchScore * 0.60) * 100) / 100;
  
  const odds = calculateMarketOdds(team.technicalScore, team.finalMarketProb);
  
  if (odds === 0 || team.technicalScore <= 1.5 || team.finalMarketProb <= 0) {
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
  const modelProb = Math.min(0.95, Math.max(0.01, (combinedScore / 8.0) * (team.finalMarketProb / 100) * 2.5));

  // 3. Valor esperado (EV = modelProb * odds - 1)
  const expectedValue = Math.round((modelProb * odds - 1) * 100) / 100;

  // 4. Criterio de Kelly fraccional
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

  // 5. Categorías de confianza basadas en la realidad técnica honesta
  let confidenceTag: BetRecommendation['confidenceTag'] = 'ESPECULATIVO';
  let analysisReason = '';

  if (team.isWinner || (team.finalMarketProb >= 30 && team.technicalScore >= 7.5)) {
    confidenceTag = 'SEGURO';
    analysisReason = 'Techo técnico real de la hackathon (8.0). Arquitectura 3D en 4 capas, shaders GLSL y fallback procedural en vivo. Ganador indiscutido.';
  } else if (team.finalMarketProb >= 10 && team.technicalScore >= 5.0) {
    confidenceTag = 'VALOR ALTO';
    analysisReason = `Buena tracción (${team.finalMarketProb}%) con base técnica potable (${team.technicalScore}/10). Cuota competitiva con EV positivo.`;
  } else if (team.finalMarketProb < 2.0 && team.technicalScore >= 4.0) {
    confidenceTag = 'TRAMPA';
    analysisReason = `Alerta de trampa: código con apariencia pro o tests automáticos pero rechazado por el mercado (${team.finalMarketProb}%). No regales tus bananas.`;
  } else if (team.finalMarketProb >= 5.0 && pitchScore >= 7.5) {
    confidenceTag = 'VALOR ALTO';
    analysisReason = 'Fuerte tracción de mercado y gran demo en vivo. Cuota atractiva para diversificar.';
  } else if (team.finalMarketProb > 0 && team.finalMarketProb < 1.5) {
    confidenceTag = 'ESPECULATIVO';
    analysisReason = `Baja probabilidad real (${team.finalMarketProb}%) y código de nivel prototipo (${team.technicalScore}/10). Riesgo alto.`;
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
