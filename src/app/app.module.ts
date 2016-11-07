import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { App } from './app.component';
import { CategorySelectComponent } from './category/category-select.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailsComponent } from './product/product-details.component';
import { OfferComponent } from './product/offer/offer.component';
import { StoreComponent } from './product/store/store.component';

import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';

import { RangePipe } from './range.pipe';

import { AppRoutingModule } from './app.routes';


@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    CategorySelectComponent,
    ProductListComponent,
    OfferComponent,
    StoreComponent,
    ProductDetailsComponent,
    RangePipe
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CategoryService,
    ProductService
  ]
})
export class AppModule {}
