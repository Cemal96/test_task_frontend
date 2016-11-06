import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategorySelectComponent } from './category/category-select.component';
import { ProductDetailsComponent } from './product/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/1', pathMatch: 'full' },
  {
    path: ':category_id',
    component: CategorySelectComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
