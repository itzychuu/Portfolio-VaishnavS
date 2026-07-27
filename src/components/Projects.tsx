import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    num: '01',
    title: 'CareGuru - An medical AI Assistant',
    category: 'Booking Platform',
    desc: 'CareGuru is a smart healthcare appointment booking app that allows users to easily find doctors, schedule consultations, and manage appointments in one place.',
    tech: ['React', 'React', 'Firebase', 'Python', 'Vercel'],
    url: 'https://careguruv2-updated.vercel.app/',
    img: 'https://i.ibb.co/ZpdMYpDZ/Screenshot-2026-07-26-150658.png',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    num: '02',
    title: 'DocuSmith - An AI Powered Report Generator',
    category: 'SaaS Platform',
    desc: 'DocuSmith is an AI-powered report generation platform that simplifies creating structured, professional documents with minimal effort.',
    tech: ['Figma', 'React', 'CSS', 'Vercel', 'Render', 'Firebase', 'Python'],
    url: 'https://docusmithv2.vercel.app/',
    img: 'https://i.ibb.co/RTjvBWXX/Screenshot-2026-07-26-150713.png',
    span: 'lg:col-span-1',
  },
  {
    num: '03',
    title: 'OmniMind',
    category: 'Personal AI',
    desc: 'OmniMind is an intelligent, all-in-one AI platform designed to streamline tasks, generate insights, and enhance productivity through smart automation',
    tech: ['React', 'Figma', 'Tailwind CSS', 'Ollama'],
    url: 'https://careguruv2-updated.vercel.app/',
    img: 'https://i.ibb.co/MxZvrw7j/Screenshot-2026-07-26-150804.png',
    span: 'lg:col-span-1',
  },
  {
    num: '04',
    title: 'MemeBot',
    category: 'Fun Project',
    desc: 'This mini-project helped me explore AI behavior, prompt engineering, and how models handle unexpected inputs. Built using just HTML, CSS and JS Loving how even playful projects can teach so much.',
    tech: ['HTML','CSS','JS'],
    url: 'https://meme-bot-xi.vercel.app/',
    img: 'https://i.ibb.co/Dd0GHMV/Screenshot-2026-07-26-151507.png',
    span: 'lg:col-span-2',
  },
  {
    num: '05',
    title: 'Movie Listing App',
    category: 'Frontend Development',
    desc: 'Just a frontend app to show different movies and shows. Redesigned Ui and much better user experience',
    tech: ['React', 'Tailwind CSS'],
    url: 'https://movielistingappreact.netlify.app/',
    img: 'https://i.ibb.co/4nvJqpdn/Screenshot-2026-07-26-151524.png',
    span: 'lg:col-span-1',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Selected Work</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16">
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-bold reveal delay-100"
            style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
          >
            Featured <span style={{ color: 'var(--accent)' }}>Projects</span>
          </h2>
          <p className="text-sm mt-4 sm:mt-0 reveal delay-200" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>
            A selection of work I'm proud of.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {projects.map((p, i) => (
            <article
              key={p.num}
              className={`group relative flex flex-col overflow-hidden rounded-2xl glass card-tilt reveal ${p.span}`}
              style={{ transitionDelay: `${i * 0.05}s`, padding: '10px' }}
            >
              {/* Inset image frame */}
              <div className="relative flex-1 min-h-0 overflow-hidden rounded-xl">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.category} project by Vaishnav S`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Subtle bottom fade so content is readable on hover-desc, not a full dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ background: 'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(169,28,38,0.15), transparent 40%)' }} />

                {/* Badge, top-left — like "Newly Listed" */}
                <span
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-md"
                  style={{
                    fontFamily: 'var(--font-alt)',
                    letterSpacing: '0.08em',
                    background: 'rgba(0,0,0,0.45)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {p.num} / {p.category}
                </span>

                {/* Arrow, top-right */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md"
                  style={{ background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <ArrowUpRight size={16} className="text-white" />
                </a>

                {/* Description reveal, sits over the image on hover like before */}
                <p
                  className="absolute left-0 right-0 bottom-0 p-4 text-xs sm:text-sm text-gray-200 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {p.desc}
                </p>
              </div>

              {/* Content panel below image — solid, like the reference card's info block */}
              <div className="pt-3 px-1 pb-1 flex flex-col gap-2">
                <h3
                  className="text-base sm:text-lg font-bold leading-tight"
                  style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-primary, #fff)' }}
                >
                  {p.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white glass transition-all"
                    style={{ fontFamily: 'var(--font-alt)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(169,28,38,0.2)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '')}
                  >
                    <ExternalLink size={12} /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white glass transition-all"
                    style={{ fontFamily: 'var(--font-alt)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(169,28,38,0.2)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '')}
                  >
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}