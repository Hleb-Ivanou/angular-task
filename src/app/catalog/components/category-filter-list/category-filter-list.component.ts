import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-filter-list',
  templateUrl: './category-filter-list.component.html',
  styleUrls: ['./category-filter-list.component.css']
})
export class CategoryFilterListComponent implements OnInit {

  @Input() categories: Array<Category>;

  @Output() onEmmitChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onGetChange(category) {
    this.onEmmitChange.emit(category);
  }

}
