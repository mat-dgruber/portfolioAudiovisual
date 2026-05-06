import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects = signal<Project[]>([
    {
      id: '1',
      title: 'Ecos do Silêncio',
      category: 'Narrativa',
      year: '2025',
      role: 'Diretor de Fotografia',
      gear: ['ARRI Alexa Mini LF', 'Cooke Anamorphic /i'],
      videoUrl: 'https://vimeo.com/225408543',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
      credits: [
        { role: 'Direção', name: 'Sofia Alvarez' },
        { role: 'Produção Executiva', name: 'Estúdio Kinos' },
        { role: '1º Assistente de Câmera', name: 'Pedro Marques' },
        { role: 'Gaffer', name: 'Lívia Mendes' },
        { role: 'Direção de Arte', name: 'Camila Rossi' }
      ]
    },
    {
      id: '2',
      title: 'Midnight Drive',
      category: 'Comercial',
      year: '2024',
      role: 'Editor',
      gear: ['Adobe Premiere', 'DaVinci Resolve', 'FilmConvert'],
      videoUrl: 'https://vimeo.com/152646672',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop',
      credits: [
        { role: 'Cliente', name: 'MotorCorp' },
        { role: 'Agência', name: 'W+K' },
        { role: 'Direção', name: 'Tiago Leão' },
        { role: 'Diretor de Fotografia', name: 'Ricardo Silva, ABC' },
        { role: 'Color Grading', name: 'ColorHouse BR' }
      ]
    },
    {
      id: '3',
      title: 'Ritmos Neon',
      category: 'Videoclipe',
      year: '2024',
      role: 'Diretor de Fotografia & Editor',
      gear: ['RED Komodo 6K', 'Zeiss Supreme Primes', 'Astera Titan'],
      videoUrl: 'https://vimeo.com/134444583',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop',
      credits: [
        { role: 'Artista', name: 'Sintonia' },
        { role: 'Gravadora', name: 'Sony Music' },
        { role: 'Direção', name: 'Julia Castro' },
        { role: 'Gaffer', name: 'João "Luz" Paulo' },
        { role: 'Coreografia', name: 'Ana Beatriz' }
      ]
    },
    {
      id: '4',
      title: 'O Grande Além',
      category: 'Narrativa',
      year: '2023',
      role: 'Diretor de Fotografia',
      gear: ['Sony Venice 2', 'Angenieux Optimo'],
      videoUrl: 'https://www.youtube.com/watch?v=Sgxbx65IDeM',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
      credits: [
        { role: 'Direção', name: 'Marcos Vianna' },
        { role: 'Produtora', name: 'Cinemática Filmes' },
        { role: 'Steadicam Operator', name: 'Carlos "Smooth" Silva' },
        { role: '1º Assistente de Câmera', name: 'Mariana Luz' },
        { role: 'Colorista', name: 'Felipe Dias' }
      ]
    },
    {
      id: '5',
      title: 'Pulso Urbano',
      category: 'Comercial',
      year: '2025',
      role: 'Editor Chefe',
      gear: ['DaVinci Resolve Studio', 'Avid Pro Tools'],
      videoUrl: 'https://vimeo.com/668352601',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop',
      credits: [
        { role: 'Cliente', name: 'StreetWear Co.' },
        { role: 'Direção', name: 'André Farias' },
        { role: 'Diretor de Fotografia', name: 'Luiza Moraes' },
        { role: 'Trilha Original', name: 'Estúdio Beat' },
        { role: 'Sound Design', name: 'AudioWorks' }
      ]
    },
    {
      id: '6',
      title: 'Ondas Sonoras',
      category: 'Videoclipe',
      year: '2023',
      role: 'Diretor de Fotografia',
      gear: ['ARRI Amira', 'Lentes Vintage K35', 'Easyrig'],
      videoUrl: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      credits: [
        { role: 'Artista', name: 'Banda Mar Aberto' },
        { role: 'Direção', name: 'Bruno Gomes' },
        { role: 'Gaffer', name: 'Thiago "Led" Moura' },
        { role: 'Produtor de Locação', name: 'Fernanda Lima' },
        { role: 'Colorista', name: 'Vitor Correia' }
      ]
    },
  ]);

  getProjects() {
    return this.projects.asReadonly();
  }
}
