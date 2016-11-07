import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router }            from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'product-list',
  styleUrls: [
    '../app.style.scss'
  ],
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit, OnChanges {
  @Input() category_id: number;
  errorMessage: string;
  products: Promise<Product[]>;
  min_price = 0;
  max_price = 100;

  constructor(private _productService: ProductService,
  private _router: Router ) {}

  ngOnInit(): void {
    this.products = this._productService.getProducts(this.category_id);
  }

  changePriceRangeMin(price:any): void {
    this.min_price = price;
    this.products = this._productService.getProducts(this.category_id, this.min_price, this.max_price)
  }
  changePriceRangeMax(price:any): void {
    this.max_price = price;
    this.products = this._productService.getProducts(this.category_id, this.min_price, this.max_price)
  }

  ngOnChanges(changes: { [property_name: string]: SimpleChange }) {
    for (let propName in changes) {
      let chng = changes[propName];
      this.category_id = chng.currentValue;
      this.products = this._productService.getProducts(chng.currentValue)
    }
  }
}
