import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app.component';
import { CategorySelectComponent } from './category/category-select.component';


@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    CategorySelectComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule
  ]
})
export class AppModule {}
