import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../core/category.service";
import { Category } from "../core/category.model";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

}
