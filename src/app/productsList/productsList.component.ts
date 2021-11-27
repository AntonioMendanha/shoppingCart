import { Component, OnInit } from '@angular/core';
import { courses } from '../model/list_courses';
import { Product } from '../model/Product';

@Component({
  selector: 'app-productsList',
  templateUrl: './productsList.component.html',
  styleUrls: ['./productsList.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.productsList = courses;
  }

}
