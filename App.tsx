
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Code2, 
  CheckCircle2,
  QrCode,
  ArrowRight,
  Eye,
  Cpu,
  Sparkles,
  Globe,
  ShieldAlert,
  Leaf,
  Smartphone,
  Gamepad,
  HeartPulse,
  Briefcase,
  Rocket,
  Shield
} from 'lucide-react';
import { SlideWrapper } from './components/SlideWrapper';
import { Quiz } from './components/Quiz';
import { Hangman } from './components/Hangman';
import { GroupGame } from './components/GroupGame';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 23;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
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
    <div key="s0" className="flex flex-col items-center justify-center text-center h-full">
      <div className="px-4">
        <div className="mb-8 px-8 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-black tracking-[0.3em] uppercase animate-pulse inline-block">
          Orientation Terminale 2026-2030
        </div>
        <h1 className="text-7xl md:text-[9rem] font-black font-heading mb-10 leading-none tracking-tighter uppercase">
          BTS SIO <br /><span className="text-transparent bg-clip-text cyber-gradient italic">NEW FRONTIER</span>
        </h1>
        <p className="text-3xl text-slate-400 max-w-4xl mx-auto mb-16 font-light">
          Le diplôme qui vous donne les clés du <span className="text-white font-bold">monde numérique</span>.
        </p>
        <button onClick={nextSlide} className="px-16 py-8 cyber-gradient rounded-[2rem] text-slate-950 text-3xl font-black hover:scale-110 transition-transform shadow-2xl">
          LANCER LA PRÉSENTATION
        </button>
      </div>
    </div>,

    // 2. SISR
    <div key="s1" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
      <div className="space-y-10">
        <div className="bg-cyan-500/20 p-6 rounded-3xl w-fit"><ShieldCheck className="w-16 h-16 text-cyan-400" /></div>
        <h2 className="text-6xl font-black font-heading uppercase leading-none">SISR</h2>
        <h3 className="text-3xl text-cyan-400 font-bold uppercase tracking-tight">Infrastructure, Systèmes et Réseaux</h3>
        <p className="text-2xl text-slate-400 leading-relaxed italic">"Le Cloud, la Cyber-sécurité et les Réseaux n'auront plus de secrets pour vous."</p>
      </div>
      <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] border border-white/10 shadow-2xl h-[500px] object-cover" />
    </div>,

    // 3. SLAM
    <div key="s2" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] border border-white/10 shadow-2xl h-[500px] object-cover" />
      <div className="space-y-10">
        <div className="bg-emerald-500/20 p-6 rounded-3xl w-fit"><Code2 className="w-16 h-16 text-emerald-400" /></div>
        <h2 className="text-6xl font-black font-heading uppercase leading-none">SLAM</h2>
        <h3 className="text-3xl text-emerald-400 font-bold uppercase tracking-tight">Solutions Logicielles et Applications Métier</h3>
        <p className="text-2xl text-slate-400 leading-relaxed italic">"Devenez un créateur de solutions. Du développement web à l'IA."</p>
      </div>
    </div>,

    // 4. Pourquoi SIO?
    <div key="s3" className="text-center max-w-7xl mx-auto space-y-16">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Pourquoi choisir le SIO ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        <div className="p-10 bg-white/5 rounded-[3rem] border border-cyan-500/20">
          <h4 className="text-3xl font-black text-cyan-400 mb-6 uppercase">Alternance</h4>
          <p className="text-xl text-slate-400">Étudiez gratuitement et gagnez un salaire dès la 1ère année.</p>
        </div>
        <div className="p-10 bg-white/5 rounded-[3rem] border-emerald-500/20">
          <h4 className="text-3xl font-black text-emerald-400 mb-6 uppercase">Emploi</h4>
          <p className="text-xl text-slate-400">98% de taux d'embauche. Plusieurs offres avant le diplôme.</p>
        </div>
        <div className="p-10 bg-white/5 rounded-[3rem] border-yellow-500/20">
          <h4 className="text-3xl font-black text-yellow-400 mb-6 uppercase">Futur</h4>
          <p className="text-xl text-slate-400">Travaillez dans le luxe, le sport, la santé ou le spatial.</p>
        </div>
      </div>
    </div>,

    // 5. Interaction 1: Deepfake
    <div key="s4" className="text-center max-w-6xl mx-auto space-y-12">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Interaction #1 : <span className="text-red-500">Alerte Deepfake</span></h2>
      <p className="text-2xl text-slate-400 italic">Sauriez-vous différencier un humain d'une IA ?</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] border-4 border-transparent hover:border-cyan-500 transition-all" onClick={() => alert('GAGNÉ ! C était l humain.')}>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover opacity-80" />
          <div className="absolute bottom-6 left-6 text-2xl font-black bg-slate-900/80 px-6 py-3 rounded-xl">PHOTO A</div>
        </div>
        <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] border-4 border-transparent hover:border-red-500 transition-all" onClick={() => alert('PERDU ! C était l IA.')}>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover opacity-80" />
          <div className="absolute bottom-6 left-6 text-2xl font-black bg-slate-900/80 px-6 py-3 rounded-xl">PHOTO B</div>
        </div>
      </div>
    </div>,

    // 6. Interaction 2: Voyage Snap
    <div key="s5" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Interaction #2 : Voyage Snap</h2>
        <p className="text-2xl text-slate-400">Cliquez pour voir les étapes techniques SISR :</p>
        <div className="space-y-6">
          <button className="w-full p-8 bg-white/5 border border-white/10 rounded-3xl text-left hover:bg-white/10 transition-all" onClick={() => alert('1. Chiffrement SSL/TLS activé.')}>1. CHIFFREMENT MOBILE</button>
          <button className="w-full p-8 bg-white/5 border border-white/10 rounded-3xl text-left hover:bg-white/10 transition-all" onClick={() => alert('2. ROUTAGE HAUTE VITESSE.')}>2. ROUTAGE HAUTE VITESSE</button>
        </div>
      </div>
      <div className="bg-slate-900 rounded-[4rem] h-[500px] flex items-center justify-center relative overflow-hidden">
        <Globe className="w-72 h-72 text-cyan-900/20 animate-spin-slow" />
        <div className="absolute w-8 h-8 bg-cyan-500 rounded-full animate-ping"></div>
      </div>
    </div>,

    // 7. IA Exosquelette
    <div key="s6" className="text-center max-w-5xl mx-auto space-y-12">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">L'IA n'est pas votre ennemie</h2>
      <div className="p-16 bg-white/5 backdrop-blur-2xl rounded-[4rem] border border-cyan-500/30">
        <p className="text-4xl font-light leading-relaxed italic">"L'informaticien qui utilise l'IA remplacera celui qui ne l'utilise pas."</p>
      </div>
      <p className="text-3xl text-slate-400">En SLAM, l'IA devient votre <span className="text-white font-bold underline">exosquelette</span>.</p>
    </div>,

    // 8. Code Assisté
    <div key="s7" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">2026 : Le code assisté</h2>
        <p className="text-2xl text-slate-400">Copilot fait 80% du travail répétitif. Votre valeur ? <span className="text-white font-bold">Architecturer</span>.</p>
      </div>
      <div className="font-mono bg-black p-12 rounded-[3rem] border border-white/10 text-cyan-400">
        <p className="opacity-50">// Prompt: API sécurisée...</p>
        <p className="animate-pulse">_ Generating routes...</p>
        <p className="text-white mt-6 font-bold text-lg">> DONE in 0.4s</p>
      </div>
    </div>,

    // 9. Prompt Engineering
    <div key="s8" className="text-center max-w-4xl mx-auto space-y-12">
      <Sparkles className="w-40 h-40 text-cyan-400 mx-auto animate-bounce" />
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Savoir parler aux machines</h2>
      <p className="text-2xl text-slate-400 italic">Le "Prompting" est l'art de décomposer un problème complexe.</p>
    </div>,

    // 10. Pourquoi coder? (MASSIVELY WIDENED)
    <div key="s9" className="text-center max-w-[95rem] mx-auto space-y-20 px-10">
      <h2 className="text-7xl font-black font-heading uppercase tracking-tighter">Pourquoi apprendre à coder ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="p-16 bg-white/5 rounded-[4rem] border border-white/10 hover:border-cyan-500 hover:bg-white/10 transition-all cursor-default">
          <h4 className="text-3xl font-black text-cyan-400 mb-8 tracking-widest uppercase">Comprendre</h4>
          <p className="text-2xl text-slate-400 leading-relaxed italic">Pour ne jamais être esclave de la boîte noire algorithmique.</p>
        </div>
        <div className="p-16 bg-white/5 rounded-[4rem] border border-white/10 hover:border-emerald-500 hover:bg-white/10 transition-all cursor-default">
          <h4 className="text-3xl font-black text-emerald-400 mb-8 tracking-widest uppercase">Optimiser</h4>
          <p className="text-2xl text-slate-400 leading-relaxed italic">Pour créer des programmes économes en énergie et en ressources.</p>
        </div>
        <div className="p-16 bg-white/5 rounded-[4rem] border border-white/10 hover:border-yellow-500 hover:bg-white/10 transition-all cursor-default">
          <h4 className="text-3xl font-black text-yellow-400 mb-8 tracking-widest uppercase">Innover</h4>
          <p className="text-2xl text-slate-400 leading-relaxed italic">Pour inventer les solutions de demain qui n'existent pas encore.</p>
        </div>
      </div>
    </div>,

    // 11. AIOps
    <div key="s10" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <h2 className="text-6xl font-black font-heading uppercase tracking-tighter text-cyan-400">AIOps (SISR)</h2>
        <p className="text-3xl text-slate-400 italic font-light">"Les réseaux se réparent tout seuls."</p>
        <ul className="space-y-8">
          <li className="flex items-center gap-6 text-2xl font-bold"><CheckCircle2 className="text-emerald-500 w-8 h-8" /> Auto-détection d'intrusion</li>
          <li className="flex items-center gap-6 text-2xl font-bold"><CheckCircle2 className="text-emerald-500 w-8 h-8" /> Maintenance prédictive</li>
        </ul>
      </div>
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-[4rem] p-20 text-center">
        <Cpu className="w-56 h-56 text-cyan-800 animate-pulse mx-auto" />
      </div>
    </div>,

    // 12. Dark IA
    <div key="s11" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="text-center"><ShieldAlert className="w-72 h-72 text-red-900 mx-auto opacity-30 animate-pulse" /></div>
      <div className="space-y-10 p-16 border-2 border-red-500/20 bg-red-500/5 rounded-[4rem]">
        <h2 className="text-7xl font-black text-red-500 uppercase tracking-tighter">DARK IA</h2>
        <p className="text-3xl text-slate-300">Virus mutants et phishing indétectable : la menace à stopper.</p>
      </div>
    </div>,

    // 13. Souveraineté
    <div key="s12" className="text-center max-w-5xl mx-auto space-y-20">
      <h2 className="text-7xl font-black font-heading uppercase tracking-tighter">Souveraineté Numérique</h2>
      <div className="flex justify-center gap-12 font-bold text-3xl italic">
        <span className="px-12 py-5 bg-white/5 rounded-full border border-white/10">Mistral AI 🇫🇷</span>
        <span className="px-12 py-5 bg-white/5 rounded-full border border-white/10">Llama 🇺🇸</span>
      </div>
      <p className="text-4xl text-slate-400 font-light">Bâtir l'indépendance de l'Europe.</p>
    </div>,

    // 14. LE JEU DU SCAN
    <div key="groupgame" className="h-full">
      <GroupGame />
    </div>,

    // 15. Salaire
    <div key="s13" className="text-center space-y-16 max-w-7xl mx-auto">
      <h2 className="text-7xl font-black font-heading uppercase tracking-tighter">Salaire Junior 2030</h2>
      <p className="text-3xl text-slate-400">Cliquez pour voir votre futur salaire mensuel :</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:border-cyan-500 border border-white/5" onClick={() => alert('Expert Cyber : 5500€ / mois')}>
          <ShieldCheck className="w-20 h-20 mb-8 text-cyan-400 mx-auto" />
          <span className="font-black text-2xl uppercase">MODEM 6G</span>
        </div>
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:border-emerald-500 border border-white/5" onClick={() => alert('Développeur Mobile : 4800€ / mois')}>
          <Smartphone className="w-20 h-20 mb-8 text-emerald-400 mx-auto" />
          <span className="font-black text-2xl uppercase">UX DESIGN</span>
        </div>
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:border-blue-500 border border-white/5" onClick={() => alert('Architecte Cloud : 6000€ / mois')}>
          <Globe className="w-20 h-20 mb-8 text-blue-400 mx-auto" />
          <span className="font-black text-2xl uppercase">CLOUD OPS</span>
        </div>
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:border-purple-500 border border-white/5" onClick={() => alert('Ingénieur IA : 7500€ / mois')}>
          <Cpu className="w-20 h-20 mb-8 text-purple-400 mx-auto" />
          <span className="font-black text-2xl uppercase">AI ENGINE</span>
        </div>
      </div>
    </div>,

    // 16. Pollution
    <div key="s14" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <h2 className="text-7xl font-black font-heading uppercase tracking-tighter text-emerald-500 italic">Pollution Invisible</h2>
        <p className="text-3xl text-slate-400 italic">"Regarder une vidéo en 4K pollue-t-il plus qu'un trajet de 2km en voiture ?"</p>
        <div className="flex gap-10 mt-12">
          <button onClick={() => alert('VRAI ! Énergie colossale.')} className="flex-1 py-12 bg-emerald-500 text-slate-950 font-black rounded-[2.5rem] text-4xl shadow-2xl">VRAI</button>
          <button onClick={() => alert('FAUX ! Mais presque.')} className="flex-1 py-12 border-4 border-white/20 rounded-[2.5rem] text-4xl font-black">FAUX</button>
        </div>
      </div>
      <div className="bg-emerald-500/5 p-16 rounded-[5rem] text-center border border-emerald-500/20">
        <Leaf className="w-72 h-72 text-emerald-900 mx-auto animate-pulse" />
      </div>
    </div>,

    // 17. Créativité vs Algorithme
    <div key="s16" className="grid grid-cols-2 gap-12 max-w-7xl mx-auto h-[60vh]">
      <div className="p-16 bg-white/5 rounded-[4rem] flex flex-col justify-center text-center opacity-60">
        <h3 className="text-5xl font-black text-slate-500 uppercase">L'IA</h3>
        <p className="text-3xl font-light">Vitesse, Routine, Calcul.</p>
      </div>
      <div className="p-16 bg-white/10 rounded-[4rem] border border-cyan-500/30 flex flex-col justify-center text-center shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        <h3 className="text-5xl font-black text-white uppercase">VOUS</h3>
        <p className="text-3xl font-bold mb-6">Créativité, Éthique, Empathie.</p>
        <p className="text-xl text-cyan-400 font-black italic">"L'IA est un miroir du passé, vous êtes le moteur du futur."</p>
      </div>
    </div>,

    // 18. Hangman (Developed)
    <div key="hangman" className="h-full">
       <Hangman />
    </div>,

    // 19. Cycle de vie
    <div key="s17" className="text-center max-w-5xl mx-auto space-y-20">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Apprendre à désapprendre</h2>
      <div className="flex justify-between items-center opacity-40 px-10">
        <div className="flex flex-col items-center"><div className="w-8 h-8 bg-cyan-500 rounded-full mb-4"></div><span className="text-sm uppercase font-black">2024: Python</span></div>
        <div className="flex-1 h-1 bg-slate-800 mx-10"></div>
        <div className="flex flex-col items-center"><div className="w-8 h-8 bg-emerald-500 rounded-full mb-4"></div><span className="text-sm uppercase font-black">2026: Prompting</span></div>
        <div className="flex-1 h-1 bg-slate-800 mx-10"></div>
        <div className="flex flex-col items-center"><div className="w-8 h-8 bg-yellow-500 rounded-full mb-4"></div><span className="text-sm uppercase font-black">2028: Agentic AI</span></div>
      </div>
    </div>,

    // 20. SIO Cockpit
    <div key="s18" className="text-center max-w-6xl mx-auto space-y-12">
      <h2 className="text-8xl font-black font-heading uppercase tracking-tighter">Le BTS SIO est votre <span className="text-cyan-400">COCKPIT</span></h2>
      <p className="text-4xl text-slate-500 font-light italic">Soyez son pilote.</p>
    </div>,

    // 21. Quiz Final
    <div key="quiz" className="h-full">
      <Quiz />
    </div>,

    // 22. GRAND BILAN (Fusionné)
    <div key="s_bilan" className="flex flex-col justify-center h-full max-w-7xl mx-auto space-y-16">
      <h2 className="text-6xl font-black font-heading text-center uppercase">VOTRE AVENIR EN CHIFFRES & MISSIONS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-10 glass rounded-[3rem] border-cyan-500/20 space-y-6">
          <div className="flex items-center gap-4"><Shield className="text-cyan-400 w-10 h-10" /><h3 className="text-3xl font-black uppercase">Mission SISR</h3></div>
          <p className="text-xl text-slate-400 italic">Gérer les infrastructures Cloud de Formule 1 et sécuriser les échanges mondiaux.</p>
        </div>
        <div className="p-10 glass rounded-[3rem] border-emerald-500/20 space-y-6">
          <div className="flex items-center gap-4"><Rocket className="text-emerald-400 w-10 h-10" /><h3 className="text-3xl font-black uppercase">Mission SLAM</h3></div>
          <p className="text-xl text-slate-400 italic">Coder l'IA de traduction instantanée et architecturer les applications du Web Spatial.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 text-center bg-white/5 p-12 rounded-[4rem] border border-white/5">
        <div><div className="text-7xl font-black text-cyan-400 mb-2 leading-none">38K</div><p className="uppercase font-bold text-slate-500">Salaire (€)</p></div>
        <div><div className="text-7xl font-black text-emerald-400 mb-2 leading-none">98%</div><p className="uppercase font-bold text-slate-500">Embauche</p></div>
        <div><div className="text-7xl font-black text-yellow-400 mb-2 leading-none">+200k</div><p className="uppercase font-bold text-slate-500">Offres / an</p></div>
      </div>
    </div>,

    // 23. Conclusion
    <div key="s22" className="text-center max-w-7xl mx-auto space-y-20">
      <h2 className="text-[10rem] font-black font-heading italic tracking-tighter text-cyan-400">PRÊT ?</h2>
      <div className="p-20 bg-white/5 rounded-[5rem] flex flex-col md:flex-row items-center justify-center gap-24 border border-white/10">
        <div className="bg-white p-12 rounded-[4rem] shadow-2xl"><QrCode size={200} className="text-slate-900" /></div>
        <div className="text-left space-y-12 max-w-lg">
          <p className="text-4xl font-bold italic">"Soyez celui qui le programme."</p>
          <button onClick={() => window.open('https://parcoursup.fr', '_blank')} className="w-full py-10 cyber-gradient rounded-[2.5rem] text-slate-950 font-black text-5xl hover:scale-105 transition-all">POSTULER <ArrowRight size={48} /></button>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-3 z-50 flex">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} className={`flex-1 h-full transition-all duration-700 ${i <= currentSlide ? 'bg-cyan-500 shadow-[0_0_20px_#06b6d4]' : 'bg-white/5'}`} />
        ))}
      </div>
      <main className="h-full container mx-auto px-6 relative z-10 flex flex-col justify-center">
        <SlideWrapper active={true}>{slides[currentSlide]}</SlideWrapper>
      </main>
      <nav className="absolute bottom-10 left-0 w-full px-16 flex justify-between items-center z-50">
        <div className="font-mono text-5xl font-black text-slate-800 tracking-tighter">
          <span className="text-cyan-600">{String(currentSlide + 1).padStart(2, '0')}</span> / {totalSlides}
        </div>
        <div className="flex gap-10">
          <button onClick={prevSlide} disabled={currentSlide === 0} className={`p-6 rounded-[2rem] bg-white/5 border-2 border-white/5 transition-all ${currentSlide === 0 ? 'opacity-5' : 'hover:bg-white/10'}`}><ChevronLeft size={48} /></button>
          <button onClick={nextSlide} disabled={currentSlide === totalSlides - 1} className={`p-6 rounded-[2rem] bg-cyan-500/10 border-2 border-cyan-500/30 text-cyan-400 transition-all ${currentSlide === totalSlides - 1 ? 'opacity-5' : 'hover:scale-110 hover:border-cyan-500'}`}><ChevronRight size={48} /></button>
        </div>
      </nav>
    </div>
  );
};

export default App;
