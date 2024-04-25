import './header.css';
import { useState } from 'react';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  function closeNav() {
    setIsNavOpen(false);
  }

  return (
    <header className="header">
      <div className="header__container">
        <img src="/logo.svg" className="header__logo" alt="логотип компании"></img>
        <nav className={`header__nav ${isNavOpen ? 'active' : ''}`}>
          <ul className="header__nav-table">
            <li className="header__nav-item">Каталог</li>
            <li className="header__nav-item">
              <a href="#target">Производители</a>
            </li>
            <li className="header__nav-item">Для кого мы работаем</li>
            <li className="header__nav-item">Сертификаты</li>
            <li className="header__nav-item">О нас</li>
            <li className="header__nav-item">
              <a href="#faq">FAQ</a>
            </li>
            <li className="header__nav-item">Контакты</li>
          </ul>
          <div className="header__nav-contacts">
            <img src="/phone-icon.png" className="header__nav-image"></img>
            <p className="header__nav-telNumber">
              +7 (812) <b>313-58-45</b>
            </p>
          </div>
          <button className="header__close-button" onClick={closeNav}>
            &times;
          </button>
        </nav>
        {isNavOpen && <div className="overlay" onClick={closeNav}></div>}
        <button className="header__burger" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
