// src/components/ProductList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import type { Product } from '../types';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList: React.FC = () => {
    // теперь state у useSelector — известного типа
    const products = useSelector((state: RootState) => state.products.items);

    return (
        <div className={styles.grid}>
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
