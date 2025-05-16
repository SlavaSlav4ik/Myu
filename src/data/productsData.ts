import { Product } from "../types";

export const productsData: Product[] = [
    {
        id: 1,
        name: "Классический бургер",
        price: 360,
        image: "../assets/burger.png",
        categoryId: 1,
        delivery: true,
    },
    {
        id: 2,
        name: "Бургер с сыром",
        price: 390,
        image: "../assets/burger.png",
        categoryId: 1,
        delivery: true,
    },
    {
        id: 3,
        name: "Чикен бургер",
        price: 410,
        image: "../assets/burger.png",
        categoryId: 1,
        delivery: false,
    },

];
