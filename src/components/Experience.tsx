import { SectionLabel } from './Summary';

const jobs = [
  {
    title: 'IT Manager (Business Systems SME)',
    company: 'NAFDA Foodservice',
    location: 'Parramatta, Sydney',
    period: '2021 — 2026',
    type: 'Full-time',
    highlights: [
      'Dual-capacity role as IT Manager and hands-on systems administrator/ERP Specialist supporting ~300 users nationally across ERP, virtualised environments, and business-critical applications.',
      'Acted as SME across ERP (Microsoft Dynamics NAV/Business Central) and business applications supporting order processing, inventory, pricing, and operational workflows.',
      'Analysed and resolved system issues using SQL, tracing data flows, and diagnosing issues within highly customised ERP environments.',
      'Designed and supported system integrations using SQL, PowerShell, and SFTP, enabling automated data exchange between systems.',
      'Managed virtualised infrastructure across two data centres (Hyper-V) and supported multi-site connectivity via SD-WAN, ensuring availability of business-critical systems.',
      'Delivered system enhancements across SDLC, including requirements gathering, testing, UAT, deployment, and user training.',
      'Represented IT at senior level, participating in board meetings and advising Board of Directors on IT strategy.',
    ],
  },
  {
    title: 'Customer Service & Sales (IT Systems Lead / ERP Project Lead)',
    company: 'Marrickville Freezers',
    location: 'Moorebank, Sydney',
    period: '2016 — 2021',
    type: 'Full-time',
    highlights: [
      'Led end-to-end ERP migration from legacy System 77 to Microsoft Dynamics 365 Business Central, including requirements gathering, data migration, system configuration, and integration design.',
      'Led implementation of telematics solution (VisionTrak) across delivery fleet, improving visibility of logistics operations and monitoring of driver behaviour.',
      'Worked closely with stakeholders across sales, customer service, and operations to map and redesign business processes, improving efficiency and data accuracy.',
      'Developed system integrations and automation using SQL and APIs, enabling reliable data flow between ERP, eCommerce, and supporting systems.',
      'Implemented BI reporting capability (Phocas), delivering operational and management insights to support decision-making.',
      'Produced functional documentation and supported testing, UAT, and deployment to ensure successful system rollout.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Work Experience</SectionLabel>
        <h2 className="text-3xl font-light text-slate-900 mt-2 mb-10">Career History</h2>
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200 hidden md:block" />
          <div className="flex flex-col gap-10">
            {jobs.map((job) => (
              <div key={job.company} className="md:pl-10 relative group">
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-sky-400 -translate-x-[3.5px] hidden md:block group-hover:scale-125 transition-transform" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                    <p className="text-sky-600 font-medium text-sm">{job.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-slate-500">{job.period}</p>
                    <p className="text-xs text-slate-400">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                      <span className="text-sky-400 mt-1 shrink-0">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
