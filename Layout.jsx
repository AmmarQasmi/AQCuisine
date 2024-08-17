import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header_Footer/header'
import Footer from '../Header_Footer/footer'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />

    </>
  )
}

export default Layout