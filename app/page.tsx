"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [text, setText] = useState("")
  const fullText = "Hi, I'm Abdullah Musharaf"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1))
      index++
      if (index >= fullText.length) {
        clearInterval(timer)
      }
    }, 100) // Adjust speed as needed
    return () => clearInterval(timer)
  }, [])

  const featuredProjects = [
    {
      title: "Slipstream",
      description:
        "Open-source F1 telemetry platform with end-to-end pipelines to ingest, process, and visualize qualifying, practice, and race-session data. Features a FLAML AutoML pipeline (Extra Trees global + circuit-specific XGBoost/RF) for race outcome prediction. Gained 202 unique visitors from 29 countries in week 1, 16K+ LinkedIn impressions.",
      technologies: ["Next.js", "Flask", "Python", "PostgreSQL", "FLAML", "AutoML"],
      image: "/images/slipstream.png",
      github: "https://github.com/abdullah-azeemi/Slipstream",
      live: "https://slipstream-f1.vercel.app/",
    },
    {
      title: "BookBoxd",
      description:
        "Full-stack book discovery platform with Clerk authentication, Hugging Face-based personalized recommendations, external book APIs, and real-time community reviews and ratings.",
      technologies: ["Next.js", "React", "Hugging Face", "Clerk"],
      image: "/images/bookboxd_ss.png",
      github: "https://github.com/abdullah-azeemi/BookBoxd",
      live: "https://book-boxd.vercel.app/",
    },
    {
      title: "FairPair",
      description:
        "Skill-based collaboration platform where developers post projects and match based on interests. Built with Prisma + PostgreSQL for scalable backend, user profiles, and real-time project listings.",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
      image: "/images/fairpair_ss.png",
      github: "https://github.com/abdullah-azeemi/fairpair-app",
      live: "https://fairpair.vercel.app/",
    },
    {
      title: "Plagiarism Checker",
      description:
        "Distilled BERT model for semantic paraphrase detection achieving F1 = 0.81. Deployed via Flask REST API with a Next.js frontend and optimized inference latency.",
      technologies: ["Python", "BERT", "Flask", "Next.js"],
      image: "/images/plagiarism_checker_ss.png",
      github: "https://github.com/abdullah-azeemi/Plagiarism-Checker",
      live: "https://plagiarism-check-pro.vercel.app/",
    },
  ]

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-20 md:mb-32">
        {/* Profile photo removed for time being */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight leading-[1.1] inline-block min-h-[1.1em]">
            <span>{text}</span>
            <span className="inline-block w-[3px] h-[1em] bg-blue-600 ml-1.5 animate-pulse" style={{ verticalAlign: "middle" }}></span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-2xl font-bold text-slate-500 mb-6 tracking-tight leading-[1.1]">
            CS Student & ML Enthusiast
          </h2>
          <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-2xl font-medium">
            I'm a passionate Computer Science student dedicated to integrating CS and Machine Learning into real-world applications.
            When I'm not coding, you'll find me watching Formula 1—always curious about how ML can optimize engineering decisions
            and help experts make informed, split-second choices.
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
              <Link href="https://www.linkedin.com/in/abdullah-musharaf/">Connect on LinkedIn</Link>
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
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row border border-gray-100 group"
            >
              <div className="w-full md:w-60 h-44 md:h-auto relative bg-slate-900 flex-shrink-0 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-[13px] text-slate-500 mb-4 leading-relaxed max-w-md">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-50 text-slate-500 rounded border border-slate-100 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Button asChild className="bg-slate-900 hover:bg-black text-white text-[13px] h-9 px-5 font-semibold whitespace-nowrap shadow-sm rounded-lg">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
