import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { courses } from 'src/app/model/list_courses';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const routeIdFromParams = routeParams.get('productId');

    this.product = courses.find(
      (product) => product.id === routeIdFromParams
    )
  }

}
