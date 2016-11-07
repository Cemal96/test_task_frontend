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
  errorMessage: string;
  @Input() products: Product[];

  constructor(private _router: Router ) {}
}
