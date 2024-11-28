import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa'; // Adding the necessary imports for Redux and Prisma
import { motion } from 'framer-motion'

const skillVariants = {
  hidden: { x: -50, opacity: 0 }, // Starts off-screen to the left and invisible
  visible: (index) => ({
    x: 0, // Slides into position
    opacity: 1, // Becomes fully visible
    transition: {
      delay: index * 0.1, // Staggered animation
      type: "spring",
      stiffness: 60,
      damping: 8,
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.2,
      type: "spring",
      stiffness: 80,
    },
  }),
};
const Skills = () => {
  return (
    <div className="absolute mt-11 py-12 text-white w-full h-[730px] cursor-pointer">
      <div className="container mx-auto px-6 text-center h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
          {[
            {
              title: "Frontend Technologies",
              skills: [
                { icon: <FaHtml5 className="text-5xl text-orange-500 mb-2" />, name: "HTML" },
                { icon: <FaCss3Alt className="text-5xl text-blue-500 mb-2" />, name: "CSS" },
                { icon: <FaJs className="text-5xl text-yellow-500 mb-2" />, name: "JavaScript" },
              ],
            },
            {
              title: "Backend Technologies",
              skills: [
                { icon: <FaNodeJs className="text-4xl text-green-500 mb-2" />, name: "Node.js" },
                { icon: <FaNodeJs className="text-4xl text-green-500 mb-2" />, name: "Express.js" },
              ],
            },
            {
              title: "Database Technologies",
              skills: [
                { icon: <SiPostgresql className="text-4xl text-blue-600 mb-2" />, name: "PostgreSQL" },
                { icon: <SiMongodb className="text-4xl text-green-500 mb-2" />, name: "MongoDB" },
              ],
            },
            {
              title: "Version Control",
              skills: [
                { icon: <FaGitAlt className="text-4xl text-red-600 mb-2" />, name: "Git" },
                { icon: <FaGithub className="text-4xl text-white mb-2" />, name: "GitHub" },
              ],
            },
            {
              title: "Frontend Libraries",
              skills: [
                { icon: <FaBootstrap className="text-5xl text-purple-600 mb-2" />, name: "Bootstrap" },
                { icon: <SiTailwindcss className="text-5xl text-cyan-500 mb-2" />, name: "Tailwind CSS" },
                { icon: <SiTailwindcss className="text-5xl text-cyan-500 mb-2" />, name: "ShadCN" },
              ],
            },
            {
              title: "Other Technologies",
              skills: [
                { icon: <FaReact className="text-4xl text-blue-500 mb-2" />, name: "Redux" },
                { icon: <FaReact className="text-4xl text-blue-500 mb-2" />, name: "Redux Toolkit" },
              ],
            },
          ].map((card, cardIndex) => (
            <motion.div
              className="skill-card p-6 rounded-lg shadow-lg h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={cardIndex}
              key={cardIndex}
            >
              <h3 className="text-2xl font-semibold text-teal-500 mb-4">{card.title}</h3>
              <div className={`grid ${card.skills.length > 2 ? "grid-cols-3" : "grid-cols-2"} gap-6 justify-center items-center h-full`}>
                {card.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center"
                    variants={skillVariants}
                    initial="hidden"
                    animate="visible"
                    custom={skillIndex}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
