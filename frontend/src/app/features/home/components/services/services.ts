import { Component, ElementRef, viewChildren, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import anime from 'animejs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  services = [
    {
      id: '01',
      title: 'Commercial Production',
      description:
        "High-end visual storytelling designed to elevate brand perception and drive engagement. From concept to final delivery, ensuring every frame aligns with the brand's strategic goals.",
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    },
    {
      id: '02',
      title: 'Music Videos',
      description:
        'Translating sonic landscapes into striking visual aesthetics. Focusing on rhythm, color theory, and dynamic lighting to create memorable, repeatable viewing experiences.',
      icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    },
    {
      id: '03',
      title: 'Cinematography',
      description:
        'Director of Photography services for narrative films and documentaries. Crafting the visual language through careful selection of camera format, lenses, and lighting design.',
      icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
    },
  ];

  serviceCards = viewChildren<ElementRef>('serviceCard');

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateServices();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 },
      );

      const section = document.getElementById('services');
      if (section) observer.observe(section);
    });
  }

  private animateServices() {
    const elements = this.serviceCards().map((card) => card.nativeElement);

    if (elements.length > 0) {
      anime({
        targets: elements,
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 1000,
        easing: 'easeOutQuart',
      });
    }
  }
}
