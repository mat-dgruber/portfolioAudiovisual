import { Component, signal, HostListener, effect, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import anime from 'animejs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  private lastScrollTop = 0;
  isVisible = signal(true);
  headerRef = viewChild<ElementRef>('headerElement');

  constructor() {
    // React to visibility changes with Anime.js
    effect(() => {
      const visible = this.isVisible();
      const element = this.headerRef()?.nativeElement;

      if (element) {
        anime({
          targets: element,
          translateY: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          duration: 600,
          easing: 'cubicBezier(0.4, 0, 0.2, 1)',
        });
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop && scrollTop > 100) {
      // Scrolling down
      if (this.isVisible()) this.isVisible.set(false);
    } else {
      // Scrolling up
      if (!this.isVisible()) this.isVisible.set(true);
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
