import { SectionLabel } from './Summary';

const jobs = [
  {
    title: 'Senior IT Manager',
    company: 'Nexus Global Technologies',
    location: 'San Francisco, CA',
    period: '2019 — Present',
    type: 'Full-time',
    highlights: [
      'Lead a cross-functional IT department of 45 engineers, architects, and analysts across infrastructure, security, and software delivery.',
      'Directed a $12M AWS cloud migration, reducing on-prem costs by 38% and improving deployment frequency by 4x.',
      'Established a Zero Trust security framework reducing incident response time from 72 hours to under 4 hours.',
      'Implemented ITIL-based service management, achieving 99.95% system uptime and cutting helpdesk tickets by 31%.',
      'Built quarterly OKR alignment between IT roadmap and executive business strategy, improving stakeholder satisfaction scores by 22%.',
    ],
  },
  {
    title: 'IT Infrastructure Manager',
    company: 'Vertex Financial Group',
    location: 'New York, NY',
    period: '2015 — 2019',
    type: 'Full-time',
    highlights: [
      'Managed global network infrastructure spanning 14 offices across North America and Europe.',
      'Led a 200-node datacenter consolidation project delivered 6 weeks ahead of schedule and 15% under budget.',
      'Introduced DevOps practices and CI/CD pipelines, cutting release cycles from 3 weeks to 3 days.',
      'Oversaw vendor relationships with Cisco, Microsoft, and AWS representing $8M in annual contracts.',
    ],
  },
  {
    title: 'Systems & Network Engineer',
    company: 'BluePeak Technologies',
    location: 'Austin, TX',
    period: '2011 — 2015',
    type: 'Full-time',
    highlights: [
      'Designed and maintained enterprise network infrastructure for 1,200+ users.',
      'Architected and deployed a VMware vSphere environment, consolidating 80 physical servers into 12 hosts.',
      'Served as technical lead during SOC 2 Type II audit, achieving certification first attempt.',
    ],
  },
  {
    title: 'IT Support Specialist',
    company: 'ClearPath Solutions',
    location: 'Austin, TX',
    period: '2009 — 2011',
    type: 'Full-time',
    highlights: [
      'Provided Tier 2/3 support across Windows and Linux environments for 400+ endpoints.',
      'Automated recurring maintenance tasks using PowerShell, saving 8+ hours per week of manual effort.',
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
