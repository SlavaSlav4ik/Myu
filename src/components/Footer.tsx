import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
    <footer className={styles.footer}>
        <div className={styles.grid}>
            <div className={styles.column}>
                <h4 className={styles.title}>Компания</h4>
                <ul className={styles.list}>
                    <li>О компании</li>
                    <li>Вопросы и ответы</li>
                    <li>Карьера</li>
                    <li>Университет</li>
                    <li>Вакансии</li>
                </ul>
            </div>

            <div className={styles.column}>
                <h4 className={styles.title}>Бизнес с ROSTIC’S</h4>
                <ul className={styles.list}>
                    <li>Политика обработки и защиты ПДн</li>
                    <li>Состав блюд</li>
                </ul>
            </div>

            <div className={styles.column}>
                <h4 className={styles.title}>Мы рядом</h4>
                <ul className={styles.list}>
                    <li>Вконтакте</li>
                    <li>Телеграм</li>
                </ul>
            </div>

            <div className={styles.column}>
                <h4 className={styles.title}>Контакты</h4>
                <ul className={styles.list}>
                    <li>Форма обратной связи</li>
                    <li>Почта для СМИ</li>
                    <li>Телефон горячей линии: +7 800 707-5477</li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;
