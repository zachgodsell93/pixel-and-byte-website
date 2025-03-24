import clsx from 'clsx'

import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Link from 'next/link'
import { Button } from '@/components/Button'

export function List({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx('text-base text-neutral-600', className)}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function ListItem({
  children,
  title,
  link,
}: {
  children: React.ReactNode
  title?: string
  link?: string
}) {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-semibold text-neutral-950">{`${title}. `}</strong>
          )}
          {children}
          {link && (
            <div className="mt-4">
              <Button href={link}>Learn more</Button>
            </div>
          )}
        </Border>
      </FadeIn>
    </li>
  )
}
