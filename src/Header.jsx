import React from 'react'
import Logo from './assets/logo.svg'

const Header = () => {
  return (
    <div className="w-screen h-auto p-4 bg-slate-50 flex justify-center">
        <img src={Logo} className="w-3/4"/>
    </div>
  )
}

export default Header