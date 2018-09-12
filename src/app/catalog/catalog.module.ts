import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components';
import { HeaderComponent } from './components/header/header.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { CategoryFilterListComponent } from './components/category-filter-list/category-filter-list.component';
import { CategoryFilterItemComponent } from './components/category-filter-item/category-filter-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogComponent, HeaderComponent, CategoryFilterComponent, CategoryFilterListComponent, CategoryFilterItemComponent],
  exports: [CatalogComponent]
})
export class CatalogModule { }
