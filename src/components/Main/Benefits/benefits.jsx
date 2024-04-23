import './benefits.css';

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <h2 className="benefits__title">Почему с нами выгодно</h2>
        <h3 className="benefits__subtitle">
          С 1996 года мы занимаемся оптовыми поставками электронных компонентов от ведущих
          производителей из Европы и Азии для Российских потребителей.{' '}
        </h3>
        <ul className="benefits__gridBox">
          <li className="gridBox-item">
            <img src="/gridItem_1.png" className="gridBox-image" alt="сертификат"></img>
            <h2 className="gridBox-title">Качественная продукция</h2>
            <p className="gridBox-subtitle">
              Все наши товары сертифицированы<br></br> и имеют сопроводительную<br></br>{' '}
              документацию.
            </p>
          </li>
          <li className="gridBox-item">
            <img src="/gridItem_2.png" className="gridBox-image" alt="сертификат"></img>
            <h2 className="gridBox-title">Индивидуальный подход</h2>
            <p className="gridBox-subtitle">
              Возможность изготовления<br></br> компонентов специально для вас<br></br> на
              заводах-изготовителя.
            </p>
          </li>
          <li className="gridBox-item">
            <img src="/gridItem_3.png" className="gridBox-image" alt="сертификат"></img>
            <h2 className="gridBox-title">Бесплатная доставка</h2>
            <p className="gridBox-subtitle">
              При наличии товара на складе и<br></br> заказе от 10 000 рублей,<br></br> доставим
              бесплатно по Москве и<br></br> СПБ в течение 2х часов.
            </p>
          </li>
          <li className="gridBox-item">
            <img src="/gridItem_4.png" className="gridBox-image" alt="сертификат"></img>
            <h2 className="gridBox-title">Подбираем аналоги</h2>
            <p className="gridBox-subtitle">
              Поможем подобрать аналоги<br></br> популярных европейских брендов<br></br> в условиях
              санкций.
            </p>
          </li>
          <li className="gridBox-item">
            <img src="/gridItem_5.png" className="gridBox-image" alt="сертификат"></img>
            <h2 className="gridBox-title">Резервный запас компонентов</h2>
            <p className="gridBox-subtitle">
              Хранение товара на наших<br></br> складах для постоянных<br></br> клиентов.
            </p>
          </li>
          <li className="gridBox-item">
            <img src="/gridItem_6.png" className="gridBox-image" alt="сертификат"></img>
            <h2 className="gridBox-title">Гибкая система оплаты</h2>
            <p className="gridBox-subtitle">
              Отсрочка платежей для<br></br> постоянных клиентов.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
