import { motion } from 'framer-motion'
const FirstCard = () => {
  return (
    <div className="absolute grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[80px] px-6 animate-fadeInDown">

      {/* Mobile Number at the Top Right */}
      <div className="absolute flex mt-[-70px] right-6 sm:right-10 lg:right-20 text-white bg-blue-600 p-2 rounded-lg shadow-md font-serif text-lg">
        <p>+91 7385911875</p> {/* Replace with your actual mobile number */}
      </div>

      {/* Card 1: Project with Image */}

      <motion.div
        className="p-6 h-80 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        initial={{ y: -100, opacity: 0 }} // Initial state (above the viewport and invisible)
        animate={{ y: [0, -15, 5, -5, 0], opacity: 1 }} // Bounce effect
        transition={{
          type: "spring", // Spring-based animation
          stiffness: 50, // Spring stiffness (controls how "bouncy" it is)
          damping: 5, // Damping (controls how fast it settles)
          duration: 5, // Total animation duration
        }}
      >
        <img
          src="/chat_app_ui.png"
          alt="Chat App"
          className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 hover:scale-105"
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-400 text-lg font-bold truncate flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m-6-8l-4.553 2.276a2 2 0 000 3.448L9 18m6-8v8m-6-8v8"
              />
            </svg>
            Chat App
          </p>
          <a
            href="https://github.com/FullStackDevloperShubham/chat-app"
            className="text-blue-400 font-semibold text-sm underline hover:text-blue-300"
          >
            View Details
          </a>
        </div>
      </motion.div>

      {/* Card 2: Project with Video */}
      <motion.div
        className="p-6 h-80 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        initial={{ y: -100, opacity: 0 }} // Initial state (above the viewport and invisible)
        animate={{ y: [0, -15, 5, -5, 0], opacity: 1 }} // Bounce effect
        transition={{
          type: "spring", // Spring-based animation
          stiffness: 50, // Spring stiffness (controls how "bouncy" it is)
          damping: 5, // Damping (controls how fast it settles)
          duration: 5, // Total animation duration
        }}
      >
        <img
          src="/video_sharing_app.jpg"
          alt="Video Sharing App"
          className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 hover:scale-105"
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-white text-lg font-bold truncate flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m-6-8l-4.553 2.276a2 2 0 000 3.448L9 18m6-8v8m-6-8v8"
              />
            </svg>
            Video Sharing App
          </p>
          <a
            href="https://github.com/FullStackDevloperShubham/VideoSharingBackend"
            className="text-blue-400 font-semibold text-sm underline hover:text-blue-300"
          >
            View Details
          </a>
        </div>
      </motion.div>

      {/* Card 3: Text Description */}
      <motion.div
        className="p-6 h-80 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        initial={{ y: -100, opacity: 0 }} // Starts from above and invisible
        animate={{ y: [0, -15, 5, -5, 0], opacity: 1 }} // Bounce animation
        transition={{
          type: "spring", // Spring-based animation
          stiffness: 50, // Spring stiffness (controls how "bouncy" it is)
          damping: 5, // Damping (controls how fast it settles)
          duration: 5, // Total animation duration
        }}
      >
        <img
          src="/google_gemini.jpg"
          alt="Video Sharing App"
          className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 hover:scale-105"
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-white text-lg font-bold truncate flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m-6-8l-4.553 2.276a2 2 0 000 3.448L9 18m6-8v8m-6-8v8"
              />
            </svg>
            Google Gemini
          </p>
          <a
            href="https://github.com/FullStackDevloperShubham/GeminiClone"
            className="text-blue-400 font-semibold text-sm underline hover:text-blue-300"
          >
            View Details
          </a>
        </div>
      </motion.div>

      {/* Card 4: Blog or Article */}
      <motion.div
        className="p-6 h-80 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        initial={{ y: -100, opacity: 0 }} // Starts from above and invisible
        animate={{ y: [0, -15, 5, -5, 0], opacity: 1 }} // Bounce animation
        transition={{
          type: "spring", // Spring-based animation
          stiffness: 50, // Spring stiffness (controls how "bouncy" it is)
          damping: 5, // Damping (controls how fast it settles)
          duration: 5, // Total animation duration
        }}
      >
        <img
          src="blog_sharing.webp"
          alt="Video Sharing App"
          className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 hover:scale-105"
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-white text-lg font-bold truncate flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m-6-8l-4.553 2.276a2 2 0 000 3.448L9 18m6-8v8m-6-8v8"
              />
            </svg>
            Blog Sharing
          </p>
          <a
            href="https://github.com/FullStackDevloperShubham/BlogApp"
            className="text-blue-400 font-semibold text-sm underline hover:text-blue-300"
          >
            View Details
          </a>
        </div>
      </motion.div>

      {/* Card 5: Skills */}
      <motion.div
        className="p-6 h-80 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
        initial={{ y: -100, opacity: 0 }} // Starts from above and invisible
        animate={{ y: [0, -15, 5, -5, 0], opacity: 1 }} // Bounce animation
        transition={{
          type: "spring", // Spring-based animation
          stiffness: 50, // Spring stiffness (controls how "bouncy" it is)
          damping: 5, // Damping (controls how fast it settles)
          duration: 5, // Total animation duration
        }}
      >
        <img
          src="/authentication.jpg"
          alt="Authentication App"
          className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 hover:scale-105"
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-white text-lg font-bold truncate flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m-6-8l-4.553 2.276a2 2 0 000 3.448L9 18m6-8v8m-6-8v8"
              />
            </svg>
            Authentication
          </p>
          <a
            href="https://github.com/FullStackDevloperShubham/Next_Authentication"
            className="text-blue-400 font-semibold text-sm underline hover:text-blue-300"
          >
            View Details
          </a>
        </div>
      </motion.div>

      {/* Card 6: Client Testimonial */}
      <motion.div
        className="p-6 h-80 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col rounded-lg shadow-lg hover:cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 animate-slideInRight"
        initial={{ y: -100, opacity: 0 }} // Starts from above and invisible
        animate={{ y: 0, opacity: 1 }} // Final position and full opacity
        transition={{
          type: "spring", // Spring-based animation
          stiffness: 50, // Spring stiffness (controls how "bouncy" it is)
          damping: 5, // Damping (controls how fast it settles)
          duration: 5, // Total animation duration
        }}
      >
        <motion.img
          src="/task_manager.jpg"
          alt="Video Sharing App"
          className="rounded-lg w-full h-48 object-cover shadow-md transition-transform duration-300 hover:scale-105"
        // whileHover={{
        //   scale: 1.05,
        //   transition: { type: "spring", stiffness: 300, damping: 15 },
        // }}
        />
        <div className="flex items-center justify-between mt-4">
          <p className="text-white text-lg font-bold truncate flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m-6-8l-4.553 2.276a2 2 0 000 3.448L9 18m6-8v8m-6-8v8"
              />
            </svg>
            Task manager for daily routine
          </p>
          <a
            href="https://github.com/FullStackDevloperShubham/task-manager"
            className="text-blue-400 font-semibold text-sm underline hover:text-blue-300"
          >
            View Details
          </a>
        </div>
      </motion.div>

    </div >
  );
};

export default FirstCard;
