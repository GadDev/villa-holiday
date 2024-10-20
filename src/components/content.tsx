'use client'

import Button from './button'
import Title from './title'
import Stamp from '../assets/svgs/big-stamp.svg'

const Content = () => {
  return (
    <>
      <section
        className="xs:p-[30px] relative bg-[url('../assets/svgs/stamp.svg')] bg-[right_top_1rem] bg-no-repeat sm:p-[0px] sm:py-[30px] lg:pr-[0px] lg:pt-[80px] xl:h-[653px] xl:w-[680px] 2xl:bg-transparent 2xl:bg-none 2xl:px-[120px] 2xl:pb-[60px] 2xl:pr-[80px]"
        aria-label="Introductory section about villa holidays"
      >
        <Title title="Villa Holidays" subTitle="Our Extraordinary" />

        <p className="text-dark mb-[30px] text-base leading-[160%] lg:mb-12 2xl:text-[18px]">
          Private villa holidays with Villa Travels are all about the
          extraordinary, especially when it comes to our collection of villas
          and chateaux. Quirky, stylish and full of character, our villas for
          rent have been handpicked by our knowledgeable destination experts who
          are the best in the business. So one year you could be in a medieval
          castle, and the next you could be soaking up the sun on your very own
          private island.
        </p>
        <div className="mb-[30px] mt-[30px] flex hidden justify-center md:block">
          <Button text="Book Now" onClick={() => alert('Booking...')} />
        </div>
        <div className="absolute left-[-160px] top-[30px] flex hidden 2xl:block">
          <Stamp />
        </div>
      </section>
    </>
  )
}

export default Content
