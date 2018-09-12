import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogModule } from "../catalog/catalog.module";

import { CoreComponent, PageNotFoundComponent } from './components';

import { CategoriesArrayService } from "./services/categories-array.service";

@NgModule({
  imports: [
    CommonModule,
    CatalogModule
  ],
  providers: [CategoriesArrayService],
  declarations: [PageNotFoundComponent, CoreComponent],
  exports: [PageNotFoundComponent, CoreComponent]
})
export class CoreModule { }
