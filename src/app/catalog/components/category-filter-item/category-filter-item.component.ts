import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-filter-item',
  templateUrl: './category-filter-item.component.html',
  styleUrls: ['./category-filter-item.component.css']
})
export class CategoryFilterItemComponent implements OnInit {

  @Input() categories: Array<Category>;

  constructor() { }

  ngOnInit() {
  }

}
