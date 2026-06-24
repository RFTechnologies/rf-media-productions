export interface Service {
  id: string;
  title: string;
  description: string;
  accentTitle?: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface Project {
  id: string;
  name: string;
  category: string;
  client: string;
  location: string;
  year: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  challenge?: string;
  solution?: string;
  scope?: string[];
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

export interface ChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ChannelPost {
  id: string;
  title: string;
  category: string;
  image: string;
  duration?: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  review: string;
  rating: number;
  image: string;
  videoThumbnail?: string;
}
