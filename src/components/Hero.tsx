// src/components/Hero.tsx
import React from 'react';
import burgerImg from '../../assets/burger.svg';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
    <div className={styles.hero}>
        <img src={burgerImg} alt="Delicious Burger" className={styles.image} />
    </div>
);

export default Hero;
