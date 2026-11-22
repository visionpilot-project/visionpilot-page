import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

  const [activeSensor, setActiveSensor] = useState(0);

  const sensorSuite = [
    {
      id: "camera",
      name: "Front RGB",
      shortName: "Front Camera",
      specs: "1920 × 1080",
      domain: "Optical Perception",
      role: "Anything to do with vision: lane detection, object detection, traffic light recognition, and sign reading.",
      advantage: "Dense semantic richness: reads lane colors, signage text, and vehicle brake lights.",
      image: `${import.meta.env.BASE_URL}sensors.png`,
      badgeColor: "text-blue-600 bg-blue-50 border-blue-200"
    },
    {
      id: "lidar",
      name: "Roof-Mounted 80-Line LiDAR",
      shortName: "360° LiDAR",
      specs: "80 Channels",
      domain: "Laser Time-of-Flight",
      role: "High-density 3D spatial geometry and obstacle point clouds for Foxglove Studio.",
      advantage: "Precise geometric distance measurement unaffected by shadows, ambient glare, or dark tunnels.",
      image: `${import.meta.env.BASE_URL}lidar.png`,
      badgeColor: "text-cyan-600 bg-cyan-50 border-cyan-200"
    },
    {
      id: "radar_front",
      name: "Forward Long-Range Radar",
      shortName: "Front Radar",
      specs: "128 × 64 Bins",
      domain: "Millimeter Wave (Doppler)",
      role: "Continuous relative velocity estimation and Automatic Emergency Braking (AEB) trigger.",
      advantage: "Directly calculates vehicle closing speeds and penetrates through thick fog and heavy rain.",
      image: `${import.meta.env.BASE_URL}radar_front.png`,
      badgeColor: "text-rose-600 bg-rose-50 border-rose-200"
    },
    {
      id: "radar_rear",
      name: "Dual Corner Rear Radars",
      shortName: "Rear Radars",
      specs: "30m Range (Dual) • 64 × 32 Bins",
      domain: "Short-Range Radar",
      role: "Continuous Blind Spot Detection (BSD) and safe lane change execution assistance.",
      advantage: "Guards vehicle quarter blind zones, detecting overtaking traffic during merges.",
      image: `${import.meta.env.BASE_URL}radar_rear.png`,
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-200"
    }
  ];

  const features = [
    {
      icon: <Eye className="w-6 h-6 text-brand-accent" />,
      title: "Multi-Lane Detection",
      description: "Ultra-Fast Lane Detection (UFLD) and CV fusion for robust multi-lane detection across edge cases."
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-blue" />,
      title: "Object Detection",
      description: "YOLOv11 powered detection for vehicles, pedestrians, traffic lights, and signs."
    },
    {
      icon: <Radio className="w-6 h-6 text-green-500" />,
      title: "Multi-Sensor Fusion",
      description: "Integration of Camera, LiDAR, Radar, GPS, and IMU for comprehensive perception."
    },
    {
      icon: <Navigation className="w-6 h-6 text-orange-500" />,
      title: "MPC Control",
      description: "Model Predictive Control with integrated steering & throttle, plus Emergency Braking."
    },
    {
      icon: <Activity className="w-6 h-6 text-red-500" />,
      title: "Live Telemetry",
      description: "Real-time visualization and monitoring via Foxglove Studio with LiDAR integration."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: "BeamNG Integration",
      description: "High-fidelity physics simulation for autonomous algorithm development and testing."
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

          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-brand-dark mb-6 drop-shadow-sm">
            VisionPilot: Multi-Modal Autonomous Driving
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Advanced perception and <br/>
            <span className="text-brand-accent font-normal">Model Predictive Control for Autonomous Research</span>
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
              href="https://github.com/visionpilot-project/VisionPilot"
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

      {/* 
        =============================================
        SECTION 3: MULTI-MODAL SENSOR FUSION
        =============================================
      */}
      <section className="py-28 px-4 relative bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent block mb-2 font-mono">
              Perception Hardware Suite
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">
              Multi-Modal Sensor Fusion
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              No single sensor is completely infallible. VisionPilot fuses inputs across three complementary physical domains:optical vision, laser time-of-flight, and millimeter-wave radar, to construct a reliable perception envelope across changing weather, lighting, and high-speed maneuvers.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Sensor Selector Cards */}
            <div className="lg:col-span-5 space-y-3">
              {sensorSuite.map((sensor, idx) => {
                const isActive = activeSensor === idx;
                return (
                  <button
                    key={sensor.id}
                    onClick={() => setActiveSensor(idx)}
                    onMouseEnter={() => setActiveSensor(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                      isActive
                        ? 'bg-slate-50 border-brand-accent shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-display font-bold text-base text-brand-dark">
                        {sensor.name}
                      </span>
                      <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${sensor.badgeColor}`}>
                        {sensor.domain}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                      {sensor.role}
                    </p>
                    <div className="text-[11px] font-mono text-slate-400">
                      {sensor.specs}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Sensor Visualizer */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
                {/* Switcher Tab Strip */}
                <div className="flex items-center gap-1.5 p-3 bg-slate-50 border-b border-slate-200 overflow-x-auto">
                  {sensorSuite.map((sensor, idx) => (
                    <button
                      key={sensor.id}
                      onClick={() => setActiveSensor(idx)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        activeSensor === idx
                          ? 'bg-brand-dark text-white shadow-sm'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {sensor.shortName}
                    </button>
                  ))}
                </div>

                {/* Sensor Visual Image Screen */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSensor}
                      src={sensorSuite[activeSensor].image}
                      alt={sensorSuite[activeSensor].name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  <div className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur text-white text-xs font-mono px-3 py-1 rounded-lg border border-white/10">
                    BeamNG.tech Simulated Hardware
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-mono tracking-wider">Advantage</span>
                      <span className="text-slate-200 leading-snug">{sensorSuite[activeSensor].advantage}</span>
                    </div>
                    <div className="shrink-0 font-mono text-[11px] text-brand-accent bg-white/10 px-2.5 py-1 rounded-md text-center">
                      {sensorSuite[activeSensor].specs.split('•')[0].trim()}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">
                    Configurable parameters available in <code className="font-mono text-brand-dark bg-slate-100 px-1.5 py-0.5 rounded">config/sensors.yaml</code>
                  </span>
                  <Link
                    to="/technical"
                    className="font-bold text-brand-accent hover:text-brand-dark transition-colors inline-flex items-center gap-1"
                  >
                    View All Sensor Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
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