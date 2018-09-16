import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { CategoryFilterListComponent } from './components/category-filter-list/category-filter-list.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogComponent, HeaderComponent, CategoryFilterComponent, CategoryFilterListComponent, MainComponent]
})
export class CatalogModule { }
