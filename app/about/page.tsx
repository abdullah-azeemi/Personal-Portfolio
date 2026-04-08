import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download } from "lucide-react"

export default function AboutPage() {
  const RESUME_URL = "https://drive.google.com/file/d/1BeajWLOupgJaF6Hh5mIaUNk2JdIrVRFJ/view?usp=sharing"

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-12 md:mb-20">
        <div className="flex items-center gap-6 text-center sm:text-left">
          {/* Profile photo removed for time being */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Hi, I'm Abdullah Musharaf</h1>
            <p className="text-gray-500 text-sm sm:text-base">CS student · Full Stack Engineer & ML Researcher</p>
          </div>
        </div>
        <Button
          asChild
          variant="outline"
          className="flex items-center gap-2 border-gray-200 text-slate-700 hover:bg-gray-50 bg-white shadow-sm text-[13px] h-10 px-5 font-semibold w-full sm:w-auto justify-center"
        >
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
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
              I build and ship production full-stack applications — from F1 analytics platforms to AI-powered book discovery
              tools — while also doing research-level ML work.
            </p>
            <p>
              I combine strong software engineering with explainable ML so products are not just technically sound, but
              usable in real decision-making settings. I also compete in ICPC programming contests, which keeps my problem-solving
              sharp for algorithm-heavy SWE work.
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

      <section className="mb-16">
        <div className="bg-white border border-gray-100 rounded-xl px-6 py-5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <p className="text-sm font-semibold text-slate-700">2 Publications</p>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <p className="text-sm font-semibold text-slate-700">6 Live Projects</p>
            <span className="hidden sm:inline-block text-gray-300">•</span>
            <p className="text-sm font-semibold text-slate-700">ICPC Participant</p>
          </div>
        </div>
      </section>

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
