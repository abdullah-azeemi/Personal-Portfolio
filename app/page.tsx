import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const featuredProjects = [
    {
      title: "Interactive Covid-19 Data Dashboard",
      description: "An interactive dashboard visualizing global Covid-19 data.",
      technologies: ["Python", "Plotly", "Dash"],
      image: "/data-visualization-dashboard-graph.jpg",
    },
    {
      title: "Stock Price Prediction with LSTMs",
      description: "A predictive model for forecasting stock market trends using LSTMs.",
      technologies: ["Python", "TensorFlow", "Keras"],
      image: "/stock-market-candle-chart.jpg",
    },
    {
      title: "Real-time Object Detection App",
      description: "An application for detecting objects in real-time video streams.",
      technologies: ["Python", "PyTorch", "OpenCV"],
      image: "/city-street-object-detection-boxes.jpg",
    },
  ]

  return (
    <main className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-32">
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          <div className="absolute inset-0 rounded-full border-8 border-white shadow-xl overflow-hidden">
            <Image src="/images/screenshot-202026-01-06-20at-201.png" alt="Profile" fill className="object-cover" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight leading-[1.1]">
            Machine Learning Engineer & Innovator
          </h1>
          <p className="text-lg text-slate-600 mb-9 leading-relaxed max-w-2xl font-medium">
            A passionate and dedicated ML engineer with a focus on developing innovative solutions for complex problems.
            Specializing in predictive modeling and data visualization to drive impactful results.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              asChild
              className="bg-slate-900 hover:bg-black text-white px-7 py-3 text-sm font-semibold rounded-lg h-auto shadow-sm transition-all"
            >
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200 text-slate-900 px-7 py-3 text-sm font-semibold rounded-lg h-auto border border-gray-200"
            >
              <Link href="https://linkedin.com">Connect on LinkedIn</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Featured Projects</h2>
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row border border-gray-100 group"
            >
              <div className="w-full md:w-60 h-44 md:h-auto relative bg-slate-900 flex-shrink-0 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight">{project.title}</h3>
                  <p className="text-[13px] text-slate-500 mb-4 leading-relaxed max-w-md">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-50 text-slate-500 rounded border border-slate-100 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="bg-slate-900 hover:bg-black text-white text-[13px] h-9 px-5 font-semibold whitespace-nowrap shadow-sm rounded-lg">
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
