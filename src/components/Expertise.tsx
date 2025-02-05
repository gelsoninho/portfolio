import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Bot, ChevronRight } from 'lucide-react';

// Composant personnalisé pour l'icône Blockchain
const BlockchainIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="12" width="6" height="6" />
    <rect x="9" y="12" width="6" height="6" />
    <rect x="16" y="12" width="6" height="6" />
    <rect x="5" y="6" width="6" height="6" />
    <rect x="12" y="6" width="6" height="6" />
  </svg>
);

interface ExpertiseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
  caseStudy?: string;
}

const ExpertiseCard = ({ icon: Icon, title, description, skills, caseStudy }: ExpertiseCardProps) => {
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-[#0c0d15]/80 backdrop-blur-sm p-6 rounded-xl border border-[#9945FF]/20 hover:border-[#14F195] transition-all duration-300 group solana-glow"
    >
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-[#14F195] mr-3 group-hover:text-[#9945FF] transition-colors duration-300" />
        <h3 className="text-xl font-bold text-white solana-gradient">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-[#1a1f3c] text-[#14F195] rounded-full hover:bg-[#9945FF]/20 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
      {caseStudy && (
        <div className="mt-4 p-4 bg-[#1a1f3c]/50 rounded-lg border border-[#9945FF]/10">
          <div className="flex items-center text-[#14F195] text-sm mb-2">
            <ChevronRight className="h-4 w-4 mr-1" />
            <span>Cas pratique</span>
          </div>
          <p className="text-gray-300 text-sm">{caseStudy}</p>
        </div>
      )}
    </motion.div>
  );
};

export const Expertise = () => {
  const expertise = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Création d'applications web modernes et performantes",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
      caseStudy: "Développement de mon portfolio avec React, Vite.Js, création projet Django avec une interface admin"
    },
    {
      icon: BlockchainIcon,
      title: "Blockchain",
      description: "Exploration et développement de solutions blockchain",
      skills: ["Ethereum", "Solidity", "Web3.py", "Smart Contracts", "Solana", "DeFi", "Linux", "Docker"],
      caseStudy: "Déploiement de nodes blockchain en testnet et développement de smart contracts"
    },
    {
      icon: Bot,
      title: "Automatisation",
      description: "Création de bots et scripts d'automatisation intelligents",
      skills: ["Python", "Selenium", "BeautifulSoup", "FastAPI", "Linux"],
      caseStudy: "Bot de copy-trading crypto avec diverses stratégies sur Telegram"
    }
  ];

  return (
    <section className="py-20 bg-[#0c0d15] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d15] to-[#1a1f3c] opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 solana-gradient">Expertise Technique</h2>
          <p className="text-xl text-[#14F195]">Spécialisé dans les technologies émergentes</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ExpertiseCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
