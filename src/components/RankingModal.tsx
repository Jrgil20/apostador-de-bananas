import React from 'react';
import { X, Trophy, ExternalLink } from 'lucide-react';
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
  if (!isOpen) return null;

  const sorted = [...teams].sort((a, b) => b.technicalScore - a.technicalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-banana-500/20 text-banana-400 flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white">
                Tabla Oficial de Auditoría Técnica
              </h2>
              <p className="text-xs text-neutral-400">
                Evaluación canónica de los 24 repositorios en su commit más reciente (HEAD)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
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
                  <th className="py-2.5 px-3 text-center">Tests</th>
                  <th className="py-2.5 px-3 text-center">LOC</th>
                  <th className="py-2.5 px-3 text-right">Nota Técnica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {sorted.map((team, idx) => (
                  <tr 
                    key={team.id}
                    className={`hover:bg-neutral-800/40 transition ${
                      idx === 0 ? 'bg-banana-500/5 font-bold' :
                      idx === 1 ? 'bg-neutral-800/30' :
                      idx === 2 ? 'bg-amber-950/20' : ''
                    }`}
                  >
                    <td className="py-3 px-3">
                      {idx === 0 && <span className="text-banana-400 font-black">🥇 #1</span>}
                      {idx === 1 && <span className="text-neutral-300 font-black">🥈 #2</span>}
                      {idx === 2 && <span className="text-amber-500 font-black">🥉 #3</span>}
                      {idx > 2 && <span className="text-neutral-500 font-semibold">#{idx + 1}</span>}
                    </td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        {team.name}
                        <a href={team.repoUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-banana-400">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="text-[10px] text-neutral-400 font-normal">{team.verdictLabel}</div>
                    </td>
                    <td className="py-3 px-3 text-neutral-400 whitespace-nowrap">{team.track}</td>
                    <td className="py-3 px-3 text-center font-mono">
                      {team.testsCount > 0 ? (
                        <span className="text-emerald-400 font-bold">{team.testsCount}</span>
                      ) : (
                        <span className="text-neutral-600">0</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-center font-mono text-neutral-400">
                      {team.loc > 0 ? `${(team.loc / 1000).toFixed(1)}k` : '-'}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className={`text-sm font-black px-2 py-0.5 rounded-lg ${
                        team.technicalScore >= 9 ? 'bg-emerald-500/20 text-emerald-300' :
                        team.technicalScore >= 8 ? 'bg-banana-500/20 text-banana-300' :
                        team.technicalScore >= 6 ? 'bg-amber-500/20 text-amber-300' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {team.technicalScore.toFixed(2)}
                      </span>
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
