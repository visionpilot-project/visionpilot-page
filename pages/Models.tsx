import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

const Models: React.FC = () => {
  const datasetData = [
    { name: 'Mapillary', size: 65, color: '#2dd4bf' },
    { name: 'BDD100K', size: 90, color: '#3b82f6' },
    { name: 'TUSimple', size: 55, color: '#fb923c' },
    { name: 'Euro Signs', size: 45, color: '#f472b6' },
    { name: 'DFG Signs', size: 40, color: '#a855f7' },
    { name: 'GTSRB', size: 35, color: '#ec4899' },
  ];

  const models = [
    { name: "SCNN", type: "Lane Detection", framework: "PyTorch", status: "Production" },
    { name: "YOLOv8x", type: "Object Detection", framework: "Ultralytics", status: "Production" },
    { name: "YOLOv8x", type: "Sign Detection", framework: "Ultralytics", status: "Production" },
    { name: "Custom CNN", type: "Sign Classification", framework: "Keras/TF", status: "Optimization" },
    { name: "YOLOv8x", type: "Traffic Light Det. & Class.", framework: "Ultralytics", status: "Production" },
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">Models & Datasets</h1>
          <p className="text-slate-600">The neural networks and training data powering VisionPilot.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Models List */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center">
              <span className="w-1 h-8 bg-brand-accent mr-3 rounded-full"></span>
              Active Models
            </h2>
            <div className="grid gap-4">
              {models.map((model, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-5 rounded-lg flex justify-between items-center hover:border-brand-accent/50 hover:shadow-md transition-all">
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark">{model.name}</h3>
                    <p className="text-sm text-slate-500">{model.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-mono text-slate-400 mb-1">{model.framework}</span>
                    <span className={`text-xs px-2 py-1 rounded-full border ${
                        model.status === 'Production' 
                        ? 'bg-green-50 text-green-600 border-green-200' 
                        : 'bg-yellow-50 text-yellow-600 border-yellow-200'
                    }`}>
                        {model.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dataset Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm"
          >
             <h2 className="text-2xl font-bold text-brand-dark mb-6">Dataset Relative Scale</h2>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={datasetData} layout="vertical" margin={{ left: 20 }}>
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
                        itemStyle={{ color: '#0f172a' }}
                        cursor={{fill: 'rgba(0,0,0,0.05)'}}
                    />
                    <Bar dataKey="size" radius={[0, 4, 4, 0]} barSize={20}>
                      {datasetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </div>
             <p className="text-center text-xs text-slate-400 mt-4">
                *Relative representation of dataset volume used for training
             </p>
          </motion.div>
        </div>

        {/* Model Inference Table */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
        >
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                <h3 className="font-bold text-brand-dark">Model Inference Benchmarks</h3>
            </div>
            <div className="divide-y divide-slate-100">
                <div className="grid grid-cols-3 px-6 py-3 bg-slate-50/50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <div>Model Architecture</div>
                    <div>Task</div>
                    <div className="text-right">Inference Time</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
                    <div className="font-mono text-sm text-brand-blue font-semibold">YOLOv8x</div>
                    <div className="text-sm text-slate-600">Object Detection (Vehicles/Pedestrians)</div>
                    <div className="text-right font-mono text-sm text-brand-dark">12.4 ms</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
                    <div className="font-mono text-sm text-brand-blue font-semibold">SCNN (VGG16 Backbone)</div>
                    <div className="text-sm text-slate-600">Lane Detection</div>
                    <div className="text-right font-mono text-sm text-brand-dark">15.2 ms</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
                    <div className="font-mono text-sm text-brand-blue font-semibold">YOLOv8x</div>
                    <div className="text-sm text-slate-600">Traffic Sign Detection</div>
                    <div className="text-right font-mono text-sm text-brand-dark">11.8 ms</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
                    <div className="font-mono text-sm text-brand-blue font-semibold">Custom CNN</div>
                    <div className="text-sm text-slate-600">Traffic Sign Classification</div>
                    <div className="text-right font-mono text-sm text-brand-dark">2.1 ms</div>
                </div>
                <div className="grid grid-cols-3 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
                    <div className="font-mono text-sm text-brand-blue font-semibold">YOLOv8x</div>
                    <div className="text-sm text-slate-600">Traffic Light Det. & Class.</div>
                    <div className="text-right font-mono text-sm text-brand-dark">12.1 ms</div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Models;