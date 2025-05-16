// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './features/cart/Cart';  // ваш компонент корзины
// import About from './pages/About';     // при желании добавьте
// import Contact from './pages/Contact';

const App: React.FC = () => (
    <Router>
        {/* Шапка с логотипом и меню */}
        <Header />

        {/* Основная зона под страницы */}
        <main style={{ paddingTop: '4rem' /* чтобы контент не прятался за липким хэдером */ }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    </Router>
);

export default App;
