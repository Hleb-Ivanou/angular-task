export class Product {
    id: number;
    constructor(
        public name: string,
        public categoryId: number,
        public sizes: string[],
        public colors: string[],
        public price: number,
        public imageUrl: string
    ) {}
}
