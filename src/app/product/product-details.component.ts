import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Location }               from '@angular/common';

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
    private _productService: ProductService,
    private _location: Location ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this._productService.getProduct(id)
      .then(data => {this.product = data});
    });
   }

   goBack(): void {
     this._location.back();
   }
}
