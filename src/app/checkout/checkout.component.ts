import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userCheckoutForm: FormGroup;
//Conferir implantação do forms
  constructor() {
    this.userCheckoutForm = new FormGroup({
      'username': new FormControl(null),
      'whatsapp': new FormControl(null),
    });
   }

  ngOnInit(): void {
    this.userCheckoutForm
  }

}
