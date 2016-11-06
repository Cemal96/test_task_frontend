import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: [
    '../app.style.scss'
  ]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(private _activatedRoute: ActivatedRoute,
    private _productService: ProductService) { }

  ngOnInit() {
    this._activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      this._productService.getProduct(id)
      .then(product => this.product.name = product['name']);
    });
  }
}
