import React from 'react'
import image from './../images/hero-title.png'
import tg from './../images/black-tg.png'
import twitter from './../images/black-twitter.png'
import discord from './../images/black-discord.png'

const Footer = () => {

    const socials = [
        { alt: 'tg', link: 'https://t.me', image: tg },
        { alt: 'twitter', link: 'https://twitter.com', image: twitter },
        { alt: 'discord', link: 'https://discord.com', image: discord },
    ]

    return (
        <div className="w-full min-h-min flex justify-center bg-black">
            <div className="container flex flex-col justify-center text-white items-center my-20">
                <div>
                    <img src={image} alt="footer-image" />
                </div>
                <div className='flex space-x-10'>
                    {socials.map(social => (
                        <a href={social.link}>
                            <img src={social.image} alt={social.alt} />
                        </a>
                    ))}
                </div>
                <p className='my-10'>Smart Contract Mem Cat Coin 0x0000000000000000000000000000000000000000000000001</p>
                <p className='my-10 text-center'>Mem Cat Coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
                    Mem Cat Coin is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.</p>
                <div className='w-full flex justify-between'>
                    <p>© 2023 by Mem Cat Coin All rights reserved</p>
                    <p className='underline cursor-pointer'>Privacy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer