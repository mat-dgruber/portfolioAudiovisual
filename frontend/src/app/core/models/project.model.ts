export interface Project {
  id: string;
  title: string;
  category: 'Commercial' | 'Music Video' | 'Narrative';
  thumbnailUrl?: string;
  videoUrl: string;
  year: string;
  role: string;
  gear: string[];
}

export type Category = 'All' | 'Commercial' | 'Music Video' | 'Narrative';
