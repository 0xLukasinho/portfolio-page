'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transforming complex Web3 challenges into strategic opportunities
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-blue-100 dark:bg-blue-900/20">
                <Image
                  src="/images/profilepic.jpg"
                  alt="Profile Photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              
              <div className="flex justify-center gap-4 mt-6">
                <a 
                  href="https://x.com/0xlukasinho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="X (Twitter) Profile"
                >
                  <FiTwitter size={22} />
                </a>
                <a 
                  href="https://github.com/0xLukasinho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FiGithub size={22} />
                </a>
                <a 
                  href="https://dune.com/0xlukasinho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Dune Analytics Profile"
                >
                  <FiExternalLink size={22} />
                </a>
              </div>
            </motion.div>
            
            {/* Bio Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3"
            >
              <div className="prose dark:prose-invert prose-lg max-w-none">
                <p>
                  Transforming complex Web3 challenges into strategic opportunities is what drives my work. With cross-domain experience spanning DeFi, AI integration, and ecosystem development, my approach bridges technical innovation with business growth through rigorous analytical frameworks that extract actionable insights from complex data.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Core Skills:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><span className="font-medium">Research & Analysis</span> - Ecosystem Evaluation, Investment Thesis Development, Data-Driven Insights</li>
                    <li><span className="font-medium">Strategic Direction</span> - Product Strategy, Ecosystem Development, Go-to-Market Planning</li>
                    <li><span className="font-medium">Product Management</span> - Feature Definition, Roadmap Creation, Leading cross-functional teams</li>
                    <li><span className="font-medium">AI System Development</span> - Workflow & ProcessAutomation, Building intelligent Multi-Agent Systems</li>
                    <li><span className="font-medium">Implementation Focus</span> - Solution Development, Practical Execution, Problem-Solving</li>
                  </ul>
                </div>
                
                <p className="mt-6">
                  <strong>Value-Driven Approach:</strong> My work combines analytical depth with strategic vision and practical implementation. I identify overlooked opportunities, develop frameworks to capture their value, and guide successful implementation - creating lasting impact through systematic, creative problem-solving.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 