import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, Flame } from 'lucide-react';
import { RoadmapItem } from '../types';

const Roadmap: React.FC = () => {
  const roadmapData: RoadmapItem[] = [
    {
      category: "Perception",
      items: [
        { text: "Multi-Lane Detection (YOLOP + CV Fusion)", status: "completed" },
        { text: "Sign Detection & Classification (YOLOv11)", status: "completed" },
        { text: "Traffic Light Detection & Classification (YOLOv11)", status: "completed" },
        { text: "Lane Detection Fusion (YOLOP + Traditional CV)", status: "completed" },
        { text: "Majority Voting System for CV", status: "completed" },
        { text: "Real-Time Object Detection (Vehicles, Pedestrians)", status: "completed" },
        { text: "Semantic Segmentation", status: "completed" },
        { text: "Lighting Condition Detection", status: "completed" },
        { text: "Handle Dashed Lines in Lane Detection", status: "completed" },
        { text: "Speed Estimation (Camera + LiDAR)", status: "in-progress" },
        { text: "Multiple Object Tracking (MOT)", status: "planned" },
        { text: "Road Marking Detection", status: "planned" },
        { text: "LiDAR 3D Object Detection", status: "planned" },
        { text: "Ocluded Object Detection (Radar/LiDAR)", status: "low-priority" },
        { text: "Multi-Camera Setup", status: "low-priority" }
      ]
    },
    {
      category: "Sensor Fusion & Calibration",
      items: [
        { text: "Integrate Radar", status: "completed" },
        { text: "Integrate LiDAR", status: "completed" },
        { text: "Integrate GPS", status: "planned" },
        { text: "Integrate IMU", status: "planned" },
        { text: "Extended Kalman Filtering", status: "planned" },
        { text: "Ultrasonic Sensor Integration", status: "planned" },
        { text: "SLAM (Localization & Mapping)", status: "low-priority" }
      ]
    },
    {
      category: "Control & Planning",
      items: [
        { text: "Vehicle Control (Throttle, Steering, Braking)", status: "completed" },
        { text: "PIDF Controller Integration", status: "completed" },
        { text: "Adaptive Cruise Control (ACC)", status: "completed" },
        { text: "Automatic Emergency Braking (AEB)", status: "completed" },
        { text: "Model Predictive Control (MPC) Integration", status: "completed" },
        { text: "Blind Spot Monitoring (Radar)", status: "completed" },
        { text: "Obstacle Avoidance via MPC", status: "planned" },
        { text: "Curve Speed Optimization", status: "planned" },
        { text: "Trajectory Prediction", status: "planned" },
        { text: "Traffic Rule Enforcement", status: "planned" },
        { text: "Dynamic Speed Limits (Sign-based)", status: "planned" },
        { text: "Global Path Planning", status: "planned" },
        { text: "Local Path Planning", status: "planned" },
        { text: "Lane Change Logic (MPC)", status: "planned" },
        { text: "Parking Logic", status: "planned" }
      ]
    },
    {
      category: "Visualization & Logging",
      items: [
        { text: "Foxglove Integration", status: "completed" },
        { text: "Modular YAML Configuration", status: "completed" },
        { text: "Real-Time Drive Logging", status: "completed" },
        { text: "Real-Time Annotations Overlay", status: "planned" },
        { text: "Predicted Trajectory Visualization", status: "planned" },
        { text: "Bird's Eye View (BEV)", status: "planned" },
        { text: "Live Map Visualization", status: "low-priority" }
      ]
    },
    {
      category: "Deployment & Infrastructure",
      items: [
        { text: "Containerize Models (Docker)", status: "completed" },
        { text: "Microservices Architecture", status: "completed" },
        { text: "Message Broker (Redis)", status: "completed" },
        { text: "Docker Compose Orchestration", status: "completed" },
        { text: "Aggregator Service", status: "completed" }
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