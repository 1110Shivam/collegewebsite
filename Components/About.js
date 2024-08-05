import React from 'react'
import Image from 'next/image'
import { FaCirclePlay } from "react-icons/fa6";

const About = () => {
  return (
    <div className='flex items-center justify-around mt-[100px] pt-14 pb-14 select-none w-full  bg-slate-400 '>
        <div className='relative basis-2/6 ml-14 pl-6 pt-6'>
            <Image src='/videoimg.jpg' width={400} height={400} className='w-full rounded-md'/>
            <FaCirclePlay size="3em" color='#fff' className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ' />
        </div>
        <div className='basis-6/12 p-10 mr-10 h-full'>
            <h3 className='mb-2 text-2xl text-cyan-800 font-sans uppercase'>ABOUT COLLEGE</h3>
            <h2 className='text-4xl font-semibold font-sans pb-2'>Nurturing Tomorrow's Leaders Today</h2>
            <p className='text-xl font-gilroy pt-5 text-left'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <p className='text-lg font-gilroy pt-2 text-left'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
           
        </div>
    </div>
  )
}

export default About