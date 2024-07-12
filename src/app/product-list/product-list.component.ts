import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { Iproduct } from '../iproduct';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor,],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Iproduct[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteProduct(id: number) {
    this.delete.emit(id);
  }
}