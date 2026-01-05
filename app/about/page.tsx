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
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
            <Image src="/images/screenshot-202026-01-06-20at-201.png" alt="Alex Doe" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hi, I'm Alex Doe</h1>
            <p className="text-gray-500">Aspiring ML Engineer & Lifelong Learner.</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-gray-200 text-gray-700 hover:bg-gray-50 bg-transparent"
        >
          <Download className="w-4 h-4" />
          Download My Resume
        </Button>
      </div>

      <div className="space-y-16 mb-24">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Journey into ML</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              My fascination with machine learning began during my undergraduate studies, where I discovered its
              potential to solve complex, real-world problems. I'm particularly interested in Natural Language
              Processing and Computer Vision, and I've honed my skills through various academic projects and personal
              explorations. I thrive on turning data into actionable insights and building intelligent systems that can
              learn and adapt.
            </p>
            <p>
              My goal is to contribute to innovative projects that push the boundaries of AI, creating solutions that
              are not only powerful but also ethical and beneficial to society. I'm actively seeking opportunities where
              I can apply my skills in a collaborative and growth-oriented environment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Beyond the Code</h2>
          <p className="text-gray-600 leading-relaxed">
            When I'm not training models or debugging code, you can usually find me exploring the great outdoors. I'm an
            avid hiker and amateur photographer, always looking for the next scenic trail to capture. I also enjoy
            playing the guitar, which serves as a creative outlet and a way to unwind. I believe that a balanced life
            fuels creativity and problem-solving, both in and out of the tech world.
          </p>
        </section>
      </div>

      <hr className="border-gray-100 mb-20" />

      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Get in Touch!</h2>
        <p className="text-gray-600 mb-10">Have a question or want to work together?</p>

        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-900">
                Name
              </label>
              <Input id="name" placeholder="" className="h-12 border-gray-200 focus-visible:ring-blue-600" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder=""
                className="h-12 border-gray-200 focus-visible:ring-blue-600"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-900">
              Message
            </label>
            <Textarea
              id="message"
              placeholder=""
              className="min-h-[150px] border-gray-200 focus-visible:ring-blue-600"
            />
          </div>
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-12 rounded-lg font-semibold shadow-md">
              Send Message
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}
