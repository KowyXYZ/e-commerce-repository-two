import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderMain from '../Components/Header/HeaderMain'

function RootLayout() {
  return (
    <div>
        <HeaderMain/>
        <Outlet/>
    </div>
  )
}

export default RootLayout