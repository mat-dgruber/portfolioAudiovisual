import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private anime: any;

  constructor() {
    if (this.isBrowser) {
      import('animejs').then((module) => {
        this.anime = module.default;
      });
    }
  }

  animateStaggerIn(target: string | HTMLElement | NodeList, delayOffset: number = 0) {
    if (!this.isBrowser) return;

    if (!this.anime) {
      import('animejs').then((module) => {
        this.anime = module.default;
        this.runStaggerIn(target, delayOffset);
      });
      return;
    }

    this.runStaggerIn(target, delayOffset);
  }

  private runStaggerIn(target: string | HTMLElement | NodeList, delayOffset: number = 0) {
    if (!this.anime) return;

    this.anime({
      targets: target,
      translateY: [50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: this.anime.stagger(100, { start: delayOffset * 1000 }),
    });
  }
}
