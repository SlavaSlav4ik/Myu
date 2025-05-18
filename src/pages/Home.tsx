import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import DeliveryModeSwitcher from '../components/DeliveryModeSwitcher';
import CategoryList from '../components/CategoryList';
import CategorySection from '../components/CategorySection';
import type { AppDispatch, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {loadCategories} from "../features/products/categoriesSlice";

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((s: RootState) => s.categories.items);
    const catStatus = useSelector((s: RootState) => s.categories.status);

    useEffect(() => {
        if (catStatus === 'idle') dispatch(loadCategories());
    }, [dispatch, catStatus]);

    return (
        <>
            <DeliveryModeSwitcher />
            <CategoryList />
            <div style={{ padding: '1rem' }}>
                {categories.map(cat => (
                    <CategorySection
                        key={cat.id}
                        id={cat.id}
                        name={cat.name}
                        productIds={cat.products}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;