'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-blue-100 dark:bg-blue-900/20">
              <Image
                src="/images/profile.jpg"
                alt="Profile Photo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={22} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter Profile"
              >
                <FiTwitter size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </motion.div>
          
          {/* Bio Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/3"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
            <div className="prose dark:prose-invert prose-lg max-w-none">
              <p>
                Transforming complex Web3 challenges into strategic opportunities is what drives my work. With cross-domain experience spanning DeFi, AI integration, and ecosystem development, my approach bridges technical innovation with business growth through rigorous analytical frameworks that extract actionable insights from complex data.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">Research & Opportunity Analysis</h2>
              <p>
                The rapidly evolving Web3 landscape requires identifying patterns where others see only noise. My research methodology combines quantitative metrics with qualitative understanding, developing investment theses and strategic recommendations that balance innovation potential with practical implementation paths.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">Strategic Direction</h2>
              <p>
                Effective strategies emerge from a deep understanding of ecosystem dynamics. By integrating data-driven insights with contextual knowledge, my frameworks identify key leverage points and create actionable roadmaps that align technical capabilities with market opportunities.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">Technical-Business Translation</h2>
              <p>
                Complex technical concepts become accessible and strategically relevant when properly translated. This bridge-building creates clear communication between technical teams, stakeholders, and investors—essential for conveying the value proposition of emerging technologies.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">Implementation Focus</h2>
              <p>
                Strategic vision means little without practical application. High-impact solutions require identifying friction points and developing targeted interventions that deliver tangible improvements. This implementation mindset transforms conceptual innovations into functional tools that solve real problems.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">Value-Driven Approach</h2>
              <p>
                The most valuable work combines analytical depth with strategic vision and practical implementation. By uncovering overlooked opportunities and developing frameworks to capture their value, lasting impact emerges through systematic, creative problem-solving that addresses root challenges rather than symptoms.
              </p>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/#projects" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                View My Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 