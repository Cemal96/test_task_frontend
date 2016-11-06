import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { Offer } from './offer/offer';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  errorMessage: string;
  products: Promise<Product[]>;
  list1: Offer[] = [
  new Offer(12),
  new Offer(12),
  new Offer(12),
  ];
  list2: Offer[] = [
    new Offer(13),
    new Offer(12),
    new Offer(12),
  ];
  list3: Offer[] = [
    new Offer(13),
    new Offer(12),
    new Offer(12),
  ];
  categoriess: Product[] = [
    new Product(1, "Tv", this.list1),
    new Product(2, "Tv", this.list2),
    new Product(3, "Tv", this.list3)
  ]

  constructor(private _productService: ProductService ) {}

  getProducts(): void {
    this.products = this._productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
