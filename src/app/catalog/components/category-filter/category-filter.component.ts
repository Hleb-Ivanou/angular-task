import { Component, OnInit } from '@angular/core';

import { CategoriesArrayService } from "../../../core/services/categories-array.service";
import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categories: Array<Category>;

  constructor(private categoriesArrayService: CategoriesArrayService) { }

  ngOnInit() {
    this.getCategories();
  }

  private async getCategories() {
    this.categories = await this.categoriesArrayService.getCategories();
  }

  changeState(category):void {
    this.categories.map((el) => {
      if (el.id === category.id) {
        el.isActive = !el.isActive;
      }
    });
    console.log(event.target, this.categories);
  }
  changeStateAll():void {
    this.categories.map((el) => { el.isActive = true });
    console.log("btn:", this.categories);
  }

}
