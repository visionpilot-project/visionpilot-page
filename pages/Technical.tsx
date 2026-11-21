import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Database, Cpu, Car, Eye, MapPin, Compass, Wifi, Radio, Terminal, Copy, Check, Download, Settings, Play, Flame, PauseCircle, Layers } from 'lucide-react';

const Technical: React.FC = () => {
  const [activeOS, setActiveOS] = useState<'unix' | 'windows'>('unix');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const steps = [
    {
      id: "simulation",
      title: "1. Soft-Body Physics Layer",
      icon: <Car className="w-6 h-6" />,
      details: ["BeamNG.tech Soft-Body Dynamics", "Suspension & Chassis Deflection", "Sensor Noise & Vibration Simulation"],
      color: "border-blue-200 text-blue-600 bg-blue-50"
    },
    {
      id: "perception",
      title: "2. Perception & Vision Pipeline",
      icon: <Eye className="w-6 h-6" />,
      details: ["UFLDv2 & Traditional CV Lane Majority Voting", "YOLO Multi-Class Object Detection", "Two-Stage Traffic Sign & Light Classifiers"],
      color: "border-purple-200 text-purple-600 bg-purple-50"
    },
    {
      id: "fusion",
      title: "3. Sensor Fusion & Tracking",
      icon: <Database className="w-6 h-6" />,
      details: ["Camera + LiDAR + Tri-Radar Alignment", "Doppler Velocity Filtering", "Extended Kalman Filtering (In Progress)"],
      color: "border-green-200 text-green-600 bg-green-50"
    },
    {
      id: "control",
      title: "4. Control & Motion Planning",
      icon: <Cpu className="w-6 h-6" />,
      details: ["PIDF Steering & Throttle Loop (60Hz)", "Model Predictive Control (MPC) (Current Focus 🔥)", "Adaptive Cruise & AEB Thresholding"],
      color: "border-amber-200 text-amber-600 bg-amber-50"
    }
  ];

  const sensors = [
    {
      name: "Front High-Res Camera",
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      specs: ["1920 × 1080 Resolution", "50 Hz Update", "70° FOV", "Depth Map Enabled"],
      desc: "Primary visual sensor for UFLD multi-lane detection, YOLO bounding boxes, and traffic sign classification.",
      image: `${import.meta.env.BASE_URL}sensors.png`
    },
    {
      name: "Roof-Mounted 80-Line LiDAR",
      icon: <Wifi className="w-6 h-6 text-red-500" />,
      specs: ["80 Vertical Lines", "360° Horizontal FOV", "120m Range", "20 Hz Scan Rate"],
      desc: "High-density 3D spatial point clouds streamed in real time to Foxglove Studio over WebSockets.",
      image: `${import.meta.env.BASE_URL}lidar.png`
    },
    {
      name: "Front Long-Range Radar",
      icon: <Radio className="w-6 h-6 text-purple-500" />,
      specs: ["200m Distance Range", "128 × 64 Angular Bins", "50 Hz Frequency", "Doppler Velocity"],
      desc: "Dedicated forward collision avoidance and Automatic Emergency Braking (AEB) trigger.",
      image: `${import.meta.env.BASE_URL}radar_front.png`
    },
    {
      name: "Dual Rear Radars (BSD)",
      icon: <Radio className="w-6 h-6 text-emerald-500" />,
      specs: ["30m Corner Range", "64 × 32 Bins", "50 Hz Frequency", "Dual Side Coverage"],
      desc: "Left and right rear corner radars for continuous Blind Spot Detection (BSD) and lane change assist.",
      image: `${import.meta.env.BASE_URL}radar_rear.png`
    }
  ];

  const configFiles = [
    { file: "beamng.yaml", purpose: "Main path to your BeamNG.tech installation (Required)" },
    { file: "config.py", purpose: "Python settings loader and dynamic configuration manager" },
    { file: "control.yaml", purpose: "Steering, throttle, and braking parameters (PID / MPC weights)" },
    { file: "perception.yaml", purpose: "Computer vision parameters, thresholds, and voting weights" },
    { file: "scenarios.yaml", purpose: "Simulation weather conditions, vehicle spawn, and routes" },
    { file: "sensors.yaml", purpose: "LiDAR vertical channels, radar resolution, and camera intrinsics" }
  ];

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            System Architecture
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From sensor acquisition and neural network inference to MPC path planning and actuation commands in BeamNG.tech.
          </p>
        </div>

        {/* Data Flow Diagram */}
        <div className="relative mb-28">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-10 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}
              >
                <div className="flex-1 w-full">
                  <div className={`bg-white p-6 rounded-2xl border ${step.color.split(' ')[0]} shadow-md hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl ${step.color.split(' ')[2]} ${step.color.split(' ')[1]}`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-slate-600 text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2.5 shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center shrink-0 shadow-sm z-10">
                  <ArrowDown className="w-5 h-5 text-slate-400" />
                </div>

                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}

            <div className="flex justify-center pt-4">
              <div className="bg-brand-dark text-white px-8 py-3 rounded-full font-mono text-xs sm:text-sm shadow-xl border border-brand-accent/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Vehicle Actuator Control Loop (60 Hz)
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Usage & Installation Guide */}
        <div className="mb-28 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
            <Terminal className="w-4 h-4" /> Quickstart Guide
          </div>
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">
            Installation & Setup
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8">
            Follow these five steps from the official README to get VisionPilot running on your machine with BeamNG.tech.
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="border-l-2 border-brand-accent pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-brand-accent"></div>
              <h3 className="text-lg font-bold text-brand-dark mb-1">1. Install BeamNG.tech</h3>
              <p className="text-sm text-slate-600 mb-2">
                Download and license BeamNG.tech from the official site. It is required to simulate soft-body dynamics and synthetic sensors.
              </p>
              <a
                href="https://www.beamng.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-accent hover:underline"
              >
                Visit BeamNG.tech →
              </a>
            </div>

            {/* Step 2 */}
            <div className="border-l-2 border-brand-accent pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-brand-accent"></div>
              <h3 className="text-lg font-bold text-brand-dark mb-1">2. Clone & Configure Paths</h3>
              <p className="text-sm text-slate-600 mb-3">
                Clone the repository and set your BeamNG.tech installation path inside <code className="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-brand-dark">config/beamng.yaml</code>.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-mono uppercase">
                    <tr>
                      <th className="p-3">File</th>
                      <th className="p-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {configFiles.map((c, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="p-3 font-mono font-bold text-brand-blue">{c.file}</td>
                        <td className="p-3">{c.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-2 border-brand-accent pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-brand-accent"></div>
              <h3 className="text-lg font-bold text-brand-dark mb-1">3. Download Pretrained Models</h3>
              <p className="text-sm text-slate-600 mb-2">
                Download <code className="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-brand-dark">visionpilot-v0.1.0-models.zip</code> from GitHub Releases and extract it into your root <code className="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-brand-dark">models/</code> directory:
              </p>
              <div className="bg-slate-900 text-slate-300 p-4 rounded-xl font-mono text-xs mb-3">
{`models/
├── object_detection/object_detection.pt
├── traffic_light/traffic_light_detection.pt
├── traffic_sign/traffic_sign_detection.pt, traffic_sign_classification.h5
└── ufld/ufld_culane_res18.pth`}
              </div>
              <a
                href="https://github.com/visionpilot-project/VisionPilot/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-accent hover:underline inline-flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" /> Download Models on GitHub Releases
              </a>
            </div>

            {/* Step 4 & 5 */}
            <div className="border-l-2 border-brand-accent pl-6 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-brand-accent"></div>
              <h3 className="text-lg font-bold text-brand-dark mb-1">4. Start the Simulation</h3>
              <p className="text-sm text-slate-600 mb-3">
                Run the launch script from the <code className="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-brand-dark">scripts/</code> directory:
              </p>

              <div className="flex gap-2 mb-3">
                <button
                  onClick={() => setActiveOS('unix')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${activeOS === 'unix' ? 'bg-brand-dark text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  Linux / macOS
                </button>
                <button
                  onClick={() => setActiveOS('windows')}
                  className={`px-3 py-1 rounded-md text-xs font-semibold ${activeOS === 'windows' ? 'bg-brand-dark text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  Windows PowerShell
                </button>
              </div>

              <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-xs relative flex items-center justify-between">
                <code>
                  {activeOS === 'unix' ? "cd scripts && ./start_simulation.sh" : "cd scripts ; .\\start_simulation.bat"}
                </code>
                <button
                  onClick={() => handleCopy(activeOS === 'unix' ? "cd scripts && ./start_simulation.sh" : "cd scripts ; .\\start_simulation.bat", "run-cmd")}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Copy command"
                >
                  {copiedCode === "run-cmd" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Sensor Hardware Suite */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Multi-Sensor Suite Specifications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              High-fidelity simulated sensor array modeled with true physical noise, latency, and optical distortion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sensors.map((sensor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-brand-accent/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Sensor Visual Image */}
                  <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden border-b border-slate-100">
                    <img
                      src={sensor.image}
                      alt={sensor.name}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur text-white text-xs font-mono px-2.5 py-1 rounded-md">
                      BeamNG.tech Simulated Sensor
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
                        {sensor.icon}
                      </div>
                      <h3 className="text-lg font-bold font-display text-brand-dark">{sensor.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4">{sensor.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {sensor.specs.map((spec, i) => (
                        <div key={i} className="bg-slate-50 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700 border border-slate-200/70">
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Performance Benchmarks */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
          <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">Real-Time Performance</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-8">
            Measured on an NVIDIA RTX 3070 GPU running concurrent UFLD, YOLO, radar filtering, and steering actuation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Pipeline Latency</div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-brand-dark">~45<span className="text-base text-slate-500 font-normal">ms</span></div>
              <p className="text-[11px] text-slate-500 mt-1">Camera to Actuation</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Control Frequency</div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-brand-accent">60<span className="text-base text-slate-500 font-normal">Hz</span></div>
              <p className="text-[11px] text-slate-500 mt-1">Actuation Update Rate</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Average GPU Load</div>
              <div className="text-3xl sm:text-4xl font-display font-bold text-brand-blue">78<span className="text-base text-slate-500 font-normal">%</span></div>
              <p className="text-[11px] text-slate-500 mt-1">Multi-Model In-Process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
