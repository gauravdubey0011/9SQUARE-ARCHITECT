import CategoryHero from '../components/category/CategoryHero';
import CategoryGallery from '../components/category/CategoryGallery';
import Footer from "../components/layout/Footer";
// Add your images here
import heroImage from '../assets/luxury-interiors/luxury11.avif';

import img1 from '../assets/luxury-interiors/luxury1.avif';
import img2 from '../assets/luxury-interiors/luxury2.avif';
import img3 from '../assets/luxury-interiors/luxury3.avif';
import img4 from '../assets/luxury-interiors/luxury4.avif';
import img5 from '../assets/luxury-interiors/luxury5.avif';
import img6 from '../assets/luxury-interiors/luxury6.avif';
import img7 from '../assets/luxury-interiors/luxury7.avif';
import img8 from '../assets/luxury-interiors/luxury8.avif';
import img9 from '../assets/luxury-interiors/luxury9.avif';
import img10 from '../assets/luxury-interiors/luxury10.avif';

const luxuryDesigns = [
  {
    image: img1,
    caption: 'Elegant Luxury Living Room Interior',
  },
  {
    image: img2,
    caption: 'Premium Contemporary Living Space',
  },
  {
    image: img3,
    caption: 'Luxury Master Bedroom Interior',
  },
  {
    image: img4,
    caption: 'Sophisticated Modern Dining Space',
  },
  {
    image: img5,
    caption: 'Premium Luxury Kitchen Interior',
  },
  {
    image: img6,
    caption: 'Elegant Bedroom with Premium Finishes',
  },
  {
    image: img7,
    caption: 'Contemporary Luxury Home Interior',
  },
  {
    image: img8,
    caption: 'Luxury Lounge with Statement Furniture',
  },
  {
    image: img9,
    caption: 'Modern Luxury Interior with Bespoke Details',
  },
  {
    image: img10,
    caption: 'Complete Luxury Home Interior',
  },
];

export default function LuxuryInteriors() {
  return (
    <>
      <CategoryHero
        image={heroImage}
        heading="Kitchen Interior"
        buttonLabel="Book a Session"
      />

      <CategoryGallery
        sectionHeading="Kitchen Interior Designs"
        items={luxuryDesigns}
      />
      <Footer/>
    </>
  );
}