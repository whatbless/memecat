import React from 'react'
import './../global.css'
import tokenImg from './../images/token-image.png'
import fire from './../images/fire.png'

const Tokenomics = () => {
    return (
        <div className="w-full min-h-min flex justify-center about-wrapper">
            <div className="container flex flex-col justify-center items-center text-white my-32">
                <div className='flex justify-center relative w-full'>
                    <h1 className='uppercase text-6xl font-bold z-10'>Tokenomics</h1>
                    <img className='token-image' src={tokenImg} alt="token-image" />
                </div>
                <div className='token-progress z-10'>
                    <img className='token-fire' src={fire} alt="fire-image" />
                    <div className='pl-80'>
                        <h2 className='font-bold text-3xl'>Burning Progress Token {"(MCC)"}</h2>
                        <p className='font-bold text-4xl text-red-600'>000,000,000,000,000 {"% 00)"}</p>
                    </div>
                </div>
                <p className='w-3/4 text-center my-20 text-2xl'>No Taxes, No Bullshit. It’s that simple.
                    93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 6.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools. This wallet is easily trackable with the ENS name “pepecexwallet.eth”</p>
                <div className='token-token'>
                    <h1 className='text-4xl font-bold'>Token Supply:</h1>
                    <p className='text-4xl font-bold'>888,000,000,000,000</p>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics