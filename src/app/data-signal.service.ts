import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSignalService {
  products=signal([
    {id:1,name:"mi",price:1000},
    { id: 2, name: 'samsung', price: 1200 },
    { id: 3, name: 'apple', price: 1500 },
    { id: 4, name: 'oneplus', price: 1300 },
    { id: 5, name: 'google', price: 1400 }
  ])
  getProducts() {
    return this.products();
  }
  deleteProduct(id: number) {
    this.products.update(products => products.filter(product => product.id !== id));
  }
  totalPrice = computed(() => this.products().reduce((sum, product) => sum + product.price, 0));

  constructor() { }
}
