const Contact = () => {
  return (
    <>
      <div className="absolute mt-11 py-16 text-white w-full h-auto ">
        <div className="container mx-auto px-6 text-center">
          <div className="mt-16">
            <form className=" p-8 rounded-xl shadow-lg max-w-xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-300 text-black rounded-lg font-medium transition-transform duration-300 hover:scale-105 hover:bg-yellow-400 shadow-lg hover:shadow-yellow-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact