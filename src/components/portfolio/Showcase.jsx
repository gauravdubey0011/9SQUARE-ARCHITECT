import { useState, useEffect, useRef } from 'react';
import './Showcase.css';

import p1img1 from '../../assets/showcase/p1-1.jpg';
import p1img2 from '../../assets/showcase/p1-2.jpg';
import p1video from '../../assets/video1.mp4';

import p2img1 from '../../assets/showcase/p2-1.jpg';
import p2img2 from '../../assets/showcase/p2-2.jpg';
import p2video from '../../assets/video2.mp4';

import p3img1 from '../../assets/showcase/p3-1.avif';
import p3img2 from '../../assets/showcase/p3-2.avif';
import p3video from '../../assets/video3.mp4';

import p4img1 from '../../assets/showcase/p4-1.jpg';
import p4img2 from '../../assets/showcase/p4-2.avif';
import p4video from '../../assets/video4.mp4';

import p5img1 from '../../assets/showcase/p1-2.jpg';
import p5img2 from '../../assets/showcase/p1-1.jpg';
import p5video from '../../assets/video5.mp4';

import p6img1 from '../../assets/showcase/p4-2.avif';
import p6img2 from '../../assets/showcase/p4-1.jpg';
import p6video from '../../assets/video6.mp4';


const projects = [
  {
    media: [
      { type: 'video', src: p1video },
      { type: 'image', src: p1img1 },
      { type: 'image', src: p1img2 },
    ],
    caption: 'Contemporary Dining Room with Display Cabinets',
  },
  {
    media: [
      { type: 'video', src: p2video },
      { type: 'image', src: p2img1 },
      { type: 'image', src: p2img2 },
    ],
    caption: 'Modern Bedroom with Bay Window Seating',
  },
  {
    media: [
      { type: 'video', src: p3video },
      { type: 'image', src: p3img1 },
      { type: 'image', src: p3img2 },
    ],
    caption: 'Elegant Living Area with Compact Puja Unit',
  },
  {
    media: [
      { type: 'video', src: p4video },
      { type: 'image', src: p4img1 },
      { type: 'image', src: p4img2 },
    ],
    caption: 'Minimal Kitchen with Breakfast Counter',
  },
  {
    media: [
      { type: 'video', src: p5video },
      { type: 'image', src: p5img1 },
      { type: 'image', src: p5img2 },
    ],
    caption: 'Warm Study Room with Custom Shelving',
  },
  {
    media: [
      { type: 'video', src: p6video },
      { type: 'image', src: p6img1 },
      { type: 'image', src: p6img2 },
    ],
    caption: 'Luxury Master Suite with Walk-in Wardrobe',
  },
];


function ShowcaseCard({ media, caption }) {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef({});

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % media.length);
  };

  // Reset to first slide whenever this card's media set changes (e.g. arrow navigation)
  useEffect(() => {
    setCurrent(0);
  }, [media]);

  // Play the active video, pause every other video
  useEffect(() => {
    media.forEach((item, index) => {
      if (item.type !== 'video') return;
      const vid = videoRefs.current[index];
      if (!vid) return;

      if (index === current) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [current, media]);

  // Images auto-advance on a timer; videos advance via onEnded instead
  useEffect(() => {
    const activeItem = media[current];
    if (activeItem.type === 'image') {
      const timer = setTimeout(goNext, 10000);
      return () => clearTimeout(timer);
    }
    // video case: no timer here, handled by onEnded on the <video>
  }, [current, media]);

  return (
    <div className="showcase-card">
      <div className="showcase-card__image-wrap">

        {media.map((item, index) => {
          const isActive = index === current;

          if (item.type === 'video') {
            return (
              <video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.src}
                muted
                playsInline
                className={`showcase-card__image ${isActive ? 'active' : ''}`}
                onEnded={isActive ? goNext : undefined}
              />
            );
          }

          return (
            <img
              key={index}
              src={item.src}
              alt={caption}
              className={`showcase-card__image ${isActive ? 'active' : ''}`}
            />
          );
        })}

        <div className="showcase-card__dots">
          {media.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show item ${index + 1}`}
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
                media={project.media}
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
            media={project.media}
            caption={project.caption}
          />
        ))}

      </div>

    </section>
  );
}