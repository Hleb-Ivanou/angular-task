import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { CoreModule } from "./core/core.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule, FormsModule, CoreModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
