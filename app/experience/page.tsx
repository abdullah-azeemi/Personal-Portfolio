import { Briefcase, FileText, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "SWE Fellow",
      company: "Headstarter.ai",
      location: "Remote",
      period: "Jul - Sep 2024",
      description: [
        "Collaborated with a diverse group of computer science students to create AI-driven applications, gaining valuable experience in software development and API integrations.",
        "Participated in mentorship sessions with industry leaders, gaining insights into startup dynamics from ideation to market entry.",
        "Developed skills necessary to thrive in a fast-paced, innovative environment focused on AI technologies.",
      ],
      icon: <Briefcase className="w-3.5 h-3.5 text-white" />,
    },
  ]

  const publications = [
    {
      title: "The Impact of Late-Night Phone Use on Sleep and Mental Health: The Role of Behavioral Adaptation Strategies",
      venue: "Frontiers of Information Technology (FIT)",
      year: "2024",
      description: "This study examines how nighttime phone use affects sleep quality and mental health among 139 participants. We found that excessive pre-sleep phone use is associated with a 65% decline in sleep quality and 70% increase in daytime fatigue, with each additional hour reducing sleep quality by 0.37 points. Importantly, structured behavioral interventions like scheduled breaks and mindfulness exercises reduced fatigue by 30%, suggesting that mindful usage patterns—not just reduced screen time—are key to improving digital wellness and sleep health.",
      link: "https://www.researchgate.net/publication/399744760_The_Impact_of_Late-Night_Phone_Use_on_Sleep_and_Mental_Health_The_Role_of_Behavioral_Adaptation_Strategies",
      icon: <FileText className="w-3.5 h-3.5 text-white" />,
    },
  ]

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend & Databases",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      title: "AI / ML",
      skills: ["FastF1", "Pandas", "NumPy", "Scikit-learn", "OpenAI API"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
    },
  ]

  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
      <div className="flex justify-between items-start mb-16">
        <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight">Experience & Research</h1>
        <Button asChild className="bg-slate-900 hover:bg-black text-white rounded-lg px-5 h-10 text-[13px] font-semibold flex items-center gap-2 shadow-sm">
          <a href="https://drive.google.com/file/d/1BeajWLOupgJaF6Hh5mIaUNk2JdIrVRFJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Download className="w-3.5 h-3.5" />
            Download CV
          </a>
        </Button>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Work Experience</h2>
          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-9">
                <div className="absolute -left-[0.85rem] top-0 w-6 h-6 rounded-full bg-slate-900 border-[3px] border-white flex items-center justify-center shadow-sm">
                  {exp.icon}
                </div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">{exp.company}</span> | {exp.location} | {exp.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Publications</h2>
          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">
            {publications.map((pub, idx) => (
              <div key={idx} className="relative pl-9">
                <div className="absolute -left-[0.85rem] top-0 w-6 h-6 rounded-full bg-slate-900 border-[3px] border-white flex items-center justify-center shadow-sm">
                  {pub.icon}
                </div>
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">{pub.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="font-semibold">{pub.venue}</span> | {pub.year}
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {pub.description}
                </p>
                <Link
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on ResearchGate
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-950 mb-8 uppercase tracking-widest text-[11px] opacity-60">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold text-slate-900 mb-4 tracking-tight">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-1 bg-slate-50 text-slate-600 font-semibold rounded border border-slate-100 uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
