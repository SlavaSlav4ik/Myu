import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const cartCount = useSelector((state: RootState) =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.appHeader}>
            <div className={styles.container}>
                {/* Бургер */}
                <button
                    className={styles.burger}
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                </button>

                {/* Навигация */}
                <nav
                    className={`${styles.navLinks} ${open ? styles.open : ''}`}
                    onClick={() => setOpen(false)}
                >
                    <Link to="/" className={styles.navLink}>Меню</Link>
                    <Link to="/menu" className={styles.navLink}>Купоны</Link>
                    <Link to="/about" className={styles.navLink}>О нас</Link>
                    <Link to="/contact" className={styles.navLink}>Контакты</Link>
                </nav>

                {/* Корзина */}
                <div className={styles.cartWrapper}>
                    <Link to="/cart" className={styles.cartLink}>
                        Корзина ({cartCount})
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
