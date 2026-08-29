// import { useState, useEffect } from 'react';
// import './Showcase.css';

// import p1img1 from '../../assets/showcase/p1-1.jpg';
// import p1img2 from '../../assets/showcase/p1-2.jpg';
// import p2img1 from '../../assets/showcase/p2-1.jpg';
// import p2img2 from '../../assets/showcase/p2-2.jpg';
// import p3img1 from '../../assets/showcase/p3-1.avif';
// import p3img2 from '../../assets/showcase/p3-2.avif';
// import p4img1 from '../../assets/showcase/p4-1.jpg';
// import p4img2 from '../../assets/showcase/p4-2.avif';
// import p5img1 from '../../assets/showcase/p1-2.jpg';
// import p5img2 from '../../assets/showcase/p1-1.jpg';
// import p6img1 from '../../assets/showcase/p4-2.avif';
// import p6img2 from '../../assets/showcase/p4-1.jpg';

// const projects = [
//   { images: [p1img1, p1img2], caption: 'Contemporary Dining Room with Display Cabinets' },
//   { images: [p2img1, p2img2], caption: 'Modern Bedroom with Bay Window Seating' },
//   { images: [p3img1, p3img2], caption: 'Elegant Living Area with Compact Puja Unit' },
//   { images: [p4img1, p4img2], caption: 'Minimal Kitchen with Breakfast Counter' },
//   { images: [p5img1, p5img2], caption: 'Warm Study Room with Custom Shelving' },
//   { images: [p6img1, p6img2], caption: 'Luxury Master Suite with Walk-in Wardrobe' },
// ];


// function ShowcaseCard({ images, caption }) {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     setCurrent(0);
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <div className="showcase-card">
//       <div className="showcase-card__image-wrap">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={caption}
//             className={`showcase-card__image ${index === current ? 'active' : ''}`}
//           />
//         ))}

//         <div className="showcase-card__dots">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`showcase-card__dot ${index === current ? 'active' : ''}`}
//               onClick={() => setCurrent(index)}
//             />
//           ))}
//         </div>
//       </div>
//       <p className="showcase-card__caption">{caption}</p>
//     </div>
//   );
// }

// export default function Showcase() {
//   const total = projects.length;
//   const [startIndex, setStartIndex] = useState(0);

//   const visibleProjects = [0, 1, 2].map(
//     (offset) => projects[(startIndex + offset) % total]
//   );

//   const goNext = () => setStartIndex((prev) => (prev + 1) % total);
//   const goPrev = () => setStartIndex((prev) => (prev - 1 + total) % total);

//   return (
//     <section className="showcase">
//       <h2 className="showcase__heading">End-to-End Interiors — Delivered Seamlessly</h2>

//       <div className="showcase__row">
//         <button className="showcase__arrow showcase__arrow--left" onClick={goPrev} aria-label="Previous">
//           ‹
//         </button>

//         <div className="showcase__grid" key={startIndex}>
//           {visibleProjects.map((project, index) => (
//             <ShowcaseCard key={startIndex + index} images={project.images} caption={project.caption} />
//           ))}
//         </div>

//         <button className="showcase__arrow showcase__arrow--right" onClick={goNext} aria-label="Next">
//           ›
//         </button>
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from 'react';
import './Showcase.css';

import p1img1 from '../../assets/showcase/p1-1.jpg';
import p1img2 from '../../assets/showcase/p1-2.jpg';

import p2img1 from '../../assets/showcase/p2-1.jpg';
import p2img2 from '../../assets/showcase/p2-2.jpg';

import p3img1 from '../../assets/showcase/p3-1.avif';
import p3img2 from '../../assets/showcase/p3-2.avif';

import p4img1 from '../../assets/showcase/p4-1.jpg';
import p4img2 from '../../assets/showcase/p4-2.avif';

import p5img1 from '../../assets/showcase/p1-2.jpg';
import p5img2 from '../../assets/showcase/p1-1.jpg';

import p6img1 from '../../assets/showcase/p4-2.avif';
import p6img2 from '../../assets/showcase/p4-1.jpg';


const projects = [
  {
    images: [p1img1, p1img2],
    caption: 'Contemporary Dining Room with Display Cabinets',
  },
  {
    images: [p2img1, p2img2],
    caption: 'Modern Bedroom with Bay Window Seating',
  },
  {
    images: [p3img1, p3img2],
    caption: 'Elegant Living Area with Compact Puja Unit',
  },
  {
    images: [p4img1, p4img2],
    caption: 'Minimal Kitchen with Breakfast Counter',
  },
  {
    images: [p5img1, p5img2],
    caption: 'Warm Study Room with Custom Shelving',
  },
  {
    images: [p6img1, p6img2],
    caption: 'Luxury Master Suite with Walk-in Wardrobe',
  },
];


function ShowcaseCard({ images, caption }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="showcase-card">
      <div className="showcase-card__image-wrap">

        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={caption}
            className={`showcase-card__image ${
              index === current ? 'active' : ''
            }`}
          />
        ))}

        <div className="showcase-card__dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show image ${index + 1}`}
              className={`showcase-card__dot ${
                index === current ? 'active' : ''
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>

      <p className="showcase-card__caption">
        {caption}
      </p>
    </div>
  );
}


export default function Showcase() {
  const total = projects.length;
  const [startIndex, setStartIndex] = useState(0);

  // Desktop: show only 3 cards
  const visibleProjects = [0, 1, 2].map(
    (offset) => projects[(startIndex + offset) % total]
  );

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="showcase">

      <h2 className="showcase__heading">
        End-to-End Interiors — Delivered Seamlessly
      </h2>


      {/* DESKTOP VIEW */}
      <div className="showcase__desktop">

        <div className="showcase__row">

          <button
            className="showcase__arrow showcase__arrow--left"
            onClick={goPrev}
            aria-label="Previous projects"
          >
            ‹
          </button>


          <div className="showcase__grid" key={startIndex}>
            {visibleProjects.map((project, index) => (
              <ShowcaseCard
                key={`${startIndex}-${index}`}
                images={project.images}
                caption={project.caption}
              />
            ))}
          </div>


          <button
            className="showcase__arrow showcase__arrow--right"
            onClick={goNext}
            aria-label="Next projects"
          >
            ›
          </button>

        </div>

      </div>


      {/* MOBILE AND TABLET VIEW */}
      <div className="showcase__mobile-scroll">

        {projects.map((project, index) => (
          <ShowcaseCard
            key={index}
            images={project.images}
            caption={project.caption}
          />
        ))}

      </div>

    </section>
  );
}