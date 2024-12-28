import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Terminal,
  Database,
  Box,
  Briefcase,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="h-full"
  >
    {children}
  </motion.div>
);

const HoverCard = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.05, zIndex: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="group h-full"
  >
    {children}
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 via-transparent to-transparent hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-300 transition-all duration-300"
    aria-label={label}
  >
    <Icon className="w-6 h-6 text-cyan-400 hover:text-white" />
  </a>
);

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      description: "Building responsive and interactive user interfaces",
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      technologies: ["Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
      description: "Creating beautiful and intuitive user experiences",
    },
    {
      icon: Terminal,
      title: "Backend Development",
      technologies: ["Node.js", "Express"],
      description: "Developing robust server-side applications",
    },
    {
      icon: Database,
      title: "Database Management",
      technologies: ["PostgreSQL", "MongoDB", "Prisma"],
      description: "Designing and optimizing database structures",
    },
    {
      icon: Box,
      title: "DevOps & Tools",
      technologies: ["Docker", "AWS", "CI/CD", "Git"],
      description: "Streamlining development and deployment processes",
    },
    {
      icon: Briefcase,
      title: "Full Stack Framework",
      technologies: ["Next.js"],
      description: "Building full-stack applications with Next.js",
    },
  ];

  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".heading",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0f18] to-[#001117] text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="heading text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I am a passionate full-stack developer with expertise in modern web technologies.
              My goal is to create seamless digital experiences that combine beautiful design
              with robust functionality.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-[-2rem]">
          {skills.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.1}>
              <HoverCard>
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="bg-gradient-to-b from-[#0a0a0a] to-[#001117] backdrop-blur-lg rounded-xl p-8 h-full border border-cyan-500 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#00fff5]"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-cyan-800/30 group-hover:bg-cyan-700/40 transition-all duration-300">
                      <skill.icon className="w-8 h-8 text-cyan-500 group-hover:text-white transition-all duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-cyan-400 group-hover:text-cyan-200 transition-colors duration-300">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 rounded-full text-cyan-400 text-sm font-medium transition-all duration-300 hover:bg-cyan-400/20 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

