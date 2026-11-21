import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock, Flame, PauseCircle, Zap, Cpu, HelpCircle, GitPullRequest } from 'lucide-react';
import { RoadmapItem } from '../types';

const Roadmap: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'focus' | 'completed' | 'in-progress' | 'planned'>('all');

  const roadmapData: RoadmapItem[] = [
    {
      category: "Control & Motion Planning",
      description: "From low-level actuator signals to high-level behavioral arbitration.",
      items: [
        {
          text: "Model Predictive Control (MPC) for Advanced Vehicle Dynamics",
          status: "in-progress",
          tag: "CURRENT PRIMARY FOCUS 🔥",
          note: "Formulating optimal steering & throttle trajectory tracking under non-linear tire friction and vehicle inertia constraints in BeamNG.tech."
        },
        { text: "PIDF Controller Integration for Steering and Speed Control", status: "completed" },
        { text: "Vehicle Actuation Core (Throttle, Steering, Braking)", status: "completed" },
        { text: "Automatic Emergency Braking (AEB) with Radar Thresholding", status: "completed" },
        { text: "Blind Spot Monitoring (BSD) with Rear Radar Sensors", status: "completed", tag: "HIGH PRIORITY 🔥" },
        { text: "Dynamic Target Speed based on Recognized Road Signs", status: "completed" },
        { text: "Curve Speed Optimization based on Road Curvature", status: "completed" },
        { text: "Cruise Control (CC)", status: "completed" },
        { text: "Adaptive Cruise Control (ACC) with Follow-Distance Regulation", status: "in-progress" },
        { text: "Lane Change Logic (Check Blind Spot, Signal, Execute)", status: "in-progress", tag: "HIGH PRIORITY 🔥" },
        { text: "Behavior Tree Architecture (Stop, Yield, Merge, Overtake)", status: "planned" },
        { text: "Traffic Rule Enforcement (Stop Lines, Signals)", status: "planned" },
        { text: "Global & Local Path Planning (Frenet Frame Transformation)", status: "planned" },
        { text: "Parking Logic (Parallel & Perpendicular Pathfinding)", status: "planned" }
      ]
    },
    {
      category: "Perception & Scene Understanding",
      description: "Deep learning models and computer vision filters for environment extraction.",
      items: [
        { text: "Ultra-Fast Deep Lane Detection (UFLDv2) Integration", status: "completed" },
        { text: "Multi-Lane Detection with Temporal Spline Smoothing", status: "completed" },
        { text: "CV Lane Detection with Majority Voting & Lighting Detection", status: "completed" },
        { text: "Dashed Line Handling & Curvature Estimation", status: "completed" },
        { text: "Sign Detection & Classification (YOLO + Custom CNN)", status: "completed" },
        { text: "Traffic Light Detection & State Classification (YOLO)", status: "completed" },
        { text: "Multi-Class Object Detection (Vehicles, Pedestrians, Cyclists)", status: "completed" },
        { text: "3D LiDAR Point Cloud Object Detection", status: "in-progress", tag: "HIGH PRIORITY 🔥" },
        { text: "Vehicle Speed Estimation using Fused Camera + LiDAR", status: "in-progress" },
        { text: "Multi-Object Tracking (MOT)", status: "planned" },
        { text: "Road Marking Detection (Arrows, Crosswalks, Stop Lines)", status: "planned" },
        { text: "Multi-Camera 360° Surround Setup", status: "planned" }
      ]
    },
    {
      category: "Sensor Fusion & State Estimation",
      description: "Redundant, multi-modal sensor fusion across radar, LiDAR, and vision.",
      items: [
        { text: "Front Long-Range Radar Integration (200m range)", status: "completed" },
        { text: "Top-Mounted 80-Channel LiDAR Integration (120m range)", status: "completed" },
        { text: "Rear Left & Right Corner Radars (BSD)", status: "completed" },
        { text: "Kalman Filtering (Standard & Extended for Odometry)", status: "in-progress" },
        { text: "Dual GPS Positioning Integration (Front & Rear)", status: "planned" },
        { text: "9-Axis IMU Dynamics Integration (100Hz)", status: "planned" },
        { text: "SLAM & HD Map Generation for BeamNG Maps", status: "planned" }
      ]
    },
    {
      category: "Simulation & Cross-Platform Testing",
      description: "Validation in high-fidelity simulators before physical transfer.",
      items: [
        { text: "BeamNG.tech Soft-Body Physics Pipeline & Modular Bridge", status: "completed" },
        {
          text: "CARLA Simulator Integration Bridge",
          status: "planned",
          tag: "COMMUNITY HELP WANTED",
          note: "Planned for cross-simulator benchmark validation. If you want to help write the CARLA client bridge, pull requests are warmly welcomed!"
        },
        { text: "Environmental Edge-Case Testing (Dense Fog, Glare, Night, Tunnels)", status: "planned" },
        { text: "Complex Dynamic Traffic Scenarios (Light, Moderate, Rush Hour)", status: "planned" },
        { text: "Physical 1/10th Scale RC Car Platform Sim-to-Real Transfer", status: "planned" }
      ]
    },
    {
      category: "Visualization & Telemetry",
      description: "Real-time inspection dashboards and sensor overlays.",
      items: [
        { text: "Foxglove Studio WebSocket Point Cloud Streaming", status: "completed" },
        { text: "Modular YAML Configuration System", status: "completed" },
        { text: "Real-Time Telemetry & Drive Logging", status: "completed" },
        { text: "Birds-Eye View (BEV) and Inverse Perspective Mapping (IPM)", status: "planned" },
        { text: "Real-Time Perception & Trajectory Overlays", status: "planned" }
      ]
    },
    {
      category: "Infrastructure & Architecture",
      description: "Execution environment and pipeline orchestration.",
      items: [
        {
          text: "Containerized Microservices Architecture (Docker, Redis, Aggregator)",
          status: "on-hold",
          tag: "ON HOLD 💤",
          note: "Currently postponed: all models run in-process for faster development iteration and lower IPC latency while finishing MPC and perception pipelines."
        }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />;
      case 'in-progress':
        return <Flame className="w-5 h-5 text-amber-500 shrink-0 animate-pulse" />;
      case 'on-hold':
        return <PauseCircle className="w-5 h-5 text-slate-400 shrink-0" />;
      default:
        return <Clock className="w-5 h-5 text-slate-300 shrink-0" />;
    }
  };

  const getStatusBadge = (status: string, tag?: string) => {
    if (tag && tag.includes('PRIMARY FOCUS')) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-white shadow-sm inline-flex items-center gap-1">
          <Zap className="w-3 h-3 fill-white" />
          {tag}
        </span>
      );
    }
    if (tag && tag.includes('HELP WANTED')) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-700 border border-purple-200 inline-flex items-center gap-1">
          <GitPullRequest className="w-3 h-3" />
          {tag}
        </span>
      );
    }
    if (tag && tag.includes('ON HOLD')) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200">
          {tag}
        </span>
      );
    }
    if (tag && tag.includes('HIGH PRIORITY')) {
      return (
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 border border-orange-200">
          {tag}
        </span>
      );
    }

    switch (status) {
      case 'completed':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Completed</span>;
      case 'in-progress':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">In Progress</span>;
      case 'on-hold':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">On Hold</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-50 text-slate-500 border border-slate-200">Planned</span>;
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            Development Milestones
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Transparent progress tracking across perception, state estimation, simulation, and our current core initiative: <strong>Model Predictive Control (MPC)</strong>.
          </p>
        </div>

        {/* Notice on Microservices / Architecture on Hold */}
        <div className="mb-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <PauseCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800">Architecture Update: </span>
            The containerized microservices stack (Docker & Redis aggregator) is currently <strong>on hold</strong>. To accelerate validation and reduce IPC communication latency, all models now execute in-process directly within the Python loop until MPC and perception modules reach full maturity.
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Tasks' },
            { id: 'focus', label: 'Primary Focus & In Progress' },
            { id: 'completed', label: 'Completed' },
            { id: 'planned', label: 'Planned' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                filter === f.id
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Roadmap Categories */}
        <div className="space-y-8">
          {roadmapData.map((category, catIdx) => {
            const filteredItems = category.items.filter((item) => {
              if (filter === 'all') return true;
              if (filter === 'focus') return item.status === 'in-progress' || item.tag?.includes('FOCUS');
              if (filter === 'completed') return item.status === 'completed';
              if (filter === 'planned') return item.status === 'planned';
              return true;
            });

            if (filteredItems.length === 0) return null;

            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
              >
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-dark">
                    {category.category}
                  </h3>
                  {category.description && (
                    <p className="text-slate-500 text-xs sm:text-sm mt-1">{category.description}</p>
                  )}
                </div>

                <div className="divide-y divide-slate-100">
                  {filteredItems.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 rounded-lg px-2 -mx-2 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">{getStatusIcon(item.status)}</div>
                        <div>
                          <span className={`text-sm sm:text-base font-medium ${item.status === 'completed' ? 'text-slate-700' : 'text-brand-dark font-semibold'}`}>
                            {item.text}
                          </span>
                          {item.note && (
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-2xl">
                              {item.note}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="sm:shrink-0 pl-8 sm:pl-0">
                        {getStatusBadge(item.status, item.tag)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
