
import React, { useState } from 'react';
import { ShieldCheck, Code2, BrainCircuit, CheckCircle2, Terminal, Layout, Rocket, Lock } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0); // Positive = SLAM, Negative = SISR
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      text: "Ton super-pouvoir informatique idéal ?",
      options: [
        { label: "Bâtir des univers et des applis", score: 1 },
        { label: "Rendre les systèmes invulnérables", score: -1 }
      ]
    },
    {
      text: "Face à une IA puissante, tu préfères...",
      options: [
        { label: "L'intégrer dans tes propres créations", score: 1 },
        { label: "Surveiller ses accès et ses flux réseau", score: -1 }
      ]
    },
    {
      text: "Un bug critique survient. Ta première réaction ?",
      options: [
        { label: "Je réécris et j'optimise l'algorithme", score: 1 },
        { label: "Je scanne les logs et les ports ouverts", score: -1 }
      ]
    },
    {
      text: "Ton environnement de travail rêvé ?",
      options: [
        { label: "Un éditeur de code stylé (VS Code/Cursor)", score: 1 },
        { label: "Un terminal Linux sombre et puissant", score: -1 }
      ]
    },
    {
      text: "Ce qui te fascine le plus dans la tech ?",
      options: [
        { label: "L'intelligence artificielle et le Web", score: 1 },
        { label: "Le Cloud, la Cyber et la 5G/6G", score: -1 }
      ]
    },
    {
      text: "Dans une équipe de braquage (façon Casa de Papel) ?",
      options: [
        { label: "Le faussaire qui crée des outils parfaits", score: 1 },
        { label: "Le cerveau qui contrôle la sécurité", score: -1 }
      ]
    },
    {
      text: "Ta vision d'un projet informatique réussi ?",
      options: [
        { label: "Une interface fluide et une IA géniale", score: 1 },
        { label: "Une infrastructure rapide et 100% sûre", score: -1 }
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
        <h3 className="text-2xl text-slate-400 mb-2 uppercase tracking-widest font-mono">Verdict de l'algorithme</h3>
        <h2 className={`text-5xl md:text-6xl font-black font-heading mb-6 ${isSlam ? 'text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]'}`}>
          {isSlam ? "DESTINATION : SLAM 🚀" : "DESTINATION : SISR 🛡️"}
        </h2>
        <div className="glass-panel p-8 rounded-[2.5rem] max-w-2xl mx-auto mb-8 border-white/10 shadow-2xl">
          <p className="text-xl text-slate-300 leading-relaxed">
            {isSlam 
              ? "Tu es un créatif logique. Tu as soif de bâtir, d'innover et de manipuler le code pour transformer le futur. Le développement et l'IA sont ton futur terrain de jeu."
              : "Tu es un stratège de l'ombre. Tu aimes la complexité des réseaux, la puissance du Cloud et l'adrénaline de la cybersécurité. Tu seras le rempart du monde numérique."}
          </p>
        </div>
        <button 
          onClick={() => { setStep(0); setScore(0); setFinished(false); }}
          className="px-6 py-2 rounded-full border border-white/10 text-slate-500 hover:text-white hover:bg-white/5 transition-all"
        >
          Recommencer le diagnostic
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto">
      <div className="mb-12 text-center w-full">
        <div className="flex justify-center gap-1 mb-6">
          {questions.map((_, i) => (
            <div key={i} className={`h-1.5 w-8 rounded-full transition-all duration-300 ${i <= step ? 'bg-cyan-500' : 'bg-white/10'}`} />
          ))}
        </div>
        <span className="text-cyan-400 font-mono text-sm mb-4 block uppercase tracking-tighter">Question {step + 1} sur {questions.length}</span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">{questions[step].text}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {questions[step].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleChoice(opt.score)}
            className="group relative p-8 glass-panel rounded-3xl text-xl font-bold transition-all hover:scale-[1.02] active:scale-95 border-2 border-transparent hover:border-cyan-500/50 flex flex-col items-center gap-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
