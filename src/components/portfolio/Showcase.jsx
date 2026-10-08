import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Showcase.css';
import showcaseProjects from '../../data/showcaseProjects';
import ScrollReveal from '../common/ScrollReveal';


function ShowcaseCard({ project }) {
  const { media, title, slug } = project;
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
              alt={title}
              className={`showcase-card__image ${isActive ? 'active' : ''}`}
            />
          );
        })}

        <Link to={`/projects/${slug}`} className="showcase-card__image-action" aria-label={`View project: ${title}`} />

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

      <Link to={`/projects/${slug}`} className="showcase-card__project-link">
        <span className="showcase-card__caption">{title}</span>
      </Link>
    </div>
  );
}


export default function Showcase() {
  const total = showcaseProjects.length;
  const [startIndex, setStartIndex] = useState(0);

  // Desktop: show only 3 cards
  const visibleProjects = [0, 1, 2].map(
    (offset) => showcaseProjects[(startIndex + offset) % total]
  );

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="showcase" id="projects">

      <ScrollReveal as="h2" className="showcase__heading">
        End-to-End Interiors — Delivered Seamlessly
      </ScrollReveal>


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
              <ScrollReveal key={`${startIndex}-${index}`} delay={index * 90}>
                <ShowcaseCard project={project} />
              </ScrollReveal>
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

        {showcaseProjects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={(index % 3) * 90}>
            <ShowcaseCard project={project} />
          </ScrollReveal>
        ))}

      </div>

    </section>
  );
}
