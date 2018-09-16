import { Component, OnInit } from '@angular/core';
import { Category } from "../../../core/category.model";
import { CategoryService } from "../../../core/category.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

}
