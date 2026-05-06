import {
  Component,
  signal,
  computed,
  inject,
  afterNextRender,
  viewChildren,
  ElementRef,
  effect,
  untracked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { ClientsComponent } from './components/clients/clients';
import { ContactComponent } from './components/contact/contact';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal';
import { ProjectService } from '../../core/services/project';
import { Category, Project } from '../../core/models/project.model';
import { AnimationService } from '../../core/services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ClientsComponent,
    ContactComponent,
    ProjectModalComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  private projectService = inject(ProjectService);
  private animationService = inject(AnimationService);

  projects = this.projectService.getProjects();
  selectedCategory = signal<Category>('Todos');

  // Modal state
  selectedProject = signal<Project | null>(null);
  isModalVisible = signal<boolean>(false);

  categories: Category[] = ['Todos', 'Comercial', 'Videoclipe', 'Narrativa'];

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Todos') return this.projects();
    return this.projects().filter((p) => p.category === category);
  });

  projectCards = viewChildren<ElementRef>('projectCard');

  constructor() {
    afterNextRender(() => {
      this.animateGallery();
    });

    // Refined filtering logic: watch for changes in filteredProjects
    effect(() => {
      const projects = this.filteredProjects();
      untracked(() => {
        // Wait for Angular to update the DOM with the new project cards
        setTimeout(() => this.animateGallery(), 50);
      });
    });
  }

  setCategory(category: Category) {
    this.selectedCategory.set(category);
    // Animation is now handled by the effect above
  }

  openProject(project: Project) {
    this.selectedProject.set(project);
    this.isModalVisible.set(true);
  }

  private animateGallery() {
    const elements = this.projectCards().map((card) => card.nativeElement);
    if (elements.length > 0) {
      this.animationService.galleryEntrance(elements);
    }
  }
}
