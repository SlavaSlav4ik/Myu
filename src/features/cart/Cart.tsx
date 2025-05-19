// src/features/cart/Cart.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
} from './cartSlice';
import styles from './Cart.module.css';

const Cart: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, deliveryMode: mode } = useSelector((state: RootState) => state.cart);
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [error, setError] = useState('');

    const handleCheckout = () => {
        if (mode === 'delivery' && (!street.trim() || !house.trim())) {
            setError('Пожалуйста, заполните адрес доставки');
            return;
        }
        console.log('Order:', { mode, address: { street, house }, items, total });
        dispatch(clearCart());
    };

    if (items.length === 0) {
        return <p className={styles.header}>Корзина пуста</p>;
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cart_main}>
            <h2 className={styles.header}>Ваша корзина</h2>

            <ul className={styles.list}>
                {items.map(i => (
                    <li key={i.id} className={styles.item}>
                        <div className={styles.info}>
                            <div className={styles.name}>{i.name}</div>
                            <div className={styles.priceQty}>
                                {i.price} ₽ × {i.quantity}
                            </div>
                        </div>
                        <div className={styles.controls}>
                            <button
                                className={styles.button}
                                onClick={() => dispatch(decreaseQuantity(i.id))}
                            >
                                −
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => dispatch(increaseQuantity(i.id))}
                            >
                                +
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => dispatch(removeFromCart(i.id))}
                            >
                                Удалить
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className={styles.total}>Итого: {total} ₽</div>

            {mode === 'delivery' && (
                <div className={styles.address}>
                    <h3 className={styles.header}>Адрес доставки</h3>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Улица"
                        value={street}
                        onChange={e => { setStreet(e.target.value); setError(''); }}
                    />
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Дом, кв."
                        value={house}
                        onChange={e => { setHouse(e.target.value); setError(''); }}
                    />
                    {error && <div className={styles.error}>{error}</div>}
                </div>
            )}

            <button
                className={styles.checkoutBtn}
                onClick={handleCheckout}
                disabled={mode === 'delivery' && (!street.trim() || !house.trim())}
            >
                Оформить заказ
            </button>
            </div>
            </div>
    );
};

export default Cart;
