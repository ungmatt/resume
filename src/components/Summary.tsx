const stats = [
  { value: '4+', label: 'Years IT Management' },
  { value: '~300', label: 'Users Supported' },
  { value: '15+', label: 'Years IT Professional' },
  { value: '99.95%', label: 'Uptime Achieved' },
];

export default function Summary() {
  return (
    <section id="summary" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Professional Summary</SectionLabel>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mt-4 mb-12">
          Senior IT and operations leader with end-to-end ownership of systems, infrastructure, and ERP platforms in foodservice and distribution environments. Combines strategic leadership with hands-on technical execution to deliver scalable, high-performing operations.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="border border-slate-100 rounded-xl p-6 text-center bg-slate-50">
              <p className="text-3xl font-light text-slate-900 mb-1">{s.value}</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-1">
      <span className="block h-px w-8 bg-sky-400" />
      <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
        {children}
      </span>
    </div>
  );
}
