import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
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
      title: "Automatic Emergency Braking (AEB)",
      description: "Real-time radar filtering and collision avoidance in emergency scenarios.",
      youtubeId: "Z8Y2-MpmrRg",
      image: `${import.meta.env.BASE_URL}aeb_gif.gif`,
      isGif: true,
      tags: ["AEB", "Safety", "Radar", "Control"]
    },
    {
      title: "Sign Detection & Classification",
      description: "Real-time traffic sign detection and classification using CNNs/YOLO.",
      youtubeId: "ujGkQJ2BqV0",
      image: `${import.meta.env.BASE_URL}sign_demo.gif`,
      isGif: true,
      tags: ["Classification", "YOLOv11", "CNN", "Perception"]
    },
    {
      title: "Traffic Light Detection",
      description: "Detecting state changes (Red/Yellow/Green) in dynamic environments.",
      image: `${import.meta.env.BASE_URL}traffic_light_demo.gif`,
      isGif: true,
      tags: ["Classification", "Real-time"]
    },
    {
      title: "Autonomous Lane Keeping v2",
      description: "Fused CV & SCNN detection with tuned PID steering in BeamNG.tech.",
      youtubeId: "7eA_XfIkLWQ",
      image: `${import.meta.env.BASE_URL}lane.gif`,
      isGif: true,
      tags: ["Fusion", "PID", "ACC", "Lane Detection", "Control"]
    },
    {
      title: "Foxglove LiDAR Visualization",
      description: "Real-time point cloud streaming via WebSocket integration.",
      youtubeId: "4HJDvL2Q6AY",
      image: `${import.meta.env.BASE_URL}foxglove.gif`,
      isGif: true,
      tags: ["Visualization", "LiDAR", "WebSocket"]
    },
    {
      title: "Semantic Segmentation",
      description: "Real-time image segmentation using front and rear cameras.",
      youtubeId: "4PAqcUKqn6c",
      image: `${import.meta.env.BASE_URL}segmentation.gif`,
      isGif: true,
      tags: ["Segmentation", "Vision", "Perception"]
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
                {demo.isGif ? (
                    <div className="w-full h-full relative">
                        <img src={demo.image} alt={demo.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-white/20 backdrop-blur p-4 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold uppercase tracking-wider text-white">GIF Preview</span>
                            </div>
                        </div>
                    </div>
                ) : demo.youtubeId ? (
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
                ) : null}
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
                <p className="text-slate-600 text-sm mb-4">{demo.description}</p>
                {demo.youtubeId && (
                  <a 
                    href={`https://www.youtube.com/watch?v=${demo.youtubeId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-brand-accent hover:text-brand-dark transition-colors"
                  >
                    Watch Full Video
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demos;