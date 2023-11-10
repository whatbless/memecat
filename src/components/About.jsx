import React from 'react'
import './../global.css'
import aboutImg from './../images/about-image.png'
import aboutCircle from './../images/about-circle.png'

const About = () => {
    return (
        <div className="w-full min-h-min flex justify-center about-wrapper">
            <div className="container flex flex-col justify-center items-center my-20">
                <div className='flex flex-row justify-center space-x-20'>
                    <div className='relative w-max flex justify-center'>
                        <img className='about-image' src={aboutImg} alt="about-image" />
                        <img className='about-circle' src={aboutCircle} alt="about-circle" />
                    </div>
                    <div className='w-1/3 mt-12'>
                        <h1 className='font-black text-8xl about-header'>About</h1>
                        <p className='text-2xl text-white mt-10'>Mem Cat Coin is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu’s have had their day. It’s time for the most recognizable meme in the world to take his reign as king of the memes.
                            <br />
                            <br />
                            Here to make memecoins great again. Launched stealth with no presale, zero taxes, LP burnt and contract renounced, Mem Cat Coin is a coin for the people, forever. Fueled by pure memetic power, let Mem Cat Coin show you the way.</p>
                    </div>
                </div>
                <h2 className='text-4xl font-black text-white mt-6'>Partners Exchange <span className='about-color'>CoinW</span></h2>
            </div>
        </div>
    )
}

export default About