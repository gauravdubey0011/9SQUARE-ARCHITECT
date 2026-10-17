import ScrollReveal from '../common/ScrollReveal';
import './Category.css';

export default function CategoryGallery({ sectionHeading, items }) {
  return (
    <section className="category-gallery">
      <h2 className="category-gallery__heading">{sectionHeading}</h2>

      <div className="category-gallery__grid">
        {items.map((item, index) => (
          <ScrollReveal
            className="category-image-reveal"
            key={`${item.caption}-${index}`}
            delay={(index % 3) * 70}
          >
            <figure className="category-image-card" tabIndex={0}>
              <img
                src={item.image}
                alt={item.caption}
                className="category-image-card__image"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
              <figcaption className="category-image-card__label">{item.caption}</figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
