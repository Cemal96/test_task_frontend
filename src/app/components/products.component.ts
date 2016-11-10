import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router }            from '@angular/router';
import { Product } from 'models/product';
import { Products } from 'models/products';
import { ProductService } from 'services/product.service';

@Component({
  selector: 'products',
  templateUrl: '../templates/products.component.html'
})

export class ProductsComponent implements OnInit, OnChanges {
  @Input() category_id: number;
  errorMessage: string;
  products: Products;
  min_price = 0;
  max_price = 100;

  constructor(private _productService: ProductService,
  private _router: Router ) {}

  ngOnInit(): void {
    this._productService.getProducts(this.category_id)
                        .then(data => {this.products = data});
  }
  changePriceRangeMin(price:any): void {
    this.min_price = price;
    this._productService.getProducts(this.category_id, this.min_price, this.max_price)
                        .then(data => {this.products = data});
  }
  changePriceRangeMax(price:any): void {
    this.max_price = price;
    this._productService.getProducts(this.category_id, this.min_price, this.max_price)
                        .then(data => {this.products = data});
  }

  ngOnChanges(changes: { [property_name: string]: SimpleChange }) {
    for (let propName in changes) {
      let chng = changes[propName];
      this.category_id = chng.currentValue;
      this._productService.getProducts(chng.currentValue)
                          .then(data => {this.products = data});
    }
  }
}
