import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    title: "Bot de Trading Crypto",
    description: "Bot de trading automatisé utilisant des stratégies SMA/RSI pour le trading de cryptomonnaies. Intègre un système de backtesting pour valider les stratégies.",
    image: "https://t3.ftcdn.net/jpg/03/10/46/56/360_F_310465670_Wy4QCEfxYU2ziHjbeZsNAumKhaZzZS1w.jpg",
    technologies: ["Python", "Pandas", "FastAPI", "Docker"],
    githubUrl: "https://github.com/gelsoninho/crypto-trading-bot",
    icon: Bot
  },
  {
    title: "Testnet Node Operator",
    description: "Opérateur de nœud sur le testnet Solana, participant activement à la validation des transactions et au maintien de la sécurité du réseau. Configuration et maintenance de l'infrastructure pour assurer une haute disponibilité.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    technologies: ["Solana", "Linux", "Monitoring", "DevOps"],
    icon: Bot
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const Icon = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0c0d15]/80 rounded-xl overflow-hidden border border-[#9945FF]/20 hover:border-[#14F195] transition-all duration-300 group solana-glow"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d15] to-transparent" />
        <Icon className="absolute top-4 right-4 h-8 w-8 text-[#14F195]" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 solana-gradient">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-[#1a1f3c] text-[#14F195] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#14F195] transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#14F195] transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0c0d15]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 solana-gradient">Mes Innovations</h2>
          <p className="text-xl text-[#14F195]">Découvrez mes derniers projets</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};