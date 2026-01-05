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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Machine Learning Engineer & Innovator
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
            A passionate and dedicated ML engineer with a focus on developing innovative solutions for complex problems.
            Specializing in predictive modeling and data visualization to drive impactful results.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-lg h-auto shadow-md"
            >
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-6 text-base rounded-lg h-auto"
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
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row border border-gray-100"
            >
              <div className="w-full md:w-64 h-48 md:h-auto relative bg-gray-900 flex-shrink-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[11px] font-medium px-2 py-0.5 text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap shadow-sm">
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
