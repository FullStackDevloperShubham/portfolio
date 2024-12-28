import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Cpu, Shield, Zap, Activity, Linkedin, Github, Code, Briefcase, User, Mail, ExternalLink } from 'lucide-react';

// Particle System Component
const Particles = () => {
  const particlesRef = useRef(null);
  const particles = Array.from({ length: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!particlesRef.current) return;
      const { clientX, clientY } = e;
      const rect = particlesRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

      particlesRef.current.style.setProperty('--mouse-x', x.toString());
      particlesRef.current.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 3 + 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '25+' },
    { icon: Briefcase, label: 'Years Experience', value: '2+' },
    { icon: Shield, label: 'GitHub Repos', value: '20+' },
    // { icon: Activity, label: 'Contributions', value: '500+' }
  ];

  return (
    <div className="absolute top-8 right-8 space-y-4  ">
      {stats.map(({ icon: Icon, label, value }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05, x: -5 }}
          className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/30 cursor-pointer hover:bg-cyan-900/20"
        >
          <Icon className="w-5 h-5 text-cyan-400" />
          <div>
            <div className="text-xs text-cyan-300">{label}</div>
            <div className="text-sm font-bold text-cyan-400">{value}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Social Links Component
const SocialLinks = () => {
  const links = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shubham-gaikwad-62499329a/',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/FullStackDevloperShubham',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:forbussiness67@gmail.com',
    }
  ];

  return (
    <div className="absolute space-y-4 z-50 ml-5 mt-10">
      {links.map(({ icon: Icon, label, href }, index) => (
        <motion.a
          href={href}
          key={index}
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05, x: -5 }}
          className="flex items-center gap-3 bg-gradient-to-r from-black/40 via-black/30 to-cyan-900/10 backdrop-blur-lg p-4 rounded-lg border border-cyan-500/50 shadow-md hover:bg-gradient-to-r hover:from-cyan-900/20 hover:via-cyan-500/10 hover:to-black/40 group transition-all duration-300 ease-in-out"
        >
          <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-500 group-hover:animate-pulse transition-colors duration-300" />
          <span className="text-sm font-semibold text-cyan-300 group-hover:text-cyan-100 tracking-wide transition-colors duration-300">
            {label}
          </span>
          <ExternalLink className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      ))}
    </div>
  );
};

// Holographic Rings Component
const HolographicRings = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border-2 border-cyan-500/20 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// Scene3D Component
const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0, Math.PI * 0.25, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#00fff5"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
};

// TypewriterText Component
const TypewriterText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [text, currentIndex]);

  return (
    <motion.div
      className={`${className} font-mono relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-cyan-400">&gt;</span> {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block ml-1 text-cyan-400"
      >
        _
      </motion.span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: text.length * 0.05 }}
      />
    </motion.div>
  );
};

// Skill Badge Component
const SkillBadge = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className="px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/30 text-cyan-400 text-sm"
  >
    {skill}
  </motion.div>
);

// Main App Component
export const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const skills = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'];

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-900 text-white overflow-hidden font-sans">
      <Particles />
      <HolographicRings />

      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      <Stats />
      <SocialLinks />

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex items-center justify-center h-full font-heading"
          >
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <motion.div className="relative inline-block mb-8">
                  <motion.h1
                    className="text-5xl md:text-7xl font-extrabold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.span className="text-cyan-400 inline-block">
                      Hi there! I&apos;m Shubham
                    </motion.span>
                  </motion.h1>
                  <motion.div
                    className="absolute -inset-1 border border-cyan-500/30 rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                <TypewriterText
                  text="I am a passionate full-stack developer with a zeal for crafting dynamic web solutions. Always eager to learn, I embrace new technologies to expand my skillset and deliver excellent projects."
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                />

                <motion.div
                  className="flex flex-wrap justify-center gap-3 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {skills.map((skill, index) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </motion.div>

                <div className="flex gap-4 justify-center">
                  <motion.a
                    href="https://github.com/FullStackDevloperShubham"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-cyan-500/10 text-cyan-400 font-semibold rounded-lg border border-cyan-500/50 hover:bg-cyan-500/20 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Code className="w-5 h-5" />
                    View Projects
                  </motion.a>
                  <motion.a
                    href="mailto:forbussiness67@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-transparent text-cyan-400 font-semibold rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
}
