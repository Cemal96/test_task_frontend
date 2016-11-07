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

export class ProductListComponent {
  @Input() category_id: number;
  errorMessage: string;
  @Input() products: Product[];
  min_price = 0;
  max_price = 100;

  constructor(private _productService: ProductService,
  private _router: Router ) {}
}
