import { InMemoryDbService } from "angular-in-memory-web-api";

export class DataService implements InMemoryDbService {

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

    return { categories };
  }

}
