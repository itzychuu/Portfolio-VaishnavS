import { Briefcase, GraduationCap, Award } from 'lucide-react';
import BorderGlow from './BorderGlow/BorderGlow';

const experiences = [
  { role: 'Secretary',                                company: 'IEEE IAS SBCE', period: '2026 — Present', desc: 'Leading end-to-end development of premium web applications for global clients. Specializing in React, Node.js, and cinematic UI design.' },
  { role: 'Creative Team Lead',                       company: 'MuLearn SBC', period: '2025 — Present',  desc: 'Built and maintained SaaS platforms serving 10k+ users. Implemented CI/CD pipelines and improved performance by 40%.' },
  { role: 'Volunteer',                                company: 'TinkerHub SBCE', period: '2025 — Present',  desc: 'Developed responsive user interfaces with React and TypeScript. Collaborated with design teams to ship pixel-perfect products.' },
  { role: 'Social Media and Marketing Volunteer',     company: 'KTUSpot.in', period: '2026 — Present',  desc: 'Developed responsive user interfaces with React and TypeScript. Collaborated with design teams to ship pixel-perfect products.' },
];

const education = [
  { degree: 'B.Tech in Computer Science', institution: 'Sree Buddha College of Engineering, Pattoor', period: '2023 - 2027', achievements: ['Currently Studying Final Year in CSE'] },
  { degree: 'Higher Secondary Education', institution: 'NSS Higher Secondary, Pandalam', period: '2021 - 2022',      achievements: ['89% scored'] },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Career Path</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 reveal delay-100"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
        >
          Experience <span style={{ color: 'var(--accent)' }}>&</span> Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-8 reveal" style={{ fontFamily: 'var(--font-alt)' }}>
              <Briefcase size={20} style={{ color: 'var(--accent)' }} /> Work Experience
            </h3>
            <div className="relative pl-8">
              {/* Line */}
              <div className="absolute left-2 top-2 bottom-2 w-px" style={{ background: 'linear-gradient(180deg, var(--accent), transparent)' }} />
              {experiences.map((exp, i) => (
                <div key={i} className="relative mb-8 reveal-left" style={{ transitionDelay: `${i * 0.1}s` }}>
                  {/* Dot */}
                  <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 15px rgba(169,28,38,0.5)', zIndex: 10 }} />
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
                    <div className="p-5 h-full">
                      <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)', letterSpacing: '0.05em' }}>
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-semibold text-white mt-1" style={{ fontFamily: 'var(--font-alt)' }}>{exp.role}</h4>
                      <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>{exp.company}</p>
                      <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{exp.desc}</p>
                    </div>
                  </BorderGlow>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-8 reveal" style={{ fontFamily: 'var(--font-alt)' }}>
              <GraduationCap size={20} style={{ color: 'var(--accent)' }} /> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="reveal-right" style={{ transitionDelay: `${i * 0.1}s` }}>
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
                    <div className="p-5 h-full">
                      <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)', letterSpacing: '0.05em' }}>
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-semibold text-white mt-1" style={{ fontFamily: 'var(--font-alt)' }}>{edu.degree}</h4>
                      <p className="text-sm mb-3" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>{edu.institution}</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((a) => (
                          <li key={a} className="flex items-center gap-2 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
                            <Award size={12} style={{ color: 'var(--accent)' }} /> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </BorderGlow>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
