import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { trackEvent } from '../src/utils/analytics';

const Demos: React.FC = () => {
  const [playing, setPlaying] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    trackEvent('view', 'Page', 'Demos');
  }, []);

  const handlePlay = (index: number, title: string) => {
    trackEvent('click', 'Demos', `Play Video: ${title}`);
    setPlaying((prev) => ({ ...prev, [index]: true }));
  };

  const demos = [
    {
      title: "Autonomous Lane Keeping v2",
      description: "Fused CV & SCNN detection with tuned PID steering in BeamNG.tech.",
      youtubeId: "7eA_XfIkLWQ",
      tags: ["Fusion", "PID", "ACC", "Lane Detection", "Control"]
    },
    {
      title: "Foxglove LiDAR Visualization",
      description: "Real-time point cloud streaming via WebSocket integration.",
      youtubeId: "4HJDvL2Q6AY",
      tags: ["Visualization", "LiDAR", "WebSocket"]
    },
    {
      title: "Traffic Sign & Vehicle Detection",
      description: "Real-time recognition of road signs and traffic participants.",
      image: `${import.meta.env.BASE_URL}sign_detection_demo.gif`, // Placeholder as actual GIF is local
      isGif: true,
      tags: ["YOLOv8", "CNN", "Perception"]
    },
    {
      title: "Traffic Light Classification",
      description: "Detecting state changes (Red/Yellow/Green) in dynamic environments.",
      image: `${import.meta.env.BASE_URL}traffic_light_demo.gif`, // Placeholder
      isGif: true,
      tags: ["Classification", "Real-time"]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">System Demos</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See the VisionPilot system in action. From raw sensor visualization to full autonomous control loops.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-brand-accent/50 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative aspect-video bg-slate-900 group-hover:opacity-100 transition-opacity">
                {demo.youtubeId ? (
                  playing[index] ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${demo.youtubeId}?autoplay=1`}
                      title={demo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      className="w-full h-full relative cursor-pointer group/video"
                      onClick={() => handlePlay(index, demo.title)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${demo.youtubeId}/maxresdefault.jpg`} 
                        alt={demo.title} 
                        className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 transition-opacity" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm p-5 rounded-full border border-white/30 group-hover/video:scale-110 group-hover/video:bg-brand-accent transition-all duration-300">
                          <Play className="w-8 h-8 text-white fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                    <div className="w-full h-full relative">
                        <img src={demo.image} alt={demo.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur p-4 rounded-full border border-white/30">
                                <span className="text-xs font-bold uppercase tracking-wider text-white">GIF Demo</span>
                            </div>
                        </div>
                    </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {demo.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono py-1 px-2 rounded bg-slate-100 text-brand-blue border border-slate-200 font-semibold">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{demo.title}</h3>
                <p className="text-slate-600 text-sm">{demo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demos;