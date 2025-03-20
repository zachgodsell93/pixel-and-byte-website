import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BwLogo from '@/images/logo-bw.png'
import BwInvertedLogo from '@/images/logo-bw-inverted.png'

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div className={clsx('group relative', className)} {...props}>
      <motion.div
        className="relative h-12 w-64"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={invert ? BwInvertedLogo : BwLogo}
          alt="Logo"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left' }}
          priority
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 h-12 w-64"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={invert ? BwLogo : BwInvertedLogo}
          alt="Logo"
          fill
          style={{ objectFit: 'contain', objectPosition: 'left' }}
          priority
        />
      </motion.div>
    </div>
  )
}

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}
