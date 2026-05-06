import {
  Component,
  ElementRef,
  viewChild,
  afterNextRender,
  inject,
  signal,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../../core/services/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  private animationService = inject(AnimationService);

  heroTitle = viewChild<ElementRef>('heroTitle');
  heroDesc = viewChild<ElementRef>('heroDesc');
  heroButtons = viewChild<ElementRef>('heroButtons');

  isMobile = signal<boolean>(false);

  constructor() {
    afterNextRender(() => {
      this.checkMobile();

      const title = this.heroTitle()?.nativeElement;
      const desc = this.heroDesc()?.nativeElement;
      const buttons = this.heroButtons()?.nativeElement;

      if (title && desc && buttons) {
        this.animationService.heroCinematicEntrance(title, desc, buttons);
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  private checkMobile() {
    this.isMobile.set(window.innerWidth < 768);
  }
}
