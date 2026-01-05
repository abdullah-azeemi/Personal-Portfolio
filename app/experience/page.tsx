import { Briefcase, FlaskConical, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Senior ML Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Led the development of a production-level recommendation system, increasing user engagement by 15%.",
        "Designed and implemented scalable data pipelines using Apache Spark and AWS for model training and deployment.",
        "Mentored junior engineers and established best practices for code reviews and MLOps within the team.",
      ],
      icon: <Briefcase className="w-5 h-5 text-white" />,
    },
    {
      title: "Software Engineer",
      company: "Innovate Inc.",
      location: "Remote",
      period: "2020 - 2022",
      description: [
        "Developed and maintained machine learning models for natural language processing tasks.",
        "Collaborated with cross-functional teams to integrate ML models into user-facing products.",
        "Improved model inference speed by 30% through optimization and deployment on GPU instances.",
      ],
      icon: <Briefcase className="w-5 h-5 text-white" />,
    },
    {
      title: "Data Science Intern",
      company: "DataDriven LLC",
      location: "Boston, MA",
      period: "Summer 2019",
      description: [
        "Conducted exploratory data analysis on large datasets to identify key trends and insights.",
        "Assisted in building a predictive model to forecast customer churn with 85% accuracy.",
      ],
      icon: <Briefcase className="w-5 h-5 text-white" />,
    },
  ]

  const research = [
    {
      title: "Graduate Research Assistant",
      institution: "University AI Lab",
      advisor: "PI: Dr. Evelyn Reed",
      period: "2018 - 2020",
      description: [
        "Investigated novel deep learning architectures for computer vision tasks, resulting in a publication at CVPR.",
        "Developed a novel attention mechanism for image segmentation models.",
        "Presented findings at two international academic conferences.",
      ],
      icon: <FlaskConical className="w-5 h-5 text-white" />,
    },
  ]

  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "C++", "R"],
    },
    {
      title: "ML/DL Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    },
    {
      title: "Data Science Libraries",
      skills: ["Pandas", "NumPy", "Matplotlib", "SciPy"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Jupyter", "VS Code", "CI/CD"],
    },
  ]

  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
      <div className="flex justify-between items-start mb-16">
        <h1 className="text-4xl font-bold text-gray-900">Experience & Skills</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Work Experience</h2>
          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-10">
                <div className="absolute -left-[1.35rem] top-0 w-8 h-8 rounded-full bg-blue-600 border-4 border-[#f5f5f7] flex items-center justify-center shadow-sm">
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
          <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Research</h2>
          <div className="relative border-l-2 border-gray-100 ml-3 space-y-12">
            {research.map((res, idx) => (
              <div key={idx} className="relative pl-10">
                <div className="absolute -left-[1.35rem] top-0 w-8 h-8 rounded-full bg-blue-600 border-4 border-[#f5f5f7] flex items-center justify-center shadow-sm">
                  {res.icon}
                </div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{res.title}</h3>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">{res.institution}</span> | {res.advisor} | {res.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {res.description.map((item, i) => (
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
          <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wide">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 font-medium rounded-full border border-blue-100"
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
