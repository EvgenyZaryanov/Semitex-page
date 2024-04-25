import './manufacturers.css';
import ReactSlider from '../../../utils/reactSlider';

function Manufacturers() {
  return (
    <section id="target" className="manufacturers">
      <div className="manufacturers__container">
        <h2 className="manufacturers__title">Наши производители</h2>
        <ReactSlider />
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
