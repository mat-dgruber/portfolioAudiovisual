import { Component, HostListener, effect, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #cursor
      id="cursor"
      class="fixed w-3 h-3 bg-cinematic-teal rounded-full pointer-events-none z-[9999] mix-blend-normal transition-transform duration-100 ease-out shadow-[0_0_10px_rgba(10,191,163,0.5)]"
      style="transform: translate(-50%, -50%);"
    ></div>
    <div
      #cursorRing
      id="cursor-ring"
      class="fixed w-9 h-9 border border-cinematic-teal rounded-full pointer-events-none z-[9999] mix-blend-normal transition-all duration-300 ease-out opacity-70"
      style="transform: translate(-50%, -50%);"
    ></div>
  `,
  styles: [
    `
      @media (hover: none) and (pointer: coarse) {
        #cursor,
        #cursor-ring {
          display: none;
        }
      }
    `,
  ],
})
export class CursorComponent {
  cursor = viewChild<ElementRef>('cursor');
  cursorRing = viewChild<ElementRef>('cursorRing');

  private mouseX = 0;
  private mouseY = 0;
  private ringX = 0;
  private ringY = 0;

  constructor() {
    effect(() => {
      const cursorEl = this.cursor()?.nativeElement;
      const ringEl = this.cursorRing()?.nativeElement;

      if (cursorEl && ringEl) {
        const animate = () => {
          // Smooth follow for the ring
          this.ringX += (this.mouseX - this.ringX) * 0.15;
          this.ringY += (this.mouseY - this.ringY) * 0.15;

          ringEl.style.left = `${this.ringX}px`;
          ringEl.style.top = `${this.ringY}px`;
          cursorEl.style.left = `${this.mouseX}px`;
          cursorEl.style.top = `${this.mouseY}px`;

          requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    });
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;

    // Check if hovering over clickable elements to add effect
    const target = e.target as HTMLElement;
    const isClickable = target.tagName === 'A' || target.tagName === 'BUTTON' ||
                        target.closest('a') || target.closest('button') ||
                        target.getAttribute('role') === 'button' ||
                        target.classList.contains('cursor-pointer');

    const cursorEl = this.cursor()?.nativeElement;
    const ringEl = this.cursorRing()?.nativeElement;

    if (cursorEl && ringEl) {
      if (isClickable) {
        cursorEl.style.transform = 'translate(-50%, -50%) scale(0.5)';
        ringEl.style.transform = 'translate(-50%, -50%) scale(1.5)';
        ringEl.style.backgroundColor = 'rgba(10, 191, 163, 0.1)';
      } else {
        cursorEl.style.transform = 'translate(-50%, -50%) scale(1)';
        ringEl.style.transform = 'translate(-50%, -50%) scale(1)';
        ringEl.style.backgroundColor = 'transparent';
      }
    }
  }

  @HostListener('window:mousedown')
  onMouseDown() {
    const ringEl = this.cursorRing()?.nativeElement;
    if (ringEl) {
      ringEl.style.transform = 'translate(-50%, -50%) scale(0.8)';
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    const ringEl = this.cursorRing()?.nativeElement;
    if (ringEl) {
      ringEl.style.transform = 'translate(-50%, -50%) scale(1.2)';
      setTimeout(() => {
        if (ringEl) ringEl.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 150);
    }
  }
}
