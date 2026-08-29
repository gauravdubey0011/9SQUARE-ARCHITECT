import { useEffect, useRef } from 'react';
import './CursorTrail.css';

export default function CursorTrail() {
  const star1Ref = useRef(null);
  const star2Ref = useRef(null);

  // Each star tracks its own trailing position, following behind the real cursor
  const pos = useRef({ x: 0, y: 0 });
  const star1Pos = useRef({ x: 0, y: 0 });
  const star2Pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    }
    window.addEventListener('mousemove', handleMouseMove);

    let frameId;
    function animate() {
        // Star 1 follows the cursor closely
        star1Pos.current.x += (pos.current.x - star1Pos.current.x) * 0.08;
        star1Pos.current.y += (pos.current.y - star1Pos.current.y) * 0.08;

        // Star 2 follows star 1 — even slower, so it trails further behind
        star2Pos.current.x += (star1Pos.current.x - star2Pos.current.x) * 0.05;
        star2Pos.current.y += (star1Pos.current.y - star2Pos.current.y) * 0.05;

      if (star1Ref.current) {
        star1Ref.current.style.transform = `translate(${star1Pos.current.x}px, ${star1Pos.current.y}px)`;
      }
      if (star2Ref.current) {
        star2Ref.current.style.transform = `translate(${star2Pos.current.x}px, ${star2Pos.current.y}px)`;
      }

      frameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      <svg ref={star1Ref} className="cursor-sparkle cursor-sparkle--1" viewBox="0 0 24 24">
        <path d="M12 0 C12 6, 14 10, 24 12 C14 14, 12 18, 12 24 C12 18, 10 14, 0 12 C10 10, 12 6, 12 0 Z" />
      </svg>
      <svg ref={star2Ref} className="cursor-sparkle cursor-sparkle--2" viewBox="0 0 24 24">
        <path d="M12 0 C12 6, 14 10, 24 12 C14 14, 12 18, 12 24 C12 18, 10 14, 0 12 C10 10, 12 6, 12 0 Z" />
      </svg>
    </div>
  );
}