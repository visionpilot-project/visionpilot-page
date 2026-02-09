import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, Flame } from 'lucide-react';
import { RoadmapItem } from '../types';

const Roadmap: React.FC = () => {
  const roadmapData: RoadmapItem[] = [
    {
      category: "Perception",
      items: [
        { text: "Sign Classification & Detection (CNN / YOLOv11m)", status: "completed" },
        { text: "Traffic Light Classification & Detection (CNN / YOLOv11m)", status: "completed" },
        { text: "Lane Detection Fusion (SCNN / CV)", status: "completed" },
        { text: "Advanced Lane Detection (OpenCV)", status: "completed" },
        { text: "Majority Voting System for CV", status: "completed" },
        { text: "Semantic Segmentation", status: "completed" },
        { text: "Real-Time Object Detection (Vehicles, Pedestrians)", status: "completed" },
        { text: "Speed Estimation (Camera + LiDAR)", status: "in-progress" },
        { text: "Pedestrian Intent Prediction", status: "planned" },
        { text: "Vehicle State Classification", status: "planned" },
        { text: "LiDAR Object Detection 3D", status: "in-progress" }
      ]
    },
    {
      category: "Sensor Fusion & Calibration",
      items: [
        { text: "Integrate Radar", status: "completed" },
        { text: "Integrate LiDAR", status: "completed" },
        { text: "Kalman Filtering", status: "in-progress" },
        { text: "GPS Integration", status: "planned" },
        { text: "IMU Integration", status: "planned" },
        { text: "Ultrasonic Sensor Integration", status: "planned" },
        { text: "Map Matching Algorithm", status: "planned" },
        { text: "SLAM (Localization & Mapping)", status: "low-priority" }
      ]
    },
    {
      category: "Control & Planning",
      items: [
        { text: "Vehicle Control (Throttle, Steer, Brake)", status: "completed" },
        { text: "PIDF Controller Integration", status: "completed" },
        { text: "Adaptive Cruise Control", status: "completed" },
        { text: "Automatic Emergency Braking (AEB)", status: "completed" },
        { text: "Trajectory Prediction", status: "planned" },
        { text: "Blindspot Monitoring", status: "planned" },
        { text: "Traffic Rule Enforcement", status: "planned" },
        { text: "Global/Local Path Planning", status: "planned" },
        { text: "Lane Change & Parking Logic", status: "planned" }
      ]
    },
    {
      category: "Simulation & Scenarios",
      items: [
        { text: "BeamNG.tech Integration", status: "completed" },
        { text: "Pipeline Modularization", status: "completed" },
        { text: "Lane Detection Tuning", status: "completed" },
        { text: "Fog/Weather Conditions", status: "planned" },
        { text: "Traffic Scenarios", status: "planned" },
        { text: "Lighting Condition Testing", status: "planned" }
      ]
    },
    {
      category: "Visualization & Logging",
      items: [
        { text: "Foxglove Visualization Integration", status: "completed" },
        { text: "Modular YAML Configuration", status: "completed" },
        { text: "Real-time Drive Logging", status: "completed" },
        { text: "Real-time Annotations Overlay", status: "planned" }
      ]
    },
    {
      category: "Deployment",
      items: [
        { text: "Containerize Models (Docker)", status: "planned" },
        { text: "Message Broker Integration", status: "planned" },
        { text: "Inference Aggregator Service", status: "planned" }
      ]
    }
  ];

  const getIcon = (status: string) => {
      switch(status) {
          case 'completed': return <CheckCircle2 className="w-5 h-5 text-brand-accent" />;
          case 'in-progress': return <Flame className="w-5 h-5 text-orange-500 animate-pulse" />;
          case 'planned': return <Clock className="w-5 h-5 text-slate-400" />;
          default: return <Circle className="w-5 h-5 text-slate-300" />;
      }
  };

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-display font-bold text-brand-dark mb-12 text-center">Development Roadmap</h1>
        
        <div className="space-y-8">
          {roadmapData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-brand-dark">{category.category}</h2>
              </div>
              <div className="p-6 grid sm:grid-cols-2 gap-4">
                {category.items.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3">
                        <div className="mt-0.5 shrink-0">{getIcon(item.status)}</div>
                        <span className={`text-sm ${item.status === 'completed' ? 'text-slate-400 line-through decoration-slate-300' : 'text-slate-700'}`}>
                            {item.text}
                        </span>
                    </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center gap-6 text-sm text-slate-500 flex-wrap">
            <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-brand-accent" /> Complete</div>
            <div className="flex items-center"><Flame className="w-4 h-4 mr-2 text-orange-500" /> In Progress</div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-slate-400" /> Planned</div>
            <div className="flex items-center"><Circle className="w-4 h-4 mr-2 text-slate-300" /> Low Priority</div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;