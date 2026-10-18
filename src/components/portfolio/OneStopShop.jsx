import { Link } from 'react-router-dom';
import './OneStopShop.css';

import card1 from '../../assets/onestop/modular.jpg';
import card2 from '../../assets/onestop/fullhome.jpg';
import card3 from '../../assets/onestop/luxury.jpg';
import card4 from '../../assets/onestop/value.jpg';

const cards = [
  {
    image: card1,
    title: 'Modular Interiors',
    description: 'Functional kitchen, wardrobe and storage',
    link: '/interiors/modular-interiors',
  },
  {
    image: card2,
    title: 'Full Home Interiors',
    description: 'Turnkey interior solutions for your home',
    link: '/interiors/full-home-interiors',
  },
  {
  image: card3,
  title: 'Kitchen Interiors',
  description: 'Tailored interiors that redefine elegance',
  link: '/interiors/luxury-interiors',
},
{
  image: card4,
  title: 'Wardrobe Interiors',
  description: 'Quality interiors at very affordable prices',
  link: '/interiors/value-interiors',
},
];

export default function OneStopShop() {
  return (
    <section className="onestop" id="interiors">
      <h2 className="onestop__heading">Our Offerings</h2>
      <p className="onestop__subheading">
        Be it end-to-end interiors, renovation or modular solutions, we have it all for your home
        or office. With a wide range of furniture &amp; decor, we have your back from start to finish.
      </p>

      <div className="onestop__grid">
        {cards.map((card) => (
          <Link
            to={card.link}
            className="onestop-card"
            key={card.title}
            aria-label={`Explore ${card.title}`}
          >
            <div className="onestop-card__image-wrap">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="onestop-card__image"
              />
            </div>
            <div className="onestop-card__body">
              <h3 className="onestop-card__title">{card.title}</h3>
              <p className="onestop-card__description">{card.description}</p>
              <span className="onestop-card__arrow" aria-hidden="true">›</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
