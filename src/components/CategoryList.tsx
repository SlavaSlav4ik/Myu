import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styles from './CategoryList.module.css';

const CategoryList: React.FC = () => {
    const categories = useSelector((s: RootState) => s.categories.items);
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        const sections = categories.map(cat =>
            document.getElementById(`category-${cat.id}`)
        ).filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = Number(entry.target.id.replace('category-', ''));
                        setActiveId(id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, [categories]);

    const scrollTo = (id: number) => {
        const el = document.getElementById(`category-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.wrapper}>
            {categories.map(cat => (
                <button
                    key={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className={`${styles.button} ${activeId === cat.id ? styles.active : ''}`}
                >
                    {cat.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryList;
