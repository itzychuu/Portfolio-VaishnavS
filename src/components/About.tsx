import { Download, Target, Eye, Award } from 'lucide-react';
import { useCounter } from '@/hooks/useScrollReveal';

const timeline = [
  { year: '2021', title: 'Started Journey', desc: 'Began learning web development with HTML, CSS, and JavaScript.' },
  { year: '2022', title: 'First Projects',   desc: 'Built and deployed my first full-stack applications using React and Node.js.' },
  { year: '2023', title: 'Freelance Career', desc: 'Started accepting freelance clients and delivered 20+ successful projects.' },
  { year: '2024', title: 'Premium Work',      desc: 'Focused on crafting award-level digital experiences with cinematic design.' },
];

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useCounter(value);
  return (
    <div>
      <span ref={ref} className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
        0
      </span>
      <span className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}>+</span>
      <p className="text-xs mt-1 uppercase tracking-widest" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">About Me</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 reveal delay-100"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
        >
          The Story <span style={{ color: 'var(--accent)' }}>Behind</span> The Code
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: profile */}
          <div className="lg:col-span-5 reveal-left">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(196,0,33,0.15), transparent 70%)' }}
              />
              <div className="relative glass rounded-3xl p-2">
                <img
                  src="/images/vaishnav-s_(1).png"
                  alt="Vaishnav S portrait"
                  className="w-full rounded-2xl object-cover"
                  style={{ aspectRatio: '4/5' }}
                  loading="lazy"
                  width={400}
                  height={500}
                />
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-6 -right-6 glass rounded-2xl p-4 flex items-center gap-3"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              >
                <Award size={24} style={{ color: 'var(--accent)' }} />
                <div>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-alt)' }}>Award-Level</p>
                  <p className="text-xs" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: story */}
          <div className="lg:col-span-7 reveal-right">
            <p className="text-base sm:text-lg mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I'm <span className="text-white font-semibold">Vaishnav S</span>, a Full Stack Developer and UI/UX Designer
              based in India. I specialize in building premium digital experiences that blend
              cutting-edge engineering with cinematic design.
            </p>
            <p className="text-base sm:text-lg mb-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              With over 3 years of experience, I've delivered 40+ projects for 20+ clients worldwide.
              My work has been recognized for its attention to detail, performance, and visual polish.
              I believe great software should feel as good as it functions.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="glass card-tilt rounded-2xl p-6">
                <Target size={24} style={{ color: 'var(--accent)' }} className="mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>Mission</h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  To craft digital experiences that are not only functional but truly memorable,
                  pushing the boundaries of what's possible on the web.
                </p>
              </div>
              <div className="glass card-tilt rounded-2xl p-6">
                <Eye size={24} style={{ color: 'var(--accent)' }} className="mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>Vision</h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  To be a driving force in the next generation of web craftsmanship,
                  where every interaction communicates quality and care.
                </p>
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <Counter value={3}  label="Years" />
              <Counter value={40} label="Projects" />
              <Counter value={20} label="Clients" />
            </div>

            {/* Download resume */}
            <a
              href="/resume.pdf"
              download
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300"
              style={{ background: 'var(--accent)', fontFamily: 'var(--font-alt)', letterSpacing: '0.05em' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(196,0,33,0.5)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center reveal" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}>
            My Journey
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 timeline-line" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-6 mb-12 reveal ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 20px rgba(196,0,33,0.6)' }} />
                </div>
                {/* Card */}
                <div className="flex-1 sm:w-1/2 sm:px-8 pl-12 sm:pl-0">
                  <div className="glass card-tilt rounded-2xl p-5">
                    <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)' }}>{item.year}</span>
                    <h4 className="text-lg font-semibold text-white mt-1 mb-2" style={{ fontFamily: 'var(--font-alt)' }}>{item.title}</h4>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
