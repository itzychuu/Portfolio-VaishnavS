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
              className={`group relative overflow-hidden rounded-2xl glass card-tilt reveal ${p.span}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {/* Image */}
              <img
                src={p.img}
                alt={`${p.title} — ${p.category} project by Vaishnav S`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: 'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(196,0,33,0.15), transparent 40%)' }} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold" style={{ fontFamily: 'var(--font-alt)', color: 'var(--accent)', letterSpacing: '0.1em' }}>
                    {p.num} / {p.category}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={20} className="text-white" />
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-alt)' }}>
                  {p.title}
                </h3>
                {/* Description (hidden, shows on hover) */}
                <p className="text-xs sm:text-sm text-gray-300 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500"
                   style={{ fontFamily: 'var(--font-body)' }}>
                  {p.desc}
                </p>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t) => (
                    <span key={t} className="skill-pill">{t}</span>
                  ))}
                </div>
                {/* Buttons */}
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={p.url}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white glass transition-all"
                    style={{ fontFamily: 'var(--font-alt)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(196,0,33,0.2)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '')}
                  >
                    <ExternalLink size={12} /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white glass transition-all"
                    style={{ fontFamily: 'var(--font-alt)' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(196,0,33,0.2)')}
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
