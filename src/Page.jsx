import React from 'react'
import Feature from './Components/Feature'
import HeroSection from './Components/HeroSection'
import ImageSlider from './Components/ImageSlider'
import OurProduct from './Components/OurProduct'
import Process from './Components/Process'
import Faq from './Components/Faq'

function Page() {
  return (
    <div>

        <ImageSlider/>
        <OurProduct/>
        <Process/>
        <Feature/>
        <HeroSection/>
        <Faq/>

    </div>
  )
}

export default Page