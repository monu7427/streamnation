import React from 'react'
import Feature from './Components/Feature'
import HeroSection from './Components/HeroSection'
import ImageSlider from './Components/ImageSlider'
import OurProduct from './Components/OurProduct'

function Page() {
  return (
    <div>

        <ImageSlider/>
        <OurProduct count={6}/>
        <Feature/>
        <HeroSection/>

    </div>
  )
}

export default Page