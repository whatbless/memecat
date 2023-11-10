import React from 'react'
import './../global.css'
import htb1 from './../images/htb1.png'
import htb2 from './../images/htb2.png'
import htb3 from './../images/htb3.png'
import htb4 from './../images/htb4.png'

const HowToBuy = () => {

    const blocks = [
        { alt: 'htb-image1', class: 'htb-block1', background: 'linear-gradient(200deg, rgba(164,119,91,0.7) 0%, rgba(92,71,101,0.7) 100%)', image: htb1, isLeft: true, title: 'Create a Wallet', desc: 'download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.' },
        { alt: 'htb-image2', class: 'htb-block2', background: 'linear-gradient(200deg, rgba(164,119,91,0.7) 0%, rgba(92,71,101,0.7) 100%)', image: htb2, isLeft: false, title: 'Get Some ETH', desc: 'have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.' },
        { alt: 'htb-image3', class: 'htb-block3', background: 'linear-gradient(200deg, rgba(164,119,91,0.7) 0%, rgba(92,71,101,0.7) 100%)', image: htb3, isLeft: true, title: 'Go to Uniswap', desc: 'connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.' },
        { alt: 'htb-image4', class: 'htb-block4', background: 'linear-gradient(200deg, rgba(164,119,91,0.7) 0%, rgba(92,71,101,0.7) 100%)', image: htb4, isLeft: false, title: 'Switch ETH for Mem Cat Coin', desc: 'switch ETH for Mem Cat Coin. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.' }
    ]

    return (
        <div className="w-full min-h-min flex justify-center htb-wrapper">
            <div className="container flex flex-col text-white mb-20">
                {blocks.map(block => (
                    block.isLeft ?
                        <div className={block.class} style={{ background: block.background }}>
                            <div className='w-2/3'>
                                <h1 className='text-3xl font-extrabold'>{block.title}</h1>
                                <p className='text-xl'>{block.desc}</p>
                            </div>
                            <img className={block.alt} src={block.image} alt={block.alt} />
                        </div> :
                        <div className={block.class} style={{ background: block.background }}>
                            <div className='w-2/3'>
                                <h1 className='text-3xl font-extrabold'>{block.title}</h1>
                                <p className='text-xl'>{block.desc}</p>
                            </div>
                            <img className={block.alt} src={block.image} alt={block.alt} />
                        </div>
                ))}
            </div>
        </div>
    )
}

export default HowToBuy