export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  targetAudience: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'guide' | 'worksheet';
  url: string;
  description: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  message: string;
}