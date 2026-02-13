
import React, { useState, useEffect } from 'react';
import { Sparkles, RotateCcw, Terminal, AlertTriangle, ShieldCheck } from 'lucide-react';

export const Hangman: React.FC = () => {
  const targetWord = "ADAPTATION";
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState(0);
  const [won, setWon] = useState(false);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || won || errors >= 6) return;

    const newGuessed = [...guessedLetters, letter];
    setGuessedLetters(newGuessed);

    if (!targetWord.includes(letter)) {
      setErrors(errors + 1);
    }
  };

  useEffect(() => {
    const isWon = targetWord.split("").every(char => guessedLetters.includes(char));
    if (isWon) setWon(true);
  }, [guessedLetters]);

  const reset = () => {
    setGuessedLetters([]);
    setErrors(0);
    setWon(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center max-w-6xl mx-auto">
      <div className="mb-12 space-y-4">
        <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono text-xl uppercase tracking-widest font-black">
          <Terminal size={24} />
          <span>System.Competence_Audit</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black font-heading">Devinez le mot clé de 2030</h2>
        <p className="text-2xl text-slate-400 italic">Astuce : C'est votre capacité à ne pas rester figé.</p>
      </div>

      <div className="flex gap-4 mb-16 justify-center flex-wrap">
        {targetWord.split("").map((char, i) => (
          <div 
            key={i} 
            className={`w-14 h-20 md:w-20 md:h-24 border-b-8 flex items-center justify-center text-5xl md:text-7xl font-black transition-all duration-500 ${guessedLetters.includes(char) ? 'border-cyan-500 text-white translate-y-0 scale-110' : 'border-slate-800 text-transparent translate-y-4 opacity-30'}`}
          >
            {char}
          </div>
        ))}
      </div>

      {!won && errors < 6 ? (
        <div className="w-full space-y-12">
          <div className="max-w-4xl mx-auto grid grid-cols-7 md:grid-cols-13 gap-3">
            {alphabet.map(letter => {
              const isGuessed = guessedLetters.includes(letter);
              const isCorrect = isGuessed && targetWord.includes(letter);
              const isWrong = isGuessed && !targetWord.includes(letter);

              return (
                <button
                  key={letter}
                  onClick={() => handleGuess(letter)}
                  disabled={isGuessed}
                  className={`aspect-square flex items-center justify-center rounded-2xl font-black text-2xl transition-all border-2 ${
                    isCorrect ? 'bg-emerald-500 border-emerald-400 text-slate-900 scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]' :
                    isWrong ? 'bg-red-500/20 border-red-500/50 text-red-500 opacity-30 cursor-not-allowed' :
                    'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50 hover:scale-110 active:scale-90'
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center justify-center gap-10">
            <div className="flex gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={`w-12 h-3 rounded-full ${i < errors ? 'bg-red-500 shadow-[0_0_15px_#ef4444]' : 'bg-white/10'}`}></div>
              ))}
            </div>
            <div className="font-mono text-xl text-red-500 uppercase font-black tracking-tighter flex items-center gap-2">
              <AlertTriangle size={20} /> Integrity: {Math.max(0, 100 - (errors * 16.6))}%
            </div>
          </div>
        </div>
      ) : won ? (
        <div className="animate-in zoom-in duration-700 bg-white/5 backdrop-blur-3xl border-2 border-cyan-500 p-16 rounded-[4rem] max-w-4xl shadow-[0_0_80px_rgba(6,182,212,0.2)]">
          <div className="flex items-center justify-center gap-6 text-cyan-400 mb-8">
             <ShieldCheck size={64} className="animate-pulse" />
             <h3 className="text-6xl font-black uppercase tracking-widest">DÉCRYPTÉ !</h3>
          </div>
          <p className="text-3xl text-white font-light mb-10 leading-relaxed italic">
            L' <span className="text-cyan-400 font-black not-italic underline">ADAPTATION</span> est la clé absolue. <br />
            En SIO, ce que vous apprenez aujourd'hui sera le socle de ce que vous inventerez demain.
          </p>
          <button 
            onClick={reset}
            className="flex items-center gap-3 mx-auto px-10 py-5 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all text-2xl"
          >
            <RotateCcw size={24} /> Reset Simulation
          </button>
        </div>
      ) : (
        <div className="animate-in slide-in-from-top duration-500 bg-red-500/10 border-2 border-red-500 p-16 rounded-[4rem] max-w-4xl">
          <h3 className="text-5xl font-black text-red-500 uppercase mb-6">Système Verrouillé</h3>
          <p className="text-2xl text-slate-300 mb-10">Vous avez échoué à identifier la compétence clé. Le futur n'attend pas.</p>
          <button onClick={reset} className="px-12 py-6 bg-red-500 text-white rounded-full font-black text-2xl hover:scale-105 transition-all">RÉESSAYER</button>
        </div>
      )}
    </div>
  );
};
