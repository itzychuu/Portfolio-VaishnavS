import { Quote, Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson',   company: 'TechFlow Inc.',      rating: 5, text: 'Vaishnav delivered beyond our expectations. The attention to detail and performance optimization was outstanding. Our conversion rate jumped 35% after the redesign.' },
  { name: 'Michael Chen',    company: 'StartupHub',          rating: 5, text: 'Working with Vaishnav was a game-changer. He understood our vision instantly and delivered a product that exceeded every requirement.' },
  { name: 'Emma Williams',   company: 'Creative Labs',       rating: 5, text: 'The level of polish in Vaishnav\'s work is rare. Every animation, every transition, every pixel — perfectly crafted. Truly award-worthy.' },
  { name: 'James Rodriguez', company: 'FinTech Solutions',   rating: 5, text: 'Vaishnav rebuilt our platform from scratch. The result was a fast, secure, and beautiful application that our users absolutely love.' },
  { name: 'Lisa Anderson',   company: 'Design Studio Co.',   rating: 5, text: 'I\'ve worked with many developers, but Vaishnav stands out. His ability to bridge design and engineering is exceptional.' },
  { name: 'David Kim',       company: 'CloudScale',          rating: 5, text: 'From concept to deployment, Vaishnav handled everything with professionalism and creativity. Highly recommended for premium projects.' },
];

export default function Testimonials() {
  // Duplicate for seamless loop
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Client Love</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 reveal delay-100"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
        >
          What Clients <span style={{ color: 'var(--accent)' }}>Say</span>
        </h2>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg, var(--bg-primary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(270deg, var(--bg-primary), transparent)' }} />

        <div className="flex gap-6 testimonial-track" style={{ width: 'max-content' }}>
          {loop.map((t, i) => (
            <div
              key={i}
              className="glass card-tilt rounded-2xl p-6 shrink-0"
              style={{ width: '380px' }}
            >
              <Quote size={28} style={{ color: 'var(--accent)', opacity: 0.6 }} className="mb-4" />
              <p className="text-sm mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full text-white font-bold text-sm shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--accent), #ff4d6d)', fontFamily: 'var(--font-alt)' }}
                >
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-alt)' }}>{t.name}</p>
                  <p className="text-xs" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>{t.company}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-current" style={{ color: 'var(--accent)' }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
