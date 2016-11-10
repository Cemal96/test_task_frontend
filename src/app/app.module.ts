import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { App } from './app.component';
import { CategorySelectComponent } from 'components/category-select.component';
import { ProductsComponent } from 'components/products.component';
import { ProductListComponent } from 'components/product-list.component';
import { ProductDetailsComponent } from 'components/product-details.component';
import { OfferComponent } from 'components/offer.component';
import { StoreComponent } from 'components/store.component';

import { CategoryService } from 'services/category.service';
import { ProductService } from 'services/product.service';
import { ErrorService } from 'services/error.service';

import { RangePipe } from 'pipes/range.pipe';

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
  imports: [
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
