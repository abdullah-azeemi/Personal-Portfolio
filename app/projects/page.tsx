"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

const PROJECTS = [
  {
    id: 1,
    title: "FairPair",
    category: "Full Stack",
    description:
      "A collaboration platform where developers showcase projects, match based on skills and interests, and team up to build together.",
    tags: ["Next.js", "React", "TypeScript"],
    image: "/images/fairpair.jpg",
    tags_match: ["React", "Next.js", "Prisma"],
    github: "https://github.com/abdullah-azeemi/fairpair-app",
    live: "https://fairpair.vercel.app/",
  },
  {
    id: 2,
    title: "Plagiarism Checker",
    category: "NLP / ML",
    description:
      "A trained Paraphrase Detection model designed to identify semantic equivalence between pairs of sentences, optimized for NLP applications.",
    tags: ["Python", "NLP", "Machine Learning"],
    image: "/images/plagiarism-checker.jpg",
    tags_match: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/abdullah-azeemi/Plagiarism-Checker",
    live: "https://plagiarism-check-pro.vercel.app/",
  },
  {
    id: 3,
    title: "BookBoxd",
    category: "AI / Full Stack",
    description:
      "AI-powered book platform that delivers personalized recommendations and captures real-time community reviews.",
    tags: ["Next.js", "Machine Learning", "AI APIs"],
    image: "/images/bookboxd.jpg",
    tags_match: ["React", "Next.js", "AI", "Full Stack"],
    github: "https://github.com/abdullah-azeemi/BookBoxd",
    live: "https://book-boxd.vercel.app/",
  },
  {
    id: 4,
    title: "F1 Podium Predictor",
    category: "Machine Learning",
    description:
      "A race outcome predictor using FastF1 package with visual insights, model predictions, and performance explainability for F1 fans.",
    tags: ["Python", "FastF1", "Data Science"],
    image: "/images/f1-predictor.jpg",
    tags_match: ["Python", "Machine Learning"],
    github: "https://github.com/abdullah-azeemi/F1-podium-predictor",
    predictions: [
      { label: "Monza 2025", url: "https://www.linkedin.com/posts/abdullah-musharaf-6179a6125_ai-vs-monza-can-ferrari-finally-taste-victory-activity-7370418459379318784-PzMQ" },
      { label: "Hungary 2025", url: "https://www.linkedin.com/posts/abdullah-musharaf-6179a6125_can-ai-predict-the-2025-hungarian-gp-podium-activity-7357710432465207296-2x02" },
    ],
  },
  {
    id: 5,
    title: "Airbnb Clone",
    category: "Frontend",
    description:
      "A responsive Airbnb clone with interactive UI, search functionality, category filtering, and listing cards built with React.",
    tags: ["React", "CSS", "JavaScript"],
    image: "/images/airbnb-clone.jpg",
    tags_match: ["React", "Full Stack"],
    github: "https://github.com/abdullah-azeemi/Airbnb-Inspired-Application",
  },
  {
    id: 6,
    title: "AI Flashcards",
    category: "AI / EdTech",
    description:
      "An intelligent flashcard application that leverages AI to help users learn and memorize content more effectively.",
    tags: ["JavaScript", "AI", "Python"],
    image: "/images/ai-flashcards.jpg",
    tags_match: ["AI", "Full Stack"],
    github: "https://github.com/abdullah-azeemi/AI_Flashcards",
  },
  {
    id: 7,
    title: "Search Engine",
    category: "Data Structures",
    description:
      "A search engine implementation showcasing core DSA concepts including indexing, ranking algorithms, and efficient retrieval.",
    tags: ["C++", "DSA", "Algorithms"],
    image: "/images/search-engine.jpg",
    tags_match: ["C++"],
    github: "https://github.com/abdullah-azeemi/Search_Engine_DSA",
  },
  {
    id: 8,
    title: "SoccerSphere",
    category: "Full Stack",
    description:
      "A comprehensive soccer platform for tracking matches, teams, and player statistics with an intuitive interface.",
    tags: ["JavaScript", "HTML", "MongoDB"],
    image: "/images/soccer-sphere.jpg",
    tags_match: ["Python", "Full Stack"],
    github: "https://github.com/abdullah-azeemi/ScoccerSphere",
  },
  {
    id: 9,
    title: "DOS Simulation",
    category: "Systems",
    description:
      "A Disk Operating System simulation project demonstrating core OS concepts including file systems and command processing.",
    tags: ["C++", "OS", "DSA"],
    image: "/images/dos-project.jpg",
    tags_match: ["C++"],
    github: "https://github.com/abdullah-azeemi/DOS_Project",
  },
  {
    id: 10,
    title: "Gomoku",
    category: "Game / AI",
    description:
      "Classic Gomoku (Five in a Row) game in C++ and Python. Play against AI or challenge a friend with clean, efficient code.",
    tags: ["C++", "Python", "AI"],
    image: "/images/gomoku.jpg",
    tags_match: ["Python", "C++", "AI"],
    github: "https://github.com/abdullah-azeemi/Gomoku",
  },
]

const CATEGORIES = ["All", "Full Stack", "AI", "Machine Learning", "NLP", "Python", "React", "C++"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredProjects =
    activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags_match.includes(activeCategory))

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="max-w-3xl mb-14">
        <h1 className="text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">My Projects</h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          A collection of my work across Full Stack Development, Machine Learning, and AI. Filter by technology or domain to explore.
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="relative h-48 bg-gray-900 rounded-t-2xl overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover opacity-90"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{project.title}</h3>
              <p className="text-[13px] text-slate-500 mb-4 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-50 text-slate-600 rounded font-semibold border border-slate-100 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.predictions ? (
                  <div className="relative flex-1" ref={openDropdown === project.id ? dropdownRef : null}>
                    <Button
                      onClick={() => setOpenDropdown(openDropdown === project.id ? null : project.id)}
                      className="w-full bg-slate-900 hover:bg-black text-white h-9 text-[12px] font-semibold rounded-lg shadow-sm"
                    >
                      Predictions
                      <ChevronDown className={`w-3.5 h-3.5 ml-1.5 transition-transform ${openDropdown === project.id ? 'rotate-180' : ''}`} />
                    </Button>
                    {openDropdown === project.id && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                        {project.predictions.map((pred, idx) => (
                          <a
                            key={idx}
                            href={pred.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-[12px] font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {pred.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : project.live && (
                  <Button
                    asChild
                    className="flex-1 bg-slate-900 hover:bg-black text-white h-9 text-[12px] font-semibold rounded-lg shadow-sm"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  variant="secondary"
                  className={`${project.live || project.predictions ? 'flex-1' : 'w-full'} bg-gray-100 hover:bg-gray-200 text-slate-900 h-9 text-[12px] font-semibold rounded-lg border border-gray-200`}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
