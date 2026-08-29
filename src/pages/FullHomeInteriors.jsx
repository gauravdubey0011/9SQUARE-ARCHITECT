import CategoryHero from '../components/category/CategoryHero';
import CategoryGallery from '../components/category/CategoryGallery';

import heroImage from '../assets/full-home-interiors/home2.avif';
import img1 from '../assets/full-home-interiors/home1.avif';
import img2 from '../assets/full-home-interiors/home2.avif';
import img3 from '../assets/full-home-interiors/home3.avif';
import img4 from '../assets/full-home-interiors/home4.avif';
import img5 from '../assets/full-home-interiors/home5.avif';
import img6 from '../assets/full-home-interiors/home6.avif';
import img7 from '../assets/full-home-interiors/home7.avif';
import img8 from '../assets/full-home-interiors/home8.avif';
import img9 from '../assets/full-home-interiors/home9.avif';
import img10 from '../assets/full-home-interiors/home10.avif';
import img11 from '../assets/full-home-interiors/home11.avif';

const homeDesigns = [
  { image: img1, caption: 'Warm Contemporary Living Room Design' },
  { image: img2, caption: 'Modern Full Home Interior with Open Layout' },
  { image: img3, caption: 'Elegant Master Bedroom with Custom Wardrobe' },
  { image: img4, caption: 'Minimalist Full Home Interior Design' },
  { image: img5, caption: 'Luxury Full Home Makeover with Premium Finishes' },
  { image: img6, caption: 'Cozy Family Living Space with Modular Furniture' },
  { image: img7, caption: 'Spacious Full Home Design for Large Families' },
  { image: img8, caption: 'Modern Full Home Interior with Statement Lighting' },
  { image: img9, caption: 'Compact Full Home Interior for Apartments' },
  { image: img10, caption: 'Classic Full Home Design with Wooden Accents' },
  { image: img11, caption: 'Premium Full Home Design with Malmal Accents' },
];

export default function FullHomeInteriors() {
  return (
      <>
        <CategoryHero
          image={heroImage}
          heading="Full Home Interiors"
          buttonLabel="Book a Session"
        />
  
        <CategoryGallery
          sectionHeading="Popular Full Home Designs"
          items={homeDesigns}
        />
      </>
    );
}