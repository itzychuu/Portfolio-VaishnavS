import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Services',     href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('#home');
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-lg' : 'glass'
        }`}
        style={{
          borderRadius: '100px',
          padding: '10px 24px',
          minWidth: 'min(720px, calc(100vw - 32px))',
          maxWidth: 'calc(100vw - 32px)',
        }}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group shrink-0"
            style={{ cursor: 'none' }}
          >
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm"
              style={{ background: 'var(--accent)', fontFamily: 'var(--font-alt)' }}
            >
              V
            </span>
            <span
              className="text-white font-semibold text-sm hidden sm:block"
              style={{ fontFamily: 'var(--font-alt)', letterSpacing: '0.05em' }}
            >
              VAISHNAV<span style={{ color: 'var(--accent)' }}>.</span>S
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-3 py-1.5 text-xs font-medium transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-alt)',
                    letterSpacing: '0.06em',
                    color: active === l.href ? '#fff' : 'rgba(255,255,255,0.5)',
                    cursor: 'none',
                  }}
                >
                  {active === l.href && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(196,0,33,0.15)', border: '1px solid rgba(196,0,33,0.3)' }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold transition-all duration-300 shrink-0"
            style={{
              background: 'var(--accent)',
              fontFamily: 'var(--font-alt)',
              letterSpacing: '0.06em',
              cursor: 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(196,0,33,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            style={{ cursor: 'none', background: 'none', border: 'none' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center glass"
          style={{ background: 'rgba(5,5,5,0.97)' }}
        >
          <ul className="flex flex-col items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-white transition-colors hover:text-red-500"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', cursor: 'none' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white"
            style={{ cursor: 'none', background: 'none', border: 'none' }}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}
