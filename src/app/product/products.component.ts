import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router }            from '@angular/router';
import { Products } from './products';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  styleUrls: [
    '../app.style.scss'
  ],
  templateUrl: './products.component.html'
})

export class ProductListComponent implements OnInit, OnChanges {
  @Input() category_id: number;
  errorMessage: string;
  products: Promise<Products[]>;
  min_price:number;
  max_price:number;

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
