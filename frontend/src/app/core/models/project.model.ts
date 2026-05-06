export type Category = 'Todos' | 'Comercial' | 'Videoclipe' | 'Narrativa' | 'All' | 'Commercial' | 'Music Video' | 'Narrative';

export interface Credit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  year: string;
  thumbnailUrl?: string; // Optional cover image URL
  videoUrl?: string;     // Vimeo or Youtube URL
  role: string;          // Your role: E.g., 'Director of Photography', 'Editor'
  gear: string[];        // E.g., ['ARRI Alexa', 'Cooke Anamorphic']
  description?: string;
  credits?: Credit[];    // Expanded credits for the project (Director, Gaffer, Art Director, etc)
}
