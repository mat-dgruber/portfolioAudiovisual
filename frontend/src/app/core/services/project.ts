import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects = signal<Project[]>([
    {
      id: '1',
      title: 'Echoes of Silence',
      category: 'Narrative',
      year: '2025',
      role: 'Director of Photography',
      gear: ['ARRI Alexa Mini', 'Cooke Anamorphic'],
      videoUrl: 'https://vimeo.com/placeholder1',
    },
    {
      id: '2',
      title: 'Midnight Drive',
      category: 'Commercial',
      year: '2024',
      role: 'Editor',
      gear: ['Adobe Premiere', 'DaVinci Resolve'],
      videoUrl: 'https://vimeo.com/placeholder2',
    },
    {
      id: '3',
      title: 'Neon Rhythms',
      category: 'Music Video',
      year: '2024',
      role: 'DP & Editor',
      gear: ['RED Komodo', 'Zeiss Supreme Primes'],
      videoUrl: 'https://vimeo.com/placeholder3',
    },
    {
      id: '4',
      title: 'The Great Beyond',
      category: 'Narrative',
      year: '2023',
      role: 'Director of Photography',
      gear: ['Sony Venice 2'],
      videoUrl: 'https://vimeo.com/placeholder4',
    },
    {
      id: '5',
      title: 'Urban Pulse',
      category: 'Commercial',
      year: '2025',
      role: 'Lead Editor',
      gear: ['DaVinci Resolve'],
      videoUrl: 'https://vimeo.com/placeholder5',
    },
    {
      id: '6',
      title: 'Sonic Waves',
      category: 'Music Video',
      year: '2023',
      role: 'DP',
      gear: ['ARRI Amira'],
      videoUrl: 'https://vimeo.com/placeholder6',
    },
  ]);

  getProjects() {
    return this.projects.asReadonly();
  }
}
