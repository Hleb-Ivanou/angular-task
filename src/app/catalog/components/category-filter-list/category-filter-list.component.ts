import { Component, OnInit } from '@angular/core';

import { CategoriesArrayService } from "../../../core/services/categories-array.service";
import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-filter-list',
  templateUrl: './category-filter-list.component.html',
  styleUrls: ['./category-filter-list.component.css']
})
export class CategoryFilterListComponent implements OnInit {

  categories: Array<Category>;

  constructor(private categoriesArrayService: CategoriesArrayService) { }

  ngOnInit() {
    this.getCategories().catch(err => console.log(err));
  }

  private async getCategories() {
    this.categories = await this.categoriesArrayService.getCategories()
    .then((z) => {console.log(z); return z });
  }

}
