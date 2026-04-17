import { Mail, Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Senior Manager | IT Consultant | Systems Analyst
            </p>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
              Matthew Ung
            </h1>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Enabling scalable, high-performing operations through aligned systems, data, and disciplined execution.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-slate-300 text-sm shrink-0">
            <a href="mailto:Ungmatt.au@gmail.com" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Mail size={15} className="text-sky-400" />
              Ungmatt.au@gmail.com
            </a>
            <a href="tel:+61431389881" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Phone size={15} className="text-sky-400" />
              0431 389 881
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-sky-400" />
              Sydney, Australia (AEDT)
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
