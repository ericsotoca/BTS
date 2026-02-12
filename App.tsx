
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
  Users
} from 'lucide-react';
import { SlideWrapper } from './components/SlideWrapper';
import { Quiz } from './components/Quiz';
import { Hangman } from './components/Hangman';

const InteractiveSection: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 transition-all">
      <div className="flex items-center gap-4 mb-2">
        <HelpCircle className="text-cyan-400 animate-bounce flex-shrink-0" />
        <p className="text-xl font-bold text-white italic">{question}</p>
      </div>
      {!show ? (
        <button 
          onClick={() => setShow(true)}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg font-bold hover:scale-105 transition-transform"
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
  const totalSlides = 20; // Augmenté pour inclure le Hangman

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
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" className="w-full h-full object-cover" alt="Space Tech" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>
      <div className="z-10 px-4">
        <div className="mb-6 px-6 py-2 rounded-full border-2 border-cyan-500 bg-cyan-500/20 text-cyan-300 text-lg font-bold tracking-widest uppercase animate-pulse inline-block">
          Prospective BTS SIO 2026-2030
        </div>
        <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 leading-tight">
          L'ÈRE DE L'IA <br /><span className="text-transparent bg-clip-text cyber-gradient">HYBRIDE</span>
        </h1>
        <p className="text-2xl text-slate-300 max-w-3xl mb-12 font-medium">
          Ne subissez pas le futur de l'informatique, devenez celui qui le programme et le sécurise.
        </p>
        <button onClick={nextSlide} className="px-10 py-5 cyber-gradient rounded-full text-slate-950 text-xl font-black hover:scale-110 transition-transform shadow-[0_0_30px_rgba(34,197,94,0.4)]">
          DÉCOLLAGE IMMÉDIAT
        </button>
      </div>
    </div>,

    // 2. BTS SIO en 90s
    <div key="s1" className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 border-l-8 border-cyan-500 pl-6">
            BTS SIO : Le socle ⚡
          </h2>
          <div className="space-y-4">
             <div className="glass-panel p-6 rounded-2xl flex items-center gap-6">
                <Users className="text-cyan-400" size={40} />
                <p className="text-xl">Insertion : <span className="font-bold text-white">100% en moins de 3 mois</span>.</p>
             </div>
             <div className="glass-panel p-6 rounded-2xl flex items-center gap-6">
                <Cpu className="text-green-400" size={40} />
                <p className="text-xl">Technos : <span className="font-bold text-white">IA, Cloud, Cyber, Python, React</span>.</p>
             </div>
          </div>
          <InteractiveSection 
            question="Question : Pourquoi l'informatique est le seul secteur qui ne connaît pas la crise ?"
            answer="Parce que chaque entreprise, de la boulangerie à la multinationale, est devenue une entreprise logicielle."
          />
        </div>
        <div className="hidden lg:block rounded-3xl overflow-hidden border-2 border-white/10">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" className="w-full h-[500px] object-cover" alt="Collaboration" />
        </div>
      </div>
    </div>,

    // 3. Comparatif 2030 (SISR vs SLAM)
    <div key="s2" className="h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold font-heading mb-10 text-center">Deux parcours, une même révolution</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border-cyan-500/30">
          <ShieldCheck className="text-cyan-400 mb-4" size={48} />
          <h3 className="text-3xl font-bold text-cyan-400 mb-4">SISR</h3>
          <p className="text-slate-300 text-xl">L'expert qui assure que l'IA tourne sur des infrastructures <span className="text-white font-bold">invulnérables</span>.</p>
        </div>
        <div className="glass-panel p-8 rounded-3xl border-green-500/30">
          <Code2 className="text-green-400 mb-4" size={48} />
          <h3 className="text-3xl font-bold text-green-400 mb-4">SLAM</h3>
          <p className="text-slate-300 text-xl">Le créateur qui injecte de l'<span className="text-white font-bold">intelligence</span> dans chaque ligne de code.</p>
        </div>
      </div>
    </div>,

    // --- DIAPOS CENTRALES IA (10 Slides) ---
    
    // 4. IA : Menace ou Exosquelette ?
    <div key="s3" className="h-full flex flex-col justify-center text-center">
       <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold font-heading mb-8">1. IA : Menace ou Exosquelette ?</h2>
          <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" className="w-full h-64 object-cover rounded-3xl mb-8 border-2 border-white/10 shadow-2xl" alt="AI Robot" />
          <InteractiveSection 
            question="Question : Levez la main ceux qui pensent que l'IA va faire disparaître les informaticiens ?"
            answer="L'IA ne remplacera pas l'informaticien. L'informaticien qui utilise l'IA remplacera celui qui ne l'utilise pas."
          />
       </div>
    </div>,

    // 5. 2026 : La fin du code "manuel"
    <div key="s4" className="h-full flex flex-col justify-center">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-6">2. 2026 : Le code assisté</h2>
            <p className="text-xl text-slate-300 mb-6">Fini l'écriture laborieuse de fonctions basiques. GitHub Copilot et Cursor font 80% du travail répétitif.</p>
            <div className="bg-black/50 p-6 rounded-xl font-mono text-cyan-400 border border-cyan-500/20">
              // Prompt: "Crée une API de gestion de parc serveur..."<br/>
              <span className="animate-pulse">_ [L'IA génère 50 lignes en 1s]</span>
            </div>
          </div>
          <InteractiveSection 
            question="Question : Qui a déjà utilisé ChatGPT pour corriger un bug ou un devoir ?"
            answer="C'est bien ! Mais attention : en BTS SIO, on vous apprend à comprendre ce que l'IA écrit pour savoir quand elle se trompe (et elle se trompe souvent)."
          />
       </div>
    </div>,

    // 6. Prompt Engineering : Un vrai métier ?
    <div key="s5" className="h-full flex flex-col justify-center text-center">
       <h2 className="text-4xl font-bold font-heading mb-8">3. Parler aux machines</h2>
       <div className="glass-panel p-10 rounded-[3rem] max-w-2xl mx-auto border-cyan-500/30">
          <Sparkles className="mx-auto text-cyan-400 mb-6" size={60} />
          <p className="text-2xl font-bold mb-4">Le "Prompting" n'est que la surface.</p>
          <p className="text-lg text-slate-400 leading-relaxed">Le vrai métier, c'est de savoir décomposer un problème complexe en instructions logiques. L'IA n'est qu'un traducteur ultra-rapide.</p>
       </div>
    </div>,

    // 7. AIOps : Le réseau auto-réparateur
    <div key="s6" className="h-full flex flex-col justify-center">
       <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1">
             <h2 className="text-4xl font-bold font-heading mb-6">4. AIOps (SISR)</h2>
             <p className="text-xl text-slate-300 mb-6">Imaginez un réseau qui détecte une attaque et se coupe tout seul en 0.001s pour protéger les données.</p>
             <ul className="space-y-4">
                <li className="flex gap-4 items-center"><Zap className="text-yellow-400" /> Maintenance prédictive</li>
                <li className="flex gap-4 items-center"><ShieldCheck className="text-cyan-400" /> Sécurité autonome</li>
             </ul>
          </div>
          <div className="flex-1">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="rounded-3xl border-2 border-cyan-500/30" alt="Server Room" />
          </div>
       </div>
    </div>,

    // 8. No-Code & Low-Code : Pourquoi coder ?
    <div key="s7" className="h-full flex flex-col justify-center">
       <h2 className="text-4xl font-bold font-heading mb-10 text-center">5. Pourquoi apprendre à coder alors ?</h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl text-center">
             <h4 className="font-bold text-cyan-400 mb-2">Compréhension</h4>
             <p>Pour débugger ce que l'IA ne comprend pas.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center">
             <h4 className="font-bold text-cyan-400 mb-2">Optimisation</h4>
             <p>Pour rendre les programmes 100x plus économes en énergie.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl text-center">
             <h4 className="font-bold text-cyan-400 mb-2">Innovation</h4>
             <p>Pour créer l'IA de demain, pas juste utiliser celle d'hier.</p>
          </div>
       </div>
       <InteractiveSection 
         question="Si tout le monde peut 'générer' du code, qui sera le plus riche ?"
         answer="Celui qui sait concevoir l'ARCHITECTURE et la SÉCURITÉ du système global. C'est ce qu'on fait en BTS SIO."
       />
    </div>,

    // 9. L'IA dans la Cyber-attaque
    <div key="s8" className="h-full flex flex-col justify-center">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl border-2 border-red-500/30" alt="Cyber War" />
          <div>
            <h2 className="text-4xl font-bold font-heading mb-6 text-red-400">6. Dark IA : Le revers de la médaille</h2>
            <p className="text-xl text-slate-300">Deepfakes, Phishing 2.0 indétectable, virus auto-adaptatifs...</p>
            <InteractiveSection 
              question="À votre avis, qui peut contrer une IA malveillante ?"
              answer="Une IA de défense pilotée par un HUMAIN expert en SISR. La guerre du futur est déjà là."
            />
          </div>
       </div>
    </div>,

    // 10. Souveraineté : Qui possède votre cerveau ?
    <div key="s9" className="h-full flex flex-col justify-center text-center">
       <h2 className="text-4xl font-bold font-heading mb-8">7. Souveraineté Numérique</h2>
       <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-2xl italic">"Si vous dépendez d'une IA américaine ou chinoise pour coder, vous n'êtes plus libres."</p>
          <div className="flex justify-center gap-8">
             <div className="p-4 glass-panel rounded-xl">Mistral AI 🇫🇷</div>
             <div className="p-4 glass-panel rounded-xl">Llama 🇺🇸</div>
             <div className="p-4 glass-panel rounded-xl">DeepSeek 🇨🇳</div>
          </div>
          <p className="text-slate-400">Le BTS SIO forme les techniciens qui construiront le Cloud de confiance européen.</p>
       </div>
    </div>,

    // 11. Créativité vs Algorithme
    <div key="s10" className="h-full flex flex-col justify-center">
       <h2 className="text-4xl font-bold font-heading mb-8">8. La dernière frontière : L'Humain</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl">
             <h4 className="text-cyan-400 font-bold mb-4">L'IA Excel en :</h4>
             <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Vitesse de calcul</li>
                <li>Synthèse de données</li>
                <li>Tâches répétitives</li>
             </ul>
          </div>
          <div className="glass-panel p-8 rounded-3xl border-white/20">
             <h4 className="text-green-400 font-bold mb-4">VOUS excellez en :</h4>
             <ul className="list-disc list-inside space-y-2 text-white">
                <li>Empathie client</li>
                <li>Éthique et Jugement</li>
                <li>Créativité pure</li>
             </ul>
          </div>
       </div>
       <InteractiveSection 
         question="Citez une chose qu'une IA ne fera JAMAIS ?"
         answer="Prendre la responsabilité d'une erreur. C'est l'humain qui décide, l'IA qui exécute."
       />
    </div>,

    // 12. JEU DU PENDU : Compétence clé
    <div key="hangman" className="h-full">
       <Hangman />
    </div>,

    // 13. Apprendre à Désapprendre
    <div key="s11" className="h-full flex flex-col justify-center text-center">
       <h2 className="text-4xl font-bold font-heading mb-8">9. Le cycle de vie d'un expert</h2>
       <div className="relative h-64 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full h-2 bg-slate-800 rounded-full"></div>
          </div>
          <div className="flex justify-between w-full relative">
             <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-cyan-500 rounded-full mb-2"></div>
                <span className="text-sm">2024: Apprendre Python</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mb-2"></div>
                <span className="text-sm">2026: Maîtriser les LLM</span>
             </div>
             <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-yellow-500 rounded-full mb-2"></div>
                <span className="text-sm">2028: IA Quantique ?</span>
             </div>
          </div>
       </div>
       <p className="mt-8 text-xl text-slate-300">En SIO, on n'apprend pas un métier figé, on apprend à <span className="text-white font-bold">apprendre en continu</span>.</p>
    </div>,

    // 14. SIO : Le Cockpit
    <div key="s12" className="h-full flex flex-col justify-center">
       <div className="text-center mb-12">
          <h2 className="text-5xl font-bold font-heading mb-4">10. Le BTS SIO est votre Cockpit</h2>
          <p className="text-xl text-slate-400">Ne soyez pas le passager de l'IA. Soyez le pilote.</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-cyan-500/10 p-8 rounded-3xl border border-cyan-500/30">
             <h4 className="text-2xl font-bold mb-4">Option SISR</h4>
             <p>Construisez le monde où l'IA peut exister en toute sécurité.</p>
          </div>
          <div className="bg-green-500/10 p-8 rounded-3xl border border-green-500/30">
             <h4 className="text-2xl font-bold mb-4">Option SLAM</h4>
             <p>Donnez vie à l'IA pour résoudre les problèmes du monde réel.</p>
          </div>
       </div>
    </div>,

    // --- FIN DU CORE IA ---

    // 15. Journée SISR
    <div key="s13" className="h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.8)]"><ShieldCheck /></div>
            <h2 className="text-4xl font-bold font-heading italic">Mission : Cyber-Admin (SISR)</h2>
          </div>
          <div className="space-y-4">
            {[
              { time: "09:00", task: "Analyse des tentatives d'intrusion de la nuit via IA Sentinel." },
              { time: "11:00", task: "Déploiement auto d'un cluster Cloud crypté (Infrastructure as Code)." },
              { time: "15:00", task: "Audit de sécurité sur les accès biométriques." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-cyan-400 font-mono font-bold">{item.time}</div>
                <div className="text-lg text-slate-200">{item.task}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full h-80 lg:h-full min-h-[300px] rounded-3xl overflow-hidden border-2 border-cyan-500/50">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover shadow-inner" alt="Cyber Ops" />
        </div>
      </div>
    </div>,

    // 16. Journée SLAM
    <div key="s14" className="h-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-green-500 text-slate-950 shadow-[0_0_15px_rgba(34,197,94,0.8)]"><Code2 /></div>
            <h2 className="text-4xl font-bold font-heading italic">Mission : AI-Developer (SLAM)</h2>
          </div>
          <div className="space-y-4">
            {[
              { time: "10:00", task: "Entraînement d'un modèle d'IA métier pour un client." },
              { time: "14:00", task: "Debugging via analyseur de flux de code intelligent." },
              { time: "16:30", task: "Revue de code sur une App SaaS d'économie circulaire." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-green-400 font-mono font-bold">{item.time}</div>
                <div className="text-lg text-slate-200">{item.task}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full h-80 lg:h-full min-h-[300px] rounded-3xl overflow-hidden border-2 border-green-500/50">
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Coding" />
        </div>
      </div>
    </div>,

    // 17. Chiffres Clés
    <div key="s15" className="h-full flex flex-col justify-center">
      <h2 className="text-4xl font-bold font-heading mb-8 text-center text-white">L'informatique : Un ascenseur social</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-8 glass-panel rounded-3xl text-center border-b-4 border-cyan-500">
          <div className="text-4xl font-black text-cyan-400 mb-2">38 k€</div>
          <div className="text-lg font-bold">Salaire moyen junior</div>
        </div>
        <div className="p-8 glass-panel rounded-3xl text-center border-b-4 border-green-500">
          <div className="text-4xl font-black text-green-400 mb-2">+150 000</div>
          <div className="text-lg font-bold">Postes à pourvoir</div>
        </div>
        <div className="p-8 glass-panel rounded-3xl text-center border-b-4 border-yellow-500">
          <div className="text-4xl font-black text-yellow-400 mb-2">95%</div>
          <div className="text-lg font-bold">CDI dès la sortie</div>
        </div>
      </div>
      <InteractiveSection 
        question="Est-ce que c'est difficile ?"
        answer="C'est exigeant. Mais avec de la logique, de la passion et beaucoup de curiosité, n'importe qui peut devenir un expert."
      />
    </div>,

    // 18. Passerelles
    <div key="s16" className="h-full flex flex-col justify-center text-center">
      <h2 className="text-5xl font-bold font-heading mb-6">Un choix, mille opportunités.</h2>
      <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
        Bachelor, Licence Pro, Master, École d'ingé... Le BTS SIO n'est que le premier étage de la fusée.
      </p>
      <div className="flex justify-center items-center gap-12 text-3xl font-bold">
        <div className="text-cyan-400">SISR</div>
        <div className="text-white animate-pulse"><Repeat size={48} /></div>
        <div className="text-green-400">SLAM</div>
      </div>
    </div>,

    // 19. Quiz
    <div key="s17" className="h-full">
      <Quiz />
    </div>,

    // 20. Conclusion
    <div key="s18" className="h-full flex flex-col items-center justify-center text-center relative">
      <div className="absolute inset-0 z-0 opacity-10">
         <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="End" />
      </div>
      <h2 className="text-6xl font-black font-heading mb-8 z-10">VOTRE AVENTURE <span className="text-cyan-400">SIO</span> COMMENCE</h2>
      <div className="flex flex-col md:flex-row gap-12 items-center glass-panel p-10 rounded-[3rem] border-white/20 z-10 shadow-2xl">
        <div className="bg-white p-4 rounded-3xl">
          <QrCode size={180} className="text-slate-900" />
        </div>
        <div className="text-left space-y-6">
          <p className="text-2xl font-bold italic text-slate-300">"Prêts à coder le monde de demain ?"</p>
          <div className="space-y-4">
             <button className="w-full flex items-center justify-between px-8 py-4 cyber-gradient rounded-2xl text-slate-900 font-black text-xl hover:scale-105 transition-transform" onClick={() => window.open('https://parcoursup.fr', '_blank')}>
               DOSSIER PARCOURSUP <ArrowRight />
             </button>
             <p className="text-center text-slate-500 font-mono text-sm uppercase tracking-widest">Scannez pour la fiche formation</p>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-950 selection:bg-cyan-500 selection:text-white">
      {/* Background interactif */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,1)_0%,rgba(2,6,23,1)_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-900/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Progress Bar améliorée pour projecteur */}
      <div className="absolute top-0 left-0 w-full h-3 z-50 flex shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 h-full transition-all duration-500 border-r border-black/20 ${i <= currentSlide ? 'bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,1)]' : 'bg-white/5'}`}
          />
        ))}
      </div>

      {/* Content */}
      <main className="h-full container mx-auto px-6 flex items-center justify-center relative z-10">
        <SlideWrapper active={true}>
          {slides[currentSlide]}
        </SlideWrapper>
      </main>

      {/* Navigation Controls optimisés pour grand écran */}
      <div className="absolute bottom-6 left-0 w-full px-8 flex justify-between items-center z-50">
        <div className="hidden md:block text-slate-500 font-mono text-xl font-bold">
          <span className="text-cyan-400">{String(currentSlide + 1).padStart(2, '0')}</span> <span className="text-slate-700">/</span> {totalSlides}
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-4 rounded-2xl glass-panel transition-all border-2 ${currentSlide === 0 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-white/10 border-white/20'}`}
            title="Précédent (Flèche gauche)"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`p-4 rounded-2xl glass-panel transition-all border-2 ${currentSlide === totalSlides - 1 ? 'opacity-10 cursor-not-allowed' : 'hover:bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]'}`}
            title="Suivant (Espace / Flèche droite)"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3 text-slate-500 text-xs font-black uppercase tracking-[0.2em]">
          <kbd className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">ESPACE</kbd>
          <span className="opacity-50">SUIVANT</span>
        </div>
      </div>
    </div>
  );
};

export default App;
