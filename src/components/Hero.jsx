import React from 'react'
import './../global.css'
import heroImg from './../images/hero-image.png'
import heroTitle from './../images/hero-title.png'
import tg from './../images/tg.png'
import twitter from './../images/twitter.png'
import blog from './../images/blog.png'
import coinmarket from './../images/coinmarket.png'
import dextools from './../images/dextools.png'
import etherscan from './../images/etherscan.png'
import uniswap from './../images/uniswap.png'

const Hero = () => {

    const socials = [
        { image: tg, link: 'https://t.me', alt: 'tg' },
        { image: twitter, link: 'https://twitter.com', alt: 'twitter' },
        { image: blog, link: '/', alt: 'blog' },
        { image: coinmarket, link: 'https://coinmarket.com', alt: 'coinmarket' },
        { image: dextools, link: 'https://dextools.com', alt: 'dextools' },
        { image: etherscan, link: 'https://etherscan.com', alt: 'etherscan' },
        { image: uniswap, link: 'https://uniswap.com', alt: 'uniswap' }
    ]

    return (
        <div className="w-full min-h-screen flex justify-center hero-wrapper">
            <div className="container flex flex-col justify-center items-center">
                <div className='relative w-full flex justify-center'>
                    <img className='hero-image' src={heroImg} alt="hero-image" />
                    <img className='hero-title' src={heroTitle} alt="hero-title" />
                </div>
                <div className="flex items-center">
                    <div className='buy-button'>
                        <div className="font-bold uppercase text-white">Buy now</div>
                    </div>
                </div>
                <div className='hero-desc'>
                    <p className='text-white text-xl uppercase leading-10'>the most Mem Cat Coin in existence. The dogs have had their day, it’s time for Cat Coin to take reign.</p>
                </div>
                <div className='socials space-x-2'>
                    {socials.map(social => (
                        <a href={social.link}>
                            <img src={social.image} alt={social.alt}></img>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero