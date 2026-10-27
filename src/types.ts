export type Track = '🤝 Trust' | '🚨 Emergencias' | '🧊 Three-Dimensional' | '🛡️ AI Security' | 'Desconocido';

export interface TeamEvaluation {
  id: number;
  name: string;
  track: Track;
  technicalScore: number;
  originalityScore: number;
  ambitionScore: number;
  executionScore: number;
  impactScore: number;
  architectureScore: number;
  finalMarketProb: number; // Probabilidad final real en el mercado (%)
  verdictLabel: string;
  summary: string;
  stack: string[];
  loc: number;
  implementationQuality: string; // Diagnóstico de complejidad real (no vanidad de tests)
  repoUrl: string;
  keyStrengths: string[];
  criticalFlaws: string[];
  isWinner?: boolean;
  penalties: {
    originality: string;
    ambition: string;
    execution: string;
    impact: string;
    technical: string;
  };
}

export interface Bet {
  teamId: number;
  teamName: string;
  amount: number;
  pitchScore: number;
  combinedScore: number;
  odds: number;
  potentialPayout: number;
  timestamp: number;
}

export interface BetRecommendation {
  combinedScore: number;
  odds: number;
  recommendedAmount: number;
  confidenceTag: 'SEGURO' | 'VALOR ALTO' | 'ESPECULATIVO' | 'TRAMPA' | 'DESCALIFICADO';
  expectedValue: number;
  analysisReason: string;
}
