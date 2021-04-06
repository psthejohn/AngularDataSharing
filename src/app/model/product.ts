export class Product {
    constructor(
        public name: string,
        public price: string,
        public dimensions: string,
        public images: string, //[]
        public availability: boolean,
        public wood: string,
        public material: string,
        public type: string,
        public includes: string) { }
}

// {
//     "name": {},
//     "price": {},
//     "dimensions": {},
//     "images": [],
//     "availability": {},
//     "wood": {},
//     "material": {},
//     "type": {},
//     "includes": {}
//   }