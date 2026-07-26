import { Download, Linkedin, Instagram, Github, Twitter } from 'lucide-react';
import RotatingText from './RotatingText/RotatingText';

// Design reference: 1280 × 833 Figma frame.
const FRAME_W = 1280;
const FRAME_H = 833;

const TEAL = '#188F87';
const RED = '#A91C26';

const LALEZAR = "'Lalezar', cursive";
const INTER = "'Inter', sans-serif";

export default function Hero() {
  // Shifted up so the horizontal center of 'h' and 'n' aligns directly at eye-level
  const nameLayerStyle = {
    top: `${(150 / FRAME_H) * 100}%`,
    transform: 'translate3d(-50%, 0, 0)',
    width: `${(984 / FRAME_W) * 100}%`,
    height: 'auto',
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20 bg-black flex flex-col justify-between"
    >
      {/* Background Glow - Left (Red) */}
      <div
        className="absolute pointer-events-none select-none page-load-glow-left"
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

      {/* Background Glow - Right (Teal) */}
      <div
        className="absolute pointer-events-none select-none page-load-glow-right"
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

      {/* Vaishnav-S — Layer 1 (Back): Gradient fill, sits BEHIND the photo */}
      <svg
        viewBox="0 0 984 345"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="absolute left-1/2 pointer-events-none select-none page-load-name"
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

      {/* Portrait cutout - Fully Static */}
      <img
        src="/images/hero/vaishnav-s-bg-rm.png"
        alt="Vaishnav S portrait"
        className="absolute left-1/2 bottom-0 pointer-events-none select-none page-load-portrait"
        style={{
          height: '88%',
          width: 'auto',
          maxWidth: 'none',
          objectFit: 'contain',
          zIndex: 2,
          transform: 'translateX(-50%)',
        }}
      />

      {/* Vaishnav-S-1 — Layer 2 (Front): Gradient stroke only, sits ON TOP of the photo */}
      <svg
        viewBox="0 0 984 345"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="absolute left-1/2 pointer-events-none select-none page-load-name-front"
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

      {/* Flexible spacer creating clear vertical separation */}
      <div className="flex-1 min-h-[40px]" />

      {/* Foreground Content Layer - Shifted Upwards */}
      <div className="relative w-full z-10 pb-16 md:pb-20 -translate-y-6 md:-translate-y-10">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Side: Title + Description */}
          <div className="lg:col-span-6 page-load-content-left">
            <h2
              className="text-white mb-3 leading-snug flex flex-wrap items-center gap-x-2"
              style={{ fontFamily: LALEZAR, fontSize: 36 }}
            >
              <RotatingText
                texts={['Full Stack Developer', 'UI/UX Designer', 'Cybersecurity Enthusiast']}
                mainClassName="text-[#188F87] overflow-hidden justify-start inline-flex"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                splitBy="characters"
                auto
                loop
              />
            </h2>
            <p
              className="max-w-md leading-relaxed"
              style={{
                fontFamily: INTER,
                fontSize: 15,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              I craft premium digital experiences where cutting-edge engineering
              meets cinematic design. Passionate about building performant,
              accessible, and visually stunning products that leave a lasting
              impression.
            </p>
          </div>

          {/* Right Side: Buttons + Social Links */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-5 page-load-content-right">
            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105"
                style={{
                  width: 160,
                  height: 48,
                  background: 'transparent',
                  border: `1.5px solid ${RED}`,
                  color: RED,
                  fontFamily: INTER,
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                Contact me
              </a>

              <a
                href="/Documents/VaishnavResume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105"
                style={{
                  width: 160,
                  height: 48,
                  background: RED,
                  color: '#FFFFFF',
                  fontFamily: INTER,
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                Resume
              </a>
            </div>

            {/* Social Icons Centered relative to the buttons container */}
            <div className="w-[336px] flex justify-center">
              <div className="flex items-center gap-5">
                {[
                  { Icon: Linkedin, href: 'https://linkedin.com/in/1920-vaishnav-s', label: 'LinkedIn' },
                  { Icon: Instagram, href: 'https://www.instagram.com/_y._chuu._', label: 'Instagram' },
                  { Icon: Github, href: 'https://github.com/itzychuu', label: 'GitHub' },
                  { Icon: Twitter, href: 'https://x.com/_why_choo_', label: 'Twitter' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full p-2.5 flex items-center justify-center transition-transform duration-200 hover:scale-110"
                    style={{
                      background: 'transparent',
                      border: `1.5px solid ${RED}`,
                    }}
                  >
                    <Icon size={18} color={RED} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}