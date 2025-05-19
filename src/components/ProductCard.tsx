// src/components/ProductCard.tsx
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decreaseQuantity, increaseQuantity} from '../features/cart/cartSlice';
import type { Product } from '../types';
import type {AppDispatch, RootState} from '../store/store';
import styles from './ProductCard.module.css';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItem = useSelector((s: RootState) =>
        s.cart.items.find(i => i.id === product.id)
    );
    const quantity = cartItem?.quantity ?? 0;


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
                {quantity === 0 ? (
                    <button className={styles.button} onClick={() => dispatch(addToCart(product))}>
                        Добавить
                    </button>
                ) : (
                    <div className={styles.qtyControls}>
                        <button onClick={() => dispatch(decreaseQuantity(product.id))}>−</button>
                        <span>{quantity}</span>
                        <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProductCard;