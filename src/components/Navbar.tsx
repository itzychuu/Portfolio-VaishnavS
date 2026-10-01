import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact Me',   href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('#home');
  const [open, setOpen]     = useState(false);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 page-load-nav"
        aria-label="Main navigation"
      >
        <div
          className="flex items-center justify-between mx-auto px-5 py-4 sm:px-8 sm:py-5 max-w-7xl"
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-white font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: 'var(--font-alt, sans-serif)' }}
          >
            Vaishnav S
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10 xl:gap-14">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-alt, sans-serif)',
                    color: active === l.href ? '#ffffff' : 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      active === l.href ? '#ffffff' : 'rgba(255,255,255,0.6)')
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <ul className="flex flex-col items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-alt, sans-serif)',
                    color: active === l.href ? 'var(--accent)' : '#ffffff',
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

