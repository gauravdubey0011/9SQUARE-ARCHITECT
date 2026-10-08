import p1img1 from '../assets/showcase/p1-1.jpg';
import p1img2 from '../assets/showcase/p1-2.jpg';
import p1video from '../assets/video1.mp4';
import p2img1 from '../assets/showcase/p2-1.jpg';
import p2img2 from '../assets/showcase/p2-2.jpg';
import p2video from '../assets/video2.mp4';
import p3img1 from '../assets/showcase/p3-1.avif';
import p3img2 from '../assets/showcase/p3-2.avif';
import p3video from '../assets/video3.mp4';
import p4img1 from '../assets/showcase/p4-1.jpg';
import p4img2 from '../assets/showcase/p4-2.avif';
import p4video from '../assets/video4.mp4';
import p5video from '../assets/video5.mp4';
import p6video from '../assets/video6.mp4';

const showcaseProjects = [
  {
    slug: 'contemporary-dining-room',
    title: 'Contemporary Dining Room with Display Cabinets',
    media: [{ type: 'video', src: p1video }, { type: 'image', src: p1img1 }, { type: 'image', src: p1img2 }],
  },
  {
    slug: 'modern-bedroom-bay-window',
    title: 'Modern Bedroom with Bay Window Seating',
    media: [{ type: 'video', src: p2video }, { type: 'image', src: p2img1 }, { type: 'image', src: p2img2 }],
  },
  {
    slug: 'elegant-living-area-puja-unit',
    title: 'Elegant Living Area with Compact Puja Unit',
    media: [{ type: 'video', src: p3video }, { type: 'image', src: p3img1 }, { type: 'image', src: p3img2 }],
  },
  {
    slug: 'minimal-kitchen-breakfast-counter',
    title: 'Minimal Kitchen with Breakfast Counter',
    media: [{ type: 'video', src: p4video }, { type: 'image', src: p4img1 }, { type: 'image', src: p4img2 }],
  },
  {
    slug: 'warm-study-custom-shelving',
    title: 'Warm Study Room with Custom Shelving',
    media: [{ type: 'video', src: p5video }, { type: 'image', src: p1img2 }, { type: 'image', src: p1img1 }],
  },
  {
    slug: 'luxury-master-suite',
    title: 'Luxury Master Suite with Walk-in Wardrobe',
    media: [{ type: 'video', src: p6video }, { type: 'image', src: p4img2 }, { type: 'image', src: p4img1 }],
  },
];

export default showcaseProjects;
