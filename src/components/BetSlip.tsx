import React from 'react';
import { X, Trash2, Flame } from 'lucide-react';
import { Bet } from '../types';

interface BetSlipProps {
  isOpen: boolean;
  onClose: () => void;
  bets: Bet[];
  onRemoveBet: (teamId: number) => void;
  onClearAll: () => void;
}

export const BetSlip: React.FC<BetSlipProps> = ({
  isOpen,
  onClose,
  bets,
  onRemoveBet,
  onClearAll,
}) => {
  if (!isOpen) return null;

  const totalStaked = bets.reduce((acc, b) => acc + b.amount, 0);
  const totalPotential = bets.reduce((acc, b) => acc + b.potentialPayout, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-neutral-900 border-l border-neutral-800 h-full flex flex-col justify-between shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-banana-400" />
            <h2 className="text-base font-black text-white">
              Talonario de Apuestas ({bets.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bets List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {bets.length === 0 ? (
            <div className="text-center py-16 text-neutral-500">
              <div className="text-4xl mb-3">🍌</div>
              <p className="text-sm font-semibold">No tenés apuestas activas</p>
              <p className="text-xs text-neutral-600 mt-1">
                Elegí un equipo, ajustá la nota del pitch y apostá tus bananas.
              </p>
            </div>
          ) : (
            bets.map((bet) => (
              <div
                key={bet.teamId}
                className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 flex items-start justify-between gap-3 shadow-md"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-400">Team {bet.teamId}</div>
                  <div className="text-sm font-black text-white">{bet.teamName}</div>
                  <div className="text-xs text-neutral-400 mt-1 flex items-center gap-2">
                    <span>Pitch: <strong className="text-neutral-200">{bet.pitchScore.toFixed(1)}</strong></span>
                    <span>•</span>
                    <span>Cuota: <strong className="text-banana-400">{bet.odds.toFixed(2)}x</strong></span>
                  </div>
                  <div className="text-xs mt-2 flex items-center gap-2">
                    <span className="font-bold text-banana-300">🍌 {bet.amount.toLocaleString()}</span>
                    <span className="text-neutral-500">→</span>
                    <span className="font-black text-emerald-400">Paga 🍌 {bet.potentialPayout.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveBet(bet.teamId)}
                  className="p-1.5 rounded-lg text-neutral-500 hover:text-red-400 hover:bg-neutral-900 transition"
                  title="Cancelar apuesta y recuperar bananas"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {bets.length > 0 && (
          <div className="p-4 border-t border-neutral-800 bg-neutral-950/70 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Total Bananas Apostadas:</span>
                <span className="font-bold text-white">🍌 {totalStaked.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>Retorno Máximo Posible:</span>
                <span className="text-sm font-black">🍌 {totalPotential.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={onClearAll}
              className="w-full py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-bold rounded-xl transition"
            >
              Cancelar Todas las Apuestas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
