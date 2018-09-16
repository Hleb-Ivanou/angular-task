import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogModule } from "../catalog/catalog.module";
import { ProductModule } from "../product/product.module";
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogModule,
    ProductModule
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
