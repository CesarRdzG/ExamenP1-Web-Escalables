import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {
  orderByNameClick = output<void>();
  orderByIdClick = output<void>();
  reverseOrderClick = output<void>();

  onOrderByNameClick(): void {
    this.orderByNameClick.emit();
  }

  onOrderByIdClick(): void {
    this.orderByIdClick.emit();
  }

  onReverseOrderClick(): void {
    this.reverseOrderClick.emit();
  }
}
