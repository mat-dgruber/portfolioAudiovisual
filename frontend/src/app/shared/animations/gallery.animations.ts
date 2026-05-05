import anime from 'animejs';

export const staggerGalleryEntrance = (targets: string | HTMLElement[]) => {
  return anime({
    targets: targets,
    translateY: [100, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 800,
    easing: 'cubicBezier(0.4, 0, 0.2, 1)',
  });
};

export const liquidHoverEffect = (target: HTMLElement, isEntering: boolean) => {
  anime({
    targets: target,
    scale: isEntering ? 1.05 : 1,
    duration: 600,
    easing: 'easeOutQuint',
  });
};
