import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <>
      <div className="absolute mt-11 py-16 text-white w-full h-auto">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="mt-16"
            initial={{ y: -100, opacity: 0 }} // Form container starts above and invisible
            animate={{ y: 0, opacity: 1 }} // Moves to its original position and becomes visible
            transition={{
              type: 'spring',
              stiffness: 50, // Smooth drop effect
              damping: 5, // Slows down the animation
              duration: 0.5, // Duration for container animation
            }}
          >
            <form className="p-8 rounded-xl shadow-lg max-w-xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <motion.div
                initial={{ x: -100, opacity: 0 }} // Starts off-screen to the left
                animate={{ x: 0, opacity: 1 }} // Slides into position
                transition={{ delay: 0.1, type: 'spring', stiffness: 60, damping: 7 }}
                className="mb-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 60, damping: 7 }}
                className="mb-4"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 60, damping: 7 }}
                className="mb-6"
              >
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 60, damping: 7 }}
              >
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-300 text-black rounded-lg font-medium transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/50"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>


    </>
  )
}

export default Contact