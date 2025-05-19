// src/components/DeliveryModeSwitcher.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setMode } from '../features/cart/cartSlice';
import styles from './DeliveryModeSwitcher.module.css';

const DeliveryModeSwitcher: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const mode = useSelector((state: RootState) => state.cart.deliveryMode);

    return (
        <div className={styles.switcher}>
            {/* ползунок */}
            <div
                className={styles.slider}
                style={{ left: mode === 'delivery' ? '0%' : '50%' }}
            />

            {/* кнопки */}
            <button
                className={styles.button}
                onClick={() => dispatch(setMode('delivery'))}
            >
                Доставка
            </button>
            <button
                className={styles.button}
                onClick={() => dispatch(setMode('pickup'))}
            >
                Самовывоз
            </button>
        </div>
    );
};

export default DeliveryModeSwitcher;
