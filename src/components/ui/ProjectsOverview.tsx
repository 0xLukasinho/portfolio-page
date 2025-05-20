'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

// Sample projects - replace with your actual projects later
const projectCategories = [
  {
    id: 'uniswap',
    title: 'Research Analysis',
    subtitle: 'Uniswap Foundation',
    description: 'In-depth research and analysis of Uniswap protocol metrics and ecosystem growth.',
    imageSrc: '/images/uniswap-research.jpg',
    href: '/projects#uniswap'
  },
  {
    id: 'gcr',
    title: 'Research Analysis',
    subtitle: 'Global Coin Research',
    description: 'Comprehensive articles analyzing trends in the cryptocurrency and blockchain space.',
    imageSrc: '/images/gcr-research.jpg',
    href: '/projects#gcr'
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    subtitle: 'GitHub Projects',
    description: 'Development of autonomous AI agents for various blockchain and data analysis tasks.',
    imageSrc: '/images/ai-agents.jpg',
    href: '/projects#ai-agents'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    subtitle: 'Dune Analytics',
    description: 'Interactive dashboards visualizing on-chain data for Base and Uniswap Foundation.',
    imageSrc: '/images/data-analysis.jpg',
    href: '/projects#data-analysis'
  },
];

export default function ProjectsOverview() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCategories.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-60 bg-gray-200 dark:bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <Image 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-105 duration-300"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Link 
                  href={project.href}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
                >
                  View Details <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            View All Projects <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 