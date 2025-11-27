'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Home: FC = () => {

  return (
    <main className="relative">
      <ScrollProgress />
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <Hero />
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="relative"
      >
        <About />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: 'easeOut',
        }}
        className="relative"
      >
        <Projects />
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: 'easeOut',
        }}
        className="relative"
      >
        <Experience />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: 'easeOut',
        }}
        className="relative"
      >
        <Contact />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Footer />
      </motion.div>
    </main>
  );
};

export default Home;
