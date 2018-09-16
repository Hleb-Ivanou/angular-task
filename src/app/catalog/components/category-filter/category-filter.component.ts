import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../../core/category.service";
import { Category } from "../../../core/category.model";

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  toggle(category: Category) {
    this.categoryService.toggleCategory(category)
    .subscribe(res => {
      category.isActive = category.isActive;
    });
  }

}
