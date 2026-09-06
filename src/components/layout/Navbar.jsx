// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useModal } from '../../context/ModalContext';
// import './Navbar.css';

// export default function Navbar() {
//   const { openDesignerModal } = useModal();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Toggle is ON when user is on Architectural Design page
//   const isArchitecturalMode =
//     location.pathname === '/architectural-design';

//   function handleModeChange() {
//     if (isArchitecturalMode) {
//       // Toggle OFF → Interior Design website
//       navigate('/');
//     } else {
//       // Toggle ON → Architectural Design website
//       navigate('/architectural-design');
//     }
//   }

//   return (
//     <header className="navbar">
//       <div className="navbar__pill">

//         {/* Left side */}
//         <div className="navbar__left">
//           <Link to="/" className="navbar__logo">
//             9SQUARE
//           </Link>
//         </div>

//         {/* Center Toggle */}
//         <div className="navbar__mode-toggle-wrapper">
//           <button
//             type="button"
//             className={`navbar__mode-toggle ${
//               isArchitecturalMode ? 'navbar__mode-toggle--active' : ''
//             }`}
//             onClick={handleModeChange}
//             aria-label="Switch between Interior Design and Architectural Design"
//             aria-pressed={isArchitecturalMode}
//           >
//             <span className="navbar__toggle-thumb"></span>
//           </button>

//           <div className="navbar__mode-labels">
//             <span
//               className={
//                 !isArchitecturalMode
//                   ? 'navbar__mode-label navbar__mode-label--active'
//                   : 'navbar__mode-label'
//               }
//             >
//               Interiors
//             </span>

//             <span
//               className={
//                 isArchitecturalMode
//                   ? 'navbar__mode-label navbar__mode-label--active'
//                   : 'navbar__mode-label'
//               }
//             >
//               Architecture
//             </span>
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="navbar__right">
//           <button
//             className="navbar__cta"
//             onClick={openDesignerModal}
//           >
//             Get Free Quote
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }


import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import './Navbar.css';

export default function Navbar() {
  const { openDesignerModal } = useModal();
  const navigate = useNavigate();
  const location = useLocation();

  const isArchitecture = location.pathname.startsWith('/architecture');

  function handleToggle() {
    if (isArchitecture) {
      navigate('/');
    } else {
      navigate('/architecture');
    }
  }

  return (
    <header className="navbar">
      <div className="navbar__pill">

        {/* Logo */}
        <Link to="/" className="navbar__logo">
          9SQUARE
        </Link>

        {/* Center Mode Switcher */}
        <div className="navbar__mode-switcher">

          <button
            className={`mode-label ${
              !isArchitecture ? 'mode-label--active' : ''
            }`}
            onClick={() => navigate('/')}
          >
            Interiors Design
          </button>

          <button
            className={`mode-toggle ${
              isArchitecture ? 'mode-toggle--architecture' : ''
            }`}
            onClick={handleToggle}
            aria-label="Switch between Interiors Design and Architecture"
          >
            <span className="mode-toggle__thumb" />
          </button>

          <button
            className={`mode-label ${
              isArchitecture ? 'mode-label--active' : ''
            }`}
            onClick={() => navigate('/architecture')}
          >
            Architecture
          </button>

        </div>

        {/* Quote Button */}
        <button
          className="navbar__cta"
          onClick={openDesignerModal}
        >
          Get Free Quote
        </button>

      </div>
    </header>
  );
}