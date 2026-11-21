export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapTask {
  text: string;
  status: 'completed' | 'in-progress' | 'planned' | 'on-hold';
  tag?: string;
  note?: string;
}

export interface RoadmapItem {
  category: string;
  description?: string;
  items: RoadmapTask[];
}

export interface DatasetData {
  name: string;
  size: number;
  color?: string;
}

export interface ModelInfo {
  name: string;
  type: string;
  framework: string;
  status: string;
  weightsFile?: string;
  accuracy?: string;
}
