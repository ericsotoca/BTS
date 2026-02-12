
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
  Eye,
  Cpu,
  Lock,
  Zap,
  Sparkles,
  Search,
  Users,
  Globe,
  ShieldAlert,
  Leaf,
  Smartphone,
  Gamepad,
  HeartPulse,
  Briefcase
} from 'lucide-react';
import { SlideWrapper } from './components/SlideWrapper';
import { Quiz } from './components/Quiz';
import { Hangman } from './components/Hangman';

const InteractiveSection: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-8 p-6 rounded-3xl border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 transition-all">
      <div className="flex items-center gap-4 mb-2">
        <HelpCircle className="text-cyan-400 animate-bounce flex-shrink-0" />
        <p className="text-xl font-bold text-white italic">{question}</p>
      </div>
      {!show ? (
        <button 
          onClick={() => setShow(true)}
          className="mt-2 flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 rounded-xl font-black hover:scale-105 transition-transform"
        >
          <Eye size={18} /> Voir l'analyse interactive
        </button>
      ) : (
        <div className="mt-4 text-cyan-400 font-medium animate-in slide-in-from-top-2 duration-300 bg-white/5 p-4 rounded-xl">
          {answer}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 25;

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
    <div key="s0" className="flex flex-col items-center justify-center text-center h-full relative">
      <div className="z-10 px-4">
        <div className="mb-8 px-8 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-black tracking-[0.3em] uppercase animate-pulse inline-block">
          Prospective BTS SIO 2026-2030
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

    // 2. SISR Complet
    <div key="s1" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
      <div className="space-y-10">
        <div className="bg-cyan-500/20 p-6 rounded-3xl w-fit"><ShieldCheck className="w-16 h-16 text-cyan-400" /></div>
        <h2 className="text-6xl font-black font-heading uppercase leading-none">SISR</h2>
        <h3 className="text-3xl text-cyan-400 font-bold uppercase tracking-tight">Solutions d'Infrastructure, Systèmes et Réseaux</h3>
        <p className="text-2xl text-slate-400 leading-relaxed italic">"Le Cloud, la Cyber-sécurité et les Réseaux n'auront plus de secrets pour vous. Vous êtes le garant de la continuité du monde connecté."</p>
      </div>
      <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[500px]">
        <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Server" />
      </div>
    </div>,

    // 3. SLAM Complet
    <div key="s2" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center h-full">
      <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl h-[500px]">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Coding" />
      </div>
      <div className="space-y-10">
        <div className="bg-emerald-500/20 p-6 rounded-3xl w-fit"><Code2 className="w-16 h-16 text-emerald-400" /></div>
        <h2 className="text-6xl font-black font-heading uppercase leading-none">SLAM</h2>
        <h3 className="text-3xl text-emerald-400 font-bold uppercase tracking-tight">Solutions Logicielles et Applications Métier</h3>
        <p className="text-2xl text-slate-400 leading-relaxed italic">"Devenez un créateur de solutions. Du développement web à l'Intelligence Artificielle, vous codez le futur des entreprises."</p>
      </div>
    </div>,

    // 4. Pourquoi SIO?
    <div key="s3" className="text-center max-w-7xl mx-auto space-y-16">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Pourquoi choisir le SIO ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-cyan-500/20">
          <h4 className="text-3xl font-black text-cyan-400 mb-6 tracking-tighter">ALTERNANCE</h4>
          <p className="text-xl text-slate-400 leading-relaxed">Étudiez gratuitement et gagnez un salaire dès la 1ère année. L'expérience pro avant tout.</p>
        </div>
        <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border-emerald-500/20">
          <h4 className="text-3xl font-black text-emerald-400 mb-6 tracking-tighter">CHÔMAGE 0%</h4>
          <p className="text-xl text-slate-400 leading-relaxed">Le secteur recrute massivement. Plusieurs offres avant même d'être diplômé.</p>
        </div>
        <div className="p-10 bg-white/5 backdrop-blur-xl rounded-[3rem] border-yellow-500/20">
          <h4 className="text-3xl font-black text-yellow-400 mb-6 tracking-tighter">ÉVOLUTION</h4>
          <p className="text-xl text-slate-400 leading-relaxed">L'informatique est partout : luxe, sport, santé, spatial. Le monde est à vous.</p>
        </div>
      </div>
    </div>,

    // 5. Interaction 1: Deepfake
    <div key="s4" className="text-center max-w-6xl mx-auto space-y-12">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Interaction #1 : <span className="text-red-500">Alerte Deepfake</span></h2>
      <p className="text-2xl text-slate-400 italic">Sauriez-vous différencier un humain d'une IA ?</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] border-4 border-transparent hover:border-cyan-500 transition-all" onClick={() => alert('GAGNÉ ! C était l humain. Mais l IA progresse chaque jour.')}>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover opacity-80 group-hover:opacity-100" alt="A" />
          <div className="absolute bottom-6 left-6 text-2xl font-black bg-slate-900/80 px-6 py-3 rounded-xl">PHOTO A</div>
        </div>
        <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] border-4 border-transparent hover:border-red-500 transition-all" onClick={() => alert('PERDU ! C était l IA. En SISR, vous apprenez à bloquer ces fraudes.')}>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" className="w-full h-80 object-cover opacity-80 group-hover:opacity-100" alt="B" />
          <div className="absolute bottom-6 left-6 text-2xl font-black bg-slate-900/80 px-6 py-3 rounded-xl">PHOTO B</div>
        </div>
      </div>
    </div>,

    // 6. Interaction 2: Voyage Snap
    <div key="s5" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <h2 className="text-6xl font-black font-heading uppercase leading-tight tracking-tighter">Interaction #2 :<br />Le voyage de ton Snap</h2>
        <p className="text-2xl text-slate-400">Cliquez pour voir les étapes techniques gérées par un technicien SISR :</p>
        <div className="space-y-6">
          <button className="w-full p-8 bg-white/5 border border-white/10 rounded-3xl text-left hover:bg-white/10 transition-all" onClick={() => alert('Étape 1 : Chiffrement SSL/TLS pour que personne n intercepte ta photo.')}>1. CHIFFREMENT SUR TON TÉLÉPHONE</button>
          <button class="w-full p-8 bg-white/5 border border-white/10 rounded-3xl text-left hover:bg-white/10 transition-all" onClick={() => alert('Étape 2 : Routage via fibre optique et serveurs CDN pour une latence < 10ms.')}>2. ROUTAGE MONDIAL HAUTE VITESSE</button>
        </div>
      </div>
      <div className="bg-slate-900 rounded-[4rem] h-[500px] border-2 border-white/5 flex items-center justify-center relative overflow-hidden shadow-2xl">
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
      <p className="text-3xl text-slate-400">En SLAM, l'IA devient votre <span className="text-white font-bold underline">exosquelette</span> pour coder 10x plus vite.</p>
    </div>,

    // 8. Code Assisté
    <div key="s7" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">2026 : Le code assisté</h2>
        <p className="text-2xl text-slate-400">Copilot et Cursor font 80% du travail répétitif. Votre valeur ? Savoir <span className="text-white font-bold">architecturer</span> et <span className="text-white font-bold">sécuriser</span> le tout.</p>
      </div>
      <div className="font-mono bg-black p-12 rounded-[3rem] border border-white/10 text-cyan-400 shadow-2xl relative">
        <div className="absolute top-6 left-10 flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
           <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="mt-8">
          <p className="opacity-50">// Prompt: Créer une API sécurisée...</p>
          <p className="animate-pulse">_ Generating secure routes...</p>
          <p className="text-white mt-6 font-bold text-lg">> DONE in 0.4s</p>
        </div>
      </div>
    </div>,

    // 9. Prompt Engineering
    <div key="s8" className="text-center max-w-4xl mx-auto space-y-12">
      <div className="relative">
        <Sparkles className="w-40 h-40 text-cyan-400 mx-auto animate-bounce" />
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Savoir parler aux machines</h2>
      <p className="text-2xl text-slate-400 leading-relaxed italic">Le "Prompting" n'est pas un gadget. C'est l'art de décomposer un problème complexe en instructions logiques précises.</p>
    </div>,

    // 10. Pourquoi coder?
    <div key="s9" className="text-center max-w-7xl mx-auto space-y-20">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter">Pourquoi apprendre à coder ?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:border-cyan-500 transition-all">
          <h4 className="text-3xl font-black mb-6">COMPRENDRE</h4>
          <p className="text-xl text-slate-400">Pour corriger l'IA quand elle fait des erreurs fatales ou des "hallucinations".</p>
        </div>
        <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:border-emerald-500 transition-all">
          <h4 className="text-3xl font-black mb-6">OPTIMISER</h4>
          <p className="text-xl text-slate-400">Pour rendre les programmes 100x plus économes en énergie et plus rapides.</p>
        </div>
        <div className="p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:border-yellow-500 transition-all">
          <h4 className="text-3xl font-black mb-6">INNOVER</h4>
          <p className="text-xl text-slate-400">Pour créer les IA de demain, pas juste être un utilisateur passif.</p>
        </div>
      </div>
    </div>,

    // 11. AIOps
    <div key="s10" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <h2 className="text-6xl font-black font-heading uppercase tracking-tighter text-cyan-400">AIOps (SISR)</h2>
        <p className="text-3xl text-slate-400 italic font-light">"En 2028, les réseaux se réparent tout seuls."</p>
        <ul className="space-y-8">
          <li className="flex items-center gap-6 text-2xl font-bold"><CheckCircle2 className="text-emerald-500 w-8 h-8" /> Auto-détection d'intrusion</li>
          <li className="flex items-center gap-6 text-2xl font-bold"><CheckCircle2 className="text-emerald-500 w-8 h-8" /> Maintenance prédictive des serveurs</li>
        </ul>
      </div>
      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-[4rem] p-20 text-center shadow-inner relative overflow-hidden">
        <Cpu className="w-56 h-56 text-cyan-800 animate-pulse mx-auto" />
      </div>
    </div>,

    // 12. Dark IA
    <div key="s11" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="text-center relative">
        <ShieldAlert className="w-72 h-72 text-red-900 mx-auto opacity-30 animate-pulse" />
        <div className="absolute inset-0 bg-red-500/5 blur-[100px]"></div>
      </div>
      <div className="space-y-10 p-16 border-2 border-red-500/20 bg-red-500/5 rounded-[4rem] shadow-2xl">
        <h2 className="text-7xl font-black text-red-500 uppercase leading-none tracking-tighter">DARK IA</h2>
        <p className="text-3xl text-slate-300">Virus auto-adaptatifs, Phishing indétectable... La menace est invisible.</p>
        <p className="text-2xl font-black uppercase text-red-400 tracking-widest underline decoration-red-500 decoration-4 underline-offset-8">Le technicien SISR est le rempart.</p>
      </div>
    </div>,

    // 13. Souveraineté
    <div key="s12" className="text-center max-w-5xl mx-auto space-y-20">
      <h2 className="text-7xl font-black font-heading uppercase tracking-tighter leading-none">Souveraineté Numérique</h2>
      <div className="flex justify-center gap-12 font-bold text-3xl italic">
        <span className="px-12 py-5 bg-white/5 rounded-full border border-white/10 shadow-lg">Mistral AI 🇫🇷</span>
        <span className="px-12 py-5 bg-white/5 rounded-full border border-white/10 shadow-lg">Llama 🇺🇸</span>
      </div>
      <p className="text-4xl text-slate-400 leading-relaxed font-light">"Le BTS SIO forme les experts qui bâtiront l'indépendance de l'Europe."</p>
    </div>,

    // 14. Interaction 3: Smartphone Mine d'Or
    <div key="s13" className="text-center space-y-16 max-w-7xl mx-auto">
      <h2 className="text-7xl font-black font-heading uppercase tracking-tighter">Interaction #3 : <br />Ton Smartphone vaut de l'or</h2>
      <p className="text-3xl text-slate-400 mb-10">Cliquez sur les composants pour voir votre futur salaire :</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:scale-110 transition-all border border-white/5 hover:border-cyan-500" onClick={() => alert('Expert Cybersécurité (SISR) : 5500€ / mois')}>
          <ShieldCheck className="w-20 h-20 mb-8 text-cyan-400 mx-auto" />
          <span className="font-black text-2xl uppercase tracking-tighter">MODEM 6G</span>
        </div>
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:scale-110 transition-all border border-white/5 hover:border-emerald-500" onClick={() => alert('Développeur Mobile (SLAM) : 4800€ / mois')}>
          <Smartphone className="w-20 h-20 mb-8 text-emerald-400 mx-auto" />
          <span className="font-black text-2xl uppercase tracking-tighter">UX DESIGN</span>
        </div>
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:scale-110 transition-all border border-white/5 hover:border-blue-500" onClick={() => alert('Architecte Cloud (SISR) : 6000€ / mois')}>
          <Globe className="w-20 h-20 mb-8 text-blue-400 mx-auto" />
          <span className="font-black text-2xl uppercase tracking-tighter">CLOUD OPS</span>
        </div>
        <div className="p-12 bg-white/5 rounded-[3.5rem] cursor-pointer hover:scale-110 transition-all border border-white/5 hover:border-purple-500" onClick={() => alert('Ingénieur IA (SLAM) : 7500€ / mois')}>
          <Cpu className="w-20 h-20 mb-8 text-purple-400 mx-auto" />
          <span className="font-black text-2xl uppercase tracking-tighter">AI ENGINE</span>
        </div>
      </div>
    </div>,

    // 15. Interaction 4: Pollution Numérique
    <div key="s14" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <h2 className="text-7xl font-black font-heading uppercase leading-tight tracking-tighter">Interaction #4 :<br /><span className="text-emerald-500 italic">Pollution Invisible</span></h2>
        <p className="text-3xl text-slate-400 italic">"Regarder une vidéo en 4K pollue-t-il plus qu'un trajet de 2km en voiture ?"</p>
        <div className="flex gap-10 mt-12">
          <button onClick={() => alert('VRAI ! Le traitement massif des données 4K dans les datacenters demande une énergie colossale.')} className="flex-1 py-12 bg-emerald-500 text-slate-950 font-black rounded-[2.5rem] text-4xl shadow-2xl hover:scale-105 transition-transform">VRAI</button>
          <button onClick={() => alert('FAUX ! Mais l écart se réduit chaque année. En SIO, on apprend le Green-IT.')} className="flex-1 py-12 border-4 border-white/20 rounded-[2.5rem] text-4xl font-black hover:bg-white/5 transition-all">FAUX</button>
        </div>
      </div>
      <div className="bg-emerald-500/5 p-16 rounded-[5rem] text-center border border-emerald-500/20 relative">
        <Leaf className="w-72 h-72 text-emerald-900 mx-auto animate-pulse" />
        <div className="absolute inset-0 bg-emerald-500/5 blur-[120px]"></div>
      </div>
    </div>,

    // 16. Interaction 5: App Dream Generator
    <div key="s15" className="text-center max-w-7xl mx-auto space-y-16">
      <h2 className="text-7xl font-black font-heading uppercase tracking-tighter leading-none">Interaction #5 :<br />Ton projet de rêve</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-12 bg-white/5 backdrop-blur-md rounded-[4rem] cursor-pointer hover:border-red-500 border border-white/5 transition-all" onClick={() => alert('SLAM est fait pour toi ! Concevoir l IA de santé du futur.')}>
          <HeartPulse className="w-20 h-20 mb-8 text-red-500 mx-auto" />
          <h4 className="font-black text-3xl mb-4 uppercase tracking-tighter">SANTE IA</h4>
          <p className="text-lg opacity-60 italic">Diagnostiquer via la voix.</p>
        </div>
        <div className="p-12 bg-white/5 backdrop-blur-md rounded-[4rem] cursor-pointer hover:border-cyan-500 border border-white/5 transition-all" onClick={() => alert('SISR est ton domaine ! Gérer des serveurs mondiaux ultra-rapides.')}>
          <Gamepad className="w-20 h-20 mb-8 text-cyan-400 mx-auto" />
          <h4 className="font-black text-3xl mb-4 uppercase tracking-tighter">CLOUD GAMING</h4>
          <p className="text-lg opacity-60 italic">Jouer en 8K sans console.</p>
        </div>
        <div className="p-12 bg-white/5 backdrop-blur-md rounded-[4rem] cursor-pointer hover:border-yellow-500 border border-white/5 transition-all" onClick={() => alert('Mixte SISR/SLAM ! Sécuriser la finance mondiale.')}>
          <Briefcase className="w-20 h-20 mb-8 text-yellow-500 mx-auto" />
          <h4 className="font-black text-3xl mb-4 uppercase tracking-tighter">FINTECH 2.0</h4>
          <p className="text-lg opacity-60 italic">Une banque sécurisée par IA.</p>
        </div>
      </div>
    </div>,

    // 17. Créativité vs Algorithme
    <div key="s16" className="grid grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch h-[60vh]">
      <div className="p-16 bg-white/5 rounded-[4rem] border border-white/10 space-y-8 flex flex-col justify-center text-center opacity-60">
        <h3 className="text-5xl font-black text-slate-500 uppercase italic">L'IA</h3>
        <p className="text-3xl font-light">Vitesse, Synthèse, Routine, Calcul.</p>
      </div>
      <div className="p-16 bg-white/10 rounded-[4rem] border border-cyan-500/30 space-y-8 flex flex-col justify-center text-center shadow-2xl">
        <h3 className="text-5xl font-black text-white uppercase italic">VOUS</h3>
        <p className="text-3xl font-bold leading-relaxed">Créativité, Éthique, Empathie, Jugement.</p>
      </div>
    </div>,

    // 18. Hangman Game
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
        <div className="flex flex-col items-center"><div className="w-8 h-8 bg-yellow-500 rounded-full mb-4"></div><span className="text-sm uppercase font-black">2028: Quantum</span></div>
      </div>
      <p className="text-4xl text-slate-400 leading-relaxed italic font-light">"On n'apprend pas un métier figé, on apprend à évoluer avec son époque."</p>
    </div>,

    // 20. SIO Cockpit
    <div key="s18" className="text-center max-w-6xl mx-auto space-y-12">
      <h2 className="text-8xl font-black font-heading uppercase leading-none tracking-tighter">Le BTS SIO est <br />votre <span className="text-cyan-400">COCKPIT</span></h2>
      <p className="text-4xl text-slate-500 font-light italic leading-tight max-w-4xl mx-auto">Ne soyez pas le passager de l'Intelligence Artificielle. <span className="text-white font-bold">Soyez son pilote.</span></p>
    </div>,

    // 21. Mission SISR
    <div key="s19" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
      <div className="space-y-12">
        <h2 className="text-6xl font-black font-heading uppercase tracking-tighter text-cyan-400 leading-none">Mission SISR</h2>
        <p className="text-3xl text-slate-300 italic leading-relaxed">"Installer une infrastructure Cloud ultra-sécurisée pour une équipe de Formule 1 en temps réel."</p>
        <div className="p-10 bg-black/80 rounded-[3rem] border border-cyan-500/20 font-mono text-cyan-500 text-lg shadow-inner">
          <p>> Deploying security protocol alpha...</p>
          <p>> Checking data encryption (AES-256)...</p>
          <p className="text-white font-black mt-4">> SYSTEM SECURE (UPTIME 100%)</p>
        </div>
      </div>
      <div className="rounded-[4rem] shadow-2xl h-[550px] overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="SISR Ops" />
      </div>
    </div>,

    // 22. Mission SLAM
    <div key="s20" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
      <div className="rounded-[4rem] shadow-2xl h-[550px] overflow-hidden border border-white/5">
        <img src="https://images.unsplash.com/photo-1555099962-41d06ee9360c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="SLAM Ops" />
      </div>
      <div className="space-y-12">
        <h2 className="text-6xl font-black font-heading uppercase tracking-tighter text-emerald-400 leading-none">Mission SLAM</h2>
        <p className="text-3xl text-slate-300 italic leading-relaxed">"Développer une application mobile capable de traduire instantanément toutes les langues via IA neurale."</p>
        <div className="p-10 bg-black/80 rounded-[3rem] border border-emerald-500/20 font-mono text-emerald-500 text-lg shadow-inner">
          <p>import neural_translator as nt</p>
          <p>model = nt.load_global_voice()</p>
          <p className="text-white font-black mt-4">> APP READY FOR DEPLOYMENT</p>
        </div>
      </div>
    </div>,

    // 23. Chiffres Géants
    <div key="s21" className="text-center space-y-24">
      <h2 className="text-6xl font-black font-heading uppercase tracking-tighter leading-none">Le secteur qui ne dort jamais</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        <div className="group"><div className="text-[12rem] font-black text-cyan-500 mb-0 tracking-tighter group-hover:scale-110 transition-transform">38K</div><h4 className="text-3xl font-bold text-slate-500 uppercase tracking-widest">Salaire Junior (€)</h4></div>
        <div className="group"><div className="text-[12rem] font-black text-emerald-500 mb-0 tracking-tighter group-hover:scale-110 transition-transform">98%</div><h4 className="text-3xl font-bold text-slate-500 uppercase tracking-widest">Embauche immédiate</h4></div>
        <div className="group"><div className="text-[12rem] font-black text-yellow-500 mb-0 tracking-tighter group-hover:scale-110 transition-transform">+200k</h4><h4 className="text-3xl font-bold text-slate-500 uppercase tracking-widest">Offres en France</h4></div>
      </div>
    </div>,

    // 24. Quiz Final
    <div key="quiz" className="h-full">
      <Quiz />
    </div>,

    // 25. Conclusion
    <div key="s22" className="text-center max-w-7xl mx-auto space-y-20">
      <h2 className="text-[10rem] font-black font-heading mb-10 italic tracking-tighter leading-none">CODE <br /><span className="text-cyan-400">THE WORLD</span></h2>
      <div className="p-20 bg-white/5 backdrop-blur-3xl rounded-[5rem] flex flex-col md:flex-row items-center justify-center gap-24 shadow-2xl border border-white/10">
        <div className="bg-white p-12 rounded-[4rem] shadow-2xl hover:rotate-6 transition-transform cursor-pointer">
          <QrCode size={200} className="text-slate-900" />
        </div>
        <div className="text-left space-y-12 max-w-lg">
          <p className="text-4xl font-bold text-slate-300 italic leading-relaxed">"Ne subissez pas le futur. Soyez celui qui le programme."</p>
          <div className="space-y-6">
            <button onClick={() => window.open('https://parcoursup.fr', '_blank')} className="w-full py-10 cyber-gradient rounded-[2.5rem] text-slate-950 font-black text-5xl hover:scale-105 transition-all shadow-2xl flex justify-between px-16 items-center">
              POSTULER <ArrowRight size={48} />
            </button>
            <p className="text-center text-slate-600 font-mono text-sm uppercase tracking-[0.3em]">Scannez pour la fiche formation</p>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1)_0%,rgba(2,6,23,1)_100%)]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-3 z-50 flex shadow-2xl">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 h-full transition-all duration-700 ${i <= currentSlide ? 'bg-cyan-500 shadow-[0_0_20px_#06b6d4]' : 'bg-white/5'}`}
          />
        ))}
      </div>

      {/* Slide Content */}
      <main className="h-full container mx-auto px-6 relative z-10 flex flex-col justify-center">
        <SlideWrapper active={true}>
          {slides[currentSlide]}
        </SlideWrapper>
      </main>

      {/* Navigation UI */}
      <nav className="absolute bottom-10 left-0 w-full px-16 flex justify-between items-center z-50">
        <div className="font-mono text-5xl font-black text-slate-800 tracking-tighter">
          <span className="text-cyan-600">{String(currentSlide + 1).padStart(2, '0')}</span> / {totalSlides}
        </div>
        
        <div className="flex gap-10">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-6 rounded-[2rem] bg-white/5 border-2 border-white/5 transition-all ${currentSlide === 0 ? 'opacity-5' : 'hover:bg-white/10 hover:border-white/20'}`}
          >
            <ChevronLeft size={48} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`p-6 rounded-[2rem] bg-cyan-500/10 border-2 border-cyan-500/30 text-cyan-400 transition-all ${currentSlide === totalSlides - 1 ? 'opacity-5' : 'hover:scale-110 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]'}`}
          >
            <ChevronRight size={48} />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-slate-600 font-black uppercase tracking-[0.4em] text-xs">
          <span className="px-4 py-2 bg-white/5 rounded-xl">ESPACE</span>
          <span>SUIVANT</span>
        </div>
      </nav>
    </div>
  );
};

export default App;
