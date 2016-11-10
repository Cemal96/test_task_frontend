import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { App } from './app.component';
import { CategorySelectComponent } from './components/category/category-select.component';
import { ProductsComponent } from './components/product/products.component';
import { ProductListComponent } from './components/product/product-list.component';
import { ProductDetailsComponent } from './components/product/product-details.component';
import { OfferComponent } from './components/product/offer/offer.component';
import { StoreComponent } from './components/product/store/store.component';

import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ErrorService } from './services/error.service';

import { RangePipe } from './pipes/range.pipe';

import { AppRoutingModule } from './app.routes';


@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    CategorySelectComponent,
    ProductsComponent,
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
    ProductService,
    ErrorService
  ]
})
export class AppModule {}
