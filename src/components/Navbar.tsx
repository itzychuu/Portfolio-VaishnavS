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
      { threshold: 0.4 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 page-load-nav"
        aria-label="Main navigation"
      >
        <div
          className="flex items-center justify-between mx-auto"
          style={{
            maxWidth: '1400px',
            padding: '28px 32px',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: 'var(--font-alt, sans-serif)' }}
          >
            Vaishnav S
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-20">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-alt, sans-serif)',
                    color: active === l.href ? '#ffffff' : 'rgba(255,255,255,0.55)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      active === l.href ? '#ffffff' : 'rgba(255,255,255,0.55)')
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black"
        >
          <ul className="flex flex-col items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium text-white"
                  style={{ fontFamily: 'var(--font-alt, sans-serif)' }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white"
            style={{ background: 'none', border: 'none' }}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
}
