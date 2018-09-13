import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from '../../../core/models/category.model';


@Component({
  selector: 'app-category-filter-btn',
  templateUrl: './category-filter-btn.component.html',
  styleUrls: ['./category-filter-btn.component.css']
})
export class CategoryFilterBtnComponent implements OnInit {

  @Input() categories: Array<Category>;
  
  @Output() onEmmitActiveAll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onActiveAll() {
    this.onEmmitActiveAll.emit();    
  }

}
