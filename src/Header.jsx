import React from 'react'
import Logo from './assets/logo.svg'

const Header = () => {
  return (
    <div className="w-screen h-auto px-4 pt-4 bg-slate-50 flex justify-center pb-24">
        <img src={Logo} className="md:w-3/4"/>
    </div>
  )
}

export default Header