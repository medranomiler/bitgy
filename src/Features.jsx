import React from 'react'
import Tap from './assets/taptopay.svg'
import Bitgy from './assets/bitgy.svg'
import Bitcoin from './assets/bitcoinKeys.svg'
import Key from './assets/key.svg'

const Features = () => {
    return (
        <div className="md:min-h-screen min-h-[1000px] flex flex-col bg-slate-50 items-center justify-center overflow-hidden">
            <div className="w-full h-1/2 md:w-3/4 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-3/4 flex flex-col items-center">
                    <div className="w-full md:w-13/4 h-full border-gray-400 p-8 ">
                        <p className="font-bold text-gray-400 h-1/4">Save in Bitcoin</p>
                        <h3 className='font-bold lg:text-4xl text-3xl h-1/2 mb-2'>A fun and easy way for anyone to learn about bitcoin while they accumulate and save with Bitgy Bank.</h3>
                        <p className='h-1/4'>Simply deposit sats to your Bitgy Bank by tapping  with an NFC enabled lightning wallet, or scan with your QR scanner.</p>
                        <br/>
                        <p className='h-1/4'>Make choress fun again by rewarding with clean sats! No more dirty fiat!</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-full p-8">
                    <div className="flex justify-center items-center w-full h-full">
                    <img src={Bitgy} className="md:h-48 w-auto translate-x-4 -translate-y-4" /><img src={Tap} className="md:h-48 w-auto animation-tap" />
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2 md:w-3/4 flex flex-col md:flex-row items-center">
            {/* <div className="w-full h-3/4 flex flex-col items-center">
                    <div className="w-full md:w-13/4 h-full border-gray-400 p-8">
                        <p className="font-bold text-gray-400 h-1/4">Self Custody</p>
                        <h3 className='font-bold lg:text-4xl text-3xl h-1/2 mb-2'>You hold the keys to your Bitgy Bank - No third parties can access your funds</h3>
                        <p className='h-1/4'>Take control of your savings by holding the private keys to your stash.</p>
                    </div>
                </div> */}
                <div className="w-full md:w-1/2 h-full p-8 order-2 md:order-1">
                <div className="flex justify-center items-center w-full h-full">
                    <img src={Bitcoin} className="md:h-48 md:w-auto w-[300px] h-auto -translate-x-8 " /><img src={Key} className="md:h-24 md:w-auto w-64 h-auto z-10" />
                    </div>
                </div>
                <div className="md:block md:w-1/2 h-3/4 flex flex-col items-center border-blue-400">
                    <div className="w-full md:w-13/4 h-full border-gray-400 p-8">
                        <p className="font-bold text-gray-400 h-1/4">Self Custody</p>
                        <h3 className='font-bold lg:text-4xl text-3xl h-1/2 mb-2'>You hold the keys to your Bitgy Bank - No third parties can access your funds</h3>
                        <p className='h-1/4'>Whether you are teaching the value of self custody or learning the value of self custody for the first time, Bitgy allows you to take control of your savings by holding the keys to your Bitcoin.</p>
                    </div>
                </div>
    
            </div>
        </div>
      )
}

export default Features