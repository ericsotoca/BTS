
import React, { useState } from 'react';
import { ShieldCheck, Code2, BrainCircuit, CheckCircle2, Terminal, Layout, Rocket, Lock } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0); // Positive = SLAM, Negative = SISR
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      text: "Face à un bug critique, ma réaction naturelle est de plonger dans le code pour réécrire l'algorithme.",
      options: [
        { label: "C'est exactement moi (SLAM)", score: 1 },
        { label: "Pas trop, je préfère vérifier le serveur (SISR)", score: -1 }
      ]
    },
    {
      text: "L'idée de configurer une infrastructure Cloud capable de résister à une cyber-attaque mondiale m'excite.",
      options: [
        { label: "C'est un peu technique pour moi (SLAM)", score: 1 },
        { label: "Totalement, j'adore la sécurité (SISR)", score: -1 }
      ]
    },
    {
      text: "Je préfère passer ma journée à designer une interface magnifique que personne n'a jamais vue.",
      options: [
        { label: "OUI, la création visuelle ! (SLAM)", score: 1 },
        { label: "Non, je veux de la performance brute (SISR)", score: -1 }
      ]
    },
    {
      text: "Quand je pense à l'IA, je veux savoir comment l'entraîner plutôt que comment l'installer.",
      options: [
        { label: "L'entraîner ! (SLAM)", score: 1 },
        { label: "L'installer sur le réseau ! (SISR)", score: -1 }
      ]
    },
    {
      text: "Si je devais choisir, je préférerais être celui qui crée le jeu vidéo plutôt que celui qui gère les serveurs.",
      options: [
        { label: "Le Créateur (SLAM)", score: 1 },
        { label: "Le Gardien du Réseau (SISR)", score: -1 }
      ]
    },
    {
      text: "Les lignes de commande Linux me procurent un sentiment de puissance absolue.",
      options: [
        { label: "C'est un mal nécessaire (SLAM)", score: 1 },
        { label: "C'est mon univers quotidien (SISR)", score: -1 }
      ]
    },
    {
      text: "Ma vision du succès est une application utilisée par des millions de personnes sur leur smartphone.",
      options: [
        { label: "C'est mon objectif (SLAM)", score: 1 },
        { label: "Je préfère un système invisible mais vital (SISR)", score: -1 }
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
      <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in duration-700">
        <h3 className="text-3xl text-slate-500 mb-6 uppercase tracking-widest font-mono">Verdict de l'algorithme</h3>
        <h2 className={`text-6xl md:text-8xl font-black font-heading mb-10 leading-none tracking-tighter ${isSlam ? 'text-emerald-400 drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]' : 'text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]'}`}>
          {isSlam ? "SLAM 🚀" : "SISR 🛡️"}
        </h2>
        <div className="bg-white/5 backdrop-blur-3xl p-16 rounded-[4rem] max-w-4xl mx-auto mb-12 border border-white/10 shadow-2xl">
          <h4 className="text-2xl font-black uppercase text-white mb-6 tracking-widest">
            {isSlam ? "Solutions Logicielles et Applications Métier" : "Solutions d'Infrastructure, Systèmes et Réseaux"}
          </h4>
          <p className="text-2xl text-slate-300 leading-relaxed font-light">
            {isSlam 
              ? "Tu es un créatif logique. Tu as soif de bâtir, d'innover et de manipuler le code pour transformer le futur. Le développement et l'IA sont ton futur terrain de jeu."
              : "Tu es un stratège de l'ombre. Tu aimes la complexité des réseaux, la puissance du Cloud et l'adrénaline de la cybersécurité. Tu seras le rempart du monde numérique."}
          </p>
        </div>
        <button 
          onClick={() => { setStep(0); setScore(0); setFinished(false); }}
          className="px-10 py-4 rounded-full border border-white/10 text-slate-500 hover:text-white hover:bg-white/5 transition-all text-xl"
        >
          Recommencer le diagnostic
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto">
      <div className="mb-16 text-center w-full">
        <div className="flex justify-center gap-3 mb-10">
          {questions.map((_, i) => (
            <div key={i} className={`h-2.5 w-16 rounded-full transition-all duration-300 ${i <= step ? 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]' : 'bg-white/5'}`} />
          ))}
        </div>
        <span className="text-cyan-400 font-mono text-xl mb-6 block uppercase tracking-widest font-black">Question {step + 1} / {questions.length}</span>
        <h2 className="text-5xl md:text-6xl font-black font-heading leading-tight tracking-tighter max-w-4xl mx-auto">{questions[step].text}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-10">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleChoice(opt.score)}
            className="group relative p-16 bg-white/5 backdrop-blur-xl rounded-[4rem] text-3xl font-black transition-all hover:scale-[1.05] active:scale-95 border-2 border-transparent hover:border-cyan-500/50 flex flex-col items-center gap-4 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 leading-tight">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
