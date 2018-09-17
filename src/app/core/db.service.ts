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
        price: 5,
        imageUrl: '../../assets/images/t-shirt.png'
      },
      {
        id: 2,
        name: "Product 2",
        categoryId: 1,
        sizes: ['xl'],
        colors: ['#ffffff'],
        price: 30,
        imageUrl: '../../assets/images/pants.png'
      },
      {
        id: 3,
        name: "Product 3",
        categoryId: 1,
        sizes: ['xl'],
        colors: ['#ffffff'],
        price: 30,
        imageUrl: '../../assets/images/t-shirt.png'
      },
      {
        id: 4,
        name: "Product 4",
        categoryId: 1,
        sizes: ['xl'],
        colors: ['#ffffff'],
        price: 30,
        imageUrl: '../../assets/images/t-shirt.png'
      },
      {
        id: 5,
        name: "Product 5",
        categoryId: 1,
        sizes: ['xl'],
        colors: ['#ffffff'],
        price: 30,
        imageUrl: '../../assets/images/t-shirt.png'
      },
      {
        id: 6,
        name: "Product 6",
        categoryId: 1,
        sizes: ['xl'],
        colors: ['#ffffff'],
        price: 30,
        imageUrl: '../../assets/images/t-shirt.png'
      },
      {
        id: 7,
        name: "Product 7",
        categoryId: 2,
        sizes: ['xl'],
        colors: ['#ffffff'],
        price: 30,
        imageUrl: '../../assets/images/t-shirt.png'
      }
    ]

    return { categories, products };
  }

}
