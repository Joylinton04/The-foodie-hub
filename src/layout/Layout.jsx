import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='font-body min-h-full w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout;