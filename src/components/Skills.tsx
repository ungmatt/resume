import { SectionLabel } from './Summary';

const skillGroups = [
  {
    category: 'Business Analysis & Delivery',
    skills: ['Requirements Gathering & Analysis', 'Business Process Mapping & Improvement', 'Functional Specifications', 'SDLC Delivery (Design, UAT, Deployment)', 'Stakeholder Engagement & Vendor Management'],
  },
  {
    category: 'Enterprise Systems & Data',
    skills: ['ERP (Microsoft Dynamics NAV / Business Central)', 'System Integration (API, EDI, SFTP)', 'Data Analysis & Reporting (SQL, SSRS)', 'Automation & Workflow Optimisation', 'Data Governance'],
  },
  {
    category: 'Platforms & Technology',
    skills: ['Microsoft 365 & Business Applications', 'Virtualisation (Hyper-V, Citrix, RDS, AVD)', 'Infrastructure & Systems Administration', 'Email Security (Mimecast)', 'SD-WAN'],
  },
  {
    category: 'Programming & Scripting',
    skills: ['SQL', 'PowerShell', 'EDI', 'SFTP', 'API Development', '.NET'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Core Competencies</SectionLabel>
        <h2 className="text-3xl font-light text-slate-900 mt-2 mb-10">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category} className="border border-slate-100 rounded-xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-slate-50 border border-slate-200 text-slate-700 rounded-full hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
