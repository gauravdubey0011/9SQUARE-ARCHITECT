import { useEffect, useState } from 'react';
import ArchitectureVisitModal from './ArchitectureVisitModal';
import './ArchitectureExperienceCentre.css';

import experience1 from '../../assets/architecture/experience1.avif';
import experience2 from '../../assets/architecture/experience2.avif';
import experience3 from '../../assets/architecture/experience3.avif';

const experienceImages = [
  experience1,
  experience2,
  experience3,
];

export default function ArchitectureExperienceCentre() {
  const [currentImage, setCurrentImage] = useState(0);
  const [visitModalOpen, setVisitModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % experienceImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="architecture-experience">

        <div className="architecture-experience__container">

          {/* ================= LEFT INFORMATION ================= */}
          <div className="architecture-experience__info">

            <h2 className="architecture-experience__heading">
              Visit Our Experience Centre
            </h2>

            <div className="architecture-experience__details">

              <div className="architecture-experience__detail">
                <h3>ADDRESS</h3>

                <p>
                  5/66, Apna Ghar Yojna, Sector 4,
                  Near Shaheed Path, Lucknow,
                  Uttar Pradesh, 226010
                </p>
              </div>


              <div className="architecture-experience__two-column">

                <div className="architecture-experience__detail">
                  <h3>TIMINGS</h3>

                  <p>
                    Monday To Saturday | 10am to 8pm
                  </p>
                </div>

                <div className="architecture-experience__detail">
                  <h3>CONTACT NUMBER</h3>

                  <p>
                    8800333929
                  </p>
                </div>

              </div>


              <div className="architecture-experience__detail">
                <h3>FACILITIES FOR YOUR CONVENIENCE:</h3>

                <p>
                  Free Car Parking | Restrooms
                </p>
              </div>


              <div className="architecture-experience__detail">
                <h3>WHAT TO BRING FOR YOUR DESIGN CONSULTATION</h3>

                <p>
                  Floor Plan | Site Images
                </p>
              </div>

            </div>


            <button
              type="button"
              className="architecture-experience__button"
              onClick={() => setVisitModalOpen(true)}
            >
              Schedule Visit
              <span>→</span>
            </button>

          </div>


          {/* ================= RIGHT SLIDESHOW ================= */}
          <div className="architecture-experience__slider">

            {experienceImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`9Square Lucknow Experience Centre ${index + 1}`}
                className={`architecture-experience__slide ${
                  index === currentImage ? 'active' : ''
                }`}
              />
            ))}

            <div className="architecture-experience__label">
              9Square Lucknow
            </div>


            <div className="architecture-experience__dots">
              {experienceImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show experience centre image ${index + 1}`}
                  className={`architecture-experience__dot ${
                    index === currentImage ? 'active' : ''
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>

          </div>

        </div>

      </section>


      {/* Architecture-specific modal */}
      <ArchitectureVisitModal
        isOpen={visitModalOpen}
        onClose={() => setVisitModalOpen(false)}
      />
    </>
  );
}