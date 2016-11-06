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

  constructor(private _productService: ProductService,
  private _router: Router ) {}

  ngOnInit(): void {
    this.products = this._productService.getProducts(this.category_id);
  }

  ngOnChanges(changes: { [property_name: string]: SimpleChange }) {
    for (let propName in changes) {
      let chng = changes[propName];
      this.products = this._productService.getProducts(chng.currentValue)
    }
  }
}
