import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'category-select',
  templateUrl: '../templates/category-select.component.html'
})

export class CategorySelectComponent implements OnInit, OnDestroy {
  categories: Promise<Category[]>;
  selectedCategory: number;
  sub: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _categoryService: CategoryService ) {}

  getCategories(): void {
    this.categories = this._categoryService.getCategories();
  }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.selectedCategory = params['id'];
    });
    this.getCategories();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  select(category: number) {
    this.selectedCategory = category;
  }
}
