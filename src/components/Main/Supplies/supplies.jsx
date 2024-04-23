import './supplies.css';
import PhoneMask from '../../../utils/phoneInput';

function Supplies() {
  return (
    <section className="supplies">
      <div className="supplies__container">
        <div className="supplies__info">
          <h1 className="supplies__title">
            <b>Оптовые поставки</b>
            <br></br>
            <span className="violet-text"> электронных компонентов </span>
            <br></br>
            <span className="last-text">ИЗ КИТАЯ день в день</span>
          </h1>
          <h2 className="supplies__subtitle">
            Комплексные поставки электронных компонентов и оборудования. Подберем аналоги популярных
            брендов из Европы в условиях санкций.
          </h2>
          <ul className="supplies__items">
            <li className="supplies__item">
              <img src="/check.png" className="supplies__item-image"></img>
              <p className="supplies__item-text">Отсрочка платежей для постоянных клиентов</p>
            </li>
            <li className="supplies__item">
              <img src="/check.png" className="supplies__item-image"></img>
              <p className="supplies__item-text">
                Бесплатная доставка по Москве и СПБ в течение 2х часов
              </p>
            </li>
            <li className="supplies__item">
              <img src="/check.png" className="supplies__item-image"></img>
              <p className="supplies__item-text">Квалифицированный персональный менеджер</p>
            </li>
          </ul>
        </div>
        <div className="supplies__form">
          <h3 className="supplies__form-title">
            закажите <br></br>обратный звонок
          </h3>
          <form className="supplies__form-info">
            <label className="supplies__form-label" htmlFor="input1">
              Ваше имя *
            </label>
            <input
              className="supplies__form-input"
              type="text"
              id="input1"
              name="input1"
              placeholder="Петров Петр"
            ></input>
            <br></br>
            <label className="supplies__form-label" htmlFor="input2">
              Ваш номер *
            </label>
            <PhoneMask id="input2" name="input2" />
            <button className="supplies__form-button">заказать звонок</button>
            <div className="supplies__form-paragraph">
              <img src="/lock.png" className="supplies__form-image"></img>
              <p className="supplies__form-text">Мы гарантируем конфиденциальность данных</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Supplies;
