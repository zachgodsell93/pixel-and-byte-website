import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl -mx-6 bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to dive in? <br />
            Speak to us
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
            <a
              href="#"
              className="shadow-xs rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black hover:border hover:border-white hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Say Hello
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Our Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
