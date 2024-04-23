import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src="/logo.svg" className="footer__logo" alt="логотип компании"></img>
        <nav className="footer__nav">
          <ul className="footer__nav-table">
            <li className="footer__nav-item">Каталог</li>
            <li className="footer__nav-item">Производители</li>
            <li className="footer__nav-item">Для кого мы работаем</li>
            <li className="footer__nav-item">Сертификаты</li>
            <li className="footer__nav-item">О нас</li>
            <li className="footer__nav-item">FAQ</li>
            <li className="footer__nav-item">Контакты</li>
          </ul>
        </nav>
        <button className="footer__button">оставить заявку</button>
      </div>
    </footer>
  );
}

export default Footer;
