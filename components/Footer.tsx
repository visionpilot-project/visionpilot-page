import React from 'react';
import { Github, MessageSquare, Heart, Terminal, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-display font-bold text-brand-dark mb-4">
              <img src={`${import.meta.env.BASE_URL}logo_visionpilotnobg.png`} alt="VisionPilot Logo" className="h-7 w-auto" />
              <span>VisionPilot</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              An open-source autonomous driving research platform bridging perception, real-time control, and high-fidelity physics simulation with BeamNG.tech.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/visionpilot-project/VisionPilot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:text-brand-dark hover:bg-slate-100 transition-colors border border-slate-200"
                title="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/visionpilot-project/VisionPilot/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:text-brand-dark hover:bg-slate-100 transition-colors border border-slate-200"
                title="GitHub Discussions"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Platform</h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><Link to="/technical" className="hover:text-brand-accent transition-colors">Architecture & Installation</Link></li>
              <li><Link to="/demos" className="hover:text-brand-accent transition-colors">Simulation Demos</Link></li>
              <li><Link to="/models" className="hover:text-brand-accent transition-colors">Models & Datasets</Link></li>
              <li><Link to="/roadmap" className="hover:text-brand-accent transition-colors">Roadmap (MPC Focus)</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About & Citation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a
                  href="https://github.com/visionpilot-project/VisionPilot/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  Pretrained Model Releases
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/15garXT9LaYUK_GlcT68EEbLpoLRc_XoL/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  Engineering Journal (Google Drive)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/visionpilot-project/VisionPilot#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  GitHub Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://beamng.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  BeamNG.tech Simulator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Community</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              Have questions, ideas, or feedback? Join our community discussions on GitHub.
            </p>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a
                  href="https://github.com/visionpilot-project/VisionPilot/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors font-medium text-brand-accent inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  Open a GitHub Discussion
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/visionpilot-project/VisionPilot/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  Report an Issue / Bug
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/visionpilot-project/VisionPilot/pulls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors"
                >
                  Contribute (CARLA bridge welcome)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} VisionPilot. Open Source under the MIT License.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Powered by BeamNG.tech soft-body physics & Computer Vision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
