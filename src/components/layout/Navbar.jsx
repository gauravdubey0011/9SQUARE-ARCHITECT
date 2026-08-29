// import { Link } from 'react-router-dom';
// import { useModal } from '../../context/ModalContext';
// import './Navbar.css';

// export default function Navbar() {
//   const { openDesignerModal } = useModal();

//   return (
//     <header className="navbar">
//       <div className="navbar__inner">
//         <Link to="/" className="navbar__logo">
//           9SQUARE
//         </Link>

//         <button className="navbar__cta" onClick={openDesignerModal}>
//           Get Free Quote
//         </button>
//       </div>
//     </header>
//   );
// }

import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import './Navbar.css';

export default function Navbar() {
  const { openDesignerModal } = useModal();

  return (
    <header className="navbar">
      <div className="navbar__pill">
        <Link to="/" className="navbar__logo">
          9SQUARE
        </Link>

        <button className="navbar__cta" onClick={openDesignerModal}>
          <span className="navbar__cta-icon"></span>
          Get Free Quote
        </button>
      </div>
    </header>
  );
}