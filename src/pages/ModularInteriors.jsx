import CategoryHero from '../components/category/CategoryHero';
import CategoryGallery from '../components/category/CategoryGallery';
import Footer from '../components/layout/Footer';

import heroImage from '../assets/modular-interiors/kitchen10.jpg';

import img1 from '../assets/modular-interiors/kitchen1.jpg';
import img2 from '../assets/modular-interiors/kitchen2.jpg';
import img3 from '../assets/modular-interiors/kitchen3.jpg';
import img4 from '../assets/modular-interiors/kitchen4.jpg';
import img5 from '../assets/modular-interiors/kitchen5.avif';
import img6 from '../assets/modular-interiors/kitchen6.avif';
import img7 from '../assets/modular-interiors/kitchen7.avif';
import img8 from '../assets/modular-interiors/kitchen8.avif';
import img9 from '../assets/modular-interiors/kitchen9.jpeg';
import img10 from '../assets/modular-interiors/kitchen10.jpg';
import img11 from '../assets/modular-interiors/kitchen11.jpg';

const kitchenDesigns = [
  { image: img1, caption: 'Coastal Chic' },
  { image: img2, caption: 'Stylish Cabinets' },
  { image: img3, caption: 'Sleek Serenity' },
  { image: img4, caption: 'Warm Wood Modular' },
  { image: img5, caption: 'Minimalist Marble Backsplash' },
  { image: img6, caption: 'Contemporary L-Shaped' },
  { image: img7, caption: 'Compact Small Spaces' },
  { image: img8, caption: 'Bold Two-Tone Modular' },
  { image: img9, caption: 'Open Concept Modular' },
  { image: img10, caption: 'Classic Modular Kitchen' },
  { image: img11, caption: 'Mast Kitchen' },
];

export default function ModularInteriors() {
  return (
    <>
      <CategoryHero
        image={heroImage}
        heading="Modular Interiors"
        buttonLabel="Book a Session"
      />

      <CategoryGallery
        sectionHeading="Popular Kitchen Designs"
        items={kitchenDesigns}
      />
      <Footer/>
    </>
  );
}