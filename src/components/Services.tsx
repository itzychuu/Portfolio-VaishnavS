import { PenTool, Code2, Smartphone, Server, BrainCircuit, Palette, Cloud, ArrowUpRight } from 'lucide-react';

const services = [
  { icon: PenTool,        title: 'UI/UX Design',         desc: 'Crafting intuitive, beautiful interfaces with user-centered design principles and modern aesthetics.' },
  { icon: Code2,          title: 'Web Development',      desc: 'Building fast, scalable web applications with React, Next.js, and modern TypeScript.' },
  { icon: Smartphone,    title: 'Mobile Apps',          desc: 'Cross-platform mobile apps with React Native that feel native on iOS and Android.' },
  { icon: Server,         title: 'Backend Development',  desc: 'Robust APIs and microservices with Node.js, Python, and cloud-native architecture.' },
  { icon: BrainCircuit,   title: 'AI Integrations',      desc: 'Integrating AI capabilities — LLMs, RAG, vector search — into products that feel magical.' },
  { icon: Palette,        title: 'Brand Identity',       desc: 'Creating cohesive brand systems with typography, color, and motion guidelines.' },
  { icon: Cloud,          title: 'Cloud Deployment',    desc: 'Deploying and scaling on AWS, Vercel, and Cloudflare with CI/CD best practices.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">What I Do</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 reveal delay-100"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
        >
          Services <span style={{ color: 'var(--accent)' }}>I Offer</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group glass card-tilt rounded-2xl p-8 reveal relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Glow on hover */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle, rgba(196,0,33,0.2), transparent 70%)' }}
              />

              {/* Icon */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: 'rgba(196,0,33,0.1)', border: '1px solid rgba(196,0,33,0.2)' }}
              >
                <s.icon size={24} style={{ color: 'var(--accent)' }} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3" style={{ fontFamily: 'var(--font-alt)' }}>
                {s.title}
              </h3>
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {s.desc}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-1 mt-6 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)' }}>
                Learn More <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
