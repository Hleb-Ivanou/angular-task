import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from "../../../core/category.service";
import { Category } from "../../../core/category.model";

@Component({
  selector: 'app-category-filter-list',
  templateUrl: './category-filter-list.component.html',
  styleUrls: ['./category-filter-list.component.css']
})
export class CategoryFilterListComponent implements OnInit {

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {

  }

  onToggle(category: Category) {
    this.categoryService.toggleCategory(category);
  }

  onActiveAll() {
    this.categoryService.activeAllCategories();
  }

}
