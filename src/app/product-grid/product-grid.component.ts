import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../iproduct';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [   NgFor,],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
  @Input() products: Iproduct[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteProduct(id: number) {
    this.delete.emit(id);
  }
}
