import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let outerX = 0, outerY = 0;
    let innerX = 0, innerY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      innerX = e.clientX;
      innerY = e.clientY;
    };

    const animate = () => {
      outerX += (innerX - outerX) * 0.12;
      outerY += (innerY - outerY) * 0.12;

      if (outerRef.current) {
        outerRef.current.style.left = outerX + 'px';
        outerRef.current.style.top = outerY + 'px';
      }
      if (innerRef.current) {
        innerRef.current.style.left = innerX + 'px';
        innerRef.current.style.top = innerY + 'px';
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove, { passive: true });

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const targets = document.querySelectorAll('a, button, .card-tilt, .skill-pill, img');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        className={`cursor-outer ${hovered ? 'hovered' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={innerRef}
        className="cursor-inner"
        aria-hidden="true"
      />
    </>
  );
}
