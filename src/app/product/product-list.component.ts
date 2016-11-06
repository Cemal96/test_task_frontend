import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  errorMessage: string;
  products: Promise<Product[]>;

  constructor(private _productService: ProductService ) {}

  getProducts(): void {
    this.products = this._productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
