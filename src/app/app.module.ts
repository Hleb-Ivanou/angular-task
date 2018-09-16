import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";

import { CategoryService } from "./core/category.service";
import { DataService } from "./core/data.service";

import { AppComponent } from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ 
    BrowserModule,
    CoreModule,
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(DataService, {dataEncapsulation: false}),
    AppRoutingModule 
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
