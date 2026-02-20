
import React, { useState } from 'react';

const sisr_words = ["Réseaux", "Sécurité", "Cybersécurité", "Pare-feu", "Serveurs", "Virtualisation", "Cloud", "Datacenter", "Stockage", "Sauvegarde", "Supervision", "Haute disponibilité", "Protocoles", "TCP/IP", "VLAN", "VPN", "Active Directory", "Linux", "Windows Server", "Monitoring", "Performance", "Résilience", "Continuité de service", "Infrastructure", "Administration"];
const slam_words = ["Développement", "Programmation", "Algorithme", "Applications", "Web", "Mobile", "Base de données", "SQL", "API", "Interface utilisateur", "Expérience utilisateur", "Framework", "Java", "Python", "JavaScript", "Intelligence artificielle", "Machine learning", "Automatisation", "Tests", "Déploiement", "DevOps", "Innovation", "Solutions métier", "Architecture logicielle", "Créativité"];

interface Word {
  text: string;
  color: string;
  theme: 'SISR' | 'SLAM';
  size: number;
  rotation: number;
  opacity: number;
}

const generateWords = (): Word[] => {
  const all = [
    ...sisr_words.map(w => ({ text: w, color: 'text-cyan-400', theme: 'SISR' as const })),
    ...slam_words.map(w => ({ text: w, color: 'text-white', theme: 'SLAM' as const }))
  ].sort(() => Math.random() - 0.5);

  return all.map(w => ({
    ...w,
    size: Math.floor(Math.random() * 5) + 1,
    rotation: (Math.random() * 20) - 10,
    opacity: Math.random() * 0.5 + 0.5,
  }));
};

export const WordCloud: React.FC = () => {
  const [words] = useState<Word[]>(generateWords());
  const [filter, setFilter] = useState<'ALL' | 'SISR' | 'SLAM'>('ALL');

  const toggleFilter = (theme: 'SISR' | 'SLAM') => {
    if (filter === theme) {
      setFilter('ALL');
    } else {
      setFilter(theme);
    }
  };

  return (
    <div className="text-center space-y-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
      <div className="flex justify-center gap-20 mb-12">
        <div 
          onClick={() => toggleFilter('SISR')} 
          className={`flex items-center gap-4 cursor-pointer hover:scale-105 transition-all group ${filter === 'SLAM' ? 'opacity-20' : 'opacity-100'}`}
        >
          <div className="w-8 h-8 bg-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4] group-hover:shadow-[0_0_25px_#06b6d4]"></div>
          <h3 className="text-4xl font-black font-heading text-cyan-400 uppercase tracking-widest">🔐 SISR</h3>
        </div>
        <div 
          onClick={() => toggleFilter('SLAM')} 
          className={`flex items-center gap-4 cursor-pointer hover:scale-105 transition-all group ${filter === 'SISR' ? 'opacity-20' : 'opacity-100'}`}
        >
          <div className="w-8 h-8 bg-white rounded-full shadow-[0_0_15px_#ffffff] group-hover:shadow-[0_0_25px_#ffffff]"></div>
          <h3 className="text-4xl font-black font-heading text-white uppercase tracking-widest">💻 SLAM</h3>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 leading-relaxed text-center overflow-hidden min-h-[400px] flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
        {words.map((w, i) => {
          const isHidden = filter !== 'ALL' && w.theme !== filter;
          if (isHidden) return null;

          const sizeClass = w.size === 1 ? 'text-xs' : w.size === 2 ? 'text-sm' : w.size === 3 ? 'text-lg' : w.size === 4 ? 'text-2xl' : 'text-4xl';
          const weight = w.size > 3 ? 'font-black' : 'font-medium';

          return (
            <span 
              key={i}
              className={`word-cloud-item ${w.color} ${sizeClass} ${weight} transition-all duration-500 hover:scale-125 hover:rotate-0 cursor-default`}
              style={{ 
                transform: `rotate(${w.rotation}deg)`, 
                opacity: w.opacity,
                display: 'inline-block'
              }}
            >
              {w.text}
            </span>
          );
        })}
      </div>
      <p className="text-2xl text-slate-500 italic font-light mt-8">Cliquez sur une thématique pour isoler ses concepts clés.</p>
    </div>
  );
};
