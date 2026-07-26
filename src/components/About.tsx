import { Download, Target, Eye, Award } from 'lucide-react';
import { useCounter } from '@/hooks/useScrollReveal';
import TiltedCard from './TiltedCard/TiltedCard.tsx';

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
            <div className="relative mx-auto" style={{ maxWidth: 400 }}>
              {/* Red glow, same as before — swapped to the new accent RGB */}
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(169,28,38,0.15), transparent 70%)' }}
              />

              {/* Glass frame stays, image swapped for TiltedCard */}
              <div className="relative glass rounded-3xl p-2" style={{ aspectRatio: '4 / 5' }}>
                <TiltedCard
                  imageSrc="../public/images/hero/vaishnav-s-about.jpeg"
                  altText="Vaishnav S"
                  captionText="Vaishnav S"
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip
                  displayOverlayContent
                />
              </div>
            </div>
          </div>

          {/* Right: story */}
          <div className="lg:col-span-7 reveal-right">
            <p className="text-base sm:text-lg mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I'm <span className="text-white font-semibold">Vaishnav S</span>, a Computer Science and Engineering student from Kerala with a passion for building meaningful digital experiences through technology, design, and innovation. My interests lie at the intersection of Full-Stack Web Development, UI/UX Design, and Cybersecurity, where I enjoy transforming ideas into secure, scalable, and visually engaging products.
            </p>
            <p className="text-base sm:text-lg mb-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Beyond academics, I actively contribute to student communities and collaborative initiatives, taking on leadership roles that allow me to create impact while learning from others. I enjoy working on projects that challenge me to think creatively, improve continuously, and push the boundaries of what's possible with modern technologies.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="glass card-tilt rounded-2xl p-6">
                <Target size={24} style={{ color: 'var(--accent)' }} className="mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>Mission</h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  To continuously learn, innovate, and engineer scalable digital solutions that combine exceptional design, robust technology, and meaningful user experiences while contributing to the growth of individuals, communities, and the tech ecosystem.
                </p>
              </div>
              <div className="glass card-tilt rounded-2xl p-6">
                <Eye size={24} style={{ color: 'var(--accent)' }} className="mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>Vision</h3>
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  To shape the future through technology by building secure, innovative, and human-centered digital experiences that make a lasting impact.
                </p>
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <Counter value={3} label="Years" />
              <Counter value={40} label="Projects" />
              <Counter value={80} label="Repositories" />
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
      </div>
    </section>
  );
}
