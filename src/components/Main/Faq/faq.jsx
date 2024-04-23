import './faq.css';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaChevronUp } from 'react-icons/fa';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleActive = index => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const items = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.',
      content: `Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. 
       
        The term is also used to refer to stem cell transplants, also known as bone marrow transplants. Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence. 
         
        At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.`
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.',
      content: `Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. 
      \n
        The term is also used to refer to stem cell transplants, also known as bone marrow transplants. Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence. 
        \n
        At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.`
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.',
      content: `Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. 
      \n
        The term is also used to refer to stem cell transplants, also known as bone marrow transplants. Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence. 
        \n
        At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.`
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.',
      content: `Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. 
      \n
        The term is also used to refer to stem cell transplants, also known as bone marrow transplants. Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence. 
        \n
        At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.`
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.',
      content: `Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. 
      \n
        The term is also used to refer to stem cell transplants, also known as bone marrow transplants. Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence. 
        \n
        At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.`
    }
  ];

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Ответы на самые популярные вопросы в сфере</h2>
        <div className="faq__accordion">
          {items.map((item, index) => (
            <div key={index}>
              <h3
                className={activeIndex === index ? 'active' : ''}
                onClick={() => toggleActive(index)}
              >
                {item.title}
                <button className="faq__accordion-button">
                  {activeIndex === index ? (
                    <FaChevronUp style={{ color: '#000985', width: '7px', height: '14px' }} />
                  ) : (
                    <FaChevronDown style={{ color: '#ffff', width: '7px', height: '14px' }} />
                  )}
                </button>
              </h3>
              <p style={activeIndex === index ? { display: 'block' } : { display: 'none' }}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
