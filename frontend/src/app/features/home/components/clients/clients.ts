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
  clients = ['Nike', 'Apple', 'Sony Music', 'Warner Bros', 'Netflix', 'Red Bull', 'Vogue', 'BMW'];

  testimonials = [
    {
      quote:
        'A linguagem visual que estabelecemos para a nossa campanha mudou completamente como o público percebe nossa marca. Precisão absoluta.',
      author: 'Sarah Jenkins',
      role: 'Creative Director, Agência X',
    },
    {
      quote:
        'Trabalhar com essa equipe significa não ter que se preocupar com o frame final. Eles enxergam a edição antes mesmo de a câmera gravar.',
      author: 'Marcus Chen',
      role: 'Produtor Executivo',
    },
    {
      quote:
        'A entrega superou todas as expectativas. O cuidado com as luzes e as cores elevou o documentário a um nível premium.',
      author: 'Livia Costa',
      role: 'Diretora de Marketing',
    },
    {
      quote:
        'Dinâmico, ágil e focado no resultado. O Matheus entende o ritmo da música e como traduzir isso em um movimento de câmera visceral.',
      author: 'Pedro Álvares',
      role: 'A&R, Sony Music',
    },
  ];

  clientLogos = viewChildren<ElementRef>('clientLogo');
  testimonialCards = viewChildren<ElementRef>('testimonialCard');
  trustedTitle = viewChildren<ElementRef>('trustedTitle');

  constructor() {
    afterNextRender(() => {
      // Observer for Logos
      const logosObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateLogos();
              logosObserver.disconnect();
            }
          });
        },
        { threshold: 0.2 },
      );

      const logosSection = document.getElementById('trusted-logos');
      if (logosSection) logosObserver.observe(logosSection);

      // Observer for Testimonials
      const testimonialsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateTestimonials();
              testimonialsObserver.disconnect();
            }
          });
        },
        { threshold: 0.1 },
      );

      const testimonialsSection = document.getElementById('testimonials-grid');
      if (testimonialsSection) testimonialsObserver.observe(testimonialsSection);
    });
  }

  private animateLogos() {
    const elements = this.clientLogos().map((logo) => logo.nativeElement);
    const titleElement = this.trustedTitle().map((title) => title.nativeElement);

    if (titleElement.length > 0) {
      anime({
        targets: titleElement,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuart',
      });
    }

    if (elements.length > 0) {
      anime({
        targets: elements,
        translateY: [30, 0],
        opacity: [0, 1], // Full opacity for the container
        delay: anime.stagger(100, { start: 200 }),
        duration: 1000,
        easing: 'easeOutQuart',
      });
    }
  }

  private animateTestimonials() {
    const elements = this.testimonialCards().map((card) => card.nativeElement);

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
