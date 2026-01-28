import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
        <div className="flex items-center gap-6">
          {/* Profile photo removed for time being */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hi, I'm Abdullah Musharaf</h1>
            <p className="text-gray-500">CS student and ML enthusiast</p>
          </div>
        </div>
        <Button
          asChild
          variant="outline"
          className="flex items-center gap-2 border-gray-200 text-slate-700 hover:bg-gray-50 bg-white shadow-sm text-[13px] h-10 px-5 font-semibold"
        >
          <a href="https://drive.google.com/file/d/1BeajWLOupgJaF6Hh5mIaUNk2JdIrVRFJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Download className="w-3.5 h-3.5" />
            Download My Resume
          </a>
        </Button>
      </div>

      <div className="space-y-16 mb-24">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Integrating CS into the Real World</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              My journey in Computer Science is driven by a simple goal: making technology work for people in the real world.
              As an ML enthusiast, I'm fascinated by how we can use data-driven insights to solve tangible problems—whether
              it's optimizing a business process or predicting the outcome of a complex system.
            </p>
            <p>
              I believe that Machine Learning shouldn't just be an academic exercise. I'm passionate about building tools
              that help engineers and decision-makers make informed, quick choices by filtering through the noise and
              providing actionable explainability.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Beyond the Code: Formula 1 & Sports ML</h2>
          <p className="text-gray-600 leading-relaxed">
            When I'm not in front of a screen, I'm likely watching a Formula 1 race. The intersection of high-stakes engineering,
            split-second strategy, and data is where my passion truly lies. I'm particularly interested in how Applied ML is
            transforming sports—from predicting podium finishes to optimizing race strategy and athlete performance.
            For me, F1 is the ultimate playground for real-world CS applications.
          </p>
        </section>
      </div>

      <hr className="border-gray-100 mb-20" />

      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-950 mb-3 tracking-tight">Let's Get in Touch!</h2>
        <p className="text-slate-500 font-medium mb-12">Have a question or want to work together?</p>

        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">
                Name
              </label>
              <Input id="name" placeholder="" className="h-11 border-gray-200 focus-visible:ring-slate-950 rounded-lg text-sm" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder=""
                className="h-11 border-gray-200 focus-visible:ring-slate-950 rounded-lg text-sm"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">
              Message
            </label>
            <Textarea
              id="message"
              placeholder=""
              className="min-h-[140px] border-gray-200 focus-visible:ring-slate-950 rounded-lg text-sm"
            />
          </div>
          <div className="flex justify-center">
            <Button className="bg-slate-900 hover:bg-black text-white px-10 h-11 rounded-lg font-bold text-sm shadow-sm transition-all">
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}
