import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { Download, FolderTree, ExternalLink, Cpu, CheckCircle2, Zap } from 'lucide-react';

const Models: React.FC = () => {
  const datasetData = [
    { name: 'CULane', size: 95, color: '#0891b2' },
    { name: 'BDD100K', size: 90, color: '#3b82f6' },
    { name: 'Mapillary', size: 65, color: '#10b981' },
    { name: 'TUSimple', size: 55, color: '#f59e0b' },
    { name: 'GTSRB', size: 45, color: '#ec4899' },
    { name: 'DFG Signs', size: 40, color: '#8b5cf6' },
  ];

  const models = [
    {
      name: "UFLDv2 ResNet-18",
      task: "Multi-Lane Detection",
      filename: "models/ufld/ufld_culane_res18.pth",
      framework: "PyTorch",
      latency: "8.2 ms",
      inputRes: "288 × 800",
      status: "Released",
      description: "Anchor-driven ordinal classification trained on CULane. Generates smooth lane splines in real time."
    },
    {
      name: "YOLO Object Detector",
      task: "Multi-Class Object Detection",
      filename: "models/object_detection/object_detection.pt",
      framework: "Ultralytics",
      latency: "12.4 ms",
      inputRes: "640 × 640",
      status: "Released",
      description: "Detects surrounding vehicles, trucks, buses, pedestrians, and cyclists simultaneously."
    },
    {
      name: "YOLO Traffic Light Detector",
      task: "Traffic Light & State Detection",
      filename: "models/traffic_light/traffic_light_detection.pt",
      framework: "Ultralytics",
      latency: "11.2 ms",
      inputRes: "640 × 640",
      status: "Released",
      description: "Isolates signal housings and classifies active state (Red / Yellow / Green)."
    },
    {
      name: "YOLO Traffic Sign Detector",
      task: "Sign Localization",
      filename: "models/traffic_sign/traffic_sign_detection.pt",
      framework: "Ultralytics",
      latency: "10.8 ms",
      inputRes: "640 × 640",
      status: "Released",
      description: "First-stage bounding box regression for roadside traffic signage."
    },
    {
      name: "Custom CNN Sign Classifier",
      task: "Sign Classification",
      filename: "models/traffic_sign/traffic_sign_classification.h5",
      framework: "TensorFlow / Keras",
      latency: "2.1 ms",
      inputRes: "64 × 64",
      status: "Released",
      description: "Sub-pixel classification covering 45+ European and international highway signage categories."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Models & Datasets
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            VisionPilot neural networks have been released for public research. Download weights directly from GitHub Releases and mount them in your local simulation loop.
          </p>
        </div>

        {/* Release Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-brand-accent/15 via-blue-500/10 to-teal-500/10 border border-brand-accent/30 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-accent text-white shadow-sm">
                  Official Release Available
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500">v0.1.0-alpha Models</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-dark">
                Download Pretrained Weights Package
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Pretrained models for multi-lane detection, object tracking, traffic sign classification, and traffic signal monitoring are bundled and hosted on our official GitHub Releases.
              </p>
            </div>
            
            <a
              href="https://github.com/visionpilot-project/VisionPilot/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-dark text-white font-bold text-sm sm:text-base hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download on GitHub Releases</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>
          </div>
        </motion.div>

        {/* Directory Structure & Setup */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 bg-slate-900 text-slate-200 p-6 sm:p-7 rounded-2xl font-mono text-xs shadow-lg border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
                <span className="flex items-center gap-2">
                  <FolderTree className="w-4 h-4 text-brand-glow" /> Expected Folder Hierarchy
                </span>
                <span className="text-[11px] text-emerald-400 font-bold">models/</span>
              </div>
              <pre className="text-slate-300 leading-relaxed overflow-x-auto">
{`models/
├── object_detection/
│   └── object_detection.pt
├── traffic_light/
│   └── traffic_light_detection.pt
├── traffic_sign/
│   ├── traffic_sign_detection.pt
│   └── traffic_sign_classification.h5
└── ufld/
    └── ufld_culane_res18.pth`}
              </pre>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800 text-slate-400 text-[11px]">
              Extract <code className="text-brand-glow">visionpilot-v0.1.0-models.zip</code> directly into the project root <code className="text-brand-glow">models/</code> directory.
            </div>
          </motion.div>

          {/* Dataset Scale Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-7 rounded-2xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-display text-brand-dark">Training Dataset Benchmark Scale</h3>
                <span className="text-xs font-mono text-slate-400">Open-Source Corpora</span>
              </div>
              <p className="text-slate-500 text-xs mb-4">
                Models are fine-tuned across high-diversity autonomous driving datasets to maximize generalization in BeamNG.tech.
              </p>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={datasetData} layout="vertical" margin={{ left: 10, right: 20, top: 0, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      stroke="#64748b"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      width={80}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ color: '#0f172a', fontSize: '12px' }}
                      cursor={{ fill: 'rgba(0,0,0,0.03)' }}
                    />
                    <Bar dataKey="size" radius={[0, 4, 4, 0]} barSize={18}>
                      {datasetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="text-right text-[11px] text-slate-400 pt-2 border-t border-slate-100">
              *Relative dataset image volume and annotation density
            </div>
          </motion.div>
        </div>

        {/* Active Models Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-12"
        >
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold font-display text-brand-dark text-lg">Active Neural Model Architecture & Weights</h3>
            <span className="text-xs font-mono font-semibold text-slate-500">In-Process Inference</span>
          </div>

          <div className="divide-y divide-slate-100">
            {models.map((model, idx) => (
              <div
                key={idx}
                className="p-6 hover:bg-slate-50/70 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base font-bold font-display text-brand-dark">{model.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {model.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {model.framework}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-brand-accent">{model.task}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{model.description}</p>
                  <code className="text-[11px] font-mono text-slate-500 block bg-slate-100/70 p-1 rounded max-w-fit">
                    {model.filename}
                  </code>
                </div>

                <div className="flex md:flex-col items-end justify-between md:justify-center gap-2 shrink-0 text-right">
                  <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-center">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">Inference Time</span>
                    <span className="text-sm font-bold text-brand-dark font-mono">{model.latency}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    Input: {model.inputRes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Releases Link Banner Bottom */}
        <div className="text-center pt-4">
          <a
            href="https://github.com/visionpilot-project/VisionPilot/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-dark transition-colors"
          >
            <span>View all past and upcoming weights on GitHub Releases</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Models;
