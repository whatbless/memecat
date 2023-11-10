import React from 'react'
import './../global.css'
import image1 from './../images/roadmap1.png'
import image2 from './../images/roadmap2.png'

const Roadmap = () => {
    return (
        <div className="w-full min-h-min flex justify-center roadmap-wrapper">
            <div className="container flex flex-col justify-center text-white items-center my-20">
                <div className='relative w-full flex justify-center'>
                    <h1 className='uppercase text-6xl font-bold'>Roadmap</h1>
                    <img className='roadmap-image1' src={image1} alt="roadmap-image1" />
                    <img className='roadmap-image2' src={image2} alt="roadmap-image2" />
                </div>
                <div className='w-full flex justify-center z-10 my-20 space-x-10'>
                    <div className='roadmap-block w-1/4 relative'>
                        <h1 className='roadmap-number'>1</h1>
                        <ul className='list-disc font-bold text-xl'>
                            <li>Launch</li>
                            <li>CoinGecko/Coinmarketcap Listings</li>
                            <li>1.000+ Holders</li>
                            <li>Get CetCoin Trending on twitter with our memetic power</li>
                        </ul>
                    </div>
                    <div className='roadmap-block w-1/4 relative'>
                        <h1 className='roadmap-number'>2</h1>
                        <ul className='list-disc font-bold text-xl'>
                            <li>Community Partnerships Mem Cat Coin Times digital newsletter</li>
                            <li>Formation of token gated discord group, MemeCoin Palace, for holders, more details tba</li>
                            <li>CEX Listings 10,000+ holders</li>
                        </ul>
                    </div>
                    <div className='roadmap-block w-1/4 relative'>
                        <h1 className='roadmap-number'>3</h1>
                        <ul className='list-disc font-bold text-xl'>
                            <li>Mem Cat Coin Merch</li>
                            <li>Mem Cat Coin Academy</li>
                            <li>Mem Cat Coin Tools</li>
                            <li>T1 Exchange Listings 100,000+ holders</li>
                            <li>Meme Takeover</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap