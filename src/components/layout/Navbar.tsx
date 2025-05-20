'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/#projects' },
  { name: 'About', path: '/#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Set active section based on scroll position
      const projectsSection = document.getElementById('projects')?.offsetTop ?? 500;
      const aboutSection = document.getElementById('about')?.offsetTop ?? 1000;
      
      if (window.scrollY >= aboutSection - 100) {
        setActiveSection('/#about');
      } else if (window.scrollY >= projectsSection - 100) {
        setActiveSection('/#projects');
      } else {
        setActiveSection('/');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-950/90 shadow-sm backdrop-blur-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" onClick={() => handleNavClick('/')} className="text-xl font-bold">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono"
            >
              Portfolio
            </motion.span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative transition-colors duration-300 ${
                  activeSection === item.path 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : scrolled 
                      ? 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400' 
                      : 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                {activeSection === item.path && (
                  <motion.span 
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400" 
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`py-3 ${activeSection === item.path ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
} 