import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import BelowHeroInfo from '../Components/Home/BelowHeroInfo'
import TwoTopProducts from '../Components/Home/TwoTopProducts'

function HomePage() {
  return (
    <div>   
        <HeroSection/>
        <BelowHeroInfo/>
        <TwoTopProducts/>
    </div>
   
  )
}

export default HomePage