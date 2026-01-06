"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const PROJECTS = [
  {
    id: 1,
    title: "Real-Time Object Detection System",
    category: "Computer Vision",
    description:
      "A system built with TensorFlow and OpenCV to detect and track objects in live video streams with high accuracy.",
    tags: ["Python", "TensorFlow", "OpenCV"],
    image: "/images/object-detection-viz.jpg",
    tags_match: ["Python", "TensorFlow", "Computer Vision"],
  },
  {
    id: 2,
    title: "Sentiment Analysis Engine",
    category: "NLP",
    description:
      "An NLP model using PyTorch and Transformers to classify text sentiment from customer reviews with over 95% accuracy.",
    tags: ["Python", "PyTorch", "Hugging Face"],
    image: "/images/nlp-network.jpg",
    tags_match: ["Python", "PyTorch", "NLP"],
  },
  {
    id: 3,
    title: "Sales Forecasting Model",
    category: "Time Series",
    description:
      "Developed a time-series forecasting model using Scikit-learn and Prophet to predict future sales trends for an e-commerce platform.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    image: "/images/sales-forecast-ui.jpg",
    tags_match: ["Python"],
  },
  {
    id: 4,
    title: "Autonomous Drone Navigation",
    category: "Reinforcement Learning",
    description:
      "Trained an agent using RL to navigate a simulated drone through complex environments, optimizing for speed and safety.",
    tags: ["Python", "PyTorch", "Gymnasium"],
    image: "/images/drone-navigation.jpg",
    tags_match: ["Python", "PyTorch"],
  },
]

const CATEGORIES = ["All", "Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags_match.includes(activeCategory))

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-14">
        <h1 className="text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">My Projects</h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          A selection of my work in Machine Learning. Filter by technology or domain to see what I can do.
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-14">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all ${activeCategory === category
              ? "bg-slate-900 text-white shadow-sm"
              : "bg-gray-100 text-slate-500 hover:bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="relative h-64 bg-gray-900">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5 tracking-tight">{project.title}</h3>
              <p className="text-[13px] text-slate-500 mb-6 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 bg-slate-50 text-slate-600 rounded font-semibold border border-slate-100 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.category === "Computer Vision" || project.category === "NLP" ? (
                  <>
                    <Button className="flex-1 bg-slate-900 hover:bg-black text-white h-10 text-[13px] font-semibold rounded-lg shadow-sm">
                      {project.category === "NLP" ? "Case Study" : "Live Demo"}
                    </Button>
                    <Button variant="secondary" className="flex-1 bg-gray-100 hover:bg-gray-200 text-slate-900 h-10 text-[13px] font-semibold rounded-lg border border-gray-200">
                      Source Code
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-slate-900 h-10 text-[13px] font-semibold rounded-lg border border-gray-200"
                  >
                    Source Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
