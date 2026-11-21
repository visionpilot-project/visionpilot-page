import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, X, Eye, Shield, Radio, Activity, Filter } from 'lucide-react';

interface DemoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  gifUrl: string;
  youtubeId?: string;
  category: 'Lane & Drivable Area' | 'Safety & Control' | 'Perception & Signs' | 'Telemetry & 3D';
  tags: string[];
  metrics: string;
}

const Demos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string; desc: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Lane & Drivable Area',
    'Safety & Control',
    'Perception & Signs',
    'Telemetry & 3D'
  ];

  const demos: DemoItem[] = [
    {
      id: "multi-lane",
      title: "Multi-Lane Detection Stress Testing",
      subtitle: "Robust perception across harsh glare, low-light tunnels, and thick fog",
      description: "Evaluation of the multi-lane perception pipeline across environmental edge cases. Features majority voting between traditional computer vision algorithms and deep learning backbones.",
      gifUrl: `${import.meta.env.BASE_URL}multi-lane.gif`,
      youtubeId: "IvmJ01pYCSE",
      category: "Lane & Drivable Area",
      tags: ["Multi-Lane", "UFLDv2", "CV Voting", "Edge Cases", "Lighting"],
      metrics: "60 FPS • Multi-lane • Fog/Glare"
    },
    {
      id: "aeb",
      title: "Automatic Emergency Braking (AEB)",
      subtitle: "Real-time radar filtering and high-speed collision avoidance",
      description: "Watch the emergency braking system detect stationary and moving obstacles via long-range front radar, calculate time-to-collision (TTC), and initiate full brake deceleration in BeamNG.tech.",
      gifUrl: `${import.meta.env.BASE_URL}aeb_gif.gif`,
      youtubeId: "Z8Y2-MpmrRg",
      category: "Safety & Control",
      tags: ["AEB", "Radar 200m", "Collision Avoidance", "PID Brake"],
      metrics: "200m Range • 50Hz Update • Fail-Safe"
    },
    {
      id: "ufld",
      title: "Ultra-Fast Lane Detection (UFLD)",
      subtitle: "Temporal spline smoothing on high-speed highway video",
      description: "Demonstration of Ultra-Fast Deep Lane Detection (UFLDv2) performing row-based classification with anchor-driven ordinal classification. Yields high FPS performance on highway roads.",
      gifUrl: `${import.meta.env.BASE_URL}ufld_demo.gif`,
      youtubeId: "Dkj-diRK334",
      category: "Lane & Drivable Area",
      tags: ["UFLDv2", "ResNet-18", "Ordinal Anchor", "PyTorch"],
      metrics: "120+ FPS Model • Low Latency"
    },
    {
      id: "lane-v2",
      title: "Lane Keeping & Cruise Control (v2)",
      subtitle: "Smoother fused CV + deep lane detection with tuned PID",
      description: "The autonomous lane-keeping assistant steers the vehicle smoothly around highway bends while maintaining desired target cruising speeds through soft-body physics dynamics.",
      gifUrl: `${import.meta.env.BASE_URL}lane.gif`,
      youtubeId: "7eA_XfIkLWQ",
      category: "Safety & Control",
      tags: ["Lane Keeping", "PIDF Control", "Adaptive Cruise", "BeamNG.tech"],
      metrics: "60Hz Control Loop • Dynamic Target"
    },
    {
      id: "signs",
      title: "Traffic Sign Detection & Classification",
      subtitle: "Two-stage pipeline: YOLO localization + Custom CNN classification",
      description: "Real-time detection of roadside signage followed by sub-pixel classification into European and international highway code classes, allowing dynamic speed limit adaptation.",
      gifUrl: `${import.meta.env.BASE_URL}sign_demo.gif`,
      youtubeId: "ujGkQJ2BqV0",
      category: "Perception & Signs",
      tags: ["Sign Detection", "CNN Classify", "YOLO", "Dynamic Speed"],
      metrics: "45+ Sign Classes • 98.4% Top-1"
    },
    {
      id: "traffic-light",
      title: "Traffic Light Detection & State Classification",
      subtitle: "Real-time state tracking (Red / Yellow / Green)",
      description: "Dynamic detection of traffic lights at varying distances, camera exposure levels, and intersection angles to enforce stop lines and crossing logic.",
      gifUrl: `${import.meta.env.BASE_URL}traffic_light_demo.gif`,
      category: "Perception & Signs",
      tags: ["Traffic Lights", "State Tracking", "YOLO", "Intersections"],
      metrics: "Red/Yellow/Green • Real-Time"
    },
    {
      id: "foxglove",
      title: "Foxglove Studio LiDAR Point Cloud Streaming",
      subtitle: "80-line 3D LiDAR streaming & vehicle telemetry via WebSocket",
      description: "Real-time 3D point cloud streaming directly from the simulated roof LiDAR into Foxglove Studio over WebSockets, complete with vehicle pose, IMU dynamics, and trajectory overlays.",
      gifUrl: `${import.meta.env.BASE_URL}foxglove.gif`,
      youtubeId: "4HJDvL2Q6AY",
      category: "Telemetry & 3D",
      tags: ["Foxglove Studio", "LiDAR 80-Line", "WebSocket", "Telemetry"],
      metrics: "120m Range • 360° FOV • 20Hz"
    },
    {
      id: "segmentation",
      title: "Semantic Scene Segmentation",
      subtitle: "Synchronized dual-camera pixel-level drivable area mapping",
      description: "Pixel-level semantic classification isolating drivable road surface, lane markings, curbs, and surrounding vehicles from synchronized front and rear camera feeds.",
      gifUrl: `${import.meta.env.BASE_URL}segmentation.gif`,
      youtubeId: "4PAqcUKqn6c",
      category: "Perception & Signs",
      tags: ["Segmentation", "Drivable Area", "Front & Rear Cam"],
      metrics: "Pixel-Level • Multi-Angle"
    }
  ];

  const filteredDemos = activeCategory === 'All' 
    ? demos 
    : demos.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Perception & Simulation Demos
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Directly from BeamNG.tech simulation and neural network inference loops. Hover to inspect sensor metrics or click to launch extended high-definition video runs.
          </p>
        </div>

        {/* Featured Combined Demo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl grid lg:grid-cols-12 items-center"
        >
          <div className="lg:col-span-7 relative aspect-video sm:aspect-[16/10] lg:aspect-auto h-full min-h-[320px] bg-slate-900 group">
            <img
              src={`${import.meta.env.BASE_URL}combined_demos.gif`}
              alt="VisionPilot Full Perception Stack Preview"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-dark/80 text-white backdrop-blur-md border border-white/20">
                FULL STACK COMPOSITE
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-brand-dark/90 text-white text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur">
              Multi-Model In-Process Pipeline
            </div>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
              <Activity className="w-4 h-4" /> Integrated Simulation Run
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark mb-4">
              Complete Perception & Actuation Loop
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Simultaneous execution of UFLD multi-lane tracking, YOLO object detection, radar obstacle distance thresholding, and continuous steering PID actuation within BeamNG.tech soft-body physics.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs text-slate-700">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase">Control Loop</span>
                <span className="font-bold text-brand-accent text-sm">60 Hz Actuation</span>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px] uppercase">Sensors</span>
                <span className="font-bold text-brand-blue text-sm">Cam + LiDAR + Radar</span>
              </div>
            </div>
            <a
              href="https://github.com/visionpilot-project/VisionPilot#demos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-dark text-white font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
            >
              <span>Explore All Runs on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-accent text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-accent/40 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-video bg-slate-950 overflow-hidden">
                <img
                  src={demo.gifUrl}
                  alt={demo.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />

                {/* Top Badge: Category & Metrics */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 text-slate-800 backdrop-blur shadow-sm border border-slate-200/50">
                    {demo.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-brand-dark/80 text-white backdrop-blur">
                    {demo.metrics}
                  </span>
                </div>

                {/* Overlay on hover to play full video */}
                {demo.youtubeId && (
                  <div
                    onClick={() => setSelectedVideo({ id: demo.youtubeId!, title: demo.title, desc: demo.description })}
                    className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                  >
                    <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-brand-dark font-bold text-xs uppercase tracking-wider shadow-xl transform group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 fill-brand-accent text-brand-accent" />
                      Play HD Video
                    </div>
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold font-display text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-accent mb-2">
                    {demo.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {demo.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  {demo.youtubeId ? (
                    <button
                      onClick={() => setSelectedVideo({ id: demo.youtubeId!, title: demo.title, desc: demo.description })}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-brand-dark transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Watch Extended Video
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium">In-Simulation Telemetry</span>
                  )}

                  {demo.youtubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${demo.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-700 p-1 rounded"
                      title="Open in YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-brand-accent fill-brand-accent" />
                  <h3 className="font-bold font-display text-brand-dark text-base">{selectedVideo.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white text-sm text-slate-600">
                <p className="text-xs sm:text-sm">{selectedVideo.desc}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:underline shrink-0"
                >
                  Watch on YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Demos;
