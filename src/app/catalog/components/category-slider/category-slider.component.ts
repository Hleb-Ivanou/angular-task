import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../core/category.model';
import { ProductService } from "../../../core/product.service";
import { Product } from "../../../core/product.model";

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {

  showItemStartIndex: number = 0;
  showItemEndIndex: number = 3;
  pageCurrent: number = 1;
  pageCounter: number = 1;
  products: Product[];

  @Input() category: Category
  @Input() revers;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts(); 
  }

  getProducts() {
    this.productService.products.subscribe(res => {
      this.products = res.filter(el => el.categoryId === this.category.id);
      this.pageCounter = Math.ceil(this.products.length / 3);
    });
  }

  onPrev() {
    if (this.showItemStartIndex > 2) {
      this.showItemStartIndex -= 3;
      this.showItemEndIndex -= 3;
      this.pageCurrent--;
    }
  }
  onNext() {
    if (this.showItemEndIndex < this.products.length) {
      this.showItemStartIndex += 3;
      this.showItemEndIndex += 3;
      this.pageCurrent++;
    }
  }

}
