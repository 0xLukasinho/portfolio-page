'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectDetailProps {
  id: string;
  title: string;
  organization: string;
  description: string;
  outcome: string;
  technologies: string[];
  images: string[];
  links?: { title: string; url: string }[];
}

export default function ProjectDetail({ 
  id,
  title, 
  organization, 
  description, 
  outcome, 
  technologies, 
  images, 
  links 
}: ProjectDetailProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 border-b border-gray-200 dark:border-gray-800 scroll-mt-28"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {organization}
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-6">{title}</h2>
          
          <div className="prose dark:prose-invert prose-lg max-w-none mb-6">
            <p>{description}</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Outcome</h3>
            <p>{outcome}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {links && links.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Links</h3>
              <div className="flex flex-col gap-2">
                {links.map((link, index) => (
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
            {images.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 