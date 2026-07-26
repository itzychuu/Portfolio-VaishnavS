import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import BorderGlow from './BorderGlow/BorderGlow';

const certificates = [
  {
    title: 'Flutter App Developer',
    issuer: 'Luminar Technolab',
    category: 'Mobile Development',
    icon: Award,
    date: 'Certified',
    url: '#', // Replace with your certificate link / PDF URL
  },
  {
    title: 'Cyber Security and Ethical Hacking',
    issuer: 'Pacelabs Trivandrum',
    category: 'Cyber Security',
    icon: ShieldCheck,
    date: 'Certified',
    url: '#', // Replace with your certificate link / PDF URL
  },
  {
    title: 'Cyber Security and Ethical Hacking',
    issuer: 'Techmaghi',
    category: 'Ethical Hacking',
    icon: ShieldCheck,
    date: 'Certified',
    url: '#', // Replace with your certificate link / PDF URL
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Certifications</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-bold reveal delay-100"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
          >
            Verified <span style={{ color: 'var(--accent)' }}>Certificates</span>
          </h2>
          <p className="text-sm mt-4 sm:mt-0 reveal delay-200" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
            Professional credentials & specialized training.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <BorderGlow
                key={cert.title + cert.issuer}
                className="reveal-scale"
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
                <div
                  className="p-6 h-full flex flex-col justify-between"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div>
                    {/* Top bar with icon & category badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ background: 'rgba(169, 28, 38, 0.12)', border: '1px solid rgba(169, 28, 38, 0.25)' }}
                      >
                        <Icon size={22} style={{ color: 'var(--accent)' }} />
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full glass"
                        style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)', letterSpacing: '0.05em' }}
                      >
                        {cert.category}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <h3
                      className="text-xl font-bold text-white mb-2 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-alt)' }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-sm font-medium mb-6"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                    >
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Footer status & button */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium" style={{ fontFamily: 'var(--font-alt)' }}>
                      <CheckCircle2 size={14} />
                      <span>{cert.date}</span>
                    </div>

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-105"
                      style={{
                        fontFamily: 'var(--font-alt)',
                        background: 'rgba(169, 28, 38, 0.15)',
                        border: '1px solid rgba(169, 28, 38, 0.35)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(169, 28, 38, 0.15)';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(169, 28, 38, 0.35)';
                      }}
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
}
