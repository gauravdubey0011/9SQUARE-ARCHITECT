import { useModal } from '../../context/ModalContext';
import './Category.css';

export default function CategoryHero({ image, heading, buttonLabel = 'Book a Session' }) {
  const { openDesignerModal } = useModal();

  return (
    <section className="category-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="category-hero__dim" />
      <div className="category-hero__content">
        <h1 className="category-hero__heading">{heading}</h1>
        <button className="category-hero__button" onClick={openDesignerModal}>
          {buttonLabel} <span className="category-hero__arrow">→</span>
        </button>
      </div>
    </section>
  );
}