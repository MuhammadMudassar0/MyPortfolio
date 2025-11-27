'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Zap, Sparkles } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN', 'Material UI', 'Bootstrap'],
    color: 'from-blue-500 to-cyan-500',
    progress: 95,
  },
  {
    category: 'Backend',
    icon: Database,
    technologies: ['NestJS', 'Node.js', 'Express'],
    color: 'from-purple-500 to-pink-500',
    progress: 75,
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB'],
    color: 'from-green-500 to-emerald-500',
    progress: 80,
  },
  {
    category: 'Mobile & Tools',
    icon: Zap,
    technologies: ['React Native', 'Git', 'React Query'],
    color: 'from-orange-500 to-red-500',
    progress: 80,
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
            of hands-on experience in Backend Development. Specialized in building scalable web applications using React, Next.js, and NestJS, with expertise in creating responsive interfaces and integrating complex APIs. Also have experience in React Native for mobile app development.
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
          className="mt-20"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="text-blue-600 dark:text-blue-400" size={24} />
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills & Technologies
              </h3>
              <Sparkles className="text-purple-600 dark:text-purple-400" size={24} />
            </motion.div>
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              A comprehensive overview of my technical expertise and proficiency levels
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const skillRef = useRef(null);
              const skillInView = useInView(skillRef, { once: true, amount: 0.3 });

              return (
                <motion.div
                  key={skill.category}
                  ref={skillRef}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    ease: 'easeOut'
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  {/* Subtle Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* Card Container */}
                  <div className="relative bg-white dark:bg-gray-800/95 backdrop-blur-xl p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-transparent overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Icon Container */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="text-white" size={30} />
                    </motion.div>

                    {/* Category Title */}
                    <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {skill.category}
                    </h4>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="mb-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Proficiency
                        </span>
                        <motion.span
                          className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                          initial={{ opacity: 0 }}
                          animate={skillInView ? { opacity: 1 } : {}}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {skill.progress}%
                        </motion.span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-700/50 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={skillInView ? { width: `${skill.progress}%` } : {}}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.1 + 0.2,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </div>

                    {/* Technologies List */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, techIdx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.1 + techIdx * 0.03 + 0.3,
                              duration: 0.2
                            }}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10 dark:bg-opacity-20 text-gray-700 dark:text-gray-300 border border-transparent hover:border-opacity-30 hover:shadow-sm transition-all duration-200 cursor-default`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
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
