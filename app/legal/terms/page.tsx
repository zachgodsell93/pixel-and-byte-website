import { type Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'
import { Container } from '@/components/Container'
import fs from 'fs'
import path from 'path'
import { ContactSection } from '@/components/ContactSection'
import { remark } from 'remark'
import html from 'remark-html'

// This is a server component that will render the markdown content
async function Content() {
  // Read the privacy.md file
  const filePath = path.join(process.cwd(), 'content/privacy.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')

  // Process the markdown content to HTML
  const processedContent = await remark().use(html).process(fileContent)

  const contentHtml = processedContent.toString()

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="prose prose-lg prose-neutral dark:prose-invert mx-auto">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Terms and Conditions | Pixel and Byte',
  description:
    'Our terms and conditions outline the terms under which you may use our website and services.',
}

export default async function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms and Conditions">
        <></>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Content />
      </div>

      <ContactSection />
    </>
  )
}
