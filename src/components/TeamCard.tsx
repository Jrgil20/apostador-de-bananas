import React, { useState } from 'react';
import { 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Code2, 
  Send 
} from 'lucide-react';
import { TeamEvaluation } from '../types';
import { calculateBetRecommendation } from '../domain/betting-engine';

interface TeamCardProps {
  team: TeamEvaluation;
  pitchScore: number;
  onPitchChange: (score: number) => void;
  bankroll: number;
  currentBet?: number;
  onPlaceBet: (amount: number) => void;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  team,
  pitchScore,
  onPitchChange,
  bankroll,
  currentBet = 0,
  onPlaceBet,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [customAmount, setCustomAmount] = useState<string>('');

  const recommendation = calculateBetRecommendation(team, pitchScore, bankroll);
  const isDisqualified = team.technicalScore <= 2.5;

  const handleCustomBet = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(customAmount, 10);
    if (!isNaN(val) && val > 0) {
      onPlaceBet(val);
      setCustomAmount('');
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'SEGURO':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'VALOR ALTO':
        return 'bg-banana-500/20 text-banana-300 border-banana-500/40';
      case 'ESPECULATIVO':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'TRAMPA':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-neutral-800 text-neutral-400 border-neutral-700';
    }
  };

  return (
    <div className={`relative bg-neutral-900 border rounded-2xl transition shadow-lg overflow-hidden flex flex-col justify-between ${
      currentBet > 0 ? 'border-banana-500/80 ring-1 ring-banana-500/30' : 'border-neutral-800 hover:border-neutral-700'
    }`}>
      {/* Top Banner / Badge if Bet Placed */}
      {currentBet > 0 && (
        <div className="bg-gradient-to-r from-banana-500 to-amber-600 px-4 py-1 text-neutral-950 font-black text-xs flex items-center justify-between">
          <span>APUESTA EN JUEGO</span>
          <span>🍌 {currentBet.toLocaleString()} (Paga 🍌 {Math.round(currentBet * recommendation.odds).toLocaleString()})</span>
        </div>
      )}

      <div className="p-5">
        {/* Header: ID, Name, Track, Odds */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded-md border border-neutral-800">
                Team {team.id}
              </span>
              <span className="text-xs font-semibold text-neutral-400">
                {team.track}
              </span>
            </div>
            <h3 className="text-lg font-black text-white hover:text-banana-400 transition">
              <a href={team.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                {team.name}
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </h3>
          </div>

          {/* Cuota / Odds Tag */}
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-neutral-400">Cuota</div>
            <div className={`text-xl font-black ${isDisqualified ? 'text-neutral-600' : 'text-banana-400'}`}>
              {isDisqualified ? '0.00x' : `${recommendation.odds.toFixed(2)}x`}
            </div>
          </div>
        </div>

        {/* Short Summary */}
        <p className="text-xs text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
          {team.summary}
        </p>

        {/* Technical Stats Strip */}
        <div className="grid grid-cols-3 gap-2 bg-neutral-950/70 p-2.5 rounded-xl border border-neutral-800/80 mb-4 text-center">
          <div>
            <div className="text-[10px] text-neutral-500 font-semibold uppercase">Nota Auditoría</div>
            <div className="text-sm font-black text-neutral-200">{team.technicalScore.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-500 font-semibold uppercase">Tests HEAD</div>
            <div className={`text-sm font-black ${team.testsCount > 0 ? 'text-emerald-400' : 'text-neutral-600'}`}>
              {team.testsCount}
            </div>
          </div>
          <div>
            <div className="text-[10px] text-neutral-500 font-semibold uppercase">Ponderado Total</div>
            <div className="text-sm font-black text-banana-300">
              {recommendation.combinedScore.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Live Pitch Slider (1 to 10) */}
        <div className="bg-neutral-950/90 border border-neutral-800 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-bold text-neutral-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-banana-400" />
              Calificación de Pitch en Vivo:
            </span>
            <span className={`font-black text-sm px-2 py-0.5 rounded-md ${
              pitchScore >= 8 ? 'bg-emerald-500/20 text-emerald-300' :
              pitchScore >= 5 ? 'bg-banana-500/20 text-banana-300' :
              'bg-red-500/20 text-red-400'
            }`}>
              {pitchScore.toFixed(1)} / 10
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={pitchScore}
            onChange={(e) => onPitchChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-banana-400"
          />

          <div className="flex justify-between text-[10px] text-neutral-500 mt-1 font-semibold">
            <span>1 (Humo/Caído)</span>
            <span>5 (Promedio)</span>
            <span>10 (Brillante)</span>
          </div>
        </div>

        {/* Betting Recommendation Box */}
        <div className="border border-neutral-800 bg-neutral-950/40 rounded-xl p-3 mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${getTagColor(recommendation.confidenceTag)}`}>
              {recommendation.confidenceTag}
            </span>
            {recommendation.expectedValue > 0 && (
              <span className="text-[11px] font-bold text-emerald-400">
                EV: +{(recommendation.expectedValue * 100).toFixed(0)}%
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-400 leading-snug mb-2.5">
            {recommendation.analysisReason}
          </p>

          {/* Quick Bet Button */}
          {!isDisqualified && recommendation.recommendedAmount > 0 && (
            <button
              onClick={() => onPlaceBet(recommendation.recommendedAmount)}
              disabled={bankroll < recommendation.recommendedAmount}
              className="w-full bg-banana-500 hover:bg-banana-400 disabled:bg-neutral-800 disabled:text-neutral-500 text-neutral-950 font-black text-xs py-2 rounded-xl transition flex items-center justify-center gap-1.5 shadow-md"
            >
              🍌 Apostar Sugerido: {recommendation.recommendedAmount} Bananas
            </button>
          )}

          {isDisqualified && (
            <div className="text-xs text-neutral-500 font-semibold text-center py-1">
              Apuestas bloqueadas (Sin entregable)
            </div>
          )}
        </div>

        {/* Custom Bet Form */}
        {!isDisqualified && (
          <div className="flex flex-col gap-2 pt-1 border-t border-neutral-800/80">
            <div className="flex items-center gap-1.5">
              {[10, 50, 100].map((amt) => (
                <button
                  key={amt}
                  onClick={() => onPlaceBet(amt)}
                  disabled={bankroll < amt}
                  className="flex-1 bg-neutral-800/80 hover:bg-neutral-700 disabled:opacity-40 text-neutral-300 text-xs font-bold py-1.5 rounded-lg border border-neutral-700 transition"
                >
                  +{amt}
                </button>
              ))}
              <button
                onClick={() => onPlaceBet(bankroll)}
                disabled={bankroll <= 0}
                className="px-2.5 bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-800/40 text-xs font-bold py-1.5 rounded-lg transition"
              >
                ALL IN
              </button>
            </div>

            <form onSubmit={handleCustomBet} className="flex gap-2">
              <input
                type="number"
                min="1"
                max={bankroll}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder={`Monto (Máx ${bankroll})`}
                className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-banana-500"
              />
              <button
                type="submit"
                disabled={!customAmount || parseInt(customAmount, 10) <= 0 || parseInt(customAmount, 10) > bankroll}
                className="bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-neutral-200 text-xs font-bold px-3 py-1.5 rounded-lg border border-neutral-700 transition flex items-center gap-1"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Accordion Footer: Technical Breakdown */}
      <div className="border-t border-neutral-800/80 bg-neutral-950/30">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-5 py-2.5 text-xs font-bold text-neutral-400 hover:text-neutral-200 flex items-center justify-between transition"
        >
          <span className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-banana-400" />
            Veredicto y Auditoría de Código
          </span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <div className="px-5 pb-5 pt-2 text-xs text-neutral-300 space-y-3 border-t border-neutral-800/40 bg-neutral-950/70">
            {/* Stack Tags */}
            <div>
              <div className="text-[10px] uppercase font-bold text-neutral-500 mb-1">Stack en HEAD</div>
              <div className="flex flex-wrap gap-1">
                {team.stack.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 text-[10px] font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Strengths */}
            {team.keyStrengths.length > 0 && (
              <div>
                <div className="text-[10px] uppercase font-bold text-emerald-400 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Fortalezas Clave
                </div>
                <ul className="list-disc list-inside text-neutral-400 space-y-0.5 text-[11px]">
                  {team.keyStrengths.map((st, i) => (
                    <li key={i}>{st}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Flaws / What Exigent Judge Penalizes */}
            <div>
              <div className="text-[10px] uppercase font-bold text-amber-400 mb-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Lo que el Jurado Penaliza
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-2.5 text-[11px] text-neutral-300 space-y-1">
                <p><strong className="text-neutral-400">Originalidad:</strong> {team.penalties.originality}</p>
                <p><strong className="text-neutral-400">Ambición:</strong> {team.penalties.ambition}</p>
                <p><strong className="text-neutral-400">Ejecución:</strong> {team.penalties.execution}</p>
                <p><strong className="text-neutral-400">Técnico:</strong> {team.penalties.technical}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
