import { useEffect, useRef } from 'react';

import { Linkedin, Instagram, Github, Twitter } from 'lucide-react';

// Design reference: 1280 × 833 Figma frame.
// All absolute layers below are positioned as % of that frame so they
// scale proportionally with the section's actual rendered size.
const FRAME_W = 1280;
const FRAME_H = 833;

const TEAL = '#188F87';
const RED = '#A91C26';

const LALEZAR = "'Lalezar', cursive";
const INTER = "'Inter', sans-serif";

export default function Hero() {
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      photoRef.current.style.transform = `translate3d(calc(-50% + ${x * 0.4}px), ${y * 0.3}px, 0)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const nameLayerStyle = {
    top: `${(243 / FRAME_H) * 100}%`,
    transform: 'translate3d(-50%, 0, 0)',
    width: `${(984 / FRAME_W) * 100}%`,
    height: 'auto',
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 bg-black"
    >
      {/* LeftSideRectangle — X0 Y-87 W640 H833, fill #A91C26, blur 300 */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          left: '0%',
          top: `${(-87 / FRAME_H) * 100}%`,
          width: `${(640 / FRAME_W) * 100}%`,
          height: `${(833 / FRAME_H) * 100}%`,
          background: RED,
          filter: 'blur(150px)',
          zIndex: 0,
        }}
      />

      {/* RightSideRectangle — X640 Y-87 W640 H833, fill #188F87, blur 300 */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          left: `${(640 / FRAME_W) * 100}%`,
          top: `${(-87 / FRAME_H) * 100}%`,
          width: `${(640 / FRAME_W) * 100}%`,
          height: `${(833 / FRAME_H) * 100}%`,
          background: TEAL,
          filter: 'blur(150px)',
          zIndex: 0,
        }}
      />

      {/* Vaishnav-S — layer 1 (back): gradient fill, no stroke. Sits BEHIND the photo. */}
      <svg
        viewBox="0 0 984 345"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="absolute left-1/2 pointer-events-none select-none"
        style={{ ...nameLayerStyle, zIndex: 1 }}
      >
        <defs>
          <linearGradient id="nameGradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={TEAL} />
            <stop offset="50%" stopColor="#CCCCCC" />
            <stop offset="100%" stopColor={RED} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontFamily: LALEZAR, fontSize: 220 }}
          fill="url(#nameGradientFill)"
        >
          Vaishnav S
        </text>
      </svg>

      {/* Portrait — transparent-bg cutout, duotone baked in. Sandwiched between the two text layers. */}
      <img
        ref={photoRef}
        src="/images/hero/vaishnav-s-bg-rm.png"
        alt="Vaishnav S — Full Stack Developer and UI/UX Designer portrait"
        className="absolute left-1/2 pointer-events-none select-none"
        style={{
          top: '4.5rem',
          height: '92%',
          width: 'auto',
          maxWidth: 'none',
          objectFit: 'contain',
          zIndex: 2,
          transform: 'translate3d(-50%, 0, 0)',
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Vaishnav-S-1 — layer 2 (front): no fill, gradient stroke only. Sits ON TOP of the photo. */}
      <svg
        viewBox="0 0 984 345"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="absolute left-1/2 pointer-events-none select-none"
        style={{ ...nameLayerStyle, zIndex: 3 }}
      >
        <defs>
          <linearGradient id="nameGradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={TEAL} />
            <stop offset="50%" stopColor="#CCCCCC" />
            <stop offset="100%" stopColor={RED} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontFamily: LALEZAR, fontSize: 220 }}
          fill="none"
          stroke="url(#nameGradientStroke)"
          strokeWidth={1}
        >
          Vaishnav S
        </text>
      </svg>

      {/* Foreground content */}
      <div
        className="relative flex flex-col justify-end"
        style={{ zIndex: 4, minHeight: 'calc(100vh - 6rem)' }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left: title + description */}
          <div className="lg:col-span-6">
            <h2
              className="text-white mb-4 leading-snug"
              style={{ fontFamily: LALEZAR, fontSize: 24 }}
            >
              Full Stack Developer, UI/UX Designer
              <br />
              &amp; Cyber Security Enthusiast
            </h2>
            <p
              className="max-w-md leading-relaxed"
              style={{ fontFamily: LALEZAR, fontSize: 16, color: 'rgba(255,255,255,0.75)' }}
            >
              I craft premium digital experiences where cutting-edge engineering meets
              cinematic design. Passionate about building performant, accessible, and
              visually stunning products that leave a lasting impression.
            </p>
          </div>

          {/* Right: buttons + socials */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-5">
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105"
                style={{
                  width: 178,
                  height: 53,
                  background: 'transparent',
                  border: `2px solid ${RED}`,
                  color: RED,
                  fontFamily: INTER,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Contact me
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full text-white transition-transform duration-200 hover:scale-105"
                style={{
                  width: 178,
                  height: 53,
                  background: RED,
                  fontFamily: INTER,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Resume
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/in/1920-vaishnav-s', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com/vaishnavs', label: 'Instagram' },
                { Icon: Github, href: 'https://github.com/itzychuu', label: 'GitHub' },
                { Icon: Twitter, href: 'https://twitter.com/vaishnavs', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full p-2.5 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: 'transparent', border: `1.5px solid ${RED}` }}
                >
                  <Icon size={16} color={RED} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
