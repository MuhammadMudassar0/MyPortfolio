'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
    technologies: ['React', 'NestJS', 'PostgreSQL', 'GraphQL', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets'],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media metrics with data visualization and reporting capabilities.',
    technologies: ['React', 'Material UI', 'Chart.js', 'REST API'],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
  },
  {
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: '#',
    liveUrl: '#',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/50"
      >
        {/* Animated Gradient Background */}
        <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <motion.div
            className="absolute inset-0 bg-black/20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-white text-6xl font-bold opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {project.title.charAt(0)}
            </motion.div>
          </div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="p-6">
          <motion.h3
            className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
            style={{ transform: 'translateZ(50px)' }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
            style={{ transform: 'translateZ(25px)' }}
          >
            {project.description}
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            style={{ transform: 'translateZ(25px)' }}
          >
            {project.technologies.map((tech, techIdx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + techIdx * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium shadow-sm hover:shadow-md transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-4"
            style={{ transform: 'translateZ(50px)' }}
          >
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} className="group-hover/link:rotate-12 transition-transform" />
                <span className="font-medium">Code</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} className="group-hover/link:rotate-12 transition-transform" />
                <span className="font-medium">Live Demo</span>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -100, 0],
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="text-purple-600 dark:text-purple-400" size={24} />
          </motion.div>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            A collection of projects that showcase my skills and experience in building modern web applications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
