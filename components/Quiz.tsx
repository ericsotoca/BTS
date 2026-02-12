
import React, { useState } from 'react';
import { ShieldCheck, Code2, BrainCircuit, CheckCircle2 } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0); // Positive = SLAM, Negative = SISR
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      text: "Ton super-pouvoir idéal ?",
      options: [
        { label: "Bâtir des villes virtuelles", score: 1 },
        { label: "Protéger la cité des attaques", score: -1 }
      ]
    },
    {
      text: "Face à une IA puissante, tu...",
      options: [
        { label: "L'utilises pour coder plus vite", score: 1 },
        { label: "Surveilles ses accès réseau", score: -1 }
      ]
    },
    {
      text: "Un bug critique survient. Ta réaction ?",
      options: [
        { label: "Je réécris l'algorithme", score: 1 },
        { label: "Je vérifie les logs serveur", score: -1 }
      ]
    }
  ];

  const handleChoice = (points: number) => {
    setScore(score + points);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const isSlam = score > 0;
    return (
      <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in duration-700">
        <h3 className="text-2xl text-slate-400 mb-2 uppercase tracking-widest font-mono">Ton profil futuriste</h3>
        <h2 className={`text-5xl font-bold font-heading mb-6 ${isSlam ? 'text-green-400' : 'text-cyan-400'}`}>
          {isSlam ? "Cible : Lead Developer SLAM" : "Cible : Architecte Cyber SISR"}
        </h2>
        <div className="glass-panel p-8 rounded-3xl max-w-xl mx-auto mb-8 border-white/10">
          <p className="text-lg text-slate-300 leading-relaxed">
            {isSlam 
              ? "Tu aimes créer, inventer et transformer des idées en code. Le développement d'applications et l'IA sont ton terrain de jeu."
              : "Tu es le gardien. Tu aimes comprendre comment les systèmes communiquent et assurer que personne ne puisse briser la chaîne."}
          </p>
        </div>
        <button 
          onClick={() => { setStep(0); setScore(0); setFinished(false); }}
          className="text-slate-500 hover:text-white transition-colors underline underline-offset-4"
        >
          Recommencer le test
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-12 text-center">
        <span className="text-cyan-400 font-mono text-sm mb-4 block">Question {step + 1} / {questions.length}</span>
        <h2 className="text-4xl font-bold font-heading">{questions[step].text}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleChoice(opt.score)}
            className="p-8 glass-panel rounded-2xl text-xl font-bold hover:bg-white/5 hover:border-cyan-500/50 transition-all text-center"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};
