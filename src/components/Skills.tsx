import { SectionLabel } from './Summary';

const skillGroups = [
  {
    category: 'Leadership & Strategy',
    skills: ['IT Strategy', 'Digital Transformation', 'Budget Management', 'OKR/KPI Frameworks', 'Vendor Negotiation', 'Executive Communication', 'Team Building', 'Change Management'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Azure', 'Google Cloud', 'VMware vSphere', 'Terraform', 'Kubernetes', 'Docker', 'Cisco Networking', 'SD-WAN', 'BGP/OSPF'],
  },
  {
    category: 'Security & Compliance',
    skills: ['Zero Trust Architecture', 'SIEM / SOC Operations', 'ISO 27001', 'SOC 2', 'NIST Framework', 'PCI-DSS', 'Incident Response', 'Pen Testing Oversight'],
  },
  {
    category: 'Platforms & Tooling',
    skills: ['ServiceNow', 'Jira', 'Confluence', 'Datadog', 'Splunk', 'Active Directory', 'Microsoft 365', 'GitHub Actions', 'Jenkins', 'Ansible'],
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
