export class Product {
    constructor(
        public id: number | string,
        public title: string,
        public price: number | string,
        public sizesArray: Array<string>,
        public colorsCodeArray: Array<string>,
        public category: string
    ) {}
}