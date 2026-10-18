import ScrollReveal from '../common/ScrollReveal';
import './Category.css';

export default function CategoryGallery({ sectionHeading, items }) {
  return (
    <section className="category-gallery">
      <h2 className="category-gallery__heading">{sectionHeading}</h2>

      <div className="category-gallery__grid">
        {items.map((item, index) => {
          const desktopWidth = index % 3 === 1 ? '50vw' : '25vw';

          return (
            <ScrollReveal
              className="category-image-reveal"
              key={`${item.caption}-${index}`}
              delay={(index % 3) * 70}
            >
              <figure className="category-image-card" tabIndex={0}>
                <img
                  src={item.image}
                  srcSet={item.srcSet}
                  sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${desktopWidth}`}
                  alt={item.caption}
                  className="category-image-card__image"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <figcaption className="category-image-card__label">{item.caption}</figcaption>
              </figure>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
