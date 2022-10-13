import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HeroSlice = () => {
  const { heroData } = useStaticQuery(graphql`
    query {
      heroData: contentfulHeroSlice {
        headline
        title
        heroImage {
          url
        }
      }
    }
  `)

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[450px] lg:h-[615px]"
      style={{ backgroundImage: `url(${heroData?.heroImage.url})` }}
    >
      <div className="absolute bottom-10 lg:bottom-20 left-0 w-full">
        <div className="container">
          <h1 className="font-bold text-2xl text-white uppercase whitespace-pre-line mb-4 lg:text-3xl lg:mb-7">
            {heroData?.title}
          </h1>
          <p className="font-bold text-base text-white uppercase lg:text-xl">
            {heroData?.headline}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSlice
