import { Component, ElementRef, viewChildren, afterNextRender, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../../../core/services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  private animationService = inject(AnimationService);

  equipmentList = [
    { category: 'Câmeras', items: ['ARRI Alexa Mini LF', 'RED V-Raptor', 'Sony FX9'] },
    {
      category: 'Lentes',
      items: ['Cooke Anamorphic /i', 'Zeiss Supreme Prime', 'Angenieux Optimo'],
    },
    {
      category: 'Iluminação',
      items: ['ARRI SkyPanel S60-C', 'Aputure LS 1200d', 'Astera Titan Tubes'],
    },
    { category: 'Movimento', items: ['Freefly Mōvi Pro', 'Steadicam Zephyr', 'DJI Ronin 4D'] },
  ];

  listItems = viewChildren<ElementRef>('equipItem');

  constructor() {
    afterNextRender(() => {
      // Intersection Observer to trigger animation when scrolled into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateEquipmentList();
              observer.disconnect(); // Only animate once
            }
          });
        },
        { threshold: 0.2 },
      );

      const section = document.getElementById('about');
      if (section) observer.observe(section);
    });
  }

  private animateEquipmentList() {
    const elements = this.listItems().map((item) => item.nativeElement);

    if (elements.length > 0) {
      this.animationService.staggerEntrance(elements);
    }
  }
}
