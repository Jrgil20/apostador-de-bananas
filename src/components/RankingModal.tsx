import React, { useState } from 'react';
import { X, Trophy, ExternalLink, ArrowUpDown } from 'lucide-react';
import { TeamEvaluation } from '../types';

interface RankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  teams: TeamEvaluation[];
}

export const RankingModal: React.FC<RankingModalProps> = ({
  isOpen,
  onClose,
  teams,
}) => {
  const [sortKey, setSortKey] = useState<'market' | 'technical'>('market');

  if (!isOpen) return null;

  const sorted = [...teams].sort((a, b) => {
    if (sortKey === 'market') return b.finalMarketProb - a.finalMarketProb;
    return b.technicalScore - a.technicalScore;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-3xl h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-banana-500/20 text-banana-400 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                Tabla Oficial: Mercado Real vs. Calidad Técnica
              </h2>
              <p className="text-xs text-neutral-400">
                Comparativa de los 24 proyectos de la Platanus Hack 26: Caracas ft. Yummy Project
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort Toggle */}
            <button
              onClick={() => setSortKey((prev) => (prev === 'market' ? 'technical' : 'market'))}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 border border-neutral-700 transition font-bold"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-banana-400" />
              Ordenar por: {sortKey === 'market' ? 'Prob. Mercado (%)' : 'Nota Técnica'}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-neutral-800 text-neutral-400 uppercase font-bold text-[10px] tracking-wider">
                  <th className="py-2.5 px-3">Puesto</th>
                  <th className="py-2.5 px-3">Equipo</th>
                  <th className="py-2.5 px-3">Track</th>
                  <th className="py-2.5 px-3 text-center">Prob. Mercado Final</th>
                  <th className="py-2.5 px-3 text-right">Calidad Técnica</th>
                  <th className="py-2.5 px-3">Arquitectura Real</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {sorted.map((team, idx) => (
                  <tr 
                    key={team.id}
                    className={`hover:bg-neutral-800/40 transition ${
                      team.isWinner ? 'bg-banana-500/10 font-bold border-l-2 border-banana-400' :
                      idx === 1 ? 'bg-neutral-800/20' :
                      idx === 2 ? 'bg-amber-950/20' : ''
                    }`}
                  >
                    <td className="py-3 px-3 whitespace-nowrap">
                      {team.isWinner ? (
                        <span className="text-banana-400 font-black flex items-center gap-1">
                          🥇 #1 (GANADOR)
                        </span>
                      ) : idx === 1 && sortKey === 'market' ? (
                        <span className="text-neutral-300 font-black">🥈 #2</span>
                      ) : idx === 2 && sortKey === 'market' ? (
                        <span className="text-amber-500 font-black">🥉 #3</span>
                      ) : (
                        <span className="text-neutral-500 font-semibold">#{idx + 1}</span>
                      )}
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        {team.name}
                        <a href={team.repoUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-banana-400">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="text-[10px] text-neutral-400 font-normal line-clamp-1">{team.verdictLabel}</div>
                    </td>
                    <td className="py-3 px-3 text-neutral-400 whitespace-nowrap">{team.track}</td>
                    <td className="py-3 px-3 text-center font-mono">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-black ${
                        team.finalMarketProb >= 30 ? 'bg-banana-500/20 text-banana-300 border border-banana-500/40' :
                        team.finalMarketProb >= 10 ? 'bg-emerald-500/20 text-emerald-300' :
                        team.finalMarketProb >= 1 ? 'bg-neutral-800 text-neutral-300' :
                        'text-neutral-600'
                      }`}>
                        {team.finalMarketProb.toFixed(1)}%
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      <span className={`text-sm font-black px-2 py-0.5 rounded-lg ${
                        team.technicalScore >= 9.5 ? 'bg-banana-500/20 text-banana-300 border border-banana-500/30' :
                        team.technicalScore >= 9.0 ? 'bg-emerald-500/20 text-emerald-300' :
                        team.technicalScore >= 8.0 ? 'bg-blue-500/20 text-blue-300' :
                        team.technicalScore >= 7.0 ? 'bg-neutral-800 text-neutral-300' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {team.technicalScore.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-neutral-300 text-[11px] font-mono max-w-xs truncate">
                      {team.implementationQuality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
