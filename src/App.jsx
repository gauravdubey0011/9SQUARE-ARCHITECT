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

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        {/* <CursorTrail /> */}
        <Navbar />
        <MeetDesignerModal />
        <ContactModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estimate/home-interior" element={<HomeInteriorEstimate />} />
          <Route path="/interiors/modular-interiors" element={<ModularInteriors />} />
          <Route path="/interiors/full-home-interiors" element={<FullHomeInteriors />} />
          <Route path="/estimate/kitchen" element={<KitchenEstimate />} />
           <Route path="/estimate/wardrobe" element={<WardrobeEstimate />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;