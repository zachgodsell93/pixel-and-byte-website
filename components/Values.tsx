import { GridPattern } from '@/components/GridPattern'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { GridList, GridListItem } from '@/components/GridList'

export function Values({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative pt-24 sm:pt-32 lg:pt-40">
      <div className="rounded-t-4xl bg-linear-to-b absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Delivering AI excellence with human insight"
        flip={flip}
      >
        <p>
          We combine cutting-edge AI capabilities with deep business
          understanding to create solutions that don't just implement
          technology, but transform how you operate. Our values guide every
          aspect of how we work with you to achieve meaningful results.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Innovation">
            We develop AI solutions tailored to your unique challenges, not
            off-the-shelf products looking for problems to solve.
          </GridListItem>
          <GridListItem title="Transparency">
            We communicate clearly about capabilities, timelines, and outcomes,
            ensuring you understand both the possibilities and limitations of AI
            in your context.
          </GridListItem>
          <GridListItem title="Impact">
            We define success through tangible business outcomes and ROI, not
            just technical metrics or buzzwords.
          </GridListItem>
          <GridListItem title="Responsibility">
            We build solutions with ethical considerations at the forefront,
            prioritizing fairness, privacy, and positive societal impact.
          </GridListItem>
          <GridListItem title="Velocity">
            We deliver meaningful results quickly through rapid prototyping and
            iterative development, helping you gain competitive advantage
            without unnecessary delays.
          </GridListItem>
          <GridListItem title="Empowerment">
            We equip your team with the understanding and skills to maximize the
            value of AI investments long after our engagement ends.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
