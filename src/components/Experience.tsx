import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  { role: 'Senior Full Stack Developer', company: 'Freelance', period: '2023 — Present', desc: 'Leading end-to-end development of premium web applications for global clients. Specializing in React, Node.js, and cinematic UI design.' },
  { role: 'Full Stack Developer',          company: 'Tech Studio', period: '2022 — 2023',  desc: 'Built and maintained SaaS platforms serving 10k+ users. Implemented CI/CD pipelines and improved performance by 40%.' },
  { role: 'Frontend Developer',            company: 'Startup Hub', period: '2021 — 2022',  desc: 'Developed responsive user interfaces with React and TypeScript. Collaborated with design teams to ship pixel-perfect products.' },
];

const education = [
  { degree: 'B.Tech in Computer Science', institution: 'University', period: '2019 — 2023', achievements: ['Graduated with Distinction', 'Best Project Award 2023'] },
  { degree: 'Full Stack Bootcamp',         institution: 'Code Academy', period: '2021',      achievements: ['Top 5% of cohort', 'Built 5 production apps'] },
];

const certificates = [
  'AWS Certified Developer Associate',
  'Meta Front-End Developer',
  'Google UX Design Professional',
  'MongoDB Developer Certification',
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
                  <div className="absolute -left-7 top-1.5 w-4 h-4 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 15px rgba(196,0,33,0.5)' }} />
                  <div className="glass card-tilt rounded-2xl p-5">
                    <span className="text-xs font-semibold" style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)', letterSpacing: '0.05em' }}>
                      {exp.period}
                    </span>
                    <h4 className="text-lg font-semibold text-white mt-1" style={{ fontFamily: 'var(--font-alt)' }}>{exp.role}</h4>
                    <p className="text-sm mb-2" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>{exp.company}</p>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certificates */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-8 reveal" style={{ fontFamily: 'var(--font-alt)' }}>
              <GraduationCap size={20} style={{ color: 'var(--accent)' }} /> Education
            </h3>
            <div className="space-y-4 mb-12">
              {education.map((edu, i) => (
                <div key={i} className="glass card-tilt rounded-2xl p-5 reveal-right" style={{ transitionDelay: `${i * 0.1}s` }}>
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
              ))}
            </div>

            {/* Certificates */}
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6 reveal" style={{ fontFamily: 'var(--font-alt)' }}>
              <Award size={20} style={{ color: 'var(--accent)' }} /> Certificates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificates.map((cert, i) => (
                <div key={cert} className="glass rounded-xl p-4 flex items-center gap-3 reveal-scale" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{ background: 'rgba(196,0,33,0.12)' }}>
                    <Award size={14} style={{ color: 'var(--accent)' }} />
                  </div>
                  <span className="text-xs" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
