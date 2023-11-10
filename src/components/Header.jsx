import React from 'react'
import logo from './../images/logo.png'
import sun from './../images/sun.png'
import './../global.css'

const Header = () => {
    const navs = [
        { title: "Home" },
        { title: "About" },
        { title: "How to buy" },
        { title: "Bridge" },
        { title: "Tokenomics" },
        { title: "Roadmap" },
    ];
    return (
        <div className="py-4 text-white z-20 fixed w-full flex justify-center">
            <div className="container flex flex-row justify-between">
                <a href='/'>
                    <img src={logo}></img>
                </a>
                <div className="flex flex-row">
                    {navs.map((nav) => (
                        <h1 className="mx-2 px-4 py-2 my-6 uppercase cursor-pointer font-bold navigation">
                            {nav.title}
                        </h1>
                    ))}
                </div>
                <div className="flex items-center cursor-pointer">
                    <img src={sun} alt="light theme icon" />
                </div>
                <div className="flex items-center">
                    <div className='buy-button'>
                        <div className="font-bold uppercase">Buy now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header