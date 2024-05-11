import React from 'react'
import Feature from './Components/Feature'
import HeroSection from './Components/HeroSection'
import ImageSlider from './Components/ImageSlider'
import OurProduct from './Components/OurProduct'
import Process from './Components/Process'

function Page() {
  return (
    <div>

        <ImageSlider/>
        <OurProduct/>
        <Process/>
        <Feature/>
        <HeroSection/>

    </div>
  )
}

export default Page