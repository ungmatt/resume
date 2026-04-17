import { GraduationCap } from 'lucide-react';
import { SectionLabel } from './Summary';

const education = [
  {
    degree: 'M.S. Information Technology Management',
    school: 'Carnegie Mellon University',
    location: 'Pittsburgh, PA',
    year: '2009',
    note: 'Concentration in Enterprise Architecture & Security',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'University of Texas at Austin',
    location: 'Austin, TX',
    year: '2007',
    note: 'Minor in Business Administration',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Academic Background</SectionLabel>
        <h2 className="text-3xl font-light text-slate-900 mt-2 mb-10">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e) => (
            <div key={e.degree} className="bg-white border border-slate-100 rounded-xl p-6 flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center">
                <GraduationCap size={18} className="text-sky-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 leading-snug">{e.degree}</h3>
                <p className="text-sky-600 text-sm font-medium mt-1">{e.school}</p>
                <p className="text-slate-400 text-sm mt-0.5">{e.location} &middot; {e.year}</p>
                <p className="text-slate-500 text-sm mt-2 italic">{e.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
