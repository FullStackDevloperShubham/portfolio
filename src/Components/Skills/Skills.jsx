import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiPostgresql, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { FaReact } from 'react-icons/fa'; // Adding the necessary imports for Redux and Prisma

const Skills = () => {
  return (
    <div className="absolute mt-11 py-12 text-white w-full h-[730px] cursor-pointer">
      <div className="container mx-auto px-6 text-center h-full">
        {/* Cards Layout with 3 Cards per Row, equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">

          {/* Frontend Technologies Card */}
          <div className="skill-card p-6 rounded-lg shadow-lg h-full flex flex-col animate-slideInLeft transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Frontend Technologies</h3>
            <div className="grid grid-cols-3 gap-4 justify-center items-center h-full">
              {/* HTML */}
              <div className="text-center flex flex-col items-center text-gray-400">
                <FaHtml5 className="text-5xl text-orange-500 mb-2" />
                HTML
              </div>

              {/* CSS */}
              <div className="text-center flex flex-col items-center text-gray-400">
                <FaCss3Alt className="text-5xl text-blue-500 mb-2" />
                CSS
              </div>

              {/* JavaScript */}
              <div className="text-center flex flex-col items-center ">
                <FaJs className="text-5xl text-yellow-500 mb-2" />
                JavaScript
              </div>
            </div>
          </div>

          {/* Backend Technologies Card */}
          <div className="skill-card p-6 rounded-lg shadow-lg h-full flex flex-col animate-slideInRight transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Backend Technologies</h3>
            <div className="grid grid-cols-2 gap-6 justify-center items-center h-full">
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <FaNodeJs className="text-4xl text-green-500 mb-2" />
                Node.js
              </div>
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <FaNodeJs className="text-4xl text-green-500 mb-2" />
                Express.js
              </div>
            </div>
          </div>

          {/* Database Technologies Card */}
          <div className="skill-card p-6 rounded-lg shadow-lg h-full flex flex-col animate-slideInLeft transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Database Technologies</h3>
            <div className="grid grid-cols-2 gap-6 justify-center items-center h-full">
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <SiPostgresql className="text-4xl text-blue-600 mb-2" />
                PostgreSQL
              </div>
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <SiMongodb className="text-4xl text-green-500 mb-2" />
                MongoDB
              </div>
            </div>
          </div>

          {/* Version Control Card */}
          <div className="skill-card p-6 rounded-lg shadow-lg h-full flex flex-col animate-slideInRight transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Version Control</h3>
            <div className="grid grid-cols-2 gap-6 justify-center items-center h-full">
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <FaGitAlt className="text-4xl text-red-600 mb-2" />
                Git
              </div>
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <FaGithub className="text-4xl text-white mb-2" />
                GitHub
              </div>
            </div>
          </div>

          {/* Frontend Libraries Card */}
          <div className="skill-card p-6 rounded-lg shadow-lg h-full flex flex-col animate-slideInLeft transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Frontend Libraries</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center items-center h-full">
              {/* Bootstrap */}
              <div className="text-center text-lg font-semibold text-gray-300 flex flex-col items-center">
                <FaBootstrap className="text-5xl text-purple-600 mb-2" />
                <p>Bootstrap</p>
              </div>

              {/* Tailwind CSS */}
              <div className="text-center text-lg font-semibold text-gray-300 flex flex-col items-center">
                <SiTailwindcss className="text-5xl text-cyan-500 mb-2" />
                <p>Tailwind CSS</p>
              </div>

              {/* ShadCN */}
              <div className="text-center text-lg font-semibold text-gray-300 flex flex-col items-center">
                <SiTailwindcss className="text-5xl text-cyan-500 mb-2" />
                <p>ShadCN</p>
              </div>
            </div>
          </div>

          {/* Other Technologies Card */}
          <div className="skill-card p-6 rounded-lg shadow-lg h-full flex flex-col animate-slideInRight transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">Other Technologies</h3>
            <div className="grid grid-cols-2 gap-6 justify-center items-center h-full">
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <FaReact className="text-4xl text-blue-500 mb-2" />
                Redux
              </div>
              <div className="text-lg font-semibold text-gray-300 flex flex-col items-center justify-center">
                <FaReact className="text-4xl text-blue-500 mb-2" />
                Redux Toolkit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Skills;
