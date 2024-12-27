import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => {
        if (index < text.length) {
          index++;
          return text.slice(0, index);
        }
        clearInterval(intervalId);
        return prev;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, [text]);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 0.2 },
    });
  }, [displayText, controls]);

  return (
    <motion.p className={className} animate={controls}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
      >
        |
      </motion.span>
    </motion.p>
  );
};

