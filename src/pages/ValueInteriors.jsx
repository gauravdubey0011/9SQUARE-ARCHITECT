import CategoryHero from '../components/category/CategoryHero';
import CategoryGallery from '../components/category/CategoryGallery';
import Footer from "../components/layout/Footer";
// Add your images here
import heroImage from '../assets/value-interiors/value11.jpg';

import img1 from '../assets/value-interiors/value1.jpg';
import img2 from '../assets/value-interiors/value2.jpg';
import img3 from '../assets/value-interiors/value3.jpg';
import img4 from '../assets/value-interiors/value4.jpg';
import img5 from '../assets/value-interiors/value5.avif';
import img6 from '../assets/value-interiors/value6.avif';
import img7 from '../assets/value-interiors/value7.avif';
import img8 from '../assets/value-interiors/value8.avif';
import img9 from '../assets/value-interiors/value9.jpeg';
import img10 from '../assets/value-interiors/value10.jpg';

const valueDesigns = [
  {
    image: img1,
    caption: 'Affordable Modern Living Room Interior',
  },
  {
    image: img2,
    caption: 'Functional Interior Design for Modern Homes',
  },
  {
    image: img3,
    caption: 'Smart and Affordable Bedroom Interior',
  },
  {
    image: img4,
    caption: 'Modern Dining Area with Practical Storage',
  },
  {
    image: img5,
    caption: 'Budget-Friendly Modular Kitchen Design',
  },
  {
    image: img6,
    caption: 'Compact Bedroom Interior for Smart Living',
  },
  {
    image: img7,
    caption: 'Affordable Full Home Interior Design',
  },
  {
    image: img8,
    caption: 'Minimal Modern Interior with Smart Storage',
  },
  {
    image: img9,
    caption: 'Functional Interior for Compact Apartments',
  },
  {
    image: img10,
    caption: 'Complete Value Interior Solution',
  },
];

export default function ValueInteriors() {
  return (
    <>
      <CategoryHero
        image={heroImage}
        heading="Wardrobe Designs"
        buttonLabel="Book a Session"
      />

      <CategoryGallery
        sectionHeading="Wardrobe Designs"
        items={valueDesigns}
      />
      <Footer/>
    </>
  );
}