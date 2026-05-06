import { Component, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import anime from 'animejs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  heroTitle = viewChild<ElementRef>('heroTitle');
  heroDesc = viewChild<ElementRef>('heroDesc');
  heroButtons = viewChild<ElementRef>('heroButtons');

  constructor() {
    afterNextRender(() => {
      const title = this.heroTitle()?.nativeElement;
      const desc = this.heroDesc()?.nativeElement;
      const buttons = this.heroButtons()?.nativeElement;

      if (title && desc && buttons) {
        // Timeline allows us to chain animations with specific offsets
        const tl = anime.timeline({
          easing: 'easeOutQuart',
          duration: 2000,
        });

        // Reduced delay to 2.5 seconds since the shield is gone
        tl.add({
          targets: title,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: 2500,
        })
          .add(
            {
              targets: desc,
              opacity: [0, 1],
              translateY: [20, 0],
            },
            '-=1200',
          ) // Starts 1.2s before the title animation finishes
          .add(
            {
              targets: buttons,
              opacity: [0, 1],
              translateY: [20, 0],
            },
            '-=1400',
          ); // Starts 1.4s before the description animation finishes
      }
    });
  }
}
