import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { App } from './app.component';
import { CategorySelectComponent } from './category/category-select.component';
import { ProductListComponent } from './product/product-list.component';
import { OfferComponent } from './product/offer/offer.component';
import { StoreComponent } from './product/store/store.component';

import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';

import { RangePipe } from './range.pipe';


@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    CategorySelectComponent,
    ProductListComponent,
    OfferComponent,
    StoreComponent,
    RangePipe
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
