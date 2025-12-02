import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Zap, Radio, Scan, Activity, ChevronDown, Layers, Cpu, Eye, Navigation, Target, Crosshair } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const features = [
    {
      icon: <Eye className="w-6 h-6 text-brand-accent" />,
      title: "Lane Detection",
      description: "Hybrid approach using Spatial CNN (SCNN) and CV for robust highway lane keeping."
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-blue" />,
      title: "Object Detection",
      description: "YOLOv8 & CNN powered detection for vehicles, pedestrians, and signals."
    },
    {
      icon: <Radio className="w-6 h-6 text-green-500" />,
      title: "Sensor Fusion",
      description: "Integration of Camera, LiDAR, and Radar for comprehensive environment mapping."
    },
    {
      icon: <Navigation className="w-6 h-6 text-orange-500" />,
      title: "Autonomous Control",
      description: "Real-time PID controllers managing steering and ACC with soft-body physics."
    },
    {
      icon: <Activity className="w-6 h-6 text-red-500" />,
      title: "Live Telemetry",
      description: "Real-time visualization and monitoring via Foxglove Studio WebSocket."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: "BeamNG Integration",
      description: "High-fidelity physics simulation testing ground for autonomous algorithms."
    }
  ];

  return (
    <div className="relative bg-brand-surface overflow-x-hidden">
      <style>{`
        @keyframes car-pass-left {
           0% { transform: translate3d(-50px, 0px, -1200px); opacity: 0; }
           10% { opacity: 1; }
           100% { transform: translate3d(-150px, 0px, 600px); opacity: 0; }
        }
        @keyframes car-pass-right {
           0% { transform: translate3d(50px, 0px, -1200px); opacity: 0; }
           10% { opacity: 1; }
           100% { transform: translate3d(150px, 0px, 600px); opacity: 0; }
        }
                @keyframes obstacle-approach-right {
           0% { transform: translate3d(150px, -2000px, 0); opacity: 0; }
           5% { opacity: 1; }
           100% { transform: translate3d(150px, 500px, 0); opacity: 1; }
        }
        @keyframes obstacle-approach-left {
           0% { transform: translate3d(-150px, -2000px, 0); opacity: 0; }
           5% { opacity: 1; }
           100% { transform: translate3d(-150px, 500px, 0); opacity: 1; }
        }
        .perspective-container {
           perspective: 800px;
           perspective-origin: 50% 40%;
        }
        .world-transform {
           transform-style: preserve-3d;
           transform: rotateX(60deg) translateY(0px) scale(1);
           width: 100%;
           height: 100%;
           position: absolute;
           top: 0;
           left: 0;
        }
        .billboard {
            transform: rotateX(-60deg);
            transform-style: preserve-3d;
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
      `}</style>
      {/* 
        =============================================
        SECTION 1: SPLASH SCREEN (Clean, Title Only)
        =============================================
      */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white">
        
        {/* 3D Autonomous Driving Simulation Background */}
        <div className="absolute inset-0 perspective-container overflow-hidden">
            <div className="world-transform" style={{ transform: `rotateX(60deg) translateY(0px) scale(1) translateX(${mousePos.x * -20}px)` }}>
                
                {/* Path Planning Visualization (Waymo-style) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <svg className="w-full h-full max-w-3xl opacity-80" viewBox="0 0 400 800" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="pathGradient" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stopColor="rgb(0, 232, 157)" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="rgb(0, 232, 157)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="laneGradient" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        
                        {/* Left Lane Marker (Curved) */}
                        <path 
                            d="M 50 800 C 50 600 50 400 50 0" 
                            stroke="url(#laneGradient)" 
                            strokeWidth="2" 
                            strokeDasharray="30 30"
                            fill="none" 
                            className="opacity-60"
                        >
                             <animate attributeName="d" 
                                values="
                                    M 50 800 C 50 600 50 400 50 0;
                                    M 50 800 C 50 600 -50 400 -100 0;
                                    M 50 800 C 50 600 50 400 50 0;
                                    M 50 800 C 50 600 150 400 200 0;
                                    M 50 800 C 50 600 50 400 50 0
                                " 
                                dur="20s" 
                                repeatCount="indefinite" 
                             />
                             <animate attributeName="stroke-dashoffset" from="0" to="60" dur="0.5s" repeatCount="indefinite" />
                        </path>

                        {/* Right Lane Marker (Curved) */}
                        <path 
                            d="M 350 800 C 350 600 350 400 350 0" 
                            stroke="url(#laneGradient)" 
                            strokeWidth="2" 
                            strokeDasharray="30 30"
                            fill="none" 
                            className="opacity-60"
                        >
                             <animate attributeName="d" 
                                values="
                                    M 350 800 C 350 600 350 400 350 0;
                                    M 350 800 C 350 600 250 400 200 0;
                                    M 350 800 C 350 600 350 400 350 0;
                                    M 350 800 C 350 600 450 400 500 0;
                                    M 350 800 C 350 600 350 400 350 0
                                " 
                                dur="20s" 
                                repeatCount="indefinite" 
                             />
                             <animate attributeName="stroke-dashoffset" from="0" to="60" dur="0.5s" repeatCount="indefinite" />
                        </path>

                        {/* Main Trajectory (Dynamic) */}
                        <path 
                            d="M 200 800 C 200 600 200 400 200 0" 
                            stroke="url(#pathGradient)" 
                            strokeWidth="40" 
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="800"
                            strokeDashoffset="0"
                        >
                            <animate attributeName="d" 
                                values="
                                    M 200 800 C 200 600 200 400 200 0;
                                    M 200 800 C 200 600 100 400 50 0;
                                    M 200 800 C 200 600 200 400 200 0;
                                    M 200 800 C 200 600 300 400 350 0;
                                    M 200 800 C 200 600 200 400 200 0
                                " 
                                dur="20s" 
                                repeatCount="indefinite" 
                            />
                            <animate attributeName="stroke-dashoffset" values="0; 200; 0; 300; 0" dur="15s" repeatCount="indefinite" />
                        </path>
                    </svg>
                </div>

                {/* 2D Billboards (Traffic Signs & Lights) - REMOVED */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 preserve-3d">
                    {/* Elements removed as per request */}
                </div>
            </div>

            {/* Horizon Fade - Simplified to remove weird shadows */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none"></div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-30 max-w-4xl mx-auto"
        >

          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-brand-dark mb-6 drop-shadow-sm">
            VisionPilot
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Autonomous Driving Simulation & <br/>
            <span className="text-brand-accent font-normal">Real-Time Perception</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContent}
              className="group flex items-center justify-center px-8 py-4 rounded-full bg-brand-accent text-white font-bold text-lg hover:bg-teal-500 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore System
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <a
              href="https://github.com/Julian1777/self-driving-project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1 hover:shadow-sm"
            >
              <Github className="mr-2 h-5 w-5" />
              Codebase
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-0 w-full flex justify-center text-slate-400 cursor-pointer"
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold opacity-60">Scroll to Explore</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </section>

      {/* 
        =============================================
        SECTION 1.5: SYSTEM OVERVIEW (Merged)
        =============================================
      */}
      <section className="py-24 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Core Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">Modular Autonomy Stack</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-brand-accent/30 hover:shadow-lg transition-colors duration-300 group"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-slate-200 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


            <section className="py-32 px-4 relative bg-white overflow-hidden border-t border-slate-200">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-0">
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Visual Side: Isometric Stack */}
          <div className="relative h-[500px] flex items-center justify-center perspective-container">
             <div className="relative w-72 h-72" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }}>
                {/* Layer 1: Raw Camera */}
                <motion.div 
                  animate={{ z: [0, 40, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white border border-slate-200 rounded-xl shadow-xl flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                   <div className="text-slate-400 font-mono text-xs transform rotate-90 font-bold tracking-widest">RAW_DATA</div>
                   {/* Simple Road Graphic */}
                   <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent via-slate-400 to-slate-600 rounded-xl"></div>
                </motion.div>

                {/* Layer 2: Lane Segmentation */}
                <motion.div 
                  animate={{ z: [80, 160, 80] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-50/80 border border-blue-200 rounded-xl shadow-lg backdrop-blur-sm flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                   <div className="absolute inset-0 flex justify-between px-12 py-4">
                      <div className="w-2 h-full bg-blue-400/30 blur-[2px] rounded-full"></div>
                      <div className="w-2 h-full bg-blue-400/30 blur-[2px] rounded-full"></div>
                   </div>
                   <div className="text-blue-500 font-mono text-xs transform rotate-90 bg-white/80 px-2 border border-blue-200 rounded">SEGMENTATION</div>
                </motion.div>

                {/* Layer 3: Object Detection */}
                <motion.div 
                  animate={{ z: [160, 280, 160] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-green-50/80 border border-green-200 rounded-xl shadow-lg backdrop-blur-sm flex items-center justify-center"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                   {/* Bounding Boxes - REMOVED */}
                   <div className="text-green-600 font-mono text-xs transform rotate-90 bg-white/80 px-2 border border-green-200 rounded">OBJECT_DETECTION</div>
                </motion.div>
             </div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-sm font-bold text-brand-accent uppercase tracking-wider">Sensor Fusion</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
              See the World in <span className="text-transparent bg-clip-text bg-black">Layers</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              True autonomy requires more than just a camera feed. VisionPilot deconstructs the environment into semantic layers—separating road geometry from dynamic obstacles—before fusing them into a unified 3D understanding.
            </p>

            <div className="space-y-6 mb-10">
               <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 mt-1 group-hover:bg-blue-100 transition-colors">
                     <Layers className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="ml-4">
                     <h4 className="text-brand-dark font-bold text-lg mb-1">Semantic Segmentation</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">Pixel-level understanding of drivable surfaces and lane markings using Spatial CNN.</p>
                  </div>
               </div>
               
               <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center border border-green-100 mt-1 group-hover:bg-green-100 transition-colors">
                     <Target className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                     <h4 className="text-brand-dark font-bold text-lg mb-1">Object Detection</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">Real-time bounding box regression for vehicles, pedestrians, and signals via YOLOv8.</p>
                  </div>
               </div>
            </div>

            <Link
              to="/technical"
              className="group inline-flex items-center px-8 py-4 rounded-full bg-brand-dark text-white font-bold hover:bg-brand-accent transition-all shadow-lg hover:shadow-brand-accent/20"
            >
              Deep Dive into Architecture 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 
        =============================================
        SECTION 3: SENSOR FUSION (Coverage Map)
        =============================================
      */}
      <section className="py-32 px-4 relative bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
           
           {/* Visual Side: Sensor Coverage Diagram */}
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="relative h-[500px] lg:order-2 flex items-center justify-center"
           >
              <div className="relative w-full h-full max-w-md aspect-square">
                  {/* Pulsing Background Rings (LiDAR Range) */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.05, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-[80%] h-[80%] rounded-full border border-brand-blue/20 bg-brand-blue/5"
                      />
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.05, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        className="absolute w-[60%] h-[60%] rounded-full border border-brand-blue/20"
                      />
                  </div>

                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                      <defs>
                          <radialGradient id="radarGradient" cx="50%" cy="100%" r="100%">
                              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                          </radialGradient>
                          <linearGradient id="cameraGradient" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                          </linearGradient>
                      </defs>

                      {/* Group centered on Car */}
                      <g transform="translate(200, 200)">
                          
                          {/* LiDAR Rays (Shooting out) */}
                          <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                             {[...Array(8)].map((_, i) => (
                                <line 
                                  key={i}
                                  x1="0" y1="0" 
                                  x2="0" y2="-200" 
                                  stroke="#3b82f6" 
                                  strokeWidth="2" 
                                  strokeOpacity="0.1"
                                  transform={`rotate(${i * 45})`}
                                />
                             ))}
                          </motion.g>

                          {/* Long Range Radar (Front) - Bigger & Pulsing */}
                          <motion.path 
                            d="M -30 -60 L -80 -220 A 100 100 0 0 1 80 -220 L 30 -60 Z" 
                            fill="url(#radarGradient)"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          {/* Radar Waves */}
                          <motion.path
                            d="M -15 -100 Q 0 -110 15 -100"
                            fill="none" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.5"
                            animate={{ y: [-20, -100], opacity: [1, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                          />
                           <motion.path
                            d="M -25 -100 Q 0 -120 25 -100"
                            fill="none" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.5"
                            animate={{ y: [-20, -100], opacity: [1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                          />

                          {/* Camera FOV (Wide Front) - Bigger */}
                          <motion.path 
                            d="M 0 -30 L -160 -180 L 160 -180 Z" 
                            fill="url(#cameraGradient)"
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                          />

                          {/* RL */}
                          <path d="M -30 45 L -100 100 A 50 50 0 0 0 -50 110 L -30 45 Z" fill="#ef4444" fillOpacity="0.1" />
                          {/* RR */}
                          <path d="M 30 45 L 100 100 A 50 50 0 0 1 50 110 L 30 45 Z" fill="#ef4444" fillOpacity="0.1" />

                          {/* The Car - Bigger */}
                          <rect x="-30" y="-52" width="60" height="105" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="3" />
                          {/* Windshield */}
                          <path d="M -26 -25 L -26 0 L 26 0 L 26 -25 Q 0 -35 -26 -25" fill="#475569" />
                          {/* Headlights */}
                          <path d="M -28 -50 L -15 -50 L -15 -45 L -28 -42 Z" fill="#fbbf24" />
                          <path d="M 28 -50 L 15 -50 L 15 -45 L 28 -42 Z" fill="#fbbf24" />
                          
                          {/* LiDAR Spinner - Center */}
                          <circle cx="0" cy="0" r="8" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                          <motion.g animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                              <rect x="-2" y="-12" width="4" height="24" fill="#60a5fa" />
                              <circle cx="0" cy="-12" r="2" fill="#93c5fd" />
                          </motion.g>

                      </g>
                  </svg>
                  
                  {/* Legend / Labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-6 text-xs font-bold uppercase tracking-wider">
                      <div className="flex items-center text-red-500">
                          <div className="w-3 h-3 bg-red-500/20 border border-red-500 rounded-full mr-2"></div> Radar
                      </div>
                      <div className="flex items-center text-brand-blue">
                          <div className="w-3 h-3 bg-brand-blue/20 border border-brand-blue rounded-full mr-2"></div> LiDAR
                      </div>
                      <div className="flex items-center text-emerald-500">
                          <div className="w-3 h-3 bg-emerald-500/20 border border-emerald-500 rounded-full mr-2"></div> Camera
                      </div>
                  </div>
              </div>
           </motion.div>

           {/* Text Content */}
           <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
           >
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
              <Radio className="w-6 h-6 text-brand-blue" />
            </div>
            
            <h2 className="text-4xl font-display font-bold text-brand-dark mb-6">
              Multi-Modal Sensor Fusion
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No single sensor is perfect. VisionPilot employs a "safety through redundancy" architecture, overlapping data from three distinct physical domains to create a fail-safe perception system.
            </p>
            
            <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-brand-blue"></div>
                    <h4 className="text-brand-dark font-bold text-lg mb-1">LiDAR (Light Detection and Ranging)</h4>
                    <p className="text-slate-600 text-sm">Provides precise 3D geometry and depth, unaffected by shadows or texture.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-red-500"></div>
                    <h4 className="text-brand-dark font-bold text-lg mb-1">Radar (Radio Detection)</h4>
                    <p className="text-slate-600 text-sm">Directly measures object velocity (Doppler effect) and works in heavy rain/fog.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-slate-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-emerald-500"></div>
                    <h4 className="text-brand-dark font-bold text-lg mb-1">Camera (Computer Vision)</h4>
                    <p className="text-slate-600 text-sm">Essential for semantic understanding: reading signs, lane colors, and brake lights.</p>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        =============================================
        SECTION 4: SIMULATION CTA (Light Theme Style)
        =============================================
      */}
      <section className="py-24 px-4 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl"
            >
               {/* Top accent line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-glow to-blue-500"></div>
               
               <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 md:p-16 flex flex-col justify-center">
                      <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Physics Engine</span>
                      </div>
                      <h3 className="text-4xl font-display font-bold text-brand-dark mb-6">Tested in BeamNG.tech</h3>
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                          Soft-body physics simulation ensures our control algorithms are battle-tested against realistic vehicle dynamics, sensor noise, and complex traffic scenarios before they ever touch real pavement.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          to="/demos"
                          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-dark text-white font-bold hover:bg-brand-accent transition-all shadow-lg hover:shadow-brand-accent/20"
                        >
                          Watch Simulation Demos <Zap className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="relative h-64 md:h-auto overflow-hidden bg-white">
                       <img 
                        src={`${import.meta.env.BASE_URL}beamng_tech.jpg`}
                        alt="BeamNG Simulation" 
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-50 md:opacity-0"></div>
                  </div>
               </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;