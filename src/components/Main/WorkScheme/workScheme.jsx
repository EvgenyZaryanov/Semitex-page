import './workScheme.css';

function WorkScheme() {
  return (
    <section className="workScheme">
      <div className="workScheme__container">
        <h2 className="workScheme__title">Схема работы</h2>
        <h3 className="workScheme__subtitle">
          Lorem ipsum dolor sit amet consectetur. Augue velit in enim sagittis imperdiet sit mauris.
          Vitae sit in fusce massa amet.
        </h3>
        <ul className="workScheme__gridBox">
          <li className="workScheme__gridBoxItem cover1">
            <div className="workScheme__number">01</div>
            <h2 className="workScheme__gridBoxTitle extraGap">вы оставляете заявку</h2>
            <p className="workScheme__gridBoxSubtitle">
              Отправить запрос вы можете любым удобным для вас способом: например, через форму на
              сайте. Также вы можете связаться с нами напрямую.
            </p>
          </li>
          <li className="workScheme__gridBoxItem cover2">
            <div className="workScheme__number">02</div>
            <h2 className="workScheme__gridBoxTitle">
              мы проверяем<br></br> наличие позиций
            </h2>
            <p className="workScheme__gridBoxSubtitle">
              Проверяем наличие на складе,<br></br> а также актуальность производства (возможна
              замена, если необходимо.)<br></br> Если требуется замена - подбираем аналоги и
              привозим на заказ.
            </p>
          </li>
          <li className="workScheme__gridBoxItem cover3">
            <div className="workScheme__number">03</div>
            <h2 className="workScheme__gridBoxTitle">
              формируем коммерческое<br></br> предложение
            </h2>
            <p className="workScheme__gridBoxSubtitle">
              На данном этапе мы с вами согласуем ценовое предложение, обговариваем сроки поставки и
              условия оплаты.
            </p>
          </li>
          <li className="workScheme__gridBoxItem cover6">
            <div className="workScheme__number">06</div>
            <h2 className="workScheme__gridBoxTitle extraGap">вы получаете товар</h2>
            <p className="workScheme__gridBoxSubtitle">
              Поставляем вам товар в<br></br> надлежащей упаковке в<br></br> сопровождении
              оригиналов всех необходимых документов либо вы забираете его самовывозом.
            </p>
          </li>
          <li className="workScheme__gridBoxItem cover5">
            <div className="workScheme__number extraNumber">05</div>
            <h2 className="workScheme__gridBoxTitle extraGap extraGap_config">
              мы выполняем заказ
            </h2>
            <p className="workScheme__gridBoxSubtitle">
              Товар поступает на склад в Москву<br></br> или Санкт-Петербург, где мы<br></br>{' '}
              сверяем правильность поставки и<br></br> начинаем сборку.
            </p>
          </li>
          <li className="workScheme__gridBoxItem cover4">
            <div className="workScheme__number extraNumber">04</div>
            <h2 className="workScheme__gridBoxTitle extraGap extraGap_config">проводим оплату</h2>
            <p className="workScheme__gridBoxSubtitle">
              Далее, после получения авансового платежа, мы размещаем заказ.
            </p>
          </li>
        </ul>
        <button className="workScheme__button">оставить заявку</button>
      </div>
    </section>
  );
}

export default WorkScheme;
