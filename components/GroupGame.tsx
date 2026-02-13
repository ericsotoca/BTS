
import React, { useState, useEffect } from 'react';
import { Hand, Timer, CheckCircle, XCircle, ChevronRight, RefreshCw } from 'lucide-react';

interface Statement {
  text: string;
  isTrue: boolean;
  explanation: string;
}

export const GroupGame: React.FC = () => {
  const statements: Statement[] = [
    {
      text: "En 2030, 90% des contenus sur internet seront générés par une IA.",
      isTrue: true,
      explanation: "C'est la prévision de nombreux experts (Europol). Le défi sera de vérifier l'authenticité."
    },
    {
      text: "Une IA est capable de ressentir de la tristesse ou de la joie.",
      isTrue: false,
      explanation: "L'IA simule des émotions via le langage, mais elle ne ressent rien physiquement ou biologiquement."
    },
    {
      text: "On peut stocker toutes les données du monde dans une tasse de thé remplie d'ADN.",
      isTrue: true,
      explanation: "L'ADN est le support de stockage le plus dense connu. C'est une spécialité émergente du SISR."
    },
    {
      text: "Le métier de développeur aura disparu en 2030 à cause de l'IA.",
      isTrue: false,
      explanation: "Il va évoluer vers l'architecture et le pilotage d'IA, mais l'humain reste le décisionnaire final."
    },
    {
      text: "L'IA consomme plus d'eau que d'électricité pour refroidir les serveurs.",
      isTrue: true,
      explanation: "L'entraînement de GPT-4 a nécessité des millions de litres d'eau potable."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'IDLE' | 'COUNTDOWN' | 'REVEAL'>('IDLE');
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    let timer: number;
    if (phase === 'COUNTDOWN' && timeLeft > 0) {
      timer = window.setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setPhase('REVEAL');
    }
    return () => clearInterval(timer);
  }, [phase, timeLeft]);

  const startRound = () => {
    setTimeLeft(5);
    setPhase('COUNTDOWN');
  };

  const nextStatement = () => {
    if (currentIndex < statements.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setPhase('IDLE');
    } else {
      setCurrentIndex(0);
      setPhase('IDLE');
    }
  };

  const current = statements[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-6xl mx-auto p-10">
      <div className="mb-10">
        <div className="flex items-center justify-center gap-3 text-cyan-400 mb-4 font-black tracking-widest uppercase">
          <Hand className="animate-bounce" />
          <span>Jeu de groupe : Levé de main</span>
        </div>
        <h2 className="text-4xl font-light text-slate-400">
          Levez la main si c'est <span className="text-emerald-400 font-black">VRAI</span>, restez bas si c'est <span className="text-red-500 font-black">FAUX</span>.
        </h2>
      </div>

      <div className="w-full bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-16 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
        {phase === 'IDLE' && (
          <div className="space-y-12 animate-in fade-in zoom-in duration-500">
            <h3 className="text-5xl md:text-6xl font-black font-heading leading-tight italic">
              "{current.text}"
            </h3>
            <button 
              onClick={startRound}
              className="px-16 py-8 bg-cyan-500 text-slate-950 rounded-[2rem] text-3xl font-black hover:scale-110 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              LANCER LE SCAN (5s)
            </button>
          </div>
        )}

        {phase === 'COUNTDOWN' && (
          <div className="space-y-10 animate-pulse">
            <h3 className="text-5xl font-black text-slate-500 uppercase">Prenez position !</h3>
            <div className="text-[12rem] font-black font-heading leading-none text-white">
              {timeLeft}
            </div>
            <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-cyan-500 transition-all duration-1000 ease-linear" 
                style={{ width: `${(timeLeft / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {phase === 'REVEAL' && (
          <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
            <div className="flex items-center justify-center gap-6">
              {current.isTrue ? (
                <div className="flex flex-col items-center">
                  <CheckCircle size={100} className="text-emerald-500 mb-4" />
                  <span className="text-6xl font-black text-emerald-500 uppercase tracking-tighter">VRAI !</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <XCircle size={100} className="text-red-500 mb-4" />
                  <span className="text-6xl font-black text-red-500 uppercase tracking-tighter">FAUX !</span>
                </div>
              )}
            </div>
            <p className="text-3xl text-slate-300 font-light leading-relaxed max-w-4xl mx-auto">
              {current.explanation}
            </p>
            <button 
              onClick={nextStatement}
              className="flex items-center gap-3 mx-auto mt-10 text-slate-500 hover:text-white transition-colors text-2xl font-bold"
            >
              {currentIndex < statements.length - 1 ? "Question suivante" : "Recommencer"} <ChevronRight />
            </button>
          </div>
        )}
      </div>

      <div className="mt-12 text-slate-600 font-mono text-xl flex gap-8">
        <span>Question {currentIndex + 1} / {statements.length}</span>
        <span className="text-cyan-800">Préparez-vous à lever la main !</span>
      </div>
    </div>
  );
};
