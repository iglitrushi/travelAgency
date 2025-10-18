import { useRef, useState } from 'react';
import './Winter.css';
import next_arrow from './assets/next-arrow.png';
import back_arrow from './assets/back-arrow.png';
import estonia from './assets/estonia.png';
import canada from './assets/canada.png';
import newYork from './assets/newYork.png';

const Winter = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0);

  const slideForward = () => {
    const totalSlides = slider.current.children.length; 
    const maxTx = -(totalSlides - 1) * 25; 
  
    if (tx > maxTx) {
      const newTx = tx - 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };
  
  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  return (
    <div className='winter'>
      <img src={next_arrow} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_arrow} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="winter-info">
                <img src={estonia} alt="Estonia" />
                <div>
                  <h3>Be there to enjoy this view</h3>
                  <span>Estonia</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="winter-info">
                <img src={canada} alt="Canada" />
                <div>
                  <h3>Be there to enjoy this view</h3>
                  <span>Canada</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="winter-info">
                <img src={newYork} alt="New York" />
                <div>
                  <h3>Experience the magic of New York in winter</h3>
                  <span>New York</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Winter;