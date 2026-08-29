import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EstimateSection.css';


import homeIcon from '../../assets/icons/interior-design.png';
import homeBadge from '../../assets/icons/calculator.png';

import kitchenIcon from '../../assets/icons/kitchen.png';
import kitchenBadge from '../../assets/icons/calculator.png';

import wardrobeIcon from '../../assets/icons/wardrobe.png';
import wardrobeBadge from '../../assets/icons/calculator.png';


const flipWords = ['Full Home', 'Kitchen', 'Wardrobe'];

// const cards = [
//   {
//     title: 'Full Home Interior',
//     description: 'Know the estimate price for your full home interiors',
//     link: '/estimate/home-interior',
//   },
//   {
//     title: 'Kitchen',
//     description: 'Get an approximate costing for your kitchen interior.',
//     link: '/estimate/kitchen',
//   },
//   {
//     title: 'Wardrobe',
//     description: 'Our estimate for your dream wardrobe',
//     link: '/estimate/wardrobe',
//   },
// ];


const cards = [
  {
    title: 'Full Home Interior',
    description: 'Know the estimate price for your full home interiors',
    link: '/estimate/home-interior',
    mainIcon: homeIcon,
    badgeIcon: homeBadge,
  },
  {
    title: 'Kitchen',
    description: 'Get an approximate costing for your kitchen interior.',
    link: '/estimate/kitchen',
    mainIcon: kitchenIcon,
    badgeIcon: kitchenBadge,
  },
  {
    title: 'Wardrobe',
    description: 'Our estimate for your dream wardrobe',
    link: '/estimate/wardrobe',
    mainIcon: wardrobeIcon,
    badgeIcon: wardrobeBadge,
  },
];

export default function EstimateSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % flipWords.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="estimate" id="estimate-section">
      <h2 className="estimate__heading">
        Get the estimate for your{' '}
        <span className="estimate__flip-wrap">
          <span key={wordIndex} className="estimate__flip-word">
            {flipWords[wordIndex]}
          </span>
        </span>
      </h2>

      <p className="estimate__subheading">
        Calculate the approximate cost of doing up your home interiors
      </p>

      <div className="estimate__grid">
        {cards.map((card) => (
          <div className="estimate-card" key={card.title}>
            {/* <div className="estimate-card__icons">
              <div className="estimate-card__icon-main" />
              <div className="estimate-card__icon-badge" />
            </div> */}

              <div className="estimate-card__icons">
                <div className="estimate-card__icon-main">
                  <img
                    src={card.mainIcon}
                    alt=""
                    className="estimate-card__icon-image"
                  />
                </div>

                <div className="estimate-card__icon-badge">
                  <img
                    src={card.badgeIcon}
                    alt=""
                    className="estimate-card__icon-image"
                  />
                </div>
              </div>



            <h3 className="estimate-card__title">
              {card.title}
            </h3>

            <p className="estimate-card__description">
              {card.description}
            </p>

            <Link
              to={card.link}
              className="estimate-card__button"
            >
              CALCULATE
              <span className="estimate-card__arrow">›</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}