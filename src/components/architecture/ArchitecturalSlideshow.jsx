import { useEffect, useState } from 'react';
import './ArchitecturalSlideshow.css';

import architecture1 from '../../assets/architecture/architecture1.jpg';
import architecture2 from '../../assets/architecture/architecture2.jpg';
import architecture3 from '../../assets/architecture/architecture3.jpg';
import architecture4 from '../../assets/architecture/architecture4.jpg';
import architecture5 from '../../assets/architecture/architecture5.avif';
import architecture6 from '../../assets/architecture/architecture6.jpg';

const slides = [
  {
    image: architecture1,
    location: 'Samrat Samprati Museum, Koba',
    description: 'Embodying Serenity',
  },
  {
    image: architecture2,
    location: 'Modern Residence, Lucknow',
    description: 'Contemporary Living',
  },
  {
    image: architecture3,
    location: 'Urban Residence, Varanasi',
    description: 'Architecture in Harmony',
  },
  {
    image: architecture4,
    location: 'Private Villa, Lucknow',
    description: 'Form Meets Function',
  },
  {
    image: architecture5,
    location: 'Modern Cultural Centre',
    description: 'Designed for Connection',
  },
  {
    image: architecture6,
    location: 'Contemporary Residence',
    description: 'Timeless Architecture',
  },
];

export default function ArchitecturalSlideshow() {
  const [current, setCurrent] = useState(0);

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => {
        if (previous === totalSlides - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  function goNext() {
    if (current < totalSlides - 1) {
      setCurrent((previous) => previous + 1);
    }
  }

  function goPrevious() {
    if (current > 0) {
      setCurrent((previous) => previous - 1);
    }
  }

  return (
    <section className="architectural-slideshow">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`architectural-slide ${
            index === current
              ? 'architectural-slide--active'
              : ''
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="architectural-slide__dim" />
        </div>
      ))}


      {/* Previous Arrow */}
      {current > 0 && (
        <button
          type="button"
          className="architectural-slideshow__arrow architectural-slideshow__arrow--left"
          onClick={goPrevious}
          aria-label="Previous project"
        >
          ‹
        </button>
      )}


      {/* Next Arrow */}
      {current < totalSlides - 1 && (
        <button
          type="button"
          className="architectural-slideshow__arrow architectural-slideshow__arrow--right"
          onClick={goNext}
          aria-label="Next project"
        >
          ›
        </button>
      )}


      {/* Bottom Information */}
      <div className="architectural-slideshow__info">

        <h2 className="architectural-slideshow__location">
          {slides[current].location}
        </h2>

        <p className="architectural-slideshow__description">
          {slides[current].description}
        </p>


        {/* Dots */}
        <div className="architectural-slideshow__dots">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`architectural-slideshow__dot ${
                index === current
                  ? 'architectural-slideshow__dot--active'
                  : ''
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}