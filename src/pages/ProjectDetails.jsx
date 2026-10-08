import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import ScrollReveal from '../components/common/ScrollReveal';
import showcaseProjects from '../data/showcaseProjects';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = showcaseProjects.find((item) => item.slug === slug);
  const [activeIndex, setActiveIndex] = useState(0);
  const { openDesignerModal } = useModal();

  if (!project) return <Navigate to="/" replace />;

  const activeMedia = project.media[activeIndex];
  const otherProjects = showcaseProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main className="project-page">
      <section className="project-page__hero">
        <div className="project-page__hero-copy">
          <Link to="/#projects" className="project-page__back">← Back to projects</Link>
          <p className="project-page__eyebrow">Selected project</p>
          <h1>{project.title}</h1>
          <p className="project-page__intro">
            Explore the finished space through its video and image gallery.
          </p>
        </div>

        <div className="project-page__gallery">
          <div className="project-page__featured-media">
            {activeMedia.type === 'video' ? (
              <video key={activeMedia.src} src={activeMedia.src} controls playsInline preload="metadata" />
            ) : (
              <img key={activeMedia.src} src={activeMedia.src} alt={project.title} />
            )}
          </div>
          <div className="project-page__thumbnails" aria-label="Project gallery">
            {project.media.map((media, index) => (
              <button
                key={media.src}
                type="button"
                className={`project-page__thumbnail${activeIndex === index ? ' is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${media.type === 'video' ? 'video' : `image ${index + 1}`}`}
                aria-pressed={activeIndex === index}
              >
                {media.type === 'video' ? (
                  <video src={media.src} muted playsInline preload="metadata" />
                ) : (
                  <img src={media.src} alt="" />
                )}
                {media.type === 'video' && <span aria-hidden="true">▶</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal className="project-page__cta-wrap">
        <div className="project-page__cta">
          <div>
            <p className="project-page__eyebrow">Planning a space of your own?</p>
            <h2>Let’s design something that feels like you.</h2>
          </div>
          <button type="button" onClick={openDesignerModal}>Talk to a designer <span aria-hidden="true">↗</span></button>
        </div>
      </ScrollReveal>

      <section className="project-page__related">
        <ScrollReveal>
          <h2>Explore more projects</h2>
        </ScrollReveal>
        <div className="project-page__related-grid">
          {otherProjects.map((item, index) => {
            const image = item.media.find((media) => media.type === 'image');
            return (
              <ScrollReveal key={item.slug} delay={index * 90}>
                <Link to={`/projects/${item.slug}`} className="project-page__related-card">
                  <img src={image.src} alt="" />
                  <span>{item.title}</span>
                  <span className="project-page__related-arrow" aria-hidden="true">↗</span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
