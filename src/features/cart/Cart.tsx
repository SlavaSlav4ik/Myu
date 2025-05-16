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

const Cart: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, deliveryMode: mode } = useSelector((state: RootState) => state.cart);
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    // Локальное состояние для полей адреса
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [error, setError] = useState('');

    const handleCheckout = () => {
        if (mode === 'delivery' && (!street.trim() || !house.trim())) {
            setError('Пожалуйста, заполните адрес доставки');
            return;
        }
        // Здесь отправляем на API или в консоль
        console.log('Order:', { mode, address: { street, house }, items, total });
        dispatch(clearCart());
    };

    if (items.length === 0) {
        return <p>Корзина пуста</p>;
    }

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Ваша корзина</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {items.map(i => (
                    <li key={i.id} style={{ marginBottom: '1rem' }}>
                        <strong>{i.name}</strong> — {i.price} ₽ × {i.quantity}
                        <div style={{ marginTop: '0.5rem' }}>
                            <button onClick={() => dispatch(decreaseQuantity(i.id))}>−</button>
                            <button onClick={() => dispatch(increaseQuantity(i.id))}>+</button>
                            <button onClick={() => dispatch(removeFromCart(i.id))}>Удалить</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p><strong>Итого:</strong> {total} ₽</p>

            {mode === 'delivery' && (
                <div style={{ margin: '1rem 0' }}>
                    <h3>Адрес доставки</h3>
                    <div>
                        <input
                            type="text"
                            placeholder="Улица"
                            value={street}
                            onChange={e => { setStreet(e.target.value); setError(''); }}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Дом, кв."
                            value={house}
                            onChange={e => { setHouse(e.target.value); setError(''); }}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            )}

            <button onClick={handleCheckout}>
                Оформить заказ
            </button>
        </div>
    );
};

export default Cart;
