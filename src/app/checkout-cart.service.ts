import { Injectable } from '@angular/core';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class CheckoutCartService {

  items: Product[] = [];
  actualTotalOrder: number = 0;

  constructor() { }

  addItemToCart(product: Product){
    this.items.push(product);
    let order = JSON.parse(localStorage.getItem("order") ?? "[]")
    order.push(
      {
        name: product.name,
        price: product.price
      }
      )
    this.actualTotalOrder += product.price
    localStorage.setItem("order", JSON.stringify(order))
    return this.actualTotalOrder;
  }

  //removeItem() {  }

  clearCart() {
    this.actualTotalOrder = 0;
    return localStorage.clear();
  }

  getItems() {
    let order: Product = JSON.parse(localStorage.getItem("order") ?? "[]") ;
    return (
      this.items,
      order
    );
  }

  loadFromLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem("order") ?? "[]");
  }

  loadToLocalStorage(order: Product) {
    localStorage.setItem('order', JSON.stringify(order));
  }

  calculateTotalOrder(){
    return this.actualTotalOrder
  }
}
