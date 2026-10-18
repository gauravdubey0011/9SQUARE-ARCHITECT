import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Showcase.css';
import showcaseProjects from '../../data/showcaseProjects';
import ScrollReveal from '../common/ScrollReveal';


function ShowcaseCard({ project }) {
  const { media, title, slug } = project;
  const [current, setCurrent] = useState(0);
  const [isInView, setIsInView] = useState(() => !('IntersectionObserver' in window));
  const cardRef = useRef(null);
  const videoRefs = useRef({});

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % media.length);
  }, [media.length]);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { rootMargin: '160px 0px' });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Play the active video, pause every other video
  useEffect(() => {
    media.forEach((item, index) => {
      if (item.type !== 'video') return;
      const vid = videoRefs.current[index];
      if (!vid) return;

      if (index === current && isInView) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [current, isInView, media]);

  // Images auto-advance on a timer; videos advance via onEnded instead
  useEffect(() => {
    const activeItem = media[current];
    if (activeItem.type === 'image' && isInView) {
      const timer = setTimeout(goNext, 10000);
      return () => clearTimeout(timer);
    }
    // video case: no timer here, handled by onEnded on the <video>
  }, [current, goNext, isInView, media]);

  return (
    <div className="showcase-card" ref={cardRef}>
      <div className="showcase-card__image-wrap">

        {media.map((item, index) => {
          const isActive = index === current && isInView;

          if (item.type === 'video') {
            return (
              <video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                muted
                playsInline
                preload="none"
                className={`showcase-card__image ${isActive ? 'active' : ''}`}
                src={isActive ? item.src : undefined}
                onEnded={isActive ? goNext : undefined}
              />
            );
          }

          return (
            <img
              key={index}
              src={isActive ? item.src : undefined}
              srcSet={isActive ? item.srcSet : undefined}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={title}
              loading={isActive ? 'eager' : 'lazy'}
              decoding="async"
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
