import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { CheckoutCartService } from '../checkout-cart.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
 export class CheckoutComponent implements OnInit {

  @Output() itemRemoved = new EventEmitter;
  
  items: any;
  order: string[];
  totalOrder: any;
  //Conferir implantação do forms
  userCheckoutForm: FormGroup;

  constructor(private checkoutCartService: CheckoutCartService) {
    this.items = this.checkoutCartService.getItems();
    this.order = this.checkoutCartService.loadFromLocalStorage();
    this.userCheckoutForm = new FormGroup({
      'username': new FormControl(null),
      'whatsapp': new FormControl(null),
    });
   }

  ngOnInit(): void {
    this.userCheckoutForm;
    this.totalOrder = this.checkoutCartService.calculateTotalOrder();
  }

  removeItem(): void {
//    this.itemRemoved.emit(this.orderItem);2:56
    this.itemRemoved.emit(this.items);
  }

  clearCart() {
    this.checkoutCartService.clearCart();
  }

  getItemsNames(list: any) {
    let itemsNames = [];
    for(let item of list) {
      itemsNames.push(item.name)
    }
    return itemsNames
  }

  onSubmit() {
    const orderItems = this.getItemsNames(this.items);
    
    alert(`
      Pedido registrado com sucesso \n
      Comprador: ${this.userCheckoutForm.value.username} \n
      Telefone: ${this.userCheckoutForm.value.whatsapp} \n
      Total do Pedido: R$ ${this.totalOrder},00 \n
      Itens: ${orderItems}
    `);
    console.warn('Your order has been submitted', this.userCheckoutForm.value);
    this.clearCart();
    this.userCheckoutForm.reset();
  }

}
