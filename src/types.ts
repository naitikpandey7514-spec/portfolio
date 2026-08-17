export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'AI / ML' | 'Full-Stack' | 'Backend' | 'Web App';
  image: string;
  tags: string[];
  featured?: boolean;
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  name: string;
  id: string;
  icon: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Intermediate' | 'Familiar';
    iconName?: string;
    description: string;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization?: string;
  description: string;
  technologies: string[];
  highlight?: string;
  iconType: 'academic' | 'code' | 'web' | 'ai' | 'hackathon';
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  date: string;
  role: string;
  project: string;
  description: string;
  badge: string;
  tags: string[];
  link?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
