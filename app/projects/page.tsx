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
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600">
          A selection of my work in Machine Learning. Filter by technology or domain to see what I can do.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            <div className="p-8 flex flex-col flex-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.category === "Computer Vision" || project.category === "NLP" ? (
                  <>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-11">
                      {project.category === "NLP" ? "Case Study" : "Live Demo"}
                    </Button>
                    <Button variant="secondary" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 h-11">
                      Source Code
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 h-11 font-semibold"
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
