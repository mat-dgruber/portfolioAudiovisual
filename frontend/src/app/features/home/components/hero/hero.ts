import { Component, inject } from '@angular/core';
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

  title = 'Director of Photography';
  subtitle = 'Matheus Diniz';

  ngOnInit() {
    this.animateTitle();
  }

  private animateTitle() {
    this.animationService.animateStaggerIn(this.title);
    this.animationService.animateStaggerIn(this.subtitle, 0.5);
  }
}
