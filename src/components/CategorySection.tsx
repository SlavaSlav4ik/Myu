import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import type { RootState, AppDispatch } from '../store/store';
import ProductCard from './ProductCard';
import styles from './CategorySection.module.css';

interface Props {
    id: number;
    name: string;
    productIds: number[];
}

const CategorySection: React.FC<Props> = ({ id, name, productIds }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, status } = useSelector((s: RootState) => s.products);
    const mode = useSelector((s: RootState) => s.cart.deliveryMode);

    useEffect(() => {
        if (status === 'idle') dispatch(fetchProducts());
    }, [dispatch, status]);

    const products = items
        .filter(p => productIds.includes(p.id))
        .filter(p => (mode === 'pickup' ? true : p.delivery));

    return (
        <section id={`category-${id}`} className={styles.section}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.grid}>
                {products.map(prod => (
                    <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
