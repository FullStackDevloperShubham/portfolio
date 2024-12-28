import React from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f18] via-[#001117] to-[#00040a] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400">
            Let’s create something innovative together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#0d1b2a]/50 p-8 rounded-2xl backdrop-blur-lg border border-[#1c2a3a] shadow-xl"
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1b2838] border border-[#2c3e50] focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1b2838] border border-[#2c3e50] focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#1b2838] border border-[#2c3e50] focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 outline-none resize-none"
                placeholder="Write your message here..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {[{
              icon: Mail,
              title: 'Email',
              content: 'forbussiness67@gmail.com',
            }, {
              icon: Phone,
              title: 'Phone',
              content: '+91 7385911875',
            }, {
              icon: MapPin,
              title: 'Location',
              content: 'Pune, Maharashtra, India',
            }].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-6 bg-[#0d1b2a]/50 rounded-xl backdrop-blur-lg border border-[#1c2a3a] shadow-lg"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-200">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
