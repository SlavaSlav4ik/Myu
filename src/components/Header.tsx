import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const cartCount = useSelector((state: RootState) =>
        state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    return (
        <header className={styles.appHeader}>
            <div className={styles.container}>
                {/*<Link to="/" className={styles.logoLink}>
                    <img src={@} alt="Restaurant Logo" className={styles.logo}/>
                    <h1 className={styles.title}>Fast Food</h1>
                </Link>*/}
                <nav className={styles.navLinks}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/menu" className={styles.navLink}>Menu</Link>
                    <Link to="/about" className={styles.navLink}>About</Link>
                    <Link to="/contact" className={styles.navLink}>Contact</Link>
                </nav>
                <Link to="/cart" className={styles.cartLink}>
                    Cart ({cartCount})
                </Link>
            </div>
        </header>
    );
};

export default Header;
