import { useEffect, useState } from 'react';
import './IntroAnimation.css';

// Replace with your actual logo path
import logo from '../../assets/icons/icon-9square.png';

const particles = Array.from({ length: 24 }, (_, index) => index);

export default function IntroAnimation() {
  const [phase, setPhase] = useState('logo');

  useEffect(() => {
    // Logo appears first
    const burstTimer = setTimeout(() => {
      setPhase('burst');
    }, 1400);

    // Start revealing the website
    const revealTimer = setTimeout(() => {
      setPhase('reveal');
    }, 2700);

    // Completely remove intro
    const removeTimer = setTimeout(() => {
      setPhase('done');
    }, 3500);

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  return (
    <div className={`intro-animation intro-animation--${phase}`}>
      <div className="intro-animation__content">

        {/* Burst glow */}
        <div className="intro-animation__glow" />

        {/* Expanding splash rings */}
        <div className="intro-animation__ring intro-animation__ring--1" />
        <div className="intro-animation__ring intro-animation__ring--2" />
        <div className="intro-animation__ring intro-animation__ring--3" />

        {/* Radial burst lines */}
        <div className="intro-animation__rays">
          {particles.map((particle) => (
            <span
              key={particle}
              className="intro-animation__particle"
              style={{
                '--particle-angle': `${particle * 15}deg`,
                '--particle-distance': `${
                  170 + (particle % 4) * 35
                }px`,
                '--particle-delay': `${
                  (particle % 6) * 0.025
                }s`,
              }}
            />
          ))}
        </div>

        {/* Company logo */}
        <div className="intro-animation__logo">
          <img src={logo} alt="9Square" />
        </div>

      </div>
    </div>
  );
}