import React from 'react';
import { Github, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-display font-bold text-brand-dark mb-8">Get Started</h1>
        <p className="text-xl text-slate-600 mb-12">
            VisionPilot is open source. Contribute, fork, or explore the code to build your own autonomous driving stack.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://github.com/Julian1777/self-driving-project" 
               target="_blank" rel="noreferrer"
               className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-white rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
                <Github className="w-5 h-5 mr-3" />
                View on GitHub
            </a>
            
            <a href="mailto:contact@example.com" 
               className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-brand-dark rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1"
            >
                <Mail className="w-5 h-5 mr-3" />
                Contact Me
            </a>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 text-slate-400 text-sm">
            <p>&copy; 2025 VisionPilot. Built with React & BeamNG.tech.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;