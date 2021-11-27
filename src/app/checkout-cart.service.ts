import { Injectable } from '@angular/core';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class CheckoutCartService {

  items: Product[] = [];

  constructor() { }

  addItemToCart(product: Product){
    this.items.push(product);
  }

  removeItemToCart() {
    
  }

  clearCart() {
    this.items = [];
    return this.items
  }

  getItems() {
    return this.items;
  }
}
