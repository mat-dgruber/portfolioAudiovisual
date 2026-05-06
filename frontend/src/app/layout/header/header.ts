import {
  Component,
  signal,
  HostListener,
  effect,
  ElementRef,
  viewChild,
  afterNextRender,
} from '@angular/core';
import { CommonModule } from '@angular/common';

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
