'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Zap, Sparkles } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Shadcn UI'],
    color: 'from-blue-500 to-cyan-500',
    progress: 95,
  },
  {
    category: 'Backend',
    icon: Database,
    technologies: ['NestJS', 'Node.js', 'GraphQL', 'REST APIs'],
    color: 'from-purple-500 to-pink-500',
    progress: 75,
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'Prisma'],
    color: 'from-green-500 to-emerald-500',
    progress: 80,
  },
  {
    category: 'Tools & Others',
    icon: Zap,
    technologies: ['Git', 'Docker', 'AWS', 'CI/CD'],
    color: 'from-orange-500 to-red-500',
    progress: 85,
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full filter blur-3xl opacity-20"
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
          ref={ref}
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
              About Me
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
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Software Engineer with{' '}
            <motion.span
              className="font-semibold text-blue-600 dark:text-blue-400 inline-block"
              whileHover={{ scale: 1.1 }}
            >
              2.5+ years
            </motion.span>{' '}
            of experience in Frontend Development and{' '}
            <motion.span
              className="font-semibold text-purple-600 dark:text-purple-400 inline-block"
              whileHover={{ scale: 1.1 }}
            >
              6 months
            </motion.span>{' '}
            of hands-on experience in Backend Development. Passionate about building clean, efficient, and visually engaging user experiences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Globe className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Frontend Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Specialized in creating responsive, performant, and user-friendly interfaces using modern React ecosystem.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {['Component-based architecture', 'State management & optimization', 'Responsive design & accessibility'].map((item, idx) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.span
                      className="w-3 h-3 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Database className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Building scalable APIs and server-side solutions with NestJS and GraphQL.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {['RESTful & GraphQL APIs', 'Database design & optimization', 'Authentication & authorization'].map((item, idx) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.span
                      className="w-3 h-3 bg-purple-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Skills & Technologies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const skillRef = useRef(null);
              const skillInView = useInView(skillRef, { once: true });

              return (
                <motion.div
                  key={skill.category}
                  ref={skillRef}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-gray-700/50">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">{skill.category}</h4>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={skillInView ? { width: `${skill.progress}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {skill.technologies.map((tech, techIdx) => (
                        <motion.li
                          key={tech}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIdx * 0.05 }}
                        >
                          <motion.span
                            className={`w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: techIdx * 0.2 }}
                          />
                          {tech}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
