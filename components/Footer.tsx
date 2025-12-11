import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../src/utils/analytics';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold text-brand-dark mb-4 block">
              VisionPilot
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              An open-source autonomous driving platform bridging the gap between simulation and reality using BeamNG.tech.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Julian1777/self-driving-project" 
                 onClick={() => trackEvent('click', 'Footer', 'GitHub')}
                 className="text-slate-400 hover:text-brand-dark transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" 
                 onClick={() => trackEvent('click', 'Footer', 'Twitter')}
                 className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" 
                 onClick={() => trackEvent('click', 'Footer', 'LinkedIn')}
                 className="text-slate-400 hover:text-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/technical" className="hover:text-brand-accent transition-colors">Architecture</Link></li>
              <li><Link to="/models" className="hover:text-brand-accent transition-colors">Models & Data</Link></li>
              <li><Link to="/demos" className="hover:text-brand-accent transition-colors">Simulation Demos</Link></li>
              <li><Link to="/roadmap" className="hover:text-brand-accent transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Documentation</a></li>
              <li><a href="https://drive.google.com/file/d/15garXT9LaYUK_GlcT68EEbLpoLRc_XoL/view?usp=share_link" 
                     onClick={() => trackEvent('click', 'Footer', 'Engineering Journal')}
                     className="hover:text-brand-accent transition-colors">Engineering Journal</a></li>
              <li><a href="https://github.com/Julian1777/self-driving-project" 
                     onClick={() => trackEvent('click', 'Footer', 'GitHub Repository')}
                     className="hover:text-brand-accent transition-colors">GitHub Repository</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Get in Touch</Link></li>
              <li><a href="mailto:contact@visionpilot.dev" 
                     onClick={() => trackEvent('click', 'Footer', 'Email')}
                     className="hover:text-brand-accent transition-colors">contact@visionpilot.dev</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} VisionPilot. Open Source MIT License.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Built with <Heart className="w-3 h-3 text-red-400 mx-1 fill-current" /> and BeamNG.tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;