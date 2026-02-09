<p align="center">
  <img src="media/bannernobg.png" alt="VisionPilot Banner" height="200" />
</p>

# VisionPilot: Autonomous Driving Simulation, Computer Vision & Real-Time Perception (BeamNG.tech)

<p align="center" style="margin-bottom:0;">
  <a href="https://star-history.com/#visionpilot-project/VisionPilot&Date">
    <img src="https://api.star-history.com/svg?repos=visionpilot-project/VisionPilot&type=Date" alt="Star History Chart" height="300" />
  </a>
</p>

## Table of Contents

- [VisionPilot: Autonomous Driving Simulation, Computer Vision \& Real-Time Perception (BeamNG.tech)](#visionpilot-autonomous-driving-simulation-computer-vision--real-time-perception-beamngtech)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Demos](#demos)
    - [Emergency Braking (AEB) Demo](#emergency-braking-aeb-demo)
    - [Sign Detection \& Detection and classification](#sign-detection--detection-and-classification)
    - [Traffic Light Detection \& Classification Demo](#traffic-light-detection--classification-demo)
    - [Latest Lane Detection Demo (v2)](#latest-lane-detection-demo-v2)
      - [Previous Lane Detection Demo (v1)](#previous-lane-detection-demo-v1)
    - [Foxglove Visualization Demo](#foxglove-visualization-demo)
    - [Segmentation Demo](#segmentation-demo)
  - [Sensor Suite](#sensor-suite)
  - [Roadmap](#roadmap)
    - [Perception](#perception)
    - [Sensor Fusion \& Calibration](#sensor-fusion--calibration)
    - [Control \& Planning](#control--planning)
    - [Simulation \& Scenarios](#simulation--scenarios)
    - [Visualization \& Logging](#visualization--logging)
    - [Deployment \& Infrastructure](#deployment--infrastructure)
    - [README To-Dos](#readme-to-dos)
    - [Other](#other)
  - [Note on Installation](#note-on-installation)
  - [Known Limitations](#known-limitations)
    - [Simulator-Specific Limitations](#simulator-specific-limitations)
  - [Credits](#credits)
  - [Citation](#citation)
    - [BeamNG.tech Citation](#beamngtech-citation)
  - [License](#license)

## Overview

A modular Python project for autonomous driving research and prototyping, fully integrated with the BeamNG.tech simulator and Foxglove visualization. This system combines traditional computer vision and state-of-the-art deep learning (CNN, U-Net, YOLO, SCNN) with real-time sensor fusion and autonomous vehicle control to tackle:

- Lane detection (Traditional CV & SCNN)
- Traffic sign classification & detection (CNN, YOLO)
- Traffic light detection & classification (YOLO)
- Vehicle & pedestrian detection and recognition (YOLO)
- Multi-sensor fusion (Camera, LiDAR, Radar, GPS, IMU)
- Multi-model inference, real-time simulation, autonomous driving with PID control (BeamNG.tech)
- Containerized multi-model architecture (Docker-based), orchestrated via a central inference aggregator service
- Cruise control
- Automatic Emergency Breaking AEB
- Real-time visualization and monitoring (Foxglove WebSocket)
- Modular configuration system (YAML-based)
- Drive logging and telemetry

## Demos

### Emergency Braking (AEB) Demo

Watch the Emergency Braking System (AEB) in action with real-time radar filtering and collision avoidance:

<img src="media/demo_gifs/aeb_gif.gif" alt="AEB Demo" width="600" height="337" />

**Extended Demo:** [Watch the full video here](https://www.youtube.com/watch?v=Z8Y2-MpmrRg)

---

### Sign Detection & Detection and classification

This demo shows real-time traffic sign detection and classification:

<img src="media/demo_gifs/sign_demo.gif" alt="Sign Detection Demo & Vehicle Pedestrian" width="600" height="337" />

**Extended Demo:** [Watch the full video here](https://youtu.be/ujGkQJ2BqV0)

> VisionPilot does not yet support multi-camera. This is for demonstration purposes only.

---

### Traffic Light Detection & Classification Demo

This demo shows real-time traffic light detection and classification:

<img src="media/demo_gifs/traffic_light_demo.gif" alt="Traffic Light Detection & Classification Demo" width="600" height="337" />

> No extended Demo avaliable yet.

---

### Latest Lane Detection Demo (v2)

Watch the improved autonomous lane keeping demo (v2) in BeamNG.tech, featuring smoother fused CV+SCNN lane detection, stable PID steering, and robust cruise control:

<img src="media/demo_gifs/lane.gif" alt="Lane Detection Demo" width="600" height="337" />

**Extended Demo:** [Watch the full video here](https://www.youtube.com/watch?v=7eA_XfIkLWQ)

> Note: Very low-light (tunnel) scenarios are not yet supported.

### Previous Lane Detection Demo (v1)

The original demo is still available for reference:

[Lane Keeping & Multi-Model Detection Demo (v1)](https://youtu.be/f9mHigMKME8)

---

### Foxglove Visualization Demo

See real-time LiDAR point cloud streaming and autonomous vehicle telemetry in Foxglove Studio:

<img src="media/demo_gifs/foxglove.gif" alt="Foxglove Visualization Demo" width="600" height="337" />

**Extended Demo:** [Watch the full video here](https://www.youtube.com/watch?v=4HJDvL2Q6AY)

---

### Segmentation Demo

See real-time image segmentation using front and rear cameras:

<img src="media/demo_gifs/segmentation.gif" alt="Segmentation Demo" width="600" height="337" />

**Extended Demo:** [Watch the full video here](https://youtu.be/4PAqcUKqn6c?si=UHw-mw7iLZKGXvav)

> More demo videos and visualizations will be added as features are completed.

## Sensor Suite

The vehicle is equipped with a comprehensive multi-sensor suite for autonomous perception and control:

| Sensor                      | Specification                                        | Purpose                                                         |
| --------------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| **Front Camera**            | 1920x1080 @ 50Hz, 70° FOV, Depth enabled             | Lane detection, traffic signs, traffic lights, object detection |
| **LiDAR (Top)**             | 80 vertical lines, 360° horizontal, 120m range, 20Hz | Obstacle detection, 3D scene understanding                      |
| **Front Radar**             | 200m range, 128×64 bins, 50Hz                        | Collision avoidance, adaptive cruise control                    |
| **Rear Left & Right Radar** | 30m range, 64×32 bins, 50Hz                          | Blindspot monitoring, rear object detection                     |
| **Dual GPS**                | Front & rear positioning @ 50Hz                      | Localization                                                    |
| **IMU**                     | 100Hz update rate                                    | Vehicle dynamics, pose estimation                               |

<table>
  <tr>
    <td align="center"><img src="media/beamng_images/sensors.png" alt="Sensor Array 1" width="280"/></td>
    <td align="center"><img src="media/beamng_images/radar_front.png" alt="Sensor Array 2" width="280"/></td>
    <td align="center"><img src="media/beamng_images/lidar.png" alt="Sensor Array 3" width="280"/></td>
  </tr>
  <tr>
    <td align="center"><em>Sensor Array</em></td>
    <td align="center"><em>Front Radar</em></td>
    <td align="center"><em>Lidar Visualization</em></td>
  </tr>
</table>

> Configuration files are located in the `/config` directory:

## Roadmap

### Perception

- [x] Sign classification & Detection (CNN / YOLOv11m)
- [x] Traffic light classification & Detection (CNN / YOLOv11m)
- [x] Lane detection Fusion (SCNN / CV)
- [x] Advanced lane detection using OpenCV (robust highway, lighting, outlier handling)
- [x] Integrate Majority Voting system for CV
- [x] ⭐ Semantic Segmentatation (Already built not implemented here yet)
- [x] ⭐ Real-Time Object Detection (Cars, Trucks, Buses, Pedestrians, Cyclists) (Trained)
- [ ] 🔥 Speed Estimation using detection from camera and lidar
  - [ ] Potentially use Multiple Object Tracking (MOT) for better speed estimation
- [ ] Pedestrian intent prediction (crossing, standing, walking along road)
- **Note:** Would Have to be tested in Carla as BeamNG.tech does not have pedestrians implemented
- [ ] Vehicle State Classification (Break Lights, Turn Signals, Reverse Lights)
- [ ] 🔥 Handle dashed lines better in lane detection
- [ ] 🔥 Lidar Object Detection 3D
- [ ] Detect multiple lanes
- [ ] 💤 Multi Camera Setup (Will implement after all other camera-based features are finished)
- [ ] 💤 Overtaking, Merging (Will be part of Path Planning)

### Sensor Fusion & Calibration

- [ ] 🔥 Kalman Filtering
- [x] Integrate Radar
- [x] Integrate Lidar
- [ ] Integrate GPS
- [ ] Integrate IMU
- [ ] Ultrasonic Sensor Integration
- **Note:** Can easily be implemented with prebuilt Beamng ADAS module
- [ ] Map Matching algorithm
- [ ] 💤 SLAM (simultaneous localization and mapping)
  - [ ] Build HD Map from Scratch
  - [ ] Localize Vehicle on HD Map
- [ ] Sensor Health Monitoring & Redundancy
  - [ ] Redundant Front Radar for AEB
  - [ ] Sensor status diagnostics and failover

### Control & Planning

- [x] Integrate vehicle control (Throttle, Steering, Braking Implemented) (PID needs further tuning)
- [x] Integrate PIDF controller
- [x] ⭐ Adaptive Cruise Control (Currently only basic Cruise Control implemented)
- [x] ⭐ Automatic Emergency Braking AEB
  - [ ] Support using Camera and Lidar detections
- [ ] Trajectory Predcition for surrounding vehicles
- [ ] Blindspot Monitoring (Using left/right rear short range radars)
- [ ] Traffic Rule Enforcement (Stop at red lights, stop signs, yield signs)
- [ ] Dynamic Target Speed based on Speed Limit Signs
- [ ] Global Path planning
- [ ] Local Path planning
- [ ] Lane Change Logic
- [ ] Parking Logic (Path finding / Parallel or Perpendicular)
- [ ] 💤 End-to-end driving policy learning (RL, imitation learning)
- [ ] 💤💤 Advanced traffic participant prediction (trajectory, intent)

### Simulation & Scenarios

- [x] Integrate and test in BeamNG.tech simulation (replacing CARLA)
- [x] Modularize and clean up BeamNG.tech pipeline
- [x] Tweak lane detection parameters and thresholds
- [ ] Fog Weather conditions (Rain or snow not supported in BeamNG.tech)
- [ ] Traffic scenarios: driving in heavy, moderate, and light traffic
- [ ] Test all Systems in different lighting conditions (Day, Night, Dawn/Dusk, Tunnel)
- [ ] 💤💤 Test using actual RC car

### Visualization & Logging

- [x] ⭐ Full Foxglove visualization integration (Overhaul needed)
- [x] Modular YAML configuration system
- [x] Real-time drive logging and telemetry
- [ ] Real time Annotations Overlay in Foxglove
- [ ] Show predicted trajectories in Foxglove
- [ ] Show Global and local path plans in Foxglove
- [ ] Live Map Visualization

### Deployment & Infrastructure

- [ ] Containerize Models for easy deployment and scalability (Also eliminates dependency issues)
  - [ ] Message Broker (redis/rabbitmq)
  - [ ] Create docker compose
  - [ ] Aggregator service
  - [ ] Refactor beamng.py

### README To-Dos

- [x] Add demo images and videos to README
- [ ] Add performance benchmarks section
- [x] Add Table of Contents for easier navigation

### Other

- [x] Vibe-Code a website for the project
- [x] Redo project structure for better modularity

> Driver Monitoring System would've been pretty cool but human drivers are not implemented in BeamNG.tech

## Legend

> 🔥 = High Priority

> ⭐ = Complete but still being improved/tuned/changed (not final version)

> 💤 = Minimal Priority, can be addressed later

> 💤💤 = Very Low Priority, may not be implement

## Note on Installation

> **Status:** This project is currently in **active development**. A stable, production-ready release with pre-trained models and complete documentation will be available eventually.

## Known Limitations

- **Tunnel/Low-Light Scenarios:** Camera depth perception fails below certain lighting thresholds
- **Multi-Camera Support:** Single front-facing camera only (future roadmap)
- **Dashed Lane Detection:** Requires improvement for better accuracy
- **PID Controller Tuning:** May oscillate on aggressive maneuvers
- **Real-World Testing:** Only validated in simulation (BeamNG.tech), for now...

### Simulator-Specific Limitations

- Rain/snow physics not supported in BeamNG.tech
- No native ROS2 support (custom bridge required)
- Pedestrians
- Human Drivers

## Credits

**Datasets:**

- CU Lane, LISA, GTSRB, Mapillary, BDD100K

**Simulation & Tools:**

- BeamNG.tech by [BeamNG GmbH](https://www.beamng.tech/)
- Foxglove Studio for visualization

**Special Thanks:**

- Kaggle for free GPU resources (model training)
- Mr. Pratt (teacher/supervisor) for guidance

## Citation

If you use VisionPilot in your research, please cite:

```bibtex
@software{visionpilot2025,
  title={VisionPilot: Autonomous Driving Simulation, Computer Vision & Real-Time Perception},
  author={Julian Stamm},
  year={2025},
  url={https://github.com/visionpilot-project/VisionPilot}
}
```

### BeamNG.tech Citation

> **Title:** BeamNG.tech  
> **Author:** BeamNG GmbH  
> **Address:** Bremen, Germany  
> **Year:** 2025  
> **Version:** 0.35.0.0  
> **URL:** https://www.beamng.tech/

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.
