import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='flex flex-col items-center justify-center mt-7 mb-7 p-10'>
        <p className='text-2xl text-cyan-800 font-sans uppercase  '>{subTitle}</p>
        <h2 className='text-5xl font-semibold font-sans '>{title}</h2>
    </div>
  )
}

export default Title