import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router }            from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: '../../templates/product-list.component.html'
})

export class ProductListComponent {
  errorMessage: string;
  @Input() products: Product[];

  constructor(private _router: Router ) {}
}
