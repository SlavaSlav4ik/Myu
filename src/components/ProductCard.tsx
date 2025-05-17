// src/components/ProductCard.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import type { Product } from '../types';
import type { AppDispatch } from '../store/store';
import styles from './ProductCard.module.css';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className={styles.card}>
            {/* Картинка из поля product.img */}
            <div className={styles.imageWrapper}>
                <img
                    src={product.img}
                    alt={product.name}
                    className={styles.image}
                    loading="lazy"
                />
                {!product.delivery && (
                    <span className={styles.noDelivery}>Только самовывоз</span>
                )}
            </div>

            {/* Информация */}
            <div className={styles.info}>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.price}>{product.price} ₽</p>
                <button
                    className={styles.button}
                    onClick={() => dispatch(addToCart(product))}
                    disabled={!product.delivery}
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default ProductCard;