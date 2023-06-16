import React, { useEffect, useRef } from 'react';
import Bitgy from '../assets/bitgy.svg'
import Bitcoin from '../assets/bitcoin.svg'
import Logo from '../assets/logo.svg'
import Image from 'next/image'
import Features from '../components/Features.js'
import Signup from '../components/Signup.js'
import Footer from '../components/Footer.js'

const App = () => {

  return(
    <>
    <div className="w-screen h-auto px-4 pt-4 bg-slate-50 flex justify-center pb-24">
        <Image src={Logo} className="md:w-3/4"/>
    </div>
      <div className="bg-slate-50 w-auto py-6 flex justify-center items-center">
        <div className="flex-col justify-center items-center">
          <div className="translate-x-20 md:translate-x-48"><Image src={Bitcoin} className="w-16 h-auto md:w-64 animate-bounce" /></div>
          <Image src={Bitgy} className="w-64 h-auto md:w-[800px]" />
        </div>
      </div>
      <Features />
      <Signup />
      <Footer />
    </>
  )
  
  
};

export default App;
