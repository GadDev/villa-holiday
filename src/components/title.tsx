'use client'

interface TitleProps {
  title: string
  subTitle: string
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="relative pt-[30px]">
      {subTitle && (
        <div className="absolute left-[-15px] top-[-8px] z-10 w-[231px] lg:left-[-45px]">
          <h2 className="font-haikus_script text-blue-gradient p-1 leading-normal">
            {subTitle}
          </h2>
        </div>
      )}
      <h1 className="text-dark font-heading mb-8 text-3xl font-bold leading-9 lg:mb-12 lg:text-[60px] lg:leading-[120%] 2xl:text-[64px]">
        {title}
      </h1>
    </div>
  )
}

export default Title
