import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';

const contactInfo = [
  { icon: Mail,    label: 'Email',    value: 'vaishnavshalkumar49@gmail.com',   href: 'mailto:vaishnavshalkumar49@gmail.com' },
  { icon: Phone,   label: 'Phone',    value: '+91 85476 12760',       href: 'tel:+918547612760' },
  { icon: MapPin,   label: 'Location', value: 'Pandalam, Pathanamthitta, Kerala, India',                 href: '#' },
];

const socials = [
  { icon: Linkedin,   href: 'https://linkedin.com/in/1920-vaishnav-s',   label: 'LinkedIn' },
  { icon: Github,     href: 'https://github.com/itzychuu',         label: 'GitHub' },
  { icon: Twitter,    href: 'https://x.com/_why_choo_',        label: 'X (Twitter)' },
  { icon: Instagram,  href: 'https://www.instagram.com/_y._chuu._',      label: 'Instagram' }
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }); }, 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32" style={{ zIndex: 2 }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-8 h-px" style={{ background: 'var(--accent)' }} />
          <span className="section-label">Get In Touch</span>
        </div>

        <h2
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 reveal delay-100"
          style={{ fontFamily: 'var(--font-display)', lineHeight: 0.95 }}
        >
          Let's Build <span style={{ color: 'var(--accent)' }}>Together</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div className="reveal-left">
            <p className="text-base mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Have a project in mind or just want to say hello? I'm always open to discussing
              new opportunities, creative ideas, or collaborations. Let's build something amazing together.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 glass card-tilt rounded-2xl p-4 transition-all"
                  style={{ cursor: 'none' }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: 'rgba(169,28,38,0.12)' }}>
                    <c.icon size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-alt)', color: 'var(--text-secondary)' }}>{c.label}</p>
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-alt)' }}>{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass rounded-full p-3 transition-all duration-300 hover:scale-110"
                  style={{ cursor: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(169,28,38,0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(169,28,38,0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.borderColor = ''; }}
                >
                  <s.icon size={18} style={{ color: 'var(--text-secondary)' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal-right">
            <form onSubmit={onSubmit} className="glass rounded-3xl p-8 space-y-5" noValidate>
              {/* Honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder=" "
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-label="Your name"
                />
                <label className="form-label">Your Name</label>
                {errors.name && <p className="text-xs mt-1" style={{ color: 'var(--accent)' }}>{errors.name}</p>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder=" "
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-label="Your email"
                />
                <label className="form-label">Your Email</label>
                {errors.email && <p className="text-xs mt-1" style={{ color: 'var(--accent)' }}>{errors.email}</p>}
              </div>

              <div className="form-group">
                <textarea
                  className="form-input"
                  placeholder=" "
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-label="Your message"
                />
                <label className="form-label">Your Message</label>
                {errors.message && <p className="text-xs mt-1" style={{ color: 'var(--accent)' }}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn-magnetic w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-semibold transition-all duration-300"
                style={{ background: sent ? '#22c55e' : 'var(--accent)', fontFamily: 'var(--font-alt)', letterSpacing: '0.05em' }}
                onMouseEnter={(e) => { if (!sent) (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(169,28,38,0.5)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                {sent ? (
                  <>Message Sent!</>
                ) : (
                  <>Send Message <Send size={14} /></>
                )}
              </button>

              {sent && (
                <p className="text-center text-sm" style={{ fontFamily: 'var(--font-alt)', color: '#22c55e', animation: 'fadeIn 0.4s ease' }}>
                  Thanks! I'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
