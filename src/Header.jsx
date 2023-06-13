import React from 'react'
import Logo from './assets/logo.svg'

const Header = () => {
  return (
    <div className="p-4 bg-slate-50 flex justify-center">
        <img src={Logo} className="max-w-[800px]"/>
    </div>
  )
}

export default Header