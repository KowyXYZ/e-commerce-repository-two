import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderMain from '../Components/Header/HeaderMain'
import FooterMain from '../Components/Footer/FooterMain'

function RootLayout() {
  return (
    <div>
        <HeaderMain/>
        <Outlet/>
        <FooterMain/>
    </div>
  )
}

export default RootLayout