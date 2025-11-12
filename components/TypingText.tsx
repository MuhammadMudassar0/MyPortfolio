'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export default function TypingText({ texts, speed = 100, deleteSpeed = 50, delay = 2000 }: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === current) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText((prev) => {
            if (isDeleting) {
              return prev.slice(0, -1);
            } else {
              return current.slice(0, prev.length + 1);
            }
          });
        },
        isDeleting ? deleteSpeed : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-6 bg-blue-600 ml-1"
      />
    </span>
  );
}

