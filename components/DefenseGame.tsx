
import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Code, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface Threat {
  text: string;
  type: 'SISR' | 'SLAM';
  color: string;
}

const threats: Threat[] = [
  { text: "Un hacker tente de pénétrer dans le serveur principal via une faille de protocole réseau critique.", type: "SISR", color: "text-cyan-500" },
  { text: "L'application mobile crashe car l'algorithme de tri consomme toute la mémoire disponible.", type: "SLAM", color: "text-emerald-500" },
  { text: "Le réseau Wi-Fi de l'entreprise est saturé par des flux de streaming non autorisés.", type: "SISR", color: "text-cyan-500" },
  { text: "Une injection SQL menace de siphonner la base de données utilisateur de notre site e-commerce.", type: "SLAM", color: "text-emerald-500" },
  { text: "Le pare-feu bloque par erreur toutes les connexions légitimes des employés en télétravail.", type: "SISR", color: "text-cyan-500" },
  { text: "La nouvelle fonctionnalité de paiement rejette systématiquement les cartes étrangères.", type: "SLAM", color: "text-emerald-500" },
  { text: "Le certificat SSL a expiré, rendant le site web inaccessible aux navigateurs modernes.", type: "SISR", color: "text-cyan-500" },
  { text: "La base de données rencontre un deadlock fatal lors de la validation simultanée de paniers.", type: "SLAM", color: "text-emerald-500" },
  { text: "L'infrastructure Cloud mondiale subit une attaque DDoS massive visant les DNS.", type: "SISR", color: "text-cyan-500" },
  { text: "L'IA générative intégrée au support client invente des fausses remises promotionnelles.", type: "SLAM", color: "text-emerald-500" }
];

export const DefenseGame: React.FC = () => {
  const [shuffledThreats] = useState(() => [...threats].sort(() => Math.random() - 0.5));
  const [qIndex, setQIndex] = useState(0);
  const [solvedCount, setSolvedCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameState, setGameState] = useState<'PLAYING' | 'WON' | 'LOST'>('PLAYING');

  const endGame = useCallback((success: boolean) => {
    setGameState(success ? 'WON' : 'LOST');
  }, []);

  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          endGame(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, endGame]);

  const handleDefend = (type: 'SISR' | 'SLAM') => {
    if (gameState !== 'PLAYING') return;

    if (shuffledThreats[qIndex].type === type) {
      setSolvedCount(prev => prev + 1);
      if (qIndex < shuffledThreats.length - 1) {
        setQIndex(prev => prev + 1);
        setTimeLeft(20);
      } else {
        endGame(true);
      }
    } else {
      setTimeLeft(prev => Math.max(0, prev - 5));
    }
  };

  if (gameState !== 'PLAYING') {
    const success = gameState === 'WON';
    return (
      <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in duration-700">
        <div className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] border-2 border-white/10 shadow-2xl space-y-10 max-w-4xl">
          <h2 className={`text-6xl font-black ${success ? 'text-emerald-500' : 'text-red-500'} uppercase`}>
            {success ? 'MISSION RÉUSSIE' : 'ÉCHEC SYSTÈME'}
          </h2>
          <div className="flex justify-center">
            {success ? <CheckCircle2 size={120} className="text-emerald-500" /> : <XCircle size={120} className="text-red-500" />}
          </div>
          <p className="text-3xl text-slate-300">
            Vous avez résolu <span className="text-emerald-400 font-black">{solvedCount}</span> sur {threats.length} urgences critiques.
          </p>
          <button 
            onClick={() => {
              setQIndex(0);
              setSolvedCount(0);
              setTimeLeft(20);
              setGameState('PLAYING');
            }}
            className="px-16 py-6 cyber-gradient rounded-3xl text-slate-950 font-black text-2xl uppercase hover:scale-105 transition-all"
          >
            Recommencer
          </button>
        </div>
      </div>
    );
  }

  const currentThreat = shuffledThreats[qIndex];

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto p-6">
      <div className="w-full space-y-8 text-center p-12 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-2xl">
        <div className="space-y-4">
          <h2 className="text-5xl font-black uppercase text-red-500 animate-pulse flex items-center justify-center gap-4">
            <AlertTriangle size={48} /> ALERTE SYSTÈME
          </h2>
          <p className="text-2xl text-slate-400 font-mono tracking-widest uppercase">Quelle équipe doit intervenir ?</p>
        </div>

        <div className="flex justify-between items-center px-10 font-mono text-3xl bg-black/40 py-6 rounded-2xl border border-white/5">
          <div className="text-slate-400">URGENCE : <span className="text-white font-black">{qIndex + 1} / {shuffledThreats.length}</span></div>
          <div className="text-slate-400">TEMPS : <span className={`font-black ${timeLeft < 5 ? 'text-red-500 animate-ping' : 'text-white'}`}>{timeLeft}s</span></div>
        </div>

        <div className="h-64 flex items-center justify-center bg-black/60 rounded-[2rem] border border-white/10 px-12 shadow-inner">
          <p className={`text-3xl md:text-4xl font-black italic leading-tight ${currentThreat.color}`}>
            "{currentThreat.text}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <button 
            onClick={() => handleDefend('SISR')} 
            className="group relative p-12 border-4 border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/20 hover:border-cyan-500 rounded-[2.5rem] font-black text-4xl transition-all flex flex-col items-center gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Shield size={48} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">SISR</span>
          </button>
          <button 
            onClick={() => handleDefend('SLAM')} 
            className="group relative p-12 border-4 border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/20 hover:border-emerald-500 rounded-[2.5rem] font-black text-4xl transition-all flex flex-col items-center gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Code size={48} className="text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">SLAM</span>
          </button>
        </div>
      </div>
    </div>
  );
};
