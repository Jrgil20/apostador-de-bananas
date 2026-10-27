import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Track } from '../types';

interface FilterBarProps {
  search: string;
  onSearchChange: (val: string) => void;
  selectedTrack: string;
  onTrackChange: (track: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  tracks: Track[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  search,
  onSearchChange,
  selectedTrack,
  onTrackChange,
  sortBy,
  onSortChange,
  tracks,
}) => {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 mb-6 shadow-md backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por equipo, stack o problema..."
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-4 py-2 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-banana-500 transition"
          />
        </div>

        {/* Tracks Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          <button
            onClick={() => onTrackChange('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedTrack === 'all'
                ? 'bg-banana-500 text-neutral-950 shadow-md font-bold'
                : 'bg-neutral-800/80 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
            }`}
          >
            Todos (24)
          </button>
          {tracks.map((t) => (
            <button
              key={t}
              onClick={() => onTrackChange(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedTrack === t
                  ? 'bg-banana-500 text-neutral-950 shadow-md font-bold'
                  : 'bg-neutral-800/80 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 min-w-[200px]">
          <SlidersHorizontal className="w-4 h-4 text-neutral-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs font-semibold text-neutral-300 focus:outline-none focus:border-banana-500 transition"
          >
            <option value="market">Mayor Probabilidad de Mercado (%)</option>
            <option value="combined">Score Hackathon (Demo 60% + Código 40%)</option>
            <option value="technical">Mayor Calidad Técnica Real</option>
            <option value="recommended">Mayor Apuesta Sugerida</option>
            <option value="odds">Mayor Cuota de Mercado</option>
          </select>
        </div>
      </div>
    </div>
  );
};
