import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { Project } from '../../../core/models/project.model';
import anime from 'animejs';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.css',
})
export class ProjectModalComponent {
  @Input() set project(value: Project | null) {
    this._project.set(value);
    if (value && value.videoUrl) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.getEmbedUrl(value.videoUrl),
      );
    } else {
      this.safeVideoUrl = null;
    }
  }

  get project(): Project | null {
    return this._project();
  }

  @Input() set visible(val: boolean) {
    this._visible.set(val);
    if (val) {
      setTimeout(() => this.animateEntrance(), 50);
    }
  }

  get visible(): boolean {
    return this._visible();
  }

  @Output() visibleChange = new EventEmitter<boolean>();

  private _project = signal<Project | null>(null);
  private _visible = signal<boolean>(false);

  safeVideoUrl: SafeResourceUrl | null = null;

  @ViewChild('modalContent') modalContent!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  hide() {
    this.visibleChange.emit(false);
  }

  private animateEntrance() {
    if (!this.modalContent) return;

    anime({
      targets: this.modalContent.nativeElement,
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutQuart',
    });

    const specs = this.modalContent.nativeElement.querySelectorAll('.spec-item');
    if (specs.length > 0) {
      anime({
        targets: specs,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 300 }),
        duration: 800,
        easing: 'easeOutQuart',
      });
    }
  }

  private getEmbedUrl(url: string): string {
    if (url.includes('vimeo.com')) {
      const id = url.split('/').pop();
      return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const id = url.includes('youtu.be')
        ? url.split('/').pop()
        : new URL(url).searchParams.get('v');
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    return url;
  }
}
