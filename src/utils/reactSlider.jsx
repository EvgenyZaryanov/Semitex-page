import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './reactSlider.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'url(/next_slide.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '50%'
      }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'url(/prev_slide.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '50%'
      }}
      onClick={onClick}
    />
  );
}
function ReactSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="slider-container">
      <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        <div className="slider-list__item item1"></div>
        <div className="slider-list__item item2"></div>
        <div className="slider-list__item item3"></div>
        <div className="slider-list__item item4"></div>
        <div className="slider-list__item item5"></div>
      </Slider>
    </div>
  );
}
export default ReactSlider;
