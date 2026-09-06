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
    internal: true,
  },
  {
    image: card2,
    title: 'Full Home Interiors',
    description: 'Turnkey interior solutions for your home',
    link: '/interiors/full-home-interiors',
    internal: true,
  },
  {
  image: card3,
  title: 'Kitchen Interiors',
  description: 'Tailored interiors that redefine elegance',
  link: '/interiors/luxury-interiors',
  internal: true,
},
{
  image: card4,
  title: 'Wardrobe Interiors',
  description: 'Quality interiors at very affordable prices',
  link: '/interiors/value-interiors',
  internal: true,
},
];

export default function OneStopShop() {
  return (
    <section className="onestop">
      <h2 className="onestop__heading">Our Offerings</h2>
      <p className="onestop__subheading">
        Be it end-to-end interiors, renovation or modular solutions, we have it all for your home
        or office. With a wide range of furniture &amp; decor, we have your back from start to finish.
      </p>

      <div className="onestop__grid">
        {cards.map((card, index) => (
          <div className="onestop-card" key={index}>
            <div className="onestop-card__image-wrap">
              <img src={card.image} alt={card.title} className="onestop-card__image" />
            </div>
            <div className="onestop-card__body">
              <h3 className="onestop-card__title">{card.title}</h3>
              <p className="onestop-card__description">{card.description}</p>

              {card.internal ? (
                <Link to={card.link} className="onestop-card__arrow" aria-label={`Explore ${card.title}`}>
                  ›
                </Link>
              ) : (
                <a href={card.link} className="onestop-card__arrow" aria-label={`Explore ${card.title}`}>
                  ›
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}