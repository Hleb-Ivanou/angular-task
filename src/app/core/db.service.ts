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
        name: "thunder bay",
        categoryId: 1,
        sizes: ['s', 'm'],
        colors: ['#165eb9', '#ffe637', '#535253'],
        price: 50,
        imageUrl: '../../assets/images/thunder-bay.png'
      },
      {
        id: 2,
        name: "down jacket",
        categoryId: 1,
        sizes: ['l', 'xl', 'xxl'],
        colors: [],
        price: 30,
        imageUrl: '../../assets/images/down-jacket.png'
      },
      {
        id: 3,
        name: "rattler",
        categoryId: 1,
        sizes: ['10litri'],
        colors: [],
        price: 60,
        imageUrl: '../../assets/images/rattler.png'
      },
      {
        id: 4,
        name: "activate texapore",
        categoryId: 1,
        sizes: ['xl'],
        colors: [],
        price: 43,
        imageUrl: '../../assets/images/activate-texapore.png'
      },
      {
        id: 5,
        name: "road jacket",
        categoryId: 1,
        sizes: ['s', 'xl'],
        colors: ['#242e3a'],
        price: 52,
        imageUrl: '../../assets/images/road-jacket.png'
      },
      {
        id: 6,
        name: "valpaaiso bag",
        categoryId: 2,
        sizes: [],
        colors: ['#4b2a35'],
        price: 17,
        imageUrl: '../../assets/images/valpaaiso-bag.png'
      },
      {
        id: 7,
        name: "highland",
        categoryId: 2,
        sizes: ['s'],
        colors: [],
        price: 30,
        imageUrl: '../../assets/images/highland.png'
      },
      {
        id: 8,
        name: "venture fly",
        categoryId: 2,
        sizes: ['39', '40'],
        colors: [],
        price: 50,
        imageUrl: '../../assets/images/venture-fly.png'
      },
      {
        id: 9,
        name: "palmdale hat",
        categoryId: 2,
        sizes: [],
        colors: ['#212c3e'],
        price: 5,
        imageUrl: '../../assets/images/palmdale-hat.png'
      },
      {
        id: 10,
        name: "chill dress",
        categoryId: 2,
        sizes: [],
        colors: [],
        price: 32,
        imageUrl: '../../assets/images/chill-dress.png'
      },
      {
        id: 11,
        name: "bear jkt",
        categoryId: 3,
        sizes: ['xs'],
        colors: ['#9d2843'],
        price: 20,
        imageUrl: '../../assets/images/bear-jkt.png'
      },
      {
        id: 12,
        name: "murmel",
        categoryId: 3,
        sizes: ['15litri'],
        colors: ['#017244', '#676b6a'],
        price: 30,
        imageUrl: '../../assets/images/murmel.png'
      },
      {
        id: 13,
        name: "piccadlly",
        categoryId: 2,
        sizes: [],
        colors: [],
        price: 20,
        imageUrl: '../../assets/images/piccadlly.png'
      },
      {
        id: 14,
        name: "wave jacket",
        categoryId: 2,
        sizes: ['s'],
        colors: [],
        price: 43,
        imageUrl: '../../assets/images/wave-jacket.png'
      },
    ]

    return { categories, products };
  }

}
