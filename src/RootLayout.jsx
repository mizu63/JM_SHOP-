import React from 'react'
import { Outlet } from 'react-router'
import Navber from './Layout/Navber'
import Footer from './Layout/Footer'

function RootLayout() {
  return (
    <>
    <Navber/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout
