import { Component } from '@angular/core';
import { DataSignalService } from '../data-signal.service';
import { Iproduct } from './../iproduct';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductGridComponent,ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Iproduct[] = [];
  totalPrice: number = 0;

  constructor(private productService: DataSignalService) {
    this.products = this.productService.getProducts();
    this.totalPrice = this.productService.totalPrice();
    console.log(this.products )
    console.log(this.totalPrice )
  }
  onDelete(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
    this.totalPrice = this.productService.totalPrice();
  }

}
