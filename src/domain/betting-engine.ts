import { BetRecommendation, TeamEvaluation } from '../types';

export const INITIAL_BANANAS = 1000;
export const MAX_SINGLE_BET = 400;
export const MIN_BET = 10;

/**
 * Calcula la cuota decimal que ofrece la casa según la solidez técnica auditada.
 * A mayor nota técnica previa, menor cuota (favorito).
 */
export function calculateMarketOdds(technicalScore: number): number {
  if (technicalScore <= 2.5) {
    return 0; // Descalificado o sin código: la casa no acepta apuestas
  }
  // Escala logarítmica: de 1.25x para los favoritos (9.5) hasta 7.50x para sorpresas (6.0)
  const odds = 1.15 + Math.pow((10 - technicalScore) / 4.2, 1.85);
  return Math.round(odds * 100) / 100;
}

/**
 * Motor de recomendación de apuestas basado en Kelly Criterion y balance Técnico vs Pitch.
 */
export function calculateBetRecommendation(
  team: TeamEvaluation,
  pitchScore: number,
  currentBankroll: number
): BetRecommendation {
  // 1. Puntaje combinado ponderado: 60% código auditado + 40% performance de pitch
  const combinedScore = Math.round((team.technicalScore * 0.6 + pitchScore * 0.4) * 100) / 100;
  
  const odds = calculateMarketOdds(team.technicalScore);
  
  if (odds === 0 || team.technicalScore <= 2.5) {
    return {
      combinedScore,
      odds: 0,
      recommendedAmount: 0,
      confidenceTag: 'DESCALIFICADO',
      expectedValue: -1,
      analysisReason: 'Repositorio sin código fuente. Apostar acá es tirar bananas a la basura.',
    };
  }

  // 2. Probabilidad implícita estimada de que el jurado lo premie en el top
  const winProbability = Math.min(0.92, Math.max(0.05, Math.pow(combinedScore / 10, 2.1)));

  // 3. Valor esperado (EV = p * cuota - 1)
  const expectedValue = Math.round((winProbability * odds - 1) * 100) / 100;

  // 4. Criterio de Kelly fraccional (Quarter-Kelly para proteger el bankroll de 1.000 bananas)
  const b = odds - 1;
  const p = winProbability;
  const q = 1 - p;
  const kellyFraction = Math.max(0, (b * p - q) / b);
  const quarterKelly = kellyFraction * 0.35;

  let recommendedAmount = Math.round(currentBankroll * quarterKelly);

  // Ajustes de límites de apuesta
  if (recommendedAmount > MAX_SINGLE_BET) {
    recommendedAmount = MAX_SINGLE_BET;
  }
  if (recommendedAmount < MIN_BET && expectedValue > 0) {
    recommendedAmount = MIN_BET;
  }
  if (recommendedAmount > currentBankroll) {
    recommendedAmount = currentBankroll;
  }
  if (expectedValue <= 0) {
    recommendedAmount = 0;
  }

  // 5. Etiqueta de confianza y justificación
  let confidenceTag: BetRecommendation['confidenceTag'] = 'ESPECULATIVO';
  let analysisReason = '';

  if (combinedScore >= 9.0 && expectedValue > 0.15) {
    confidenceTag = 'SEGURO';
    analysisReason = `Código de titanio (${team.testsCount} tests) y pitch convincente. Apuesta fuerte obligatoria.`;
  } else if (pitchScore >= 8.5 && team.technicalScore >= 7.5 && expectedValue > 0.10) {
    confidenceTag = 'VALOR ALTO';
    analysisReason = 'El pitch compensa la deuda técnica y la cuota ofrece gran retorno esperado.';
  } else if (pitchScore >= 8.0 && team.technicalScore < 7.0) {
    confidenceTag = 'TRAMPA';
    analysisReason = 'Mucho humo en el escenario pero el repositorio tiene fisuras severas. No regales tus bananas.';
  } else if (team.testsCount === 0 && team.technicalScore > 7.0) {
    confidenceTag = 'ESPECULATIVO';
    analysisReason = 'Ambicioso pero sin tests. Riesgo de fallo en vivo frente al jurado.';
  } else {
    confidenceTag = expectedValue > 0 ? 'VALOR ALTO' : 'TRAMPA';
    analysisReason = expectedValue > 0 
      ? 'Retorno matemático positivo con riesgo moderado.' 
      : 'Cuota castigada o pitch insuficiente para justificar el riesgo.';
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
