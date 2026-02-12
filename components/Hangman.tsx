
import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export const Hangman: React.FC = () => {
  const targetWord = "ADAPTATION";
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [errors, setErrors] = useState(0);
  const [won, setWon] = useState(false);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || won) return;

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
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="mb-8">
        <h2 className="text-4xl font-bold font-heading mb-4">La compétence n°1 en 2030 ?</h2>
        <p className="text-slate-400">Devinez le mot clé (Astuce : c'est votre capacité à évoluer)</p>
      </div>

      <div className="flex gap-4 mb-12 justify-center flex-wrap">
        {targetWord.split("").map((char, i) => (
          <div 
            key={i} 
            className={`w-12 h-16 md:w-16 md:h-20 border-b-4 flex items-center justify-center text-4xl md:text-5xl font-black transition-all ${guessedLetters.includes(char) ? 'border-cyan-500 text-white translate-y-0' : 'border-slate-700 text-transparent translate-y-2'}`}
          >
            {char}
          </div>
        ))}
      </div>

      {!won ? (
        <div className="max-w-3xl flex flex-wrap gap-2 justify-center">
          {alphabet.map(letter => {
            const isGuessed = guessedLetters.includes(letter);
            const isCorrect = isGuessed && targetWord.includes(letter);
            const isWrong = isGuessed && !targetWord.includes(letter);

            return (
              <button
                key={letter}
                onClick={() => handleGuess(letter)}
                disabled={isGuessed}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-lg font-bold transition-all border-2 ${
                  isCorrect ? 'bg-cyan-500 border-cyan-400 text-slate-900 scale-90' :
                  isWrong ? 'bg-red-500/20 border-red-500/50 text-red-400 opacity-50' :
                  'bg-white/5 border-white/10 text-white hover:bg-white/20'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="animate-in zoom-in duration-500 bg-cyan-500/10 border-2 border-cyan-500 p-8 rounded-[2rem] max-w-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)]">
          <div className="flex items-center justify-center gap-4 text-cyan-400 mb-4">
             <Sparkles size={32} className="animate-pulse" />
             <h3 className="text-3xl font-black uppercase tracking-widest">GAGNÉ !</h3>
             <Sparkles size={32} className="animate-pulse" />
          </div>
          <p className="text-xl text-white font-medium mb-4 leading-relaxed">
            L' <span className="text-cyan-400 font-black">ADAPTATION</span> est la clé. En informatique, ce que vous apprenez aujourd'hui sera obsolète dans 3 ans. Savoir changer est votre plus grande force.
          </p>
          <button 
            onClick={reset}
            className="flex items-center gap-2 mx-auto text-slate-500 hover:text-white transition-colors"
          >
            <RotateCcw size={16} /> Rejouer
          </button>
        </div>
      )}

      <div className="mt-12 text-slate-500 font-mono text-sm">
        Erreurs : {errors} | <span className="text-cyan-400 italic">Interrogez la classe pour les lettres !</span>
      </div>
    </div>
  );
};
