import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../../core/product.service";

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  constructor( private productService: ProductService) { }

  ngOnInit() {
  }

}
