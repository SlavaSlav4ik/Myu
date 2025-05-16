// src/pages/Home.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import DeliveryModeSwitcher from '../components/DeliveryModeSwitcher';
import CategoryList from '../components/CategoryList';
import CategorySection from '../components/CategorySection';
import { loadProducts } from '../features/products/productsSlice';
import { loadCategories } from '../features/products/categoriesSlice';
import { AppDispatch, RootState } from '../store/store';

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.items);

    useEffect(() => {
        dispatch(loadProducts());
        dispatch(loadCategories());
    }, [dispatch]);

    return (
        <>
            {/* 1. Баннер */}
            <Hero />

            {/* 2. Переключатель доставки/самовывоза */}
            <DeliveryModeSwitcher />

            {/* 3. Панель категорий (липкая) */}
            <CategoryList />

            {/* 4. Секции категорий с карточками */}
            <div style={{ padding: '1rem' }}>
                {categories.map(cat => (
                    <CategorySection
                        key={cat.id}
                        id={cat.id}
                        name={cat.name}
                        productIds={cat.products}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
