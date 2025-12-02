import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technical', path: '/technical' },
    { name: 'Demos', path: '/demos' },
    { name: 'Models', path: '/models' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'About', path: '/about' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 mx-auto left-0 right-0 top-4 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border ${
        scrolled
          ? 'bg-white/50 backdrop-blur-2xl border-slate-200/50 shadow-lg'
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <img src={`${import.meta.env.BASE_URL}logo_visionpilotnobg.png`} alt="VisionPilot Logo" className="h-8 w-auto" />
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-slate-600 group-hover:from-brand-accent group-hover:to-brand-glow transition-all duration-300">
              VisionPilot
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-brand-accent bg-brand-accent/10 font-semibold'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-4 py-2 rounded-full bg-brand-dark text-white text-sm font-bold hover:bg-brand-accent transition-colors shadow-md hover:shadow-lg"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-brand-dark hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/60 backdrop-blur-2xl border-b border-slate-200/50 rounded-b-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-brand-accent bg-brand-accent/10'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold bg-brand-dark text-white hover:bg-brand-accent transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;