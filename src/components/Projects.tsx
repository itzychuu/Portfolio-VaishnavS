import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'Arcana - AI Phishing Detection System',
    category: 'Cybersecurity',
    desc: 'Arcana is a phishing detection system that analyzes URLs using machine learning and security signals to classify websites as Safe, Suspicious, or Critical through a browser extension and backend engine.',
    tech: ['Python', 'FastAPI', 'XGBoost', 'Firebase', 'Chrome Extension'],
    url: 'https://github.com/itzychuu/ARCANA',
    img: 'https://i.postimg.cc/X7yCBRmK/Arcana-Image.jpg',
    span: 'lg:col-span-2',
  },
  {
    num: '02',
    title: 'GABRIEL - Autonomous Emergency Network',
    category: 'Emergency Response',
    desc: 'GABRIEL is a real-time emergency coordination system connecting ambulances, hospitals, and citizens through triage-aware dispatch, hospital readiness analysis, and vehicle tracking.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'Socket.IO', 'Google Maps'],
    url: 'https://github.com/itzychuu/Gabriel---Coordinating-Systems-Ambulance-Hospitals-and-Citizens',
    img: 'https://i.postimg.cc/vmm9T4s5/gabriel-Image.jpg',
    span: 'lg:col-span-1',
  },
  {
    num: '03',
    title: 'TalentPilot - AI Recruitment System',
    category: 'AI Platform',
    desc: 'TalentPilot parses resumes, matches candidates to job requirements using semantic search, verifies claims with agentic workflows, and supports dynamic screening.',
    tech: ['React', 'Tauri', 'FastAPI', 'Python', 'FAISS', 'LangGraph'],
    url: 'https://github.com/itzychuu/TalentPilot',
    img: 'https://i.postimg.cc/3NjWnhhy/Talent-Pilot-AI-Recruitment-Logo.png',
    span: 'lg:col-span-1',
  },
  {
    num: '04',
    title: 'SmartPharmacy - Inventory Intelligence',
    category: 'AI & Analytics',
    desc: 'SmartPharmacy is a predictive inventory system forecasting medicine demand, identifying stock-out risks, and optimizing supplier reordering.',
    tech: ['Python', 'FastAPI', 'Machine Learning', 'XGBoost', 'React'],
    url: '',
    img: 'https://i.postimg.cc/FsWhmzDq/Smart-Pharmacy-Analytics-Logo.png',
    span: 'lg:col-span-2',
  },
  {
    num: '05',
    title: 'CareGuru - Healthcare Platform',
    category: 'Healthcare AI',
    desc: 'CareGuru helps users discover nearby hospitals, check doctor availability, book appointments, access emergency services, and query AI healthcare assistance.',
    tech: ['React', 'Firebase', 'Python', 'AI', 'Vercel'],
    url: 'https://careguruv2-updated.vercel.app/',
    img: 'https://i.ibb.co/ZpdMYpDZ/Screenshot-2026-07-26-150658.png',
    span: 'lg:col-span-2',
  },
  {
    num: '06',
    title: 'DocuSmith - AI Report Generator',
    category: 'AI Productivity',
    desc: 'DocuSmith is an AI-powered report generation platform that helps users create structured documents with intelligent assistance through a modern UI.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'FastAPI', 'Python'],
    url: 'https://docusmithv2.vercel.app/',
    img: 'https://i.postimg.cc/wMWY64c3/Docu-Smith.png',
    span: 'lg:col-span-1',
  },
  {
    num: '07',
    title: 'Coding Club SBCE Website',
    category: 'Web Development',
    desc: 'A modern website for the Coding Club at Sree Buddha College of Engineering featuring events, team profiles, and interactive user experience.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://codingclub-sbce.vercel.app/',
    img: 'https://i.postimg.cc/hPhHLr10/Coding-Club-Image.png',
    span: 'lg:col-span-1',
  },
  {
    num: '08',
    title: 'Personal Portfolio Website',
    category: 'Personal Website',
    desc: 'A personal portfolio showcasing projects, technical skills, career timeline, and certifications across software development, AI, UI/UX, and cybersecurity.',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://vaishnav-s.vercel.app/',
    img: 'https://i.postimg.cc/66bPpZxQ/Portfolio-Image.png',
    span: 'lg:col-span-2',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-32 scroll-mt-20" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Selected Work</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-bold reveal delay-100"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
          >
            Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
          </h2>
          <p className="text-sm mt-3 sm:mt-0 reveal delay-200" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
            A selection of work I'm proud of.
          </p>
        </div>

        {/* Organized Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.num}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl glass card-tilt reveal ${p.span}`}
              style={{ transitionDelay: `${i * 0.05}s`, padding: '12px' }}
            >
              {/* Inset image frame */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl shrink-0">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.category} project by Vaishnav Shalikumar`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category Badge */}
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md"
                  style={{
                    fontFamily: 'var(--font-alt)',
                    letterSpacing: '0.08em',
                    background: 'rgba(0,0,0,0.65)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {p.num} / {p.category}
                </span>

                {/* Direct External Link Icon */}
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.title} website`}
                    className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-full backdrop-blur-md transition-transform hover:scale-110"
                    style={{ background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <ArrowUpRight size={16} className="text-white" />
                  </a>
                )}
              </div>

              {/* Content panel below image */}
              <div className="pt-4 px-2 pb-2 flex flex-col justify-between flex-1 gap-3">
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold leading-snug mb-1.5"
                    style={{ fontFamily: 'var(--font-alt)', color: '#ffffff' }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 line-clamp-2"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Tech tags & Links */}
                <div className="space-y-3 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="skill-pill text-[11px] px-2.5 py-1">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${p.title}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white glass transition-all hover:bg-red-900/30"
                        style={{ fontFamily: 'var(--font-alt)' }}
                      >
                        <ExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    <a
                      href={p.url && p.url.includes('github') ? p.url : 'https://github.com/itzychuu'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View code for ${p.title}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-300 glass transition-all hover:text-white hover:bg-white/10"
                      style={{ fontFamily: 'var(--font-alt)' }}
                    >
                      <Github size={12} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}