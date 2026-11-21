import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, MessageSquare } from 'lucide-react';
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
    { name: 'Home', path: '/' },
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
          ? 'bg-white/80 backdrop-blur-2xl border-slate-200/80 shadow-lg'
          : 'bg-white/40 backdrop-blur-md border-slate-200/40 shadow-sm'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <img src={`${import.meta.env.BASE_URL}logo_visionpilotnobg.png`} alt="VisionPilot Logo" className="h-8 w-auto" />
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-slate-700 group-hover:from-brand-accent group-hover:to-brand-glow transition-all duration-300">
              VisionPilot
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            <div className="flex items-baseline space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-brand-accent bg-brand-accent/10 font-semibold'
                      : 'text-slate-600 hover:text-brand-dark hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-5 w-px bg-slate-200 mx-1"></div>

            <a
              href="https://github.com/visionpilot-project/VisionPilot/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-brand-dark hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5"
              title="Open a Discussion on GitHub"
            >
              <MessageSquare className="w-4 h-4 text-slate-500" />
              <span>Discussions</span>
            </a>

            <a
              href="https://github.com/visionpilot-project/VisionPilot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-brand-dark text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://github.com/visionpilot-project/VisionPilot"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-brand-dark hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
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
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200/50 rounded-b-2xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-brand-accent bg-brand-accent/10 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="https://github.com/visionpilot-project/VisionPilot/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50"
                >
                  <MessageSquare className="w-4 h-4 text-slate-500" />
                  GitHub Discussions
                </a>
                <a
                  href="https://github.com/visionpilot-project/VisionPilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-dark text-white font-semibold shadow hover:bg-slate-800"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
