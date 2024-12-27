import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Mail, FileText } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/about', icon: User, label: 'About' },
    { to: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mr-5 flex justify-center ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            {/* add name */}
          </Link>
          <div className="flex space-x-8 ">
            {links.map(({ to, icon: Icon, label }) => (
              <Link key={to} to={to} className="relative">
                <div className="flex items-center space-x-1 text-gray-400 hover:text-purple-600 transition-colors">
                  <Icon size={20} />
                  <span>{label}</span>
                </div>
                {location.pathname === to && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-purple-600"
                    initial={false}
                  />
                )}
              </Link>
            ))}
            <a
              href="/ShubhaGaikwad.pdf"
              className="flex items-center space-x-1   text-gray-400 rounded-lg  "
              download
            >
              <FileText size={20} />
              <span>Resume.</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};