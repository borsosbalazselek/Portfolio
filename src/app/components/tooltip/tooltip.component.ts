import { Component, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: false,
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  @Input() text: string = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  show = false;

  constructor(private elRef: ElementRef) {}

  @HostBinding('class') get hostClasses() {
    return `tooltip-wrapper ${this.position}`;
  }

  // Nyilvános metódus, amit a szülő is meghívhat
  hide() {
    this.show = false;
  }

  toggleVisibility(show: boolean) {
    this.show = show;
  }
}