import { Github, Linkedin, Twitter, Instagram, Dribbble, ArrowUp } from 'lucide-react';

const socials = [
  { icon: Linkedin,   href: 'https://linkedin.com/in/1920-vaishnav-s',   label: 'LinkedIn' },
  { icon: Github,     href: 'https://github.com/itzychuu',         label: 'GitHub' },
  { icon: Twitter,    href: 'https://x.com/_why_choo_',        label: 'X (Twitter)' },
  { icon: Instagram,  href: 'https://www.instagram.com/_y._chuu._',      label: 'Instagram' }
];

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden" style={{ zIndex: 2 }}>
      {/* Massive typography */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2
          className="text-5xl sm:text-7xl lg:text-9xl font-bold reveal"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.9, letterSpacing: '0.01em' }}
        >
          Got Ideas? Let's Collab <span style={{ color: 'var(--accent)' }}><br></br>and Build Them Together</span>
        </h2>
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-4 mb-12 reveal delay-200">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="glass rounded-full p-4 transition-all duration-300 hover:scale-110"
            style={{ cursor: 'none' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(196,0,33,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(196,0,33,0.4)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.borderColor = ''; }}
          >
            <s.icon size={20} style={{ color: 'var(--text-secondary)' }} />
          </a>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Vaishnav S. All rights reserved.
          </p>
          <p className="text-xs" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>
            Designed & Built with <span style={{ color: 'var(--accent)' }}>♥</span> by Vaishnav S
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-xs font-semibold transition-colors"
            style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)', cursor: 'none' }}
          >
            Back to Top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
