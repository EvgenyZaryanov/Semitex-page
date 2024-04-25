import './faq.css';
import $ from 'jquery';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { items } from '../../../utils/constants';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = index => {
    setActiveIndex(activeIndex === index ? null : index);
    const $accordionItems = $('.faq__accordion h3');

    $accordionItems.eq(index).next('p').slideToggle();
    $accordionItems.eq(index).toggleClass('active');
    $accordionItems.not($accordionItems.eq(index)).removeClass('active');
    $('.faq__accordion p').not($('.faq__accordion p').eq(index)).slideUp();

    const $button = $accordionItems.eq(index).find('.faq__accordion-button');
    $button.find('svg').toggleClass('rotate-up');
  };

  return (
    <section id="faq" className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Ответы на самые популярные вопросы в сфере</h2>
        <div className="faq__accordion">
          {items.map((item, index) => (
            <div key={index}>
              <h3 className="" onClick={() => toggleActive(index)}>
                {item.title}
                <button className="faq__accordion-button">
                  {index === activeIndex ? (
                    <FaChevronUp
                      style={{ color: '#000985', width: '1.367vw', height: '1.367vw' }}
                    />
                  ) : (
                    <FaChevronDown
                      style={{ color: '#ffff', width: '1.367vw', height: '1.367vw' }}
                    />
                  )}
                </button>
              </h3>
              <p style={{ display: 'none' }}>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Faq;
