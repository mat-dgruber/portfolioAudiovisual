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
      title: 'Produção de Comerciais',
      description:
        'Narrativa visual de alto padrão desenvolvida para elevar a percepção da marca e gerar engajamento. Do conceito à entrega final, garantindo que cada quadro esteja alinhado com os objetivos estratégicos da marca.',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    },
    {
      id: '02',
      title: 'Videoclipes',
      description:
        'Traduzindo paisagens sonoras em estética visual marcante. Foco no ritmo, teoria das cores e design dinâmico de luzes para criar experiências memoráveis que exigem o "replay".',
      icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
    },
    {
      id: '03',
      title: 'Direção de Fotografia',
      description:
        'Serviços de DP (Director of Photography) para filmes narrativos e documentários. Criação da linguagem visual através de uma seleção minuciosa de formato de câmera, lentes e luz.',
      icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z',
    },
  ];

  serviceCards = viewChildren<ElementRef>('serviceCard');
  sectionTitle = viewChildren<ElementRef>('sectionTitle');

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
    const titleElements = this.sectionTitle().map((title) => title.nativeElement);

    if (titleElements.length > 0) {
      anime({
        targets: titleElements,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart',
      });
    }

    if (elements.length > 0) {
      anime({
        targets: elements,
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 200 }),
        duration: 1000,
        easing: 'easeOutQuart',
      });
    }
  }
}
