import { Code, Server, Palette, Database, Cloud, GitBranch, BrainCircuit, ShieldCheck, Wrench, Globe } from 'lucide-react';

const categories = [
  {
    name: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React',        level: 95 },
      { name: 'TypeScript',   level: 90 },
      { name: 'Next.js',      level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js',  level: 90 },
      { name: 'Express',  level: 85 },
      { name: 'Python',   level: 80 },
    ],
  },
  {
    name: 'UI/UX',
    icon: Palette,
    skills: [
      { name: 'Figma',        level: 90 },
      { name: 'Design Systems', level: 85 },
      { name: 'Prototyping',  level: 88 },
      { name: 'Wireframing',  level: 85 },
    ],
  },
  {
    name: 'Database',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB',    level: 82 },
      { name: 'Supabase',   level: 90 },
    ],
  },
  {
    name: 'DevOps',
    icon: GitBranch,
    skills: [
      { name: 'CI/CD',       level: 82 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'Kubernetes',  level: 70 },
    ],
  },
  {
    name: 'Cybersecurity',
    icon: ShieldCheck,
    skills: [
      { name: 'OWASP Top 10', level: 82 },
      { name: 'Pen Testing',  level: 70 },
      { name: 'Auth/OAuth',   level: 88 },
      { name: 'Cryptography', level: 75 },
    ],
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git',        level: 95 },
      { name: 'VS Code',    level: 95 },
      { name: 'Postman',    level: 88 },
    ],
  },
  {
    name: 'Languages',
    icon: Globe,
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'C/C++',      level: 92 },
      { name: 'Java',       level: 90 },
      { name: 'TypeScript', level: 92 },
      { name: 'Python',     level: 80 },
      { name: 'SQL',        level: 88 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 skills-section" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Capabilities</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 reveal delay-100"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
        >
          Skills <span style={{ color: 'var(--accent)' }}>&</span> Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="glass card-tilt rounded-2xl p-6 reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ background: 'rgba(196,0,33,0.12)', border: '1px solid rgba(196,0,33,0.2)' }}
                >
                  <cat.icon size={18} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'var(--font-alt)', letterSpacing: '0.02em' }}>
                  {cat.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>
                        {s.name}
                      </span>
                      <span
                        className="text-xs font-mono"
                        style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)' }}
                      >
                        {s.level}%
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
