export interface Product {
    id: number;
    name: string;
    price: number;
    delivery: boolean;
    img: string;
}

export interface Category {
    id: number;
    name: string;
    products: number[];
}