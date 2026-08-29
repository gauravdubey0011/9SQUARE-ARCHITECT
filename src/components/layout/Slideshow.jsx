import { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import './Slideshow.css';

import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';

const slides = [
  {
    image: slide1,
    tag: 'Academics',
    thought: 'Designing spaces, defining lives.',
  },
  {
    image: slide2,
    tag: 'Sports',
    thought: 'Architecture and interiors, crafted with care.',
  },
  {
    image: slide3,
    tag: 'Achievements',
    thought: 'Precision in every square foot.',
  },
  {
    image: slide4,
    tag: 'Community',
    thought: 'From vision to living room.',
  },
];

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const { openDesignerModal } = useModal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-dim" />
          <div className="slide-overlay">
            <p className="slide-thought">{slide.thought}</p>
            <button className="slide-cta" onClick={openDesignerModal}>
              Get Free Quote
            </button>
          </div>
        </div>
      ))}

      <div className="slide-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;