import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckoutCartService } from '../checkout-cart.service';

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
    this.userCheckoutForm = new FormGroup({
      'username': new FormControl(null),
      'whatsapp': new FormControl(null),
    });
    this.items = this.checkoutCartService.getItems();
    this.order = this.checkoutCartService.loadFromLocalStorage();
   }

  ngOnInit(): void {
    this.totalOrder = this.checkoutCartService.calculateTotalOrder();
    this.userCheckoutForm
  }

  removeItem(): void {
//    this.itemRemoved.emit(this.orderItem);2:56
    this.itemRemoved.emit(this.items);
  }

  clearCart() {
    this.checkoutCartService.clearCart();
    return alert('Sem items no carrinho')
  }

}
