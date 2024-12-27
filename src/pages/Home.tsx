import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Cpu, Shield, Zap, Activity, Linkedin, Github } from 'lucide-react';

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

// JARVIS Status Component
const JarvisStatus = () => {
  const stats = [
    { icon: Shield, label: 'GitHub Repository Number', value: '20+' },
    // { icon: Cpu, label: 'SYSTEM', value: '100%' },
    // { icon: Zap, label: 'POWER', value: '92%' },
    // { icon: Activity, label: 'NETWORK', value: '95%' }
  ];

  return (
    <div className="absolute top-8 right-8 space-y-4">
      {stats.map(({ icon: Icon, label, value }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/30"
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
  ];

  return (
    <div className=" space-y-4 float-right mt-[21rem] mr-8">
      {links.map(({ icon: Icon, label, href }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="flex items-center gap-3 bg-black/40 backdrop-blur-sm p-3 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/10"
        >
          <Icon className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-bold text-cyan-400">{label}</span>
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

// Enhanced Scene3D Component
const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
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

// Enhanced TypewriterText Component
const TypewriterText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <motion.div
      className={`${className} font-mono`}
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
    </motion.div>
  );
};


// Main Home Component
export const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-900 text-white overflow-hidden">
      <Particles />
      <HolographicRings />

      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      <JarvisStatus />
      <SocialLinks />

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex items-center justify-center h-full"
          >
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <motion.div className="relative inline-block">
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4"
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
                  text="I am a passionate full-stack developer with a zeal for crafting dynamic web solutions. Always eager to learn, I embrace new technologies to expand my skillset and deliver excellence projects."
                  className="text-xl md:text-2xl text-gray-300 mb-8"
                />

                <div className="flex gap-4 justify-center">


                  <a
                    href="https://github.com/FullStackDevloperShubham"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="px-8 py-3 bg-transparent text-cyan-400 font-semibold 
               rounded-lg border border-cyan-500/50
               hover:bg-cyan-500/10 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      👀 Code
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(
              calc(var(--mouse-x, 0) * 20px),
              calc(var(--mouse-y, 0) * 20px)
            );
          }
        }
      `}</style>
    </div>
  );
};
