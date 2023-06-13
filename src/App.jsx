import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Bitgy from './assets/bitgy.svg'
import Bitcoin from './assets/bitcoin.svg'

const App = () => {

  return(
    <>
      <div className="bg-slate-50 w-auto py-6 flex justify-center items-center">
        <div className="flex-col justify-center items-center">
          <div className="translate-x-24 md:translate-x-64"><img src={Bitcoin} className="w-16 h-auto md:w-64 animate-bounce" /></div>
          <div className="translate-x-12"><img src={Bitcoin} className="w-16 h-auto md:w-64 animate-bounce" /></div>
          <div className="translate-x-24 md:translate-x-64"><img src={Bitcoin} className="w-16 h-auto md:w-64 animate-bounce" /></div>
          <div className="translate-x-12"><img src={Bitcoin} className="w-16 h-auto md:w-64 animate-bounce" /></div>
          <div className="translate-x-24 md:translate-x-64"><img src={Bitcoin} className="w-16 h-auto md:w-64 animate-bounce" /></div>
          <img src={Bitgy} className="w-64 h-auto md:w-[800px]" />
        </div>
      </div>
    </>
  )
  
  
};

export default App;
