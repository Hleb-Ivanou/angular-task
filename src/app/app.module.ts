import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";

import { DbService } from "./core/db.service";
import { DataProviderService } from "./core/data-provider.service";
import { CategoryService } from "./core/category.service";
import { ProductService } from "./core/product.service";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ 
    BrowserModule,
    CoreModule,
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(DbService, {dataEncapsulation: false}),
    AppRoutingModule 
  ],
  providers: [DataProviderService, CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
