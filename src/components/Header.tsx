import { Mail, Phone, Linkedin, MapPin, Github } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Senior IT Manager
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
              Alex Morgan
            </h1>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              15+ years driving digital transformation, enterprise infrastructure, and high-performance technology teams across global organizations.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-slate-300 text-sm shrink-0">
            <a href="mailto:alex.morgan@email.com" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Mail size={15} className="text-sky-400" />
              alex.morgan@email.com
            </a>
            <a href="tel:+14155550192" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Phone size={15} className="text-sky-400" />
              +1 (415) 555-0192
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-sky-400" />
              San Francisco, CA
            </span>
            <a href="#" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Linkedin size={15} className="text-sky-400" />
              linkedin.com/in/alexmorgan
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Github size={15} className="text-sky-400" />
              github.com/alexmorgan
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
