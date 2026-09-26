// import { useState } from 'react';
// import './Testimonials.css';

// import client1 from '../../assets/testimonials/client1.jpeg';
// import client2 from '../../assets/testimonials/client1.jpeg';
// import client3 from '../../assets/testimonials/client1.jpeg';
// import client4 from '../../assets/testimonials/client1.jpeg';
// import client5 from '../../assets/testimonials/client1.jpeg';

// const reviews = [
//   {
//     image: client1,
//     text: 'Very bad service, they deliver within the promised time. Their experience with the 9Square team has been very positive...',
//     name: 'Dhruv',
//     city: 'Lucknow',
//   },
//   {
//     image: client2,
//     text: 'Hear the dhruv family speak about their experience with 9Square and how we were able to bring their dream home to life...',
//     name: 'Gaurav',
//     city: 'Lucknow',
//   },
//   {
//     image: client3,
//     text: 'Watch Pichu talk about her 9Square journey and how his family fell in love with our service, and how we shaped their dream home...',
//     name: 'Pichu',
//     city: 'Varanasi',
//   },
//   {
//     image: client4,
//     text: 'A wonderful experience from start to finish — the team understood exactly what we wanted and delivered beyond expectations...',
//     name: 'Pakalu',
//     city: 'Varanasi',
//   },
//   {
//     image: client5,
//     text: 'Professional, punctual, and genuinely creative. Our home finally feels like us, thanks to the 9Square design team...',
//     name: 'Paro',
//     city: 'Lucknow',
//   },
// ];

// function TestimonialCard({ review }) {
//   return (
//     <div className="testimonial-card">
//       <div className="testimonial-card__image-wrap">
//         <img
//           src={review.image}
//           alt={review.name}
//           className="testimonial-card__image"
//         />
//       </div>

//       <p className="testimonial-card__text">
//         {review.text}
//       </p>

//       <p className="testimonial-card__name">
//         {review.name}
//       </p>

//       <p className="testimonial-card__city">
//         {review.city}
//       </p>
//     </div>
//   );
// }

// export default function Testimonials() {
//   const total = reviews.length;
//   const [startIndex, setStartIndex] = useState(0);

//   // Desktop shows 3 testimonials
//   const visibleReviews = [0, 1, 2].map(
//     (offset) => reviews[(startIndex + offset) % total]
//   );

//   const goNext = () => {
//     setStartIndex((prev) => (prev + 1) % total);
//   };

//   const goPrev = () => {
//     setStartIndex((prev) => (prev - 1 + total) % total);
//   };

//   return (
//     <section className="testimonials">

//       <h2 className="testimonials__heading">
//         1000+ Homes Designed with Love
//       </h2>

//       <p className="testimonials__subheading">
//         Take a closer look at the homes we've designed for our happy
//         customers. Hear their experiences, see the before-and-after magic,
//         and find out how 9Square brought their visions to life.
//       </p>


//       {/* DESKTOP */}
//       <div className="testimonials__desktop">
//         <div className="testimonials__row">

//           <button
//             className="testimonials__arrow testimonials__arrow--left"
//             onClick={goPrev}
//             aria-label="Previous testimonials"
//           >
//             ‹
//           </button>

//           <div
//             className="testimonials__grid"
//             key={startIndex}
//           >
//             {visibleReviews.map((review, index) => (
//               <TestimonialCard
//                 key={`${startIndex}-${index}`}
//                 review={review}
//               />
//             ))}
//           </div>

//           <button
//             className="testimonials__arrow testimonials__arrow--right"
//             onClick={goNext}
//             aria-label="Next testimonials"
//           >
//             ›
//           </button>

//         </div>
//       </div>


//       {/* MOBILE AND TABLET */}
//       <div className="testimonials__mobile-scroll">

//         {reviews.map((review, index) => (
//           <TestimonialCard
//             key={index}
//             review={review}
//           />
//         ))}

//       </div>

//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import './Testimonials.css';

const reviews = [
  {
    text: 'Very bad service, they deliver within the promised time. Their experience with the 9Square team has been very positive...',
    name: 'Dhruv',
  },
  {
    text: 'Hear the dhruv family speak about their experience with 9Square and how we were able to bring their dream home to life...',
    name: 'Gaurav',
  },
  {
    text: 'Watch Pichu talk about her 9Square journey and how his family fell in love with our service, and how we shaped their dream home...',
    name: 'Pichu',
  },
  {
    text: 'A wonderful experience from start to finish — the team understood exactly what we wanted and delivered beyond expectations...',
    name: 'Pakalu',
  },
  {
    text: 'Professional, punctual, and genuinely creative. Our home finally feels like us, thanks to the 9Square design team...',
    name: 'Paro',
  },
];

export default function Testimonials() {
  const total = reviews.length;
  const [current, setCurrent] = useState(0);
  const review = reviews[current];

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 10000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">Testimonials</h2>

      <p className="testimonials__subheading">
        Take a closer look at the homes we've designed for our happy
        customers. Hear their experiences, see the before-and-after magic,
        and find out how 9Square brought their visions to life.
      </p>

      <div className="testimonials__row">
        <button
          className="testimonials__arrow testimonials__arrow--left"
          onClick={goPrev}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <div className="testimonials__content" key={current}>
          <span className="testimonials__quote-mark">"</span>
          <p className="testimonials__text">{review.text}</p>
          <div className="testimonials__avatar">
            {review.name.charAt(0)}
          </div>
          <p className="testimonials__name">{review.name}</p>
          <p className="testimonials__role">Client</p>
        </div>

        <button
          className="testimonials__arrow testimonials__arrow--right"
          onClick={goNext}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      <div className="testimonials__dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`testimonials__dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}