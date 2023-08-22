import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import BelowHeroInfo from '../Components/Home/BelowHeroInfo'
import TwoTopProducts from '../Components/Home/TwoTopProducts'
import TopProducts from '../Components/Home/TopProducts'
import Banner from '../Components/Home/Banner'
import SpecOffer from '../Components/Home/SpecOffer'

function HomePage() {
  return (
    <div>   
        <HeroSection/>
        <BelowHeroInfo/>
        <TwoTopProducts/>
        <TopProducts/>
        <Banner/>
        <SpecOffer/>
    </div>
   
  )
}

export default HomePage