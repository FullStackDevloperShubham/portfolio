import { motion } from 'framer-motion'
import '../../css/About.page.css'

const About = () => {
  return (
    <>
      <div className="absolute mt-20 w-full py-12 text-gray-300 cursor-pointer overflow-hidden">
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center w-full space-y-6">
          {/* About Me Content */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 leading-relaxed w-full text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            style={{ transformOrigin: "center" }}
          >
            I am a <span className="text-blue-400 font-semibold">Full Stack Web Developer</span> with a passion for creating
            innovative and user-friendly web applications. I specialize in modern technologies like{" "}
            <span className="text-blue-400 font-semibold">HTML</span>, <span className="text-blue-400 font-semibold">CSS</span>,
            <span className="text-blue-400 font-semibold">JavaScript</span>, <span className="text-blue-400 font-semibold">React</span>,
            and <span className="text-blue-400 font-semibold">Node.js</span>, building dynamic and interactive user interfaces
            that deliver exceptional user experiences.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            style={{ transformOrigin: "center" }}
          >
            My journey into web development began as a hobby where I enjoyed experimenting with code, and it quickly turned
            into a passion. Over the years, I have gained experience in developing full-stack applications, working with
            cutting-edge technologies to solve complex problems and create efficient, scalable solutions.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            style={{ transformOrigin: "center" }}
          >
            My goal is to stay at the forefront of industry trends and technologies to ensure my work is always cutting-edge. I thrive in{" "}
            <span className="text-indigo-600 font-semibold">collaborative</span> environments, aligning my contributions with
            the overarching vision of a project. I believe in the power of technology to change the world, and I am committed
            to contributing to projects that make a positive impact.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            style={{ transformOrigin: "center" }}
          >
            I also believe in the importance of continuous learning and growth. Whether it’s exploring new programming languages,
            diving into new frameworks, or enhancing my problem-solving skills, I am always seeking ways to improve my craft. My
            goal is to become a better developer, a more effective communicator, and a valuable member of any team I am a part of.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full text-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            style={{ transformOrigin: "center" }}
          >
            Beyond coding, I enjoy contributing to{" "}
            <span className="text-teal-600 font-semibold">open-source projects</span>, exploring new technologies, and participating
            in community-driven initiatives. I strongly believe that sharing knowledge and collaborating with others helps to push
            the boundaries of what can be achieved.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            style={{ transformOrigin: "center" }}
          >
            Thank you for visiting my portfolio. I’m excited to connect and collaborate to bring your ideas to life!
          </motion.p>
        </div>
      </div>

    </>
  )
}

export default About