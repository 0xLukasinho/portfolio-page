'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import SkillsFilter from './SkillsFilter';

// Define a type for project categories
type ProjectCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  href: string;
  technologies: string[]; // Add technologies array to each project
};

// Projects data from the projects page
const projectCategories: ProjectCategory[] = [
  {
    id: 'uniswap',
    title: 'Strategy Analysis',
    subtitle: 'Uniswap Foundation',
    description: 'In-depth research and analysis of Uniswap protocol metrics and ecosystem growth.',
    imageSrc: '/images/Unichain.png',
    href: '/projects/uniswap',
    technologies: ['Web3 Research', 'Data Analysis', 'DeFi', 'AI Research', 'Ecosystem Development']
  },
  {
    id: 'gcr',
    title: 'Research Analysis',
    subtitle: 'Global Coin Research',
    description: 'Comprehensive articles analyzing trends in the cryptocurrency and blockchain space.',
    imageSrc: '/images/GlobalCoinResearch1.png',
    href: '/projects/gcr',
    technologies: ['Technical Writing', 'Web3 Research', 'DeFi', 'AI Research']
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    subtitle: 'GitHub Projects',
    description: 'Development of autonomous AI agents for various blockchain and data analysis tasks.',
    imageSrc: '/images/AIAgentDev.png',
    href: '/projects/ai-agents',
    technologies: ['AI Development', 'Software Development', 'AI Research']
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    subtitle: 'Dune Analytics',
    description: 'Interactive dashboards visualizing on-chain data for Base and Uniswap Foundation.',
    imageSrc: '/images/DataAnalysis.png',
    href: '/projects/data-analysis',
    technologies: ['Data Analysis', 'Web3 Research']
  },
  {
    id: 'game-development',
    title: 'Entrepreneurship & Game Design',
    subtitle: 'Kelepar',
    description: 'Led product management and ecosystem growth for a Web3 game developed at Kelepar.',
    imageSrc: '/images/GameDesign.png',
    href: '/projects/game-development',
    technologies: ['Product Management', 'Ecosystem Development', 'Web3 Research']
  },
  {
    id: 'substack',
    title: 'Technical Writing',
    subtitle: 'Personal Substack & Auditless',
    description: 'Articles on blockchain technology, Web3 development, and AI for Substack and Auditless.',
    imageSrc: '/images/Writing1.png',
    href: '/projects/substack',
    technologies: ['Technical Writing', 'Web3 Research', 'AI Research']
  },
];

export default function ProjectsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  
  // Extract all unique skills from projects
  const allSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    
    projectCategories.forEach(project => {
      project.technologies.forEach(tech => {
        skillsSet.add(tech);
      });
    });
    
    return Array.from(skillsSet).sort();
  }, []);
  
  // Filter projects based on active skill
  const filteredProjects = useMemo(() => {
    if (!activeSkill) return projectCategories;
    
    return projectCategories.filter(project => 
      project.technologies.includes(activeSkill)
    );
  }, [activeSkill]);
  
  // Reset filter when component mounts or when URL changes
  useEffect(() => {
    const handleHashChange = () => {
      // Reset filter if user navigates to a specific project
      if (window.location.hash && window.location.hash.length > 1) {
        setActiveSkill(null);
      }
    };
    
    const handleFilterBySkill = (event: CustomEvent) => {
      setActiveSkill(event.detail);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('filterBySkill', handleFilterBySkill as EventListener);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('filterBySkill', handleFilterBySkill as EventListener);
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my projects in Web3 research, data analysis, AI agent development, and more
          </p>
        </motion.div>
        
        {/* Skills filter */}
        <SkillsFilter 
          skills={allSkills} 
          activeSkill={activeSkill} 
          onChange={setActiveSkill} 
        />

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 dark:text-gray-400">No projects found with this skill.</p>
              <button 
                onClick={() => setActiveSkill(null)}
                className="mt-4 text-blue-600 dark:text-blue-400 underline"
              >
                Show all projects
              </button>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <div key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  id={`overview-${project.id}`}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative h-60 bg-gray-200 dark:bg-gray-800">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                      <Image 
                        src={project.imageSrc} 
                        alt={project.title}
                        className="object-cover transition-transform group-hover:scale-105 duration-300"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute bottom-0 left-0 p-6 z-20">
                        <span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      
                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            onClick={() => setActiveSkill(tech)}
                            className={`
                              px-2 py-1 text-xs rounded-full cursor-pointer transition-colors
                              ${tech === activeSkill 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'}
                            `}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={project.href}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
                      >
                        View Details <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 