
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Code2, 
  TrendingUp, 
  BrainCircuit, 
  Repeat, 
  CheckCircle2,
  QrCode,
  ArrowRight,
  HelpCircle,
  Eye
} from 'lucide-react';
import { SlideWrapper } from './components/SlideWrapper';
import { Quiz } from './components/Quiz';

const InteractiveSection: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 transition-all">
      <div className="flex items-center gap-4 mb-2">
        <HelpCircle className="text-cyan-400 animate-bounce" />
        <p className="text-xl font-bold text-white italic">{question}</p>
      </div>
      {!show ? (
        <button 
          onClick={() => setShow(true)}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg font-bold hover:scale-105 transition-transform"
        >
          <Eye size={18} /> Voir la réponse / l'analyse
        </button>
      ) : (
        <div className="mt-4 text-cyan-400 font-medium animate-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 0, prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slides = [
    // 1. Home
    <div key="s0" className="flex flex-col items-center justify-center text-center h-full relative">
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Cyber Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>
      <div className="z-10 px-4">
        <div className="mb-6 px-6 py-2 rounded-full border-2 border-cyan-500 bg-cyan-500/20 text-cyan-300 text-lg font-bold tracking-widest uppercase animate-pulse inline-block">
          Orientation Futur 2026-2030
        </div>
        <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 leading-tight drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
          BTS SIO <span className="text-transparent bg-clip-text cyber-gradient">NEXT-GEN</span>
        </h1>
        <p className="text-2xl text-slate-300 max-w-3xl mb-12 font-medium">
          Découvrez la filière informatique qui domine la prochaine décennie.
        </p>
        <button onClick={nextSlide} className="px-10 py-5 cyber-gradient rounded-full text-slate-950 text-xl font-black hover:scale-110 transition-transform shadow-[0_0_30px_rgba(34,197,94,0.4)]">
          LANCER L'IMMERSION
        </button>
      </div>
    </div>,

    // 2. BTS SIO en 90s
    <div key="s1" className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 border-l-8 border-cyan-500 pl-6">
            Le BTS SIO en 90s ⚡
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400"><Repeat /></div>
              <div>
                <h3 className="text-xl font-bold">Alternance Généralisée</h3>
                <p className="text-slate-400">Tu es payé pour apprendre. 0€ de frais de scolarité.</p>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg text-green-400"><TrendingUp /></div>
              <div>
                <h3 className="text-xl font-bold">Salaires 2026-2030</h3>
                <p className="text-slate-400">Le ticket d'entrée junior grimpe à 2 800€ net.</p>
              </div>
            </div>
          </div>
          <InteractiveSection 
            question="À votre avis, combien d'emplois seront créés dans l'IT d'ici 2030 ?"
            answer="Environ 190 000 postes rien qu'en France. On est en pénurie totale !"
          />
        </div>
        <div className="hidden lg:block rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000" className="w-full h-[500px] object-cover" alt="Tech Workplace" />
        </div>
      </div>
    </div>,

    // 3. Comparatif 2030
    <div key="s2" className="h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold font-heading mb-10 text-center">SISR vs SLAM : Duel de Géants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border-cyan-500/30 relative group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="SISR" />
          <h3 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3"><ShieldCheck size={32} /> SISR (Infrastructures)</h3>
          <p className="text-slate-300 text-lg mb-4">Le gardien du temple. Tu gères les serveurs, le cloud et la <span className="text-cyan-400 font-bold underline">Cyber-sécurité</span>.</p>
        </div>
        <div className="glass-panel p-8 rounded-3xl border-green-500/30 relative group overflow-hidden">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="SLAM" />
          <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center gap-3"><Code2 size={32} /> SLAM (Applications)</h3>
          <p className="text-slate-300 text-lg mb-4">L'architecte. Tu crées des logiciels, des apps mobiles et tu domptes l'<span className="text-green-400 font-bold underline">IA appliquée</span>.</p>
        </div>
      </div>
      <InteractiveSection 
        question="Question : Levez la main ceux qui pensent que l'IA va faire disparaître les développeurs ?"
        answer="Faux ! L'IA devient votre copilote. On ne code plus moins, on code 10x plus vite et plus complexe."
      />
    </div>,

    // 4. Journée SISR
    <div key="s3" className="h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.8)]"><ShieldCheck /></div>
            <h2 className="text-4xl font-bold font-heading italic">Mission : Expert Cyber (SISR)</h2>
          </div>
          <div className="space-y-4">
            {[
              { time: "09:00", task: "Analyse des tentatives d'intrusion de la nuit (SOC)." },
              { time: "11:00", task: "Config d'un cluster Cloud crypté pour une banque." },
              { time: "15:00", task: "Pentest : J'essaie de hacker mon propre système." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-cyan-400 font-mono font-bold">{item.time}</div>
                <div className="text-lg text-slate-200">{item.task}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden border-2 border-cyan-500/50">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover shadow-inner" alt="Cyber Security Ops" />
        </div>
      </div>
    </div>,

    // 5. Journée SLAM
    <div key="s4" className="h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-green-500 text-slate-950 shadow-[0_0_15px_rgba(34,197,94,0.8)]"><Code2 /></div>
            <h2 className="text-4xl font-bold font-heading italic">Mission : IA-Architect (SLAM)</h2>
          </div>
          <div className="space-y-4">
            {[
              { time: "10:00", task: "Sprint avec mon IA Copilot pour générer un module de paiement." },
              { time: "14:00", task: "Test d'une App de réalité augmentée pour le commerce." },
              { time: "16:30", task: "Push en production sur des serveurs mondiaux." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-green-400 font-mono font-bold">{item.time}</div>
                <div className="text-lg text-slate-200">{item.task}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden border-2 border-green-500/50">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Coding" />
        </div>
      </div>
    </div>,

    // 6. Chiffres Clés
    <div key="s5" className="h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold font-heading mb-8 text-center text-white">Pourquoi choisir le SIO en 2026 ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-8 glass-panel rounded-3xl text-center border-b-4 border-cyan-500">
          <div className="text-5xl font-black text-cyan-400 mb-2">98%</div>
          <div className="text-lg font-bold">D'embauche immédiate</div>
        </div>
        <div className="p-8 glass-panel rounded-3xl text-center border-b-4 border-green-500">
          <div className="text-5xl font-black text-green-400 mb-2">+25%</div>
          <div className="text-lg font-bold">De hausse de salaire/an</div>
        </div>
        <div className="p-8 glass-panel rounded-3xl text-center border-b-4 border-yellow-500">
          <div className="text-5xl font-black text-yellow-400 mb-2">1/3</div>
          <div className="text-lg font-bold">Des élèves créent leur startup</div>
        </div>
      </div>
      <InteractiveSection 
        question="Question : Quelle est la compétence n°1 recherchée par les recruteurs en 2030 ?"
        answer="La curiosité. Les technos changent tous les 6 mois, c'est ta capacité à apprendre qui fera ta valeur."
      />
    </div>,

    // 7. Passerelles
    <div key="s6" className="h-full flex flex-col justify-center text-center">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Circuit" />
      </div>
      <div className="relative z-10">
        <h2 className="text-5xl font-bold font-heading mb-6">Erreur d'option ? Aucun souci.</h2>
        <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
          En 2030, le monde appartient aux <span className="text-cyan-400 font-black">Hacks-of-all-trades</span>. 
          Un dev qui connaît le réseau ou un admin qui code est invincible.
        </p>
        <div className="flex justify-center items-center gap-12 text-3xl font-bold">
          <div className="text-cyan-400">SISR</div>
          <div className="text-white animate-pulse"><Repeat size={48} /></div>
          <div className="text-green-400">SLAM</div>
        </div>
        <div className="mt-12">
          <InteractiveSection 
            question="Est-il possible de faire de la cybersécurité en ayant fait SLAM ?"
            answer="OUI ! On appelle ça la sécurité applicative (DevSecOps). C'est l'un des métiers les mieux payés."
          />
        </div>
      </div>
    </div>,

    // 8. Quiz
    <div key="s7" className="h-full">
      <Quiz />
    </div>,

    // 9. Conclusion
    <div key="s8" className="h-full flex flex-col items-center justify-center text-center relative">
      <h2 className="text-6xl font-black font-heading mb-8">PRÊT POUR LE <span className="text-cyan-400">LEVEL UP</span> ?</h2>
      <div className="flex flex-col md:flex-row gap-12 items-center glass-panel p-10 rounded-[3rem] border-white/20">
        <div className="bg-white p-4 rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          <QrCode size={200} className="text-slate-900" />
        </div>
        <div className="text-left space-y-6">
          <p className="text-2xl font-bold italic text-slate-300">"L'informatique n'est pas un métier, c'est un super-pouvoir."</p>
          <div className="space-y-4">
             <button className="w-full flex items-center justify-between px-8 py-4 cyber-gradient rounded-2xl text-slate-900 font-black text-xl hover:scale-105 transition-transform" onClick={() => window.open('https://parcoursup.fr', '_blank')}>
               REJOINDRE LA FILIÈRE <ArrowRight />
             </button>
             <p className="text-center text-slate-500 font-mono">Journée Portes Ouvertes : Samedi Prochain</p>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-950 selection:bg-cyan-500 selection:text-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1)_0%,rgba(2,6,23,1)_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-900/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 z-50 flex">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 h-full transition-all duration-500 ${i <= currentSlide ? 'bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)]' : 'bg-white/10'}`}
          />
        ))}
      </div>

      {/* Content */}
      <main className="h-full container mx-auto px-6 flex items-center justify-center relative z-10">
        <SlideWrapper active={true}>
          {slides[currentSlide]}
        </SlideWrapper>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-center z-50">
        <div className="hidden md:block text-slate-500 font-mono text-lg font-bold">
          <span className="text-cyan-400">{String(currentSlide + 1).padStart(2, '0')}</span> / {totalSlides}
        </div>
        
        <div className="flex gap-6">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-5 rounded-2xl glass-panel transition-all border-2 ${currentSlide === 0 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-white/10 border-white/20'}`}
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`p-5 rounded-2xl glass-panel transition-all border-2 ${currentSlide === totalSlides - 1 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-cyan-500/20 text-cyan-400 border-cyan-500/50'}`}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3 text-slate-400 text-sm font-black uppercase tracking-[0.2em]">
          <kbd className="px-3 py-1.5 rounded-lg bg-white/10 border-2 border-white/10 text-white">ESPACE</kbd>
          <span>CONTINUER</span>
        </div>
      </div>
    </div>
  );
};

export default App;
