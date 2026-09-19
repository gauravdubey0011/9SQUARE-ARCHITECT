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
        {/* Row 1 on mobile: logo + CTA */}
        <div className="navbar__bar">
          <Link to="/" className="navbar__logo">
            9SQUARE
          </Link>

          <button className="navbar__cta" onClick={openDesignerModal}>
            Get Free Quote
          </button>
        </div>

        {/* Row 2 on mobile, centered item on desktop */}
        <div className="navbar__mode-switcher">
          <button
            className={`mode-label ${!isArchitecture ? 'mode-label--active' : ''}`}
            onClick={() => navigate('/')}
          >
            Interiors
          </button>

          <button
            className={`mode-toggle ${isArchitecture ? 'mode-toggle--architecture' : ''}`}
            onClick={handleToggle}
            aria-label="Switch between Interiors Design and Architecture"
            aria-pressed={isArchitecture}
          >
            <span className="mode-toggle__thumb" />
          </button>

          <button
            className={`mode-label ${isArchitecture ? 'mode-label--active' : ''}`}
            onClick={() => navigate('/architecture')}
          >
            Architecture
          </button>
        </div>
      </div>
    </header>
  );
}