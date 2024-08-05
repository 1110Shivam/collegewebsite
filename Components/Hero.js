import React from 'react'


const Hero = () => {
    const backgroundImageStyle = {
        background:"linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url('hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100%',  
        color:'#FFF'
      };

  return (
    <div style={backgroundImageStyle} className='flex items-center justify-center'>
        <div className='select-none text-center'>
            <h1 className='leading-relaxed font-gilroy text-6xl font-black tracking-wider'>
                FORTE INSTITUTE OF TECHNOLOGY
            </h1>
            <p className='font-sans leading-normal text-3xl font-bold tracking-wide'>
            Where knowledge is created and not just communicated
            </p>
            <p className='font-gilroy text-xl'>Your chance to be a trending expert in IT industries and make successful career after completion of our courses.</p>

        </div>
    </div>
  )
}

export default Hero