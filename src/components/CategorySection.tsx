// src/components/CategorySection.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductCard from './ProductCard';
import styles from './CategorySection.module.css';

interface Props {
    id: number;
    name: string;
    productIds: number[];
}

const CategorySection: React.FC<Props> = ({ id, name, productIds }) => {
    const allProducts = useSelector((state: RootState) => state.products.items);
    const mode = useSelector((state: RootState) => state.cart.deliveryMode);

    const products = allProducts.filter(p => productIds.includes(p.id));
    const filtered = products.filter(p =>
        mode === 'pickup' ? true : p.delivery
    );

    return (
        <section id={`category-${id}`} className={styles.section}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.grid}>
                {filtered.map(prod => (
                    <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
