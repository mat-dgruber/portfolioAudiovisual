import { Injectable } from '@angular/core';
import anime from 'animejs';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  /**
   * Fade in and translate elements upwards with a stagger effect.
   */
  staggerEntrance(targets: any, delay: number = 0) {
    return anime({
      targets: targets,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: delay }),
      duration: 800,
      easing: 'easeOutQuart',
    });
  }

  /**
   * Cinematic entrance for the Hero section.
   */
  heroCinematicEntrance(title: any, desc: any, buttons: any) {
    const tl = anime.timeline({
      easing: 'easeOutQuart',
      duration: 2000,
    });

    tl.add({
      targets: title,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 500, // Reduced from 2500 for a snappier feel unless specific splash screen is active
    })
      .add(
        {
          targets: desc,
          opacity: [0, 1],
          translateY: [20, 0],
        },
        '-=1200',
      )
      .add(
        {
          targets: buttons,
          opacity: [0, 1],
          translateY: [20, 0],
        },
        '-=1400',
      );
    
    return tl;
  }

  /**
   * Modal entrance animation.
   */
  modalEntrance(content: any, specs: any) {
    anime({
      targets: content,
      scale: [0.95, 1],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutQuart',
    });

    if (specs && specs.length > 0) {
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

  /**
   * Gallery items entrance with specific cinematic easing.
   */
  galleryEntrance(targets: any) {
    return anime({
      targets: targets,
      translateY: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'cubicBezier(0.4, 0, 0.2, 1)',
    });
  }

  /**
   * Simple hover scale effect.
   */
  hoverScale(target: any, isEntering: boolean) {
    anime({
      targets: target,
      scale: isEntering ? 1.05 : 1,
      duration: 600,
      easing: 'easeOutQuint',
    });
  }
}
