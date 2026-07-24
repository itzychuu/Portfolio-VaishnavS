import { Search, Lightbulb, PenTool, Code2, CheckCircle, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  { icon: Search,      title: 'Discover',   desc: 'Understanding your goals, audience, and project requirements in depth.' },
  { icon: Lightbulb,   title: 'Research',   desc: 'Analyzing competitors, market trends, and best practices for your niche.' },
  { icon: PenTool,     title: 'Planning',   desc: 'Creating a roadmap with clear milestones, deliverables, and timelines.' },
  { icon: PenTool,     title: 'Design',     desc: 'Crafting wireframes, prototypes, and high-fidelity mockups for approval.' },
  { icon: Code2,       title: 'Develop',    desc: 'Writing clean, scalable, and well-tested code with modern frameworks.' },
  { icon: CheckCircle, title: 'Testing',    desc: 'Rigorous QA across devices, browsers, and performance benchmarks.' },
  { icon: Rocket,      title: 'Deploy',     desc: 'Launching with CI/CD pipelines, monitoring, and zero-downtime strategy.' },
  { icon: RefreshCw,   title: 'Maintain',   desc: 'Ongoing support, updates, and optimizations to keep things running smoothly.' },
];

export default function WorkProcess() {
  return (
    <section id="process" className="relative py-24 sm:py-32" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">How I Work</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 reveal delay-100"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
        >
          My Work <span style={{ color: 'var(--accent)' }}>Process</span>
        </h2>

        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(196,0,33,0.3), rgba(196,0,33,0.3), transparent)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="relative flex items-center justify-center w-12 h-12 rounded-full glass z-10"
                    style={{ border: '1px solid rgba(196,0,33,0.3)' }}
                  >
                    <step.icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.1)' }}>
                    0{i + 1}
                  </span>
                </div>

                <div className="glass card-tilt rounded-2xl p-5">
                  <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>{step.title}</h3>
                  <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
