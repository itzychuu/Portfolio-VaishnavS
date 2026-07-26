import { Download, Target, Eye, Award } from 'lucide-react';
import { useCounter } from '@/hooks/useScrollReveal';
import TiltedCard from './TiltedCard/TiltedCard.tsx';
import BorderGlow from './BorderGlow/BorderGlow';

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
            {/*
              Wrapper controls the actual visible size — capped at 460px so it
              can never exceed the column's real available width (~493px at
              max viewport, per the 5/12 grid split with gap-12). TiltedCard
              itself is told to fill 100% of this box rather than a fixed px
              size, so it can never overflow into the right column.
            */}
            <div
              className="relative mx-auto w-full"
              style={{ maxWidth: 460, aspectRatio: '5 / 6' }}
            >
              {/* Red glow, same as before — swapped to the new accent RGB */}
              <div
                className="absolute -inset-4 rounded-3xl blur-3xl"
                style={{ background: 'radial-gradient(circle, rgba(169,28,38,0.15), transparent 70%)' }}
              />

              <TiltedCard
                imageSrc="/images/hero/vaishnav-s-about.jpeg"
                altText="Vaishnav S"
                captionText="Vaishnav S"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
              />
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
              <BorderGlow
                edgeSensitivity={30}
                glowColor="354 83 40"
                backgroundColor="rgba(18, 15, 23, 0.65)"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#A91C26', '#188F87', '#A91C26']}
              >
                <div className="p-6 h-full">
                  <Target size={24} style={{ color: 'var(--accent)' }} className="mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>Mission</h3>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    To continuously learn, innovate, and engineer scalable digital solutions that combine exceptional design, robust technology, and meaningful user experiences while contributing to the growth of individuals, communities, and the tech ecosystem.
                  </p>
                </div>
              </BorderGlow>

              <BorderGlow
                edgeSensitivity={30}
                glowColor="354 83 40"
                backgroundColor="rgba(18, 15, 23, 0.65)"
                borderRadius={16}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#A91C26', '#188F87', '#A91C26']}
              >
                <div className="p-6 h-full">
                  <Eye size={24} style={{ color: 'var(--accent)' }} className="mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>Vision</h3>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    To shape the future through technology by building secure, innovative, and human-centered digital experiences that make a lasting impact.
                  </p>
                </div>
              </BorderGlow>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <Counter value={3} label="Years" />
              <Counter value={40} label="Projects" />
              <Counter value={80} label="Repositories" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
