import React from 'react';
import { Coins, Flame, RotateCcw, Trophy } from 'lucide-react';

interface HeaderProps {
  bankroll: number;
  totalStaked: number;
  potentialTotalPayout: number;
  betsCount: number;
  onReset: () => void;
  onOpenRanking: () => void;
  onOpenSlip: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  bankroll,
  totalStaked,
  potentialTotalPayout,
  betsCount,
  onReset,
  onOpenRanking,
  onOpenSlip,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Logo & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-banana-400 to-amber-600 flex items-center justify-center shadow-lg shadow-banana-500/20 text-2xl">
              🍌
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-tight text-white">
                  Apostador de Bananas
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-banana-500/10 text-banana-400 border border-banana-500/30">
                  Hackathon 2026
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Auditoría Técnica en HEAD (60%) + Pitch en Vivo (40%)
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Bankroll */}
            <div className="flex items-center gap-2 bg-neutral-950/80 border border-neutral-800 px-3.5 py-1.5 rounded-xl">
              <Coins className="w-4 h-4 text-banana-400 animate-pulse" />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                  Saldo Disponible
                </div>
                <div className="text-lg font-black text-banana-300">
                  🍌 {bankroll.toLocaleString()}
                </div>
              </div>
            </div>

            {/* In Play */}
            <div 
              onClick={onOpenSlip}
              className="flex items-center gap-2 bg-neutral-950/80 border border-neutral-800 px-3 py-1.5 rounded-xl cursor-pointer hover:border-neutral-700 transition"
              title="Ver tickets de apuestas activas"
            >
              <Flame className="w-4 h-4 text-orange-400" />
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                  En Juego ({betsCount})
                </div>
                <div className="text-sm font-bold text-neutral-200">
                  🍌 {totalStaked.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Potential Return */}
            {potentialTotalPayout > 0 && (
              <div className="hidden md:flex items-center gap-2 bg-emerald-950/30 border border-emerald-800/40 px-3 py-1.5 rounded-xl">
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                    Retorno Potencial
                  </div>
                  <div className="text-sm font-black text-emerald-300">
                    🍌 {potentialTotalPayout.toLocaleString()}
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenRanking}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 border border-neutral-700 transition"
                title="Ver Tabla General del Jurado"
              >
                <Trophy className="w-3.5 h-3.5 text-banana-400" />
                <span className="hidden sm:inline">Tabla</span>
              </button>

              <button
                onClick={onReset}
                className="p-2 rounded-xl bg-neutral-800/60 hover:bg-red-950/40 text-neutral-400 hover:text-red-400 border border-neutral-800 hover:border-red-800/50 transition"
                title="Reiniciar a 1.000 Bananas"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
