import React, { useState, useEffect, useMemo } from 'react';
import { TEAMS_DATA } from './data/teams';
import { Bet, Track } from './types';
import { INITIAL_BANANAS, calculateBetRecommendation, calculateMarketOdds } from './domain/betting-engine';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { TeamCard } from './components/TeamCard';
import { BetSlip } from './components/BetSlip';
import { RankingModal } from './components/RankingModal';

const TRACKS: Track[] = ['🤝 Trust', '🚨 Emergencias', '🧊 Three-Dimensional', '🛡️ AI Security'];

export const App: React.FC = () => {
  // 1. Bankroll State with LocalStorage
  const [bankroll, setBankroll] = useState<number>(() => {
    const saved = localStorage.getItem('banana_bankroll');
    return saved !== null ? parseInt(saved, 10) : INITIAL_BANANAS;
  });

  // 2. Live Pitches State (teamId -> rating 1-10)
  const [pitches, setPitches] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('banana_pitches');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    const initial: Record<number, number> = {};
    TEAMS_DATA.forEach(t => { initial[t.id] = 6.0; });
    return initial;
  });

  // 3. Active Bets State
  const [bets, setBets] = useState<Bet[]>(() => {
    const saved = localStorage.getItem('banana_bets');
    if (saved) {
      try { return JSON.parse(saved); } catch {}
    }
    return [];
  });

  // UI state
  const [search, setSearch] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [sortBy, setSortBy] = useState('combined');
  const [isRankingOpen, setIsRankingOpen] = useState(false);
  const [isSlipOpen, setIsSlipOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('banana_bankroll', bankroll.toString());
  }, [bankroll]);

  useEffect(() => {
    localStorage.setItem('banana_pitches', JSON.stringify(pitches));
  }, [pitches]);

  useEffect(() => {
    localStorage.setItem('banana_bets', JSON.stringify(bets));
  }, [bets]);

  // Handle Bet placement
  const handlePlaceBet = (teamId: number, amount: number) => {
    if (amount <= 0 || amount > bankroll) return;

    const team = TEAMS_DATA.find((t) => t.id === teamId);
    if (!team) return;

    const pitchScore = pitches[teamId] ?? 6.0;
    const rec = calculateBetRecommendation(team, pitchScore, bankroll);
    if (rec.odds <= 0) return;

    setBankroll((prev) => prev - amount);

    setBets((prev) => {
      const existing = prev.find((b) => b.teamId === teamId);
      if (existing) {
        const newAmt = existing.amount + amount;
        return prev.map((b) =>
          b.teamId === teamId
            ? {
                ...b,
                amount: newAmt,
                potentialPayout: Math.round(newAmt * b.odds),
                timestamp: Date.now(),
              }
            : b
        );
      }
      return [
        ...prev,
        {
          teamId,
          teamName: team.name,
          amount,
          pitchScore,
          combinedScore: rec.combinedScore,
          odds: rec.odds,
          potentialPayout: Math.round(amount * rec.odds),
          timestamp: Date.now(),
        },
      ];
    });
  };

  // Handle Remove single bet
  const handleRemoveBet = (teamId: number) => {
    const bet = bets.find((b) => b.teamId === teamId);
    if (!bet) return;

    setBankroll((prev) => prev + bet.amount);
    setBets((prev) => prev.filter((b) => b.teamId !== teamId));
  };

  // Handle Clear All Bets
  const handleClearAll = () => {
    const totalRefund = bets.reduce((acc, b) => acc + b.amount, 0);
    setBankroll((prev) => prev + totalRefund);
    setBets([]);
  };

  // Handle Hard Reset
  const handleReset = () => {
    if (window.confirm('¿Reiniciar a 1.000 bananas y borrar todas tus apuestas?')) {
      setBankroll(INITIAL_BANANAS);
      setBets([]);
      const initial: Record<number, number> = {};
      TEAMS_DATA.forEach((t) => { initial[t.id] = 6.0; });
      setPitches(initial);
      localStorage.clear();
    }
  };

  // Total active calculations
  const totalStaked = useMemo(() => bets.reduce((acc, b) => acc + b.amount, 0), [bets]);
  const potentialTotalPayout = useMemo(() => bets.reduce((acc, b) => acc + b.potentialPayout, 0), [bets]);

  // Filter and sort teams
  const filteredTeams = useMemo(() => {
    return TEAMS_DATA.filter((team) => {
      const matchesSearch =
        team.name.toLowerCase().includes(search.toLowerCase()) ||
        team.summary.toLowerCase().includes(search.toLowerCase()) ||
        team.stack.some((s) => s.toLowerCase().includes(search.toLowerCase()));

      const matchesTrack = selectedTrack === 'all' || team.track.includes(selectedTrack);

      return matchesSearch && matchesTrack;
    }).sort((a, b) => {
      const pitchA = pitches[a.id] ?? 6.0;
      const pitchB = pitches[b.id] ?? 6.0;
      const combA = a.technicalScore * 0.6 + pitchA * 0.4;
      const combB = b.technicalScore * 0.6 + pitchB * 0.4;

      if (sortBy === 'combined') return combB - combA;
      if (sortBy === 'technical') return b.technicalScore - a.technicalScore;
      if (sortBy === 'odds') return calculateMarketOdds(b.technicalScore) - calculateMarketOdds(a.technicalScore);
      if (sortBy === 'tests') return b.testsCount - a.testsCount;
      if (sortBy === 'recommended') {
        const recA = calculateBetRecommendation(a, pitchA, bankroll);
        const recB = calculateBetRecommendation(b, pitchB, bankroll);
        return recB.recommendedAmount - recA.recommendedAmount;
      }
      return 0;
    });
  }, [search, selectedTrack, sortBy, pitches, bankroll]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-banana-500 selection:text-neutral-950">
      {/* Header */}
      <Header
        bankroll={bankroll}
        totalStaked={totalStaked}
        potentialTotalPayout={potentialTotalPayout}
        betsCount={bets.length}
        onReset={handleReset}
        onOpenRanking={() => setIsRankingOpen(true)}
        onOpenSlip={() => setIsSlipOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Banner Hero */}
        <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-banana-950/40 border border-neutral-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-banana-500/10 text-banana-400 border border-banana-500/20 text-xs font-bold mb-3">
              <span>🎯 Sistema de Cuotas Cuantificadas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Apostá tus bananas con ventaja matemática.
            </h2>
            <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
              Auditoría estricta de repositorios en <strong>HEAD</strong> combinada con tu calificación del <strong>pitch en vivo</strong> (1 al 10). El motor calcula el Valor Esperado (+EV) y te sugiere la postura óptima de tus 1.000 bananas.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button
              onClick={() => setIsRankingOpen(true)}
              className="px-5 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white border border-neutral-700 transition flex items-center justify-center gap-2"
            >
              🏆 Ver Tabla Auditoría HEAD
            </button>
            <button
              onClick={() => setIsSlipOpen(true)}
              className="px-5 py-3 rounded-2xl bg-banana-500 hover:bg-banana-400 text-xs font-black text-neutral-950 transition flex items-center justify-center gap-2 shadow-lg shadow-banana-500/20"
            >
              🍌 Ver Mis Apuestas ({bets.length})
            </button>
          </div>
        </div>

        {/* Filter and Sorting Bar */}
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          selectedTrack={selectedTrack}
          onTrackChange={setSelectedTrack}
          sortBy={sortBy}
          onSortChange={setSortBy}
          tracks={TRACKS}
        />

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeams.map((team) => {
            const currentBet = bets.find((b) => b.teamId === team.id)?.amount ?? 0;
            return (
              <TeamCard
                key={team.id}
                team={team}
                pitchScore={pitches[team.id] ?? 6.0}
                onPitchChange={(val) => setPitches((prev) => ({ ...prev, [team.id]: val }))}
                bankroll={bankroll}
                currentBet={currentBet}
                onPlaceBet={(amt) => handlePlaceBet(team.id, amt)}
              />
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-6 text-center text-xs text-neutral-500">
        <p>Apostador de Bananas 🍌 · Creado para la Platanus Hack 26: Caracas ft. Yummy Project</p>
      </footer>

      {/* Modals & Drawers */}
      <BetSlip
        isOpen={isSlipOpen}
        onClose={() => setIsSlipOpen(false)}
        bets={bets}
        onRemoveBet={handleRemoveBet}
        onClearAll={handleClearAll}
      />

      <RankingModal
        isOpen={isRankingOpen}
        onClose={() => setIsRankingOpen(false)}
        teams={TEAMS_DATA}
      />
    </div>
  );
};

export default App;
