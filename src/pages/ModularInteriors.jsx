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
  { image: img1, caption: 'Coastal Chic Modular Kitchen Design' },
  { image: img2, caption: 'Modular Kitchen Design with Stylish Cabinets and Sleek Appliances' },
  { image: img3, caption: 'Sleek Serenity Modern Kitchen Design' },
  { image: img4, caption: 'Warm Wood Modular Kitchen with Breakfast Counter' },
  { image: img5, caption: 'Minimalist White Kitchen with Marble Backsplash' },
  { image: img6, caption: 'Contemporary L-Shaped Modular Kitchen' },
  { image: img7, caption: 'Compact Modular Kitchen for Small Spaces' },
  { image: img8, caption: 'Bold Two-Tone Modular Kitchen Design' },
  { image: img9, caption: 'Open Concept Modular Kitchen with Island' },
  { image: img10, caption: 'Classic Modular Kitchen with Wooden Finish' },
  { image: img11, caption: 'Mast Kitchen h n' },
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