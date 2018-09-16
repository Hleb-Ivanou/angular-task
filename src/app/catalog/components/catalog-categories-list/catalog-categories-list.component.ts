import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../../core/category.service";

@Component({
  selector: 'app-catalog-categories-list',
  templateUrl: './catalog-categories-list.component.html',
  styleUrls: ['./catalog-categories-list.component.css']
})
export class CatalogCategoriesListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
