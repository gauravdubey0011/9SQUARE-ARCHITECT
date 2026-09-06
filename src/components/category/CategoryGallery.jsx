import './Category.css';

export default function CategoryGallery({ sectionHeading, items }) {
  return (
    <section className="category-gallery">
      <h2 className="category-gallery__heading">{sectionHeading}</h2>

      <div className="category-gallery__grid">
        {items.map((item, index) => (
          <div className="category-image-card" key={index}>
            <div className="category-image-card__image-wrap">
              <img
                src={item.image}
                alt={item.caption}
                className="category-image-card__image"
              />
            </div>

            <div className="category-image-card__footer">
              <p className="category-image-card__caption">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}