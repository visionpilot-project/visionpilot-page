import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Database, Cpu, Car, Eye, MapPin, Compass, Wifi, Radio } from 'lucide-react';

const Technical: React.FC = () => {
  const steps = [
    {
      id: "simulation",
      title: "Simulation Layer",
      icon: <Car className="w-6 h-6" />,
      details: ["BeamNG.tech Physics", "Traffic Generation", "Sensor Simulation (LiDAR/Cam/Radar)"],
      color: "border-blue-200 text-blue-600 bg-blue-50"
    },
    {
      id: "perception",
      title: "Perception Pipeline",
      icon: <EyeIcon />,
      details: ["SCNN & Traditional CV (Lanes)", "YOLOv8 (Objects)", "CNN (Signs)"],
      color: "border-purple-200 text-purple-600 bg-purple-50"
    },
    {
      id: "fusion",
      title: "Sensor Fusion",
      icon: <Database className="w-6 h-6" />,
      details: ["Kalman Filters", "Object Tracking", "State Estimation"],
      color: "border-green-200 text-green-600 bg-green-50"
    },
    {
      id: "control",
      title: "Control System",
      icon: <Cpu className="w-6 h-6" />,
      details: ["PID Controllers", "Path Planning", "Actuator Commands"],
      color: "border-orange-200 text-orange-600 bg-orange-50"
    }
  ];

  const sensors = [
    {
      name: "Main Camera",
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      specs: ["1080p Resolution", "60 FPS", "120° FOV", "HDR Enabled"],
      desc: "Primary input for lane detection and object classification."
    },
    {
      name: "LiDAR Array",
      icon: <Wifi className="w-6 h-6 text-red-500" />,
      specs: ["100m+ Range", "360° Horizontal", "32 Channels", "10Hz Update"],
      desc: "Velodyne-style simulation for precise depth and obstacle mapping."
    },
    {
      name: "Dual GPS",
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      specs: ["RTK Precision", "Dual Antenna", "2cm Accuracy", "Multi-Band"],
      desc: "Global localization for path planning and map matching."
    },
    {
      name: "IMU",
      icon: <Compass className="w-6 h-6 text-orange-500" />,
      specs: ["9-Axis", "1kHz Rate", "Accelerometer", "Gyroscope"],
      desc: "Inertial measurement for dead reckoning and state estimation."
    },
    {
      name: "Tri-Radar System",
      icon: <Radio className="w-6 h-6 text-purple-500" />,
      specs: ["1 Front / 2 Rear", "150m Range", "Blind Spot Monitor", "Doppler Velocity"],
      desc: "Long-range front radar with dual rear corner radars for blind spot monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">System Architecture</h1>
          <p className="text-slate-600">Data flow from simulation to actuation</p>
        </div>

        {/* Flow Diagram */}
        <div className="relative mb-32">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2 z-0"></div>

                    <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full">
                   <div className={`bg-white p-6 rounded-xl border ${step.color.split(' ')[0]} shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${step.color.split(' ')[2]} ${step.color.split(' ')[1]}`}>
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark">{step.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center text-slate-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

                {/* Center Node */}
                <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center shrink-0 shadow-sm z-10">
                  <ArrowDown className="w-5 h-5 text-slate-400" />
                </div>

                {/* Empty Side for balance */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
            
            {/* Actuation Output */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="flex justify-center pt-8"
            >
              <div className="bg-brand-dark text-white px-8 py-3 rounded-full font-mono text-sm shadow-lg border border-brand-accent/30">
                Vehicle Actuation (Steering, Throttle, Brake)
              </div>
            </motion.div>
          </div>
        </div>

        {/* System Performance Benchmarks */}
        <div className="mb-32">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">System Performance</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Real-time metrics measured on an NVIDIA RTX 3070 GPU running the full perception and control stack.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Total Latency</div>
                    <div className="text-4xl font-display font-bold text-brand-dark mb-2">~45<span className="text-lg text-slate-500">ms</span></div>
                    <p className="text-xs text-slate-500">End-to-end (Sensor to Actuation)</p>
                </div>
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Control Frequency</div>
                    <div className="text-4xl font-display font-bold text-brand-accent mb-2">60<span className="text-lg text-slate-500">Hz</span></div>
                    <p className="text-xs text-slate-500">PID Loop Update Rate</p>
                </div>
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">GPU Utilization</div>
                    <div className="text-4xl font-display font-bold text-brand-blue mb-2">78<span className="text-lg text-slate-500">%</span></div>
                    <p className="text-xs text-slate-500">Average Load (Multi-Model)</p>
                </div>
             </div>
        </div>

        {/* Sensor Stack Specifications */}
        <div className="border-t border-slate-200 pt-20">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Sensor Stack Specifications</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">High-fidelity sensor simulation parameters used within the BeamNG.tech environment to replicate real-world hardware constraints.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
             {sensors.map((sensor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-brand-accent/30 hover:shadow-md transition-all"
                >
                   <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                         <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                           {sensor.icon}
                         </div>
                         <h3 className="text-lg font-bold text-brand-dark">{sensor.name}</h3>
                      </div>
                   </div>
                   <p className="text-sm text-slate-500 mb-4">{sensor.desc}</p>
                   <div className="grid grid-cols-2 gap-2">
                      {sensor.specs.map((spec, i) => (
                         <div key={i} className="bg-slate-50 px-3 py-1.5 rounded text-xs font-mono text-slate-700 border border-slate-100">
                           {spec}
                         </div>
                      ))}
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Icon
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
)

export default Technical;