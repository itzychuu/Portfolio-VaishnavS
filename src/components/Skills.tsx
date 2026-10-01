import { Code, Server, Palette, Database, ShieldCheck, Wrench, Globe, Smartphone, BrainCircuit, Users } from 'lucide-react';
import BorderGlow from './BorderGlow/BorderGlow';

const categories = [
  {
    name: 'UI/UX Design',
    icon: Palette,
    skills: [
      { name: 'Figma',           level: 92 },
      { name: 'Wireframing',     level: 90 },
      { name: 'Prototyping',     level: 88 },
      { name: 'Design Thinking', level: 85 },
      { name: 'Accessibility',   level: 85 },
    ],
  },
  {
    name: 'Programming Languages',
    icon: Globe,
    skills: [
      { name: 'Python',     level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'C',          level: 85 },
      { name: 'Java',       level: 88 },
      { name: 'SQL',        level: 90 },
    ],
  },
  {
    name: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React.js',      level: 95 },
      { name: 'Vite',          level: 92 },
      { name: 'Next.js',       level: 88 },
      { name: 'Tailwind CSS',  level: 95 },
      { name: 'Framer Motion', level: 88 },
    ],
  },
  {
    name: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'FastAPI',    level: 90 },
      { name: 'Node.js',    level: 92 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs',  level: 95 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'Firebase',  level: 92 },
      { name: 'Firestore', level: 90 },
      { name: 'MySQL',     level: 88 },
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: BrainCircuit,
    skills: [
      { name: 'OpenAI API', level: 90 },
      { name: 'Gemini API', level: 88 },
      { name: 'Ollama',     level: 85 },
      { name: 'LLMs',       level: 88 },
      { name: 'XGBoost',    level: 82 },
    ],
  },
  {
    name: 'Cybersecurity',
    icon: ShieldCheck,
    skills: [
      { name: 'Kali Linux',       level: 88 },
      { name: 'Burp Suite',       level: 85 },
      { name: 'Nmap',             level: 88 },
      { name: 'Wireshark',        level: 85 },
      { name: 'Network Security', level: 88 },
      { name: 'Ethical Hacking',  level: 86 },
    ],
  },
  {
    name: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Flutter', level: 88 },
    ],
  },
  {
    name: 'Tools & Platform',
    icon: Wrench,
    skills: [
      { name: 'Git',     level: 95 },
      { name: 'GitHub',  level: 95 },
      { name: 'Postman', level: 90 },
      { name: 'Vercel',  level: 92 },
      { name: 'Render',  level: 85 },
    ],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Leadership',      level: 90 },
      { name: 'Teamwork',        level: 92 },
      { name: 'Communication',   level: 90 },
      { name: 'Adaptability',    level: 92 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-32 skills-section scroll-mt-20" style={{ zIndex: 2 }}>
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
            <BorderGlow
              key={cat.name}
              className="reveal"
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
              <div className="p-6 h-full flex flex-col justify-between" style={{ transitionDelay: `${i * 0.05}s` }}>
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0"
                      style={{ background: 'rgba(169,28,38,0.12)', border: '1px solid rgba(169,28,38,0.2)' }}
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
                          <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>
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
                          <div className="progress-fill animate" style={{ width: `${s.level}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

