const BASE_URL = 'http://localhost:3001';

export async function getProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error('Не удалось загрузить продукты');
    return res.json();
}

export async function getCategories() {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) throw new Error('Не удалось загрузить категории');
    return res.json();
}
