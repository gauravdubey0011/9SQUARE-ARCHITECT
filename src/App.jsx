import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import Navbar from './components/layout/Navbar';
import CursorTrail from './components/common/CursorTrail';
import MeetDesignerModal from './components/common/MeetDesignerModal';
import ContactModal from './components/common/ContactModal';
import Home from './pages/Home';
import HomeInteriorEstimate from './pages/HomeInteriorEstimate';
import ModularInteriors from './pages/ModularInteriors';
import FullHomeInteriors from './pages/FullHomeInteriors';
import KitchenEstimate from './pages/KitchenEstimate';
import WardrobeEstimate from './pages/WardrobeEstimate';
import ArchitecturalDesign from './pages/ArchitecturalDesign';
import Architecture from './pages/Architecture';
import ArchitectureContactModal from './components/architecture/ArchitectureContactModal';
import LuxuryInteriors from './pages/LuxuryInteriors';
import ValueInteriors from './pages/ValueInteriors';
import IntroAnimation from './components/intro/IntroAnimation';

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        {/* <CursorTrail /> */}
        <IntroAnimation />
        <Navbar />
        <MeetDesignerModal />
        <ContactModal />
        <ArchitectureContactModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate/home-interior" element={<HomeInteriorEstimate />} />
          <Route path="/interiors/modular-interiors" element={<ModularInteriors />} />
          <Route path="/interiors/full-home-interiors" element={<FullHomeInteriors />} />
          <Route path="/interiors/luxury-interiors" element={<LuxuryInteriors />}/>
          <Route path="/interiors/value-interiors" element={<ValueInteriors />} />
          <Route path="/estimate/kitchen" element={<KitchenEstimate />} />
          <Route path="/estimate/wardrobe" element={<WardrobeEstimate />} />
          <Route path="/architectural-design" element={<ArchitecturalDesign />} />
          <Route path="/architecture" element={<Architecture />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;