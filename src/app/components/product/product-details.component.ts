import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Location }               from '@angular/common';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'product-details',
  templateUrl: '../../templates/product-details.component.html'
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
