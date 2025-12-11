import React, { useState } from 'react';
import { Github, FileText, User, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '../src/utils/analytics';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I set up the simulation environment?",
      answer: "Setup requires Python 3.8+ and a licensed copy of BeamNG.tech. You'll need to install the dependencies via `pip install -r requirements.txt` and configure the BeamNG bridge. Detailed step-by-step instructions are available in the GitHub repository's README."
    },
    {
      question: "What are the future plans for VisionPilot?",
      answer: "The roadmap includes integrating SLAM for localization, implementing reinforcement learning for end-to-end driving policies, and eventually testing the stack on a physical RC car platform to validate the sim-to-real transfer."
    },
    {
      question: "Why use BeamNG.tech instead of CARLA or AirSim?",
      answer: "BeamNG.tech offers superior soft-body physics, which introduces realistic sensor noise, vibration, and vehicle dynamics handling. This forces the control algorithms to be more robust compared to rigid-body simulators."
    },
    {
      question: "Can I contribute to the project?",
      answer: "Absolutely! The project is open-source. We welcome pull requests for new feature implementations, bug fixes, or documentation improvements. Check the contribution guidelines on GitHub."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* About Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
              <Github className="w-48 h-48 text-brand-dark" />
          </div>
          
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-6">About the Project</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            VisionPilot started as a modular Python project for autonomous driving research. It aims to bridge the gap between simulation and reality by integrating BeamNG.tech's soft-body physics with industry-standard computer vision and deep learning pipelines.
          </p>

          <div className="space-y-6">
              <div>
                  <h3 className="text-xl font-bold text-brand-accent mb-2">Engineering Journal</h3>
                  <p className="text-slate-500 text-sm mb-3">Track the entire development process, challenges, and solutions.</p>
                  <a href="https://drive.google.com/file/d/15garXT9LaYUK_GlcT68EEbLpoLRc_XoL/view?usp=share_link" 
                     target="_blank" rel="noreferrer"
                     onClick={() => trackEvent('click', 'About', 'View Journal on Google Drive')}
                     className="inline-flex items-center text-brand-dark hover:text-brand-accent transition-colors underline decoration-brand-accent/50 underline-offset-4 font-medium">
                      <FileText className="w-4 h-4 mr-2" />
                      View Journal on Google Drive
                  </a>
              </div>

              <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Credits</h3>
                  <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-500">
                      <li>BeamNG.tech</li>
                      <li>Kaggle (GPU Resources)</li>
                      <li>CU Lane / BDD100K Datasets</li>
                      <li>Foxglove Studio</li>
                  </ul>
              </div>
          </div>
        </div>

        {/* Contributors Section */}
         <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-brand-dark mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-brand-accent" /> Contributors
            </h2>
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-xl font-bold text-slate-400 border border-slate-200">
                    JS
                </div>
                <div>
                    <h3 className="text-lg font-bold text-brand-dark">Julian S.</h3>
                    <p className="text-slate-500 text-sm">Lead Developer</p>
                    <p className="text-xs text-slate-400 mt-1">Core Architecture, Computer Vision, Control Systems</p>
                </div>
            </div>
         </div>

        {/* FAQ Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-brand-dark mb-8 flex items-center">
                <HelpCircle className="w-6 h-6 mr-3 text-brand-accent" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-slate-100 rounded-lg overflow-hidden">
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                        >
                            <span className="font-semibold text-slate-700">{faq.question}</span>
                            {openFaq === index ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                        </button>
                        <AnimatePresence>
                            {openFaq === index && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;