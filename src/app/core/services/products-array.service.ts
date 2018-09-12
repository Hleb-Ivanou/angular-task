import { Injectable } from '@angular/core';

import { Product } from "../models/product.model";

const productsArray = [
  new Product(1, 't-shirt', 5, ['xs', 's'], ['#165eb9', '#ffe637', '#535253'], 'men'),
  new Product(2, 'Pants forclaz', 30, ['s', 'm', 'l'], [], 'men'),
  new Product(3, 'backpack', 60, ['10litri'], [], 'men'),
  new Product(4, 'giacket', 60, ['s'], [], 'women'),
  new Product(5, 'trekking shoes', 80, ['39', '40'], [], 'women'),
  new Product(6, 't-shirt', 20, ['m', 'l'], ['#d3a7ac', 'ffffff'], 'women'),
  new Product(7, 'backpack', 40, ['xs', 's'], ['#3c3b41', 'ffffff'], 'children'),
  new Product(8, 't-shirt', 5, ['xs'], [], 'children'),
  new Product(9, 'trekking shoes', 25, ['36'], [], 'children')
];

const productsArrayPromise = Promise.resolve(productsArray);

@Injectable({
  providedIn: 'root'
})
export class ProductsArrayService {

  constructor() { }

  getProduts(): Promise<Product[]> {
    return productsArrayPromise
  }
}
