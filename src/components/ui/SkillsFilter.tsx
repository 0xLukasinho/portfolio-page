'use client';

import { motion } from 'framer-motion';

interface SkillsFilterProps {
  skills: string[];
  activeSkill: string | null;
  onChange: (skill: string | null) => void;
}

export default function SkillsFilter({ skills, activeSkill, onChange }: SkillsFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(null)}
          className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
            activeSkill === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All Skills
        </motion.button>
        
        {skills.map((skill) => (
          <motion.button
            key={skill}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(skill)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              activeSkill === skill
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {skill}
          </motion.button>
        ))}
      </div>
    </div>
  );
} 