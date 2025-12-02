import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Cpu, Navigation, Activity, Radio, Layers } from 'lucide-react';

const Overview: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8 text-brand-accent" />,
      title: "Lane Detection",
      description: "Hybrid approach using Spatial CNN (SCNN) and traditional Computer Vision for robust lane keeping in highway scenarios."
    },
    {
      icon: <Layers className="w-8 h-8 text-brand-blue" />,
      title: "Object Detection",
      description: "YOLOv8 & CNN powered detection and classification for vehicles, pedestrians, traffic lights, and road signs."
    },
    {
      icon: <Radio className="w-8 h-8 text-green-500" />,
      title: "Sensor Fusion",
      description: "Integration of Camera, LiDAR, and Radar data to create a comprehensive understanding of the environment."
    },
    {
      icon: <Navigation className="w-8 h-8 text-orange-500" />,
      title: "Autonomous Control",
      description: "Real-time PID controllers managing steering, throttle, and braking with Adaptive Cruise Control (ACC)."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "Live Telemetry",
      description: "Real-time visualization and monitoring via Foxglove Studio WebSocket integration."
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-500" />,
      title: "BeamNG Integration",
      description: "High-fidelity physics simulation using BeamNG.tech as the testing ground for autonomous algorithms."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-brand-accent font-semibold tracking-wide uppercase mb-3">Capabilities</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">System Overview</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            VisionPilot combines modular Python architecture with state-of-the-art deep learning models to achieve perception and control in complex simulated environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-brand-accent/50 hover:shadow-xl transition-all group"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section - Dark Blue Integrated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative rounded-3xl overflow-hidden bg-brand-dark border border-brand-dark shadow-2xl"
        >
           {/* Top accent line */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-glow to-blue-500"></div>
           
           <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">Powered by BeamNG.tech</h3>
                  <p className="text-slate-300 mb-6">
                      Leveraging the soft-body physics engine of BeamNG.tech allows for realistic sensor noise, vehicle dynamics, and complex traffic scenarios that traditional rigid-body simulators cannot match.
                  </p>
                  <ul className="space-y-2 text-slate-300">
                      <li className="flex items-center"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Real-time Lidar Point Clouds</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Accurate Camera Intrinsics</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-brand-accent rounded-full mr-3"></span>Dynamic Traffic Generation</li>
                  </ul>
              </div>
              <div className="relative h-64 md:h-auto overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
                   <img 
                    src="https://picsum.photos/800/600?grayscale&blur=2" 
                    alt="BeamNG Simulation" 
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-700"
                   />
                   <div className="absolute inset-0 flex items-center justify-center z-20">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm text-white font-medium">Simulation Environment</span>
                   </div>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;