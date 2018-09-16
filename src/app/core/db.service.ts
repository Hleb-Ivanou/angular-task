import { Injectable, Injector } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class DbService implements InMemoryDbService {

  createDb() {
    const categories = [
      {
        id: 1,
        name: 'men',
        isActive: true
      },
      {
        id: 2,
        name: 'women',
        isActive: true
      },
      {
        id: 3,
        name: 'children',
        isActive: true
      }
    ];
    const products = [
      {
        id: 1,
        name: "Product 1",
        categoryId: 1,
        sizes: ['s', 'm'],
        colors: ['#ffffff', '#000000'],
        price: 5
      }
    ]

    return { categories, products };
  }

}
