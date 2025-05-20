'use client';

import { motion } from 'framer-motion';
import ProjectDetail from '@/components/ui/ProjectDetail';

const projects = [
  {
    id: 'uniswap',
    title: 'Research Analysis',
    organization: 'Uniswap Foundation',
    description: 'Conducted in-depth analysis of the Uniswap protocol, focusing on metrics around liquidity, trading volumes, and ecosystem development. The research involved collecting and processing on-chain data, identifying trends, and providing actionable insights for the foundation.',
    outcome: 'Delivered comprehensive reports that helped inform strategic decisions and protocol improvements. The findings were used to optimize liquidity incentives and identify growth opportunities within the Uniswap ecosystem.',
    technologies: ['Data Analysis', 'On-chain Analytics', 'SQL', 'Python', 'Dune Analytics'],
    images: [
      '/images/uniswap-research-1.jpg',
      '/images/uniswap-research-2.jpg',
    ],
    links: [
      { title: 'Uniswap Foundation', url: 'https://uniswapfoundation.org/' },
      { title: 'Dune Dashboard', url: 'https://dune.com/your-username/uniswap-analysis' },
    ],
  },
  {
    id: 'gcr',
    title: 'Research Analysis',
    organization: 'Global Coin Research',
    description: 'Wrote comprehensive research articles for Global Coin Research, covering emerging trends, protocols, and developments in the cryptocurrency and blockchain space. Topics included DeFi innovations, layer-2 scaling solutions, and NFT market analysis.',
    outcome: 'Published multiple well-received articles that provided valuable insights to Global Coin Research\'s audience. The content helped readers understand complex blockchain concepts and make informed decisions.',
    technologies: ['Technical Writing', 'Market Research', 'Blockchain Analysis', 'DeFi'],
    images: [
      '/images/gcr-research-1.jpg',
      '/images/gcr-research-2.jpg',
    ],
    links: [
      { title: 'Global Coin Research', url: 'https://globalcoinresearch.com/' },
      { title: 'Article Collection', url: 'https://globalcoinresearch.com/author/your-name/' },
    ],
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    organization: 'GitHub Projects',
    description: 'Developed autonomous AI agents designed to analyze blockchain data, monitor protocol activities, and generate insights. These agents leverage machine learning algorithms to identify patterns and anomalies in blockchain transactions and smart contract interactions.',
    outcome: 'Created a suite of AI tools that automate data collection and analysis tasks, making blockchain research more efficient and accurate. These agents have been used to monitor DeFi protocols, track user behavior, and detect potential security risks.',
    technologies: ['Python', 'TensorFlow', 'Langchain', 'Web3.py', 'Docker', 'GitHub Actions'],
    images: [
      '/images/ai-agents-1.jpg',
      '/images/ai-agents-2.jpg',
    ],
    links: [
      { title: 'GitHub Repository', url: 'https://github.com/yourusername/blockchain-ai-agents' },
      { title: 'Documentation', url: 'https://github.com/yourusername/blockchain-ai-agents/docs' },
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    organization: 'Dune Analytics',
    description: 'Created interactive dashboards on Dune Analytics to visualize and analyze on-chain data for Base and the Uniswap Foundation. These dashboards provide real-time insights into key metrics such as trading volumes, liquidity, user activity, and protocol revenue.',
    outcome: 'The dashboards have become valuable resources for the community, offering accessible and actionable insights into protocol performance and ecosystem growth. They are regularly referenced in community discussions and research reports.',
    technologies: ['SQL', 'Dune Analytics', 'Data Visualization', 'On-chain Analytics'],
    images: [
      '/images/data-analysis-1.jpg',
      '/images/data-analysis-2.jpg',
    ],
    links: [
      { title: 'Base Dashboard', url: 'https://dune.com/your-username/base-metrics' },
      { title: 'Uniswap Dashboard', url: 'https://dune.com/your-username/uniswap-metrics' },
      { title: 'Dune Profile', url: 'https://dune.com/your-username' },
    ],
  },
  {
    id: 'game-development',
    title: 'Game Development',
    organization: 'Kelepar',
    description: 'Led product management and ecosystem growth for a Web3 game developed at Kelepar. The game integrates blockchain technology to provide players with true ownership of in-game assets, a player-driven economy, and decentralized governance features.',
    outcome: 'Successfully launched the game and built a thriving community around it. The project has gained recognition in the Web3 gaming space and continues to evolve with new features and improvements based on player feedback.',
    technologies: ['Product Management', 'Ecosystem Development', 'Web3 Gaming', 'Community Building'],
    images: [
      '/images/game-dev-1.jpg',
      '/images/game-dev-2.jpg',
    ],
    links: [
      { title: 'Kelepar Website', url: 'https://kelepar.com/' },
      { title: 'Game Page', url: 'https://kelepar.com/game' },
    ],
  },
  {
    id: 'substack',
    title: 'Technical Writing',
    organization: 'Personal Substack & Auditless',
    description: 'Maintain a personal Substack where I write about blockchain technology, Web3 development, and AI innovation. Additionally, I contribute technical articles to Auditless, focusing on smart contract security, audit processes, and best practices for blockchain development.',
    outcome: 'Built a following of readers interested in technical blockchain content. My articles have helped developers and enthusiasts understand complex concepts and stay updated on the latest developments in the space.',
    technologies: ['Technical Writing', 'Blockchain Education', 'Smart Contract Security', 'Content Creation'],
    images: [
      '/images/writing-1.jpg',
      '/images/writing-2.jpg',
    ],
    links: [
      { title: 'Personal Substack', url: 'https://yoursubstack.substack.com/' },
      { title: 'Auditless Articles', url: 'https://auditless.com/author/your-name' },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-16 text-center"
      >
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A showcase of my work in Web3 research, data analysis, AI development, 
          and other projects across the blockchain ecosystem.
        </p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto">
        {projects.map((project) => (
          <ProjectDetail key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
} 