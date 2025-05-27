// src/api.ts

// В development используем локальный json-server на порту 3001,
// в production — читаем статический JSON из public/data/db.json
const BASE_URL = import.meta.env.PROD
    ? import.meta.env.BASE_URL    // '/Myu/' после сборки
    : 'http://localhost:3001';

interface DbResponse {
    products: any[];
    categories: any[];
}

/**
 * Получить массив products.
 */
export async function getProducts() {
    // В production читаем из /Myu/data/db.json,
    // в development — ходим на эндпоинт /products
    const url = import.meta.env.PROD
        ? `${BASE_URL}data/db.json`
        : `${BASE_URL}/products`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Не удалось загрузить продукты');
    }

    const data = (await res.json()) as DbResponse | any[];
    // Если продакшен — возвращаем data.products, иначе сам массив
    return import.meta.env.PROD
        ? (data as DbResponse).products
        : (data as any[]);
}

/**
 * Получить массив categories.
 */
export async function getCategories() {
    const url = import.meta.env.PROD
        ? `${BASE_URL}data/db.json`
        : `${BASE_URL}/categories`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Не удалось загрузить категории');
    }

    const data = (await res.json()) as DbResponse | any[];
    return import.meta.env.PROD
        ? (data as DbResponse).categories
        : (data as any[]);
}
