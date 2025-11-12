'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Developed and maintained responsive web applications using React and Next.js',
      'Collaborated with cross-functional teams to deliver high-quality products',
      'Implemented modern UI/UX designs with Tailwind CSS and Material UI',
      'Optimized application performance and improved user experience',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Startup Inc.',
    period: '2021 - 2022',
    description: [
      'Built reusable components and maintained code quality standards',
      'Participated in code reviews and agile development processes',
      'Worked on improving application accessibility and SEO',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Backend Developer (Part-time)',
    company: 'Freelance',
    period: '2024 - Present',
    description: [
      'Developed RESTful and GraphQL APIs using NestJS',
      'Designed and implemented database schemas with PostgreSQL',
      'Integrated third-party services and payment gateways',
    ],
    technologies: ['NestJS', 'PostgreSQL', 'GraphQL', 'Node.js'],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <Sparkles className="text-purple-600 dark:text-purple-400" size={24} />
          </motion.div>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            My journey as a Software Engineer with focus on frontend and backend development
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ originY: 0 }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const cardRef = useRef(null);
                const cardInView = useInView(cardRef, { once: true, amount: 0.3 });

                return (
                  <motion.div
                    key={`${exp.company}-${index}`}
                    ref={cardRef}
                    initial={{ opacity: 0, x: -50 }}
                    animate={cardInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="relative group"
                  >
                    {/* Animated Timeline Dot */}
                    <motion.div
                      className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 hidden md:block shadow-lg"
                      initial={{ scale: 0 }}
                      animate={cardInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                    <div className="md:ml-24 relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50 group-hover:scale-[1.02]">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <motion.h3
                            className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                            initial={{ opacity: 0, y: -10 }}
                            animate={cardInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15 + 0.2 }}
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.div
                            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={cardInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + 0.3 }}
                          >
                            <Briefcase size={20} className="animate-pulse" />
                            <span>{exp.company}</span>
                          </motion.div>
                        </div>
                        <motion.div
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + 0.4 }}
                        >
                          <Calendar size={18} className="text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{exp.period}</span>
                        </motion.div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-600 dark:text-gray-300 flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={cardInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + idx * 0.1 + 0.5 }}
                          >
                            <motion.span
                              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: idx * 0.2,
                              }}
                            />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {exp.technologies && (
                        <motion.div
                          className="flex flex-wrap gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={cardInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: index * 0.15 + 0.7 }}
                        >
                          {exp.technologies.map((tech, techIdx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.15 + techIdx * 0.05 + 0.8 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="px-4 py-1.5 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700 font-medium shadow-sm hover:shadow-md transition-all"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
