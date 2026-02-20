
import React, { useState } from 'react';
import { GripVertical, CheckCircle2, ArrowDown } from 'lucide-react';

interface SalaryItem {
  id: string;
  label: string;
  value: number;
}

const initialData: SalaryItem[] = [
  { id: 'ia', label: "IA ENGINEER", value: 4500 },
  { id: 'cloud', label: "CLOUD ARCHITECT", value: 3800 },
  { id: 'sisr', label: "EXPERT CYBER / SISR", value: 3200 },
  { id: 'mob', label: "MOBILE DEV", value: 2900 }
];

const sortedData = [...initialData].sort((a, b) => b.value - a.value);

export const SalaryGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(() => [...initialData].sort(() => Math.random() - 0.5));
  const [reveal, setReveal] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newOrder = [...currentOrder];
    const item = newOrder.splice(draggedIndex, 1)[0];
    newOrder.splice(index, 0, item);
    setCurrentOrder(newOrder);
    setDraggedIndex(index);
  };

  const handleDrop = () => {
    setDraggedIndex(null);
  };

  const checkSalary = () => {
    const allCorrect = currentOrder.every((item, i) => item.id === sortedData[i].id);
    if (allCorrect) {
      setReveal(true);
    }
  };

  const revealSalary = () => {
    setCurrentOrder([...sortedData]);
    setReveal(true);
  };

  if (!gameStarted) {
    return (
      <div className="text-center space-y-12 max-w-4xl mx-auto h-full flex flex-col justify-center animate-in fade-in duration-700">
        <h2 className="text-6xl font-black uppercase tracking-tighter">#2 DÉFI SALAIRES</h2>
        <p className="text-3xl text-slate-400 italic font-light">Devinez la hiérarchie des salaires juniors en 2030...</p>
        <button 
          onClick={() => setGameStarted(true)} 
          className="px-20 py-10 cyber-gradient text-slate-950 font-black rounded-[3rem] text-5xl hover:scale-110 transition-transform shadow-[0_0_50px_rgba(6,182,212,0.3)]"
        >
          LANCER LE DÉFI
        </button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-10 max-w-5xl mx-auto h-full flex flex-col justify-center p-6">
      <div className="space-y-4">
        <h2 className="text-5xl font-black uppercase tracking-tighter">CLASSEMENT SALAIRE <span className="text-cyan-400">(Junior)</span></h2>
        <p className="text-2xl text-slate-400">Ordonnez du <span className="text-emerald-400 font-black">PLUS HAUT</span> au <span className="text-cyan-400 font-black">PLUS BAS</span>.</p>
      </div>

      <div className="flex flex-col gap-5 w-full max-w-2xl mx-auto">
        {currentOrder.map((item, index) => {
          const isCorrect = item.id === sortedData[index].id;
          return (
            <div 
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={handleDrop}
              className={`group p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-between transition-all border-2 cursor-grab active:cursor-grabbing ${isCorrect ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 hover:border-white/20'}`}
            >
              <div className="flex items-center gap-8">
                <span className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-xl font-black ${isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-white/10 text-white'}`}>
                  {index + 1}
                </span>
                <span className="font-black text-3xl tracking-tight">{item.label}</span>
              </div>
              <div className="flex items-center gap-8">
                {reveal && (
                  <span className="text-cyan-400 font-mono text-3xl font-black animate-in slide-in-from-right duration-500">
                    {item.value}€
                  </span>
                )}
                {isCorrect ? (
                  <CheckCircle2 className="text-emerald-500 w-10 h-10" />
                ) : (
                  <GripVertical className="text-slate-600 group-hover:text-white transition-colors w-10 h-10" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-8 justify-center mt-6">
        <button 
          onClick={checkSalary} 
          className="px-12 py-6 cyber-gradient text-slate-950 font-black rounded-3xl text-2xl hover:scale-105 transition-all shadow-xl"
        >
          VÉRIFIER
        </button>
        <button 
          onClick={revealSalary} 
          className="px-10 py-6 bg-white/5 border border-white/20 font-black rounded-3xl text-2xl hover:bg-white/10 transition-all"
        >
          VOIR LA RÉPONSE
        </button>
      </div>
      
      <div className="flex items-center justify-center gap-4 text-slate-600 font-mono">
        <ArrowDown size={20} />
        <span>Glissez-déposez pour réorganiser</span>
      </div>
    </div>
  );
};
