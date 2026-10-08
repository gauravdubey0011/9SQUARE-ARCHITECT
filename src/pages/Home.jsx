// import Slideshow from '../components/layout/Slideshow';
// import Showcase from '../components/portfolio/Showcase';
// import OneStopShop from '../components/portfolio/OneStopShop';
// import DesignerHero from '../components/layout/DesignerHero';
// import EstimateSection from '../components/portfolio/EstimateSection';
// import VisitUs from '../components/portfolio/VisitUs';
// import Testimonials from '../components/portfolio/Testimonials';
// import TalkToDesigner from '../components/portfolio/TalkToDesigner';

// export default function Home() {
//   return (
//     <>
//       <Slideshow />
//       <Showcase />
//       <OneStopShop />
//       <DesignerHero />
//       <EstimateSection />
//       <VisitUs />
//       <Testimonials />
//       <TalkToDesigner />
//     </>
//   );
// }


import Slideshow from '../components/layout/Slideshow';
import Showcase from '../components/portfolio/Showcase';
import OneStopShop from '../components/portfolio/OneStopShop';
import DesignerHero from '../components/layout/DesignerHero';
import WhyChooseTicker from '../components/portfolio/WhyChooseTicker';
import EstimateSection from '../components/portfolio/EstimateSection';
import VisitUs from '../components/portfolio/VisitUs';
import Testimonials from '../components/portfolio/Testimonials';
import Overview from '../components/portfolio/Overview';
import Footer from '../components/layout/Footer';
import OurProcess from '../components/portfolio/OurProcess';
import ScrollReveal from '../components/common/ScrollReveal';
export default function Home() {
  return (
    <>
      <Slideshow />
      <ScrollReveal><Overview /></ScrollReveal>
      <Showcase />
      <ScrollReveal><OneStopShop /></ScrollReveal>
      {/* <WhyChooseTicker /> */}
      <ScrollReveal><EstimateSection /></ScrollReveal>
      <ScrollReveal><OurProcess /></ScrollReveal>
      <ScrollReveal><VisitUs /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><DesignerHero /></ScrollReveal>
      <Footer />
    </>
  );
}
