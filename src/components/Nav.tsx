import { useState, useEffect } from 'react';

const links = [
  { label: 'Summary', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = links.map((l) => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-slate-100' : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center gap-8 h-14">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              active === link.href.replace('#', '')
                ? 'text-sky-600'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
