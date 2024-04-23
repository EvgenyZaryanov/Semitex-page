import './manufacturers.css';
import { useState, useRef, useEffect } from 'react';

function Manufacturers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slides = [
    { content: <li className="slider-list__item item1"></li> },
    { content: <li className="slider-list__item item2"></li> },
    { content: <li className="slider-list__item item3"></li> },
    { content: <li className="slider-list__item item4"></li> },
    { content: <li className="slider-list__item item5"></li> }
  ];
  const slideWidth = 242;
  const gapWidth = 18;

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    sliderRef.current.style.transform = `translateX(-${currentSlide * (slideWidth + gapWidth)}px)`;
  }, [currentSlide, slideWidth, gapWidth]);

  return (
    <section className="manufacturers">
      <div className="manufacturers__container">
        <h2 className="manufacturers__title">Наши производители</h2>
        <div className="manufacturers__slider-wrapper">
          <button onClick={handlePrevSlide} className="slider-button prev"></button>
          <div className="manufacturers__slider" ref={sliderRef}>
            <ul className="slider-list">
              {slides.map((slide, index) => (
                <li key={index}>{slide.content}</li>
              ))}
            </ul>
          </div>
          <button onClick={handleNextSlide} className="slider-button next"></button>
        </div>
        <p className="manufacturers__subtitle">
          Lorem ipsum dolor sit amet consectetur. Non eget blandit in euismod felis id quisque nunc.
          Non orci lacus elit mauris velit gravida imperdiet id. Ipsum pulvinar ac ut sociis. Sed
          magna gravida consequat et euismod aenean quis mauris. Ut etiam egestas ultrices faucibus
          ultrices nisl enim consequat faucibus. Nibh id leo ullamcorper eleifend. Id at commodo
          interdum et leo.{' '}
        </p>
      </div>
    </section>
  );
}

export default Manufacturers;
