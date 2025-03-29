import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import { Analytics } from '@vercel/analytics/react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import Image from 'next/image'
import logoLong from '@/images/logo-bw-long.png'
import PlausibleProvider from 'next-plausible'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Pixel and Byte',
    default: 'AI Solutions Brisbane | Pixel & Byte',
  },
}

function ComingSoon() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <Image src={logoLong} alt="Studio" />
        <h2 className="font-display text-center text-2xl font-semibold text-neutral-950">
          We are building something new
        </h2>
        <h3 className="font-display text-center text-2xl font-semibold text-neutral-950">
          01.04.25
        </h3>
      </FadeIn>
    </Container>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  // const comingSoon = process.env.NODE_ENV === 'production'
  // if (comingSoon) {
  //   return (
  //     <html lang="en" className="h-full bg-neutral-50 text-base antialiased">
  //       <body className="flex min-h-full flex-col">
  //         <ComingSoon />
  //         <Analytics />
  //       </body>
  //     </html>
  //   )
  // }
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <PlausibleProvider domain="pixelandbyte.com.au">
          <RootLayout>{children}</RootLayout>
          <Analytics />
        </PlausibleProvider>
      </body>
    </html>
  )
}
