import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { App } from './app.component';
import { CategoryComponent } from './category/category-select.component';
import { CategoryService } from './category/category.service'



@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    CategoryComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule
  ],
  providers: [
    CategoryService,
    HttpModule
  ]
})
export class AppModule {}
