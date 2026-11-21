import React, { useState } from 'react';
import { Github, FileText, User, ChevronDown, ChevronUp, HelpCircle, Copy, Check, MessageSquare, Quote, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const bibtexCitation = `@software{visionpilot2026,
  title={VisionPilot: Autonomous Driving Simulation, Computer Vision & Real-Time Perception},
  author={Julian Stamm},
  year={2026},
  url={https://github.com/visionpilot-project/VisionPilot}
}`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(bibtexCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I set up and run VisionPilot?",
      answer: "You need a licensed copy of BeamNG.tech and Python 3.8+. After cloning the repository and installing dependencies via `pip install -r requirements.txt`, download the pretrained model weights from GitHub Releases into the `models/` directory, update your BeamNG path in `config/beamng.yaml`, and launch `./start_simulation.sh`."
    },
    {
      question: "What is the primary engineering focus right now?",
      answer: "Our main focus is formulating and validating a non-linear Model Predictive Controller (MPC). This will replace our baseline PID controllers with predictive trajectory tracking that accounts for tire slip, vehicle mass, and preview road curvature."
    },
    {
      question: "Will VisionPilot support simulators other than BeamNG.tech?",
      answer: "Yes! While BeamNG.tech is our core platform for soft-body physics and realistic vehicle dynamics, a bridge to the CARLA Simulator is planned on our roadmap. Community contributions and pull requests to help build the CARLA connector are very welcome!"
    },
    {
      question: "Why was the microservices/Docker architecture put on hold?",
      answer: "To maximize development speed and eliminate IPC overhead, all perception neural networks currently execute in-process directly within the Python simulation loop. Once the core perception, MPC control, and sensor fusion pipelines are finalized, containerized microservices will be revisited."
    },
    {
      question: "Where can I ask questions, discuss ideas, or report issues?",
      answer: "We do not use private email forms. Please join the conversation by opening a GitHub Discussion or submitting an issue directly on the VisionPilot GitHub repository."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Main About Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Github className="w-56 h-56 text-brand-dark" />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">About VisionPilot</h1>
          
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            VisionPilot is a modular Python platform for autonomous driving research, combining modern deep learning (YOLO, UFLDv2, CNN) with multi-sensor fusion (Camera, LiDAR, Radar) and real-time control within the BeamNG.tech soft-body physics simulator.
          </p>
          <p className="text-base text-slate-600 mb-8 leading-relaxed">
            Unlike traditional rigid-body simulators, BeamNG.tech introduces realistic vehicle chassis flex, vibration, suspension kinematics, and sensor noise, forcing perception algorithms and control systems to be battle-tested against real-world physical constraints.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-brand-dark mb-1 flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-accent" /> Engineering Journal
              </h3>
              <p className="text-slate-500 text-xs mb-3">Complete development logs, algorithm iterations, and architectural decisions.</p>
              <a
                href="https://drive.google.com/file/d/15garXT9LaYUK_GlcT68EEbLpoLRc_XoL/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-bold text-brand-accent hover:text-brand-dark transition-colors"
              >
                Read Journal on Google Drive <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-brand-dark mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-blue" /> GitHub Community
              </h3>
              <p className="text-slate-500 text-xs mb-3">Discuss features, collaborate on the CARLA bridge, or report simulation bugs.</p>
              <a
                href="https://github.com/visionpilot-project/VisionPilot/discussions"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-dark transition-colors"
              >
                Join GitHub Discussions <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* One-Click Cite This Project Widget */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-brand-accent flex items-center justify-center">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-brand-dark">Cite this Project</h2>
                <p className="text-xs text-slate-500">If you use VisionPilot in academic research or technical publications, please cite:</p>
              </div>
            </div>

            <button
              onClick={handleCopyCitation}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-brand-dark text-white hover:bg-slate-800 shadow-sm hover:shadow'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>BibTeX Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy BibTeX</span>
                </>
              )}
            </button>
          </div>

          <div className="relative">
            <pre className="bg-slate-50 p-5 rounded-2xl text-xs font-mono text-slate-800 leading-relaxed overflow-x-auto border border-slate-200">
              {bibtexCitation}
            </pre>
          </div>
        </div>

        {/* Lead Developer & Contributors */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-display font-bold text-brand-dark mb-6 flex items-center">
            <User className="w-6 h-6 mr-3 text-brand-accent" /> Maintainer
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-accent/20 to-blue-500/20 rounded-2xl flex items-center justify-center text-xl font-bold text-brand-dark border border-slate-200">
                JS
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">Julian Stamm</h3>
                <p className="text-slate-500 text-sm">Lead Developer & Researcher</p>
                <p className="text-xs text-slate-400 mt-1">Core Architecture, Computer Vision, MPC & Simulation</p>
              </div>
            </div>

            <a
              href="https://github.com/Julian1777"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors shrink-0"
            >
              <Github className="w-4 h-4" />
              Follow on GitHub
            </a>
          </div>
        </div>

        {/* Project Star History */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-display font-bold text-brand-dark">GitHub Star Growth</h2>
            <a
              href="https://github.com/visionpilot-project/VisionPilot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1"
            >
              Star Repository <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <a
            href="https://star-history.com/#visionpilot-project/VisionPilot&Date"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-95 transition-opacity"
          >
            <img
              src="https://api.star-history.com/svg?repos=visionpilot-project/VisionPilot&type=Date"
              alt="VisionPilot Star History Chart"
              className="w-full h-auto rounded-2xl border border-slate-100"
            />
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-display font-bold text-brand-dark mb-8 flex items-center">
            <HelpCircle className="w-6 h-6 mr-3 text-brand-accent" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50/70 hover:bg-slate-100/70 transition-colors text-left"
                >
                  <span className="font-semibold text-slate-800 text-sm sm:text-base">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500 mb-3">
              Have another question not covered here?
            </p>
            <a
              href="https://github.com/visionpilot-project/VisionPilot/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Ask on GitHub Discussions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
