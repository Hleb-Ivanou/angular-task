import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "./product.model";
import { Category } from "./category.model";

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(products: Product[], category: Category): Product[] {  
    return [...products].filter( el => el.categoryId === category.id)
  }
}
