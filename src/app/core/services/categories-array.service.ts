import { Injectable } from '@angular/core';

import { Category } from "../models/category.model";

const categoriesArray = [
  new Category('1', 'men', true),
  new Category('2', 'women', true),
  new Category('3', 'children', true),
];

const categoriesArrayPromise = Promise.resolve(categoriesArray);

@Injectable({
  providedIn: 'root'
})
export class CategoriesArrayService {

  constructor() { }

  getCategories(): Promise<Category[]> {
    return categoriesArrayPromise
  }
  
  // checkedAllCategories(categoryList: Array<Category>): void {
  //   categoryList.forEach(element => {
  //     element.isActive = true;
  //   })
  // }
}
