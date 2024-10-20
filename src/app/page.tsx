'use client'

import Content from '../components/content'
import Card from '../components/card'
import Button from '../components/button'

const basePath =
  process.env.NODE_ENV === 'production'
    ? 'https://gaddev.github.io/villa-holiday'
    : ''

const CTAs = [
  {
    id: 'villa_one',
    imageSrc: `${basePath}/img-a.png`,
    label: 'Villas with Pools',
  },
  {
    id: 'villa_two',
    imageSrc: `${basePath}/img-b.png`,
    label: 'Romantic Villas',
  },
  {
    id: 'villa_three',
    imageSrc: `${basePath}/img-c.png`,
    label: 'Beach Villas',
  },
  {
    id: 'villa_four',
    imageSrc: `${basePath}/img-d.png`,
    label: 'Sustainable',
  },
]

const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute bottom-[0px] right-[0px] top-[-50px] w-[517px] bg-cover bg-[right_top_0rem] bg-no-repeat xl:bg-[url('../assets/svgs/bg-pattern.svg')]"></div>
      <div className="container mx-auto flex flex-col justify-center md:my-[50px] xl:mt-[21px] xl:flex-row">
        <Content />
        <section
          className="grid auto-rows-max grid-cols-2 gap-[3.5px] xl:ml-[40px] xl:mt-[39px]"
          aria-label="Villa categories"
        >
          {CTAs.map((item) => (
            <Card key={item.id} imageSrc={item.imageSrc} label={item.label} />
          ))}
        </section>
        <section className="mb-[30px] mt-[30px] block flex justify-center md:hidden">
          <Button text="Book Now" onClick={() => console.log('Booking...')} />
        </section>
      </div>
    </main>
  )
}

export default Home
