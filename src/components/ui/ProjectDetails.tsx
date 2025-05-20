'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';

// Define types for project details
type ProjectLink = {
  title: string;
  url: string;
};

type Project = {
  title: string;
  organization: string;
  description: string;
  outcome: string;
  technologies: string[];
  images: string[];
  links: ProjectLink[];
};

type ProjectDetailsType = {
  [key: string]: Project;
};

// Detailed project data
const projectDetails: ProjectDetailsType = {
  uniswap: {
    title: 'Strategy Analysis',
    organization: 'Uniswap Foundation',
    description: 'Conducted in-depth analysis of the Uniswap protocol, focusing on metrics around liquidity, trading volumes, and ecosystem development. The research involved collecting and processing on-chain data, identifying trends, and providing actionable insights for the foundation.',
    outcome: 'Delivered comprehensive reports that helped inform strategic decisions and protocol improvements. The findings were used to optimize liquidity incentives and identify growth opportunities within the Uniswap ecosystem.',
    technologies: ['Web3 Research', 'Data Analysis', 'DeFi', 'AI Research', 'Ecosystem Development'],
    images: [
      '/images/Unichain1.png',
      '/images/Unichain2.png',
    ],
    links: [
      { title: 'Uniswap Foundation', url: 'https://uniswapfoundation.org/' },
      { title: 'Dune Dashboard', url: 'https://dune.com/your-username/uniswap-analysis' },
    ],
  },
  gcr: {
    title: 'Research Analysis',
    organization: 'Global Coin Research',
    description: 'Wrote comprehensive research articles for Global Coin Research, covering emerging trends, protocols, and developments in the cryptocurrency and blockchain space. Topics included DeFi innovations, layer-2 scaling solutions, and NFT market analysis.',
    outcome: 'Published multiple well-received articles that provided valuable insights to Global Coin Research\'s audience. The content helped readers understand complex blockchain concepts and make informed decisions.',
    technologies: ['Technical Writing', 'Web3 Research', 'DeFi', 'AI Research'],
    images: [
      '/images/GlobalCoinResearch1.png',
      '/images/GlobalCoinResearch2.png',
    ],
    links: [
      { title: 'Global Coin Research', url: 'https://globalcoinresearch.com/' },
      { title: 'Article Collection', url: 'https://globalcoinresearch.com/author/your-name/' },
    ],
  },
  'ai-agents': {
    title: 'AI Agent Development',
    organization: 'GitHub Projects',
    description: 'Developed autonomous AI agents designed to analyze blockchain data, monitor protocol activities, and generate insights. These agents leverage machine learning algorithms to identify patterns and anomalies in blockchain transactions and smart contract interactions.',
    outcome: 'Created a suite of AI tools that automate data collection and analysis tasks, making blockchain research more efficient and accurate. These agents have been used to monitor DeFi protocols, track user behavior, and detect potential security risks.',
    technologies: ['AI Development', 'Software Development', 'AI Research'],
    images: [
      '/images/AIAgentDev.png',
      '/images/AIAgentDev2.png',
    ],
    links: [
      { title: 'GitHub Repository', url: 'https://github.com/yourusername/blockchain-ai-agents' },
      { title: 'Documentation', url: 'https://github.com/yourusername/blockchain-ai-agents/docs' },
    ],
  },
  'data-analysis': {
    title: 'Data Analysis',
    organization: 'Dune Analytics',
    description: 'Created interactive dashboards on Dune Analytics to visualize and analyze on-chain data for Base and the Uniswap Foundation. These dashboards provide real-time insights into key metrics such as trading volumes, liquidity, user activity, and protocol revenue.',
    outcome: 'The dashboards have become valuable resources for the community, offering accessible and actionable insights into protocol performance and ecosystem growth. They are regularly referenced in community discussions and research reports.',
    technologies: ['Data Analysis', 'Web3 Research'],
    images: [
      '/images/DataAnalysis.png',
      '/images/DataAnalysis2.png',
    ],
    links: [
      { title: 'Base Dashboard', url: 'https://dune.com/your-username/base-metrics' },
      { title: 'Uniswap Dashboard', url: 'https://dune.com/your-username/uniswap-metrics' },
      { title: 'Dune Profile', url: 'https://dune.com/your-username' },
    ],
  },
  'game-development': {
    title: 'Game Design & Entrepreneurship',
    organization: 'Kelepar',
    description: 'Led product management and ecosystem growth for a Web3 game developed at Kelepar. The game integrates blockchain technology to provide players with true ownership of in-game assets, a player-driven economy, and decentralized governance features.',
    outcome: 'Successfully launched the game and built a thriving community around it. The project has gained recognition in the Web3 gaming space and continues to evolve with new features and improvements based on player feedback.',
    technologies: ['Product Management', 'Ecosystem Development'],
    images: [
      '/images/GameDesign.png',
      '/images/GameDesign2.webp',
    ],
    links: [
      { title: 'Kelepar Website', url: 'https://kelepar.com/' },
      { title: 'Game Page', url: 'https://kelepar.com/game' },
    ],
  },
  substack: {
    title: 'Technical Writing',
    organization: 'Personal Substack & Auditless',
    description: 'Maintain a personal Substack where I write about blockchain technology, Web3 development, and AI innovation. Additionally, I contribute technical articles to Auditless, focusing on smart contract security, audit processes, and best practices for blockchain development.',
    outcome: 'Built a following of readers interested in technical blockchain content. My articles have helped developers and enthusiasts understand complex concepts and stay updated on the latest developments in the space.',
    technologies: ['Technical Writing', 'Web3 Research', 'AI Research'],
    images: [
      '/images/Writing1.png',
      '/images/Writing2.png',
    ],
    links: [
      { title: 'Personal Substack', url: 'https://yoursubstack.substack.com/' },
      { title: 'Auditless Articles', url: 'https://auditless.com/author/your-name' },
    ],
  },
};

export default function ProjectDetails() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  // Effect to show project based on URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash && projectDetails[hash]) {
        setActiveProject(hash);
        
        // Scroll to section
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Initial check
    handleHash();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  
  // Function to handle skill click
  const handleSkillClick = (skill: string) => {
    // Close current project details
    setActiveProject(null);
    window.history.pushState("", document.title, window.location.pathname);
    
    // Create a custom event for skill filtering
    const event = new CustomEvent('filterBySkill', { detail: skill });
    window.dispatchEvent(event);
    
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  if (!activeProject) return null;
  
  const project = projectDetails[activeProject];
  
  return (
    <motion.div
      id={activeProject}
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: activeProject ? 1 : 0, 
        height: activeProject ? 'auto' : 0 
      }}
      transition={{ duration: 0.5 }}
      className="py-6 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.organization}
          </span>
          <h3 className="text-2xl font-bold mt-2 mb-6">{project.title}</h3>
          
          <div className="prose dark:prose-invert prose-lg max-w-none mb-6">
            <p>{project.description}</p>
            <h4 className="text-xl font-semibold mt-6 mb-2">Outcome</h4>
            <p>{project.outcome}</p>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3">Technologies & Skills</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <button 
                  key={index}
                  onClick={() => handleSkillClick(tech)}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm cursor-pointer transition-colors"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
          
          {project.links && project.links.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-3">Links</h4>
              <div className="flex flex-col gap-2">
                {project.links.map((link: ProjectLink, index: number) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {link.title}
                    <FiExternalLink className="ml-1" size={16} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 gap-4">
            {project.images.map((image: string, index: number) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setActiveProject(null);
            window.history.pushState("", document.title, window.location.pathname);
          }}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Close Details
        </button>
      </div>
    </motion.div>
  );
} 