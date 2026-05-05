import { Component, ElementRef, viewChildren, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import anime from 'animejs';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class ClientsComponent {
  clients = ['Nike', 'Apple', 'Sony Music', 'Warner Bros', 'Netflix', 'Red Bull'];

  testimonials = [
    {
      quote:
        'The visual language established for our campaign completely shifted how audiences perceive our brand. Absolute precision.',
      author: 'Sarah Jenkins',
      role: 'Creative Director, Brand X',
    },
    {
      quote:
        'Working with this team means not having to worry about the final frame. They see the edit before the camera even rolls.',
      author: 'Marcus Chen',
      role: 'Executive Producer',
    },
  ];

  clientLogos = viewChildren<ElementRef>('clientLogo');

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateLogos();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 },
      );

      const section = document.getElementById('clients');
      if (section) observer.observe(section);
    });
  }

  private animateLogos() {
    const elements = this.clientLogos().map((logo) => logo.nativeElement);

    if (elements.length > 0) {
      anime({
        targets: elements,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo',
      });
    }
  }
}
