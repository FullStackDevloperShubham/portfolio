import '../../css/About.page.css'
const About = () => {
  return (
    <>
      <div className="absolute mt-20 w-full py-12 text-gray-300 cursor-pointer">
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center w-full space-y-6">
          {/* About Me Title */}
          {/* Uncomment if you want a title */}
          {/* <div className="pb-8">
      <p className="text-3xl sm:text-4xl font-bold border-b-4 border-blue-600 flex justify-center font-serif animate-fadeInDown text-blue-500">
        About Me
      </p>
    </div> */}

          {/* About Me Content */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 animate-slideInLeft transition-transform duration-300 hover:scale-105 leading-relaxed w-full text-center">
            I am a <span className="text-blue-400 font-semibold typing-effect">Full Stack Web Developer</span> with a passion for creating
            innovative and user-friendly web applications. I specialize in modern technologies like{" "}
            <span className="text-blue-400 font-semibold typing-effect">HTML</span>,
            <span className="text-blue-400 font-semibold typing-effect">CSS</span>,
            <span className="text-blue-400 font-semibold typing-effect">JavaScript</span>,
            <span className="text-blue-400 font-semibold typing-effect">React</span>, and{" "}
            <span className="text-blue-400 font-semibold typing-effect">Node.js</span>, building dynamic and interactive user interfaces
            that deliver exceptional user experiences.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-slideInRight transition-transform duration-300 hover:scale-105 leading-relaxed w-full text-center">
            My journey into web development began as a hobby where I enjoyed experimenting with code, and it quickly turned
            into a passion. Over the years, I have gained experience in developing full-stack applications, working with
            cutting-edge technologies to solve complex problems and create efficient, scalable solutions.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-slideInLeft transition-transform duration-300 hover:scale-105 leading-relaxed w-full text-center">
            My goal is to stay at the forefront of industry trends and technologies to ensure my work is always
            cutting-edge. I thrive in <span className="text-indigo-600 font-semibold typing-effect">collaborative</span> environments, aligning
            my contributions with the overarching vision of a project. I believe in the power of technology to change the
            world, and I am committed to contributing to projects that make a positive impact.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-slideInRight transition-transform duration-300 hover:scale-105 leading-relaxed w-full text-center">
            I also believe in the importance of continuous learning and growth. Whether it’s exploring new programming
            languages, diving into new frameworks, or enhancing my problem-solving skills, I am always seeking ways to
            improve my craft. My goal is to become a better developer, a more effective communicator, and a valuable member of
            any team I am a part of.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-slideInLeft transition-transform duration-300 hover:scale-105 leading-relaxed w-full text-center">
            Beyond coding, I enjoy contributing to{" "}
            <span className="text-teal-600 font-semibold typing-effect">open-source projects</span>, exploring new technologies, and
            participating in community-driven initiatives. I strongly believe that sharing knowledge and collaborating with
            others helps to push the boundaries of what can be achieved.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl animate-slideInRight transition-transform duration-300 hover:scale-105 leading-relaxed w-full text-center">
            Thank you for visiting my portfolio. I’m excited to connect and collaborate to bring your ideas to life!
          </p>
        </div>
      </div>

    </>
  )
}

export default About