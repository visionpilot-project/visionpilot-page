export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapItem {
  category: string;
  items: {
    text: string;
    status: 'completed' | 'in-progress' | 'planned' | 'low-priority';
  }[];
}

export interface DatasetData {
  name: string;
  size: number;
  type: string;
}

export interface ModelInfo {
  name: string;
  type: string;
  useCase: string;
  framework: string;
}