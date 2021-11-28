import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckoutCartService } from '../checkout-cart.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
 export class CheckoutComponent implements OnInit {

  items = this.checkoutCartService.getItems();

  //Conferir implantação do forms
  userCheckoutForm: FormGroup;
  constructor(private checkoutCartService: CheckoutCartService) {
    this.userCheckoutForm = new FormGroup({
      'username': new FormControl(null),
      'whatsapp': new FormControl(null),
    });
   }

  ngOnInit(): void {
    this.userCheckoutForm
  }

  addItemToCart(product: Product) {
    this.checkoutCartService.addItemToCart(product);
    alert("Produto adicionado com sucesso ao carrinho")
  }

  clearCart() {
    this.checkoutCartService.clearCart();
    return alert('Sem items no carrinho')
  }

}
