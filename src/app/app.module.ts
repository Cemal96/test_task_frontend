import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { App } from './app.component';
import { CategorySelectComponent } from './category/category-select.component';
import { ProductListComponent } from './product/product-list.component';
import { CategoryService } from './category/category.service'
import { ProductService } from './product/product.service'



@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    CategorySelectComponent,
    ProductListComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule
  ],
  providers: [
    CategoryService,
    ProductService
  ]
})
export class AppModule {}
