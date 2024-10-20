'use client'

import Image from 'next/image'
import Arrow from '../assets/svgs/arrow-link.svg'

interface CardProps {
  imageSrc: string
  label: string
}

const Card = ({ imageSrc, label }: CardProps) => {
  return (
    <article
      className="3xl:w-[338px] relative h-[185.5px] w-full shadow-md md:h-[276px]"
      aria-label={label}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.50) 100%)',
        }}
      ></div>
      <Image
        width={500}
        height={500}
        src={imageSrc}
        alt={label}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-between self-end p-5 lg:p-8">
        <p className="w-[114px] text-xl  font-semibold leading-[120%] text-white">
          {label}
        </p>
        <Arrow />
      </div>
    </article>
  )
}

export default Card
