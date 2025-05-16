// src/components/DeliveryModeSwitcher.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { setMode } from '../features/cart/cartSlice';

const DeliveryModeSwitcher: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const mode = useSelector((state: RootState) => state.cart.deliveryMode);

    return (
        <div style={{ margin: '1rem 0' }}>
            <button
                onClick={() => dispatch(setMode('delivery'))}
                style={{ fontWeight: mode === 'delivery' ? 'bold' : 'normal' }}
            >
                Доставка
            </button>
            <button
                onClick={() => dispatch(setMode('pickup'))}
                style={{ fontWeight: mode === 'pickup' ? 'bold' : 'normal', marginLeft: 8 }}
            >
                Самовывоз
            </button>
        </div>
    );
};

export default DeliveryModeSwitcher;
