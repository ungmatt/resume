import { ShieldCheck } from 'lucide-react';
import { SectionLabel } from './Summary';

const certs = [
  { name: 'AWS Certified Solutions Architect — Professional', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'ITIL 4 Managing Professional', issuer: 'Axelos', year: '2022' },
  { name: 'Certified Information Security Manager (CISM)', issuer: 'ISACA', year: '2021' },
  { name: 'PMP — Project Management Professional', issuer: 'Project Management Institute', year: '2020' },
  { name: 'Cisco CCNP Enterprise', issuer: 'Cisco Systems', year: '2019' },
  { name: 'Microsoft Certified: Azure Solutions Architect Expert', issuer: 'Microsoft', year: '2022' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Credentials</SectionLabel>
        <h2 className="text-3xl font-light text-slate-900 mt-2 mb-10">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((c) => (
            <div
              key={c.name}
              className="flex gap-3 items-start border border-slate-100 rounded-xl p-4 hover:border-sky-200 hover:shadow-sm transition-all"
            >
              <ShieldCheck size={18} className="text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-800 leading-snug">{c.name}</p>
                <p className="text-xs text-slate-400 mt-1">{c.issuer} &middot; {c.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
