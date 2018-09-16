import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from "../../../core/category.model";

@Component({
  selector: 'app-category-filter-list',
  templateUrl: './category-filter-list.component.html',
  styleUrls: ['./category-filter-list.component.css']
})
export class CategoryFilterListComponent implements OnInit {

  @Input() categories: Category[];
  @Output() toggle: EventEmitter<Category> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onToggle(category: Category) {
    this.toggle.emit(category);
  }

}
