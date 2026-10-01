import { Linkedin, Instagram, Github, Twitter } from 'lucide-react';
import RotatingText from './RotatingText/RotatingText';

// Design reference frame
const FRAME_W = 1280;
const FRAME_H = 833;

const TEAL = '#188F87';
const RED = '#A91C26';

const DISPLAY_FONT = "'Bebas Neue', sans-serif";
const INTER = "'Inter', sans-serif";
const MANROPE = "'Manrope', sans-serif";

export default function Hero() {
  const nameLayerStyle = {
    top: `${(150 / FRAME_H) * 100}%`,
    transform: 'translate3d(-50%, 0, 0)',
    width: `${(984 / FRAME_W) * 100}%`,
    height: 'auto',
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden pt-20 pb-8 bg-black flex flex-col justify-between scroll-mt-20"
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
        className="absolute left-1/2 pointer-events-none select-none page-load-name w-[92%] md:w-[77%]"
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
          style={{ fontFamily: DISPLAY_FONT, fontSize: 210, letterSpacing: '2px' }}
          fill="url(#nameGradientFill)"
        >
          Vaishnav S
        </text>
      </svg>

      {/* Portrait cutout */}
      <img
        src="/images/hero/vaishnav-s-bg-rm.png"
        alt="Vaishnav Shalikumar portrait"
        className="absolute left-1/2 bottom-0 pointer-events-none select-none page-load-portrait h-[60vh] sm:h-[75vh] md:h-[88%] w-auto max-w-none object-contain"
        style={{
          zIndex: 2,
          transform: 'translateX(-50%)',
        }}
      />

      {/* Vaishnav-S — Layer 2 (Front): Gradient stroke only, sits ON TOP of the photo */}
      <svg
        viewBox="0 0 984 345"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        className="absolute left-1/2 pointer-events-none select-none page-load-name-front w-[92%] md:w-[77%]"
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
          style={{ fontFamily: DISPLAY_FONT, fontSize: 210, letterSpacing: '2px' }}
          fill="none"
          stroke="url(#nameGradientStroke)"
          strokeWidth={1}
        >
          Vaishnav S
        </text>
      </svg>

      {/* Spacer */}
      <div className="flex-1 min-h-[60px] md:min-h-[120px]" />

      {/* Bottom overlay gradient on mobile so text is always clear */}
      <div
        className="absolute inset-x-0 bottom-0 h-96 pointer-events-none lg:hidden"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
          zIndex: 4,
        }}
      />

      {/* Foreground Content Layer */}
      <div className="relative w-full z-10 pb-6 md:pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* Left Side: Title + Description */}
          <div className="lg:col-span-7 page-load-content-left text-center lg:text-left">
            <h1
              className="text-white font-bold mb-1 tracking-tight text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: MANROPE }}
            >
              Vaishnav Shalikumar
            </h1>
            <div
              className="text-white mb-3 leading-snug flex flex-wrap items-center justify-center lg:justify-start gap-x-2 text-xl sm:text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: MANROPE }}
            >
              <RotatingText
                texts={['Full Stack Developer', 'UI/UX Designer', 'Cybersecurity Enthusiast']}
                mainClassName="text-[#188F87] overflow-hidden justify-center lg:justify-start inline-flex"
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
            </div>
            <p
              className="max-w-xl mx-auto lg:mx-0 leading-relaxed text-xs sm:text-sm md:text-base text-gray-300"
              style={{
                fontFamily: INTER,
                fontWeight: 400,
              }}
            >
              I craft premium digital experiences where cutting-edge engineering
              meets cinematic design. Passionate about building performant,
              accessible, and visually stunning products that leave a lasting
              impression.
            </p>
          </div>

          {/* Right Side: Buttons + Social Links */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-4 page-load-content-right w-full">
            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  width: 140,
                  height: 44,
                  background: 'transparent',
                  border: `1.5px solid ${RED}`,
                  color: RED,
                  fontFamily: INTER,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Contact me
              </a>

              <a
                href="/Documents/VaishnavResumeLatest.pdf"
                download
                className="inline-flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-red-900/30"
                style={{
                  width: 140,
                  height: 44,
                  background: RED,
                  color: '#FFFFFF',
                  fontFamily: INTER,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="flex items-center gap-4">
                {[
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/1920-vaishnav-s/', label: 'Connect with Vaishnav Shalikumar on LinkedIn' },
                  { Icon: Instagram, href: 'https://www.instagram.com/_y._chuu._', label: 'Follow Vaishnav Shalikumar on Instagram' },
                  { Icon: Github, href: 'https://github.com/itzychuu', label: "View Vaishnav Shalikumar's GitHub profile" },
                  { Icon: Twitter, href: 'https://x.com/_why_choo_', label: 'Follow Vaishnav Shalikumar on X' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-full p-2.5 flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
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
