import { useEffect, useRef, useState } from 'react';
import { Download, Mail, Github, Linkedin, Twitter, Dribbble, MapPin } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      photoRef.current.style.transform = `perspective(1000px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg) translateZ(0)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12"
      style={{ zIndex: 2 }}
    >
      {/* Massive background typography */}
      <h1
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 28vw, 24rem)',
          lineHeight: 0.85,
          letterSpacing: '0.02em',
          color: 'rgba(255,255,255,0.04)',
          WebkitTextStroke: '1px rgba(255,255,255,0.06)',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        DEVELOPER
      </h1>

      <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ zIndex: 3 }}>
        {/* Left: text content */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          {/* Availability badge */}
    

          {/* Greeting */}
          <p
            className="text-lg sm:text-xl mb-2 reveal delay-100"
            style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h2
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 reveal delay-200"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.9, letterSpacing: '0.01em' }}
          >
            <span style={{ color: 'var(--accent)' }}>Vaishnav</span>
          </h2>

          {/* Profession */}
          <p
            className="text-xl sm:text-2xl mb-6 reveal delay-300"
            style={{ fontFamily: 'var(--font-alt)', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.02em' }}
          >
            Full Stack Developer <span style={{ color: 'var(--accent)' }}>&</span> UI/UX Designer
          </p>

          {/* Intro */}
          <p
            className="text-sm sm:text-base max-w-xl mb-8 reveal delay-400"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.7 }}
          >
            I craft premium digital experiences where cutting-edge engineering meets
            cinematic design. Passionate about building performant, accessible, and
            visually stunning products that leave a lasting impression.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 reveal delay-500">
            <a
              href="#contact"
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300"
              style={{ background: 'var(--accent)', fontFamily: 'var(--font-alt)', letterSpacing: '0.05em' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(196,0,33,0.5)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold glass transition-all duration-300"
              style={{ fontFamily: 'var(--font-alt)', letterSpacing: '0.05em' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,0,33,0.4)')}
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 reveal delay-600">
            {[
              { Icon: Github,   href: 'https://github.com/itzychuu',   label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/1920-vaishnav-s', label: 'LinkedIn' },
              { Icon: Twitter,  href: 'https://twitter.com/vaishnavs',  label: 'Twitter' },
              { Icon: Dribbble, href: 'https://dribbble.com/vaishnavs', label: 'Dribbble' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass rounded-full p-3 transition-all duration-300 hover:scale-110"
                style={{ cursor: 'none' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(196,0,33,0.15)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,0,33,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '';
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                }}
              >
                <Icon size={16} style={{ color: 'var(--text-secondary)' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div
            ref={photoRef}
            className="relative reveal-scale"
            style={{ transition: 'transform 0.3s ease-out' }}
          >
            {/* Glow behind */}
            <div
              className="absolute -inset-4 rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(196,0,33,0.25), transparent 70%)' }}
            />
            {/* Photo */}
            <div
              className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden glass"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <img
                src="/images/vaishnav-s.png"
                alt="Vaishnav S — Full Stack Developer and UI/UX Designer portrait"
                className="w-full h-full object-cover"
                loading="eager"
                width={384}
                height={448}
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(5,5,5,0.6) 100%)' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ zIndex: 4 }}>
        <span className="text-[0.6rem] uppercase tracking-widest" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>
          Scroll
        </span>
        <div className="w-px h-12 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, var(--accent), transparent)', animation: 'fadeUp 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
