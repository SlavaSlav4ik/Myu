// src/components/ProductCard.tsx
import React from "react";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import {addToCart} from "../features/cart/cartSlice";


interface Props {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
        delivery: boolean;
    };
}

const  ProductCard: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} className={styles.image} />
                {!product.delivery && (
                    <span className={styles.noDelivery}>Нет доставки</span>
                )}
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{product.name}</h3>
                <div className={styles.price}>{product.price} ₽</div>
                <button className={styles.button} onClick={handleClick}>
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
