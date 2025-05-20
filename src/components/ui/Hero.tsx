'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-start text-left max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight"
          >
            I am Lukas — Transforming complex <span className="text-blue-500 dark:text-blue-400">Web3 challenges</span> into <span className="text-blue-500 dark:text-blue-400">strategic opportunities</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Currently at <span className="font-medium">Auditless</span>, working with the <span className="font-medium">Uniswap Foundation</span> to develop ecosystem growth strategies, product frameworks, and research-driven innovation paths.
          </motion.p>
        </div>
      </div>
      
      {/* Background animated gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -10, y: -10 }}
          animate={{ 
            opacity: 0.7, 
            x: [0, 70, 0, -70, 0], 
            y: [0, -70, 0, 70, 0] 
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            repeatType: "mirror" 
          }}
          className="absolute top-0 -left-40 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full filter blur-2xl opacity-40 mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          initial={{ opacity: 0, x: 10, y: 10 }}
          animate={{ 
            opacity: 0.7, 
            x: [0, -60, 0, 60, 0], 
            y: [0, 60, 0, -60, 0] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "mirror" 
          }}
          className="absolute -bottom-40 right-0 w-96 h-96 bg-yellow-300 dark:bg-yellow-600 rounded-full filter blur-2xl opacity-40 mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          initial={{ opacity: 0, x: -5, y: 5 }}
          animate={{ 
            opacity: 0.7, 
            x: [0, 50, 0, -50, 0], 
            y: [0, -50, 0, 50, 0] 
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            repeatType: "mirror" 
          }}
          className="absolute top-40 right-40 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full filter blur-2xl opacity-40 mix-blend-multiply dark:mix-blend-normal"
        />
      </div>
    </section>
  );
} 