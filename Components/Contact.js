"use-client"
import React from 'react'


const Contact = () => {

      return (
        <div className=" bg-slate-400 m-0 py-10 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          <div className="text-center">
            <h1 className="relative inline top-1/3  uppercase font-bold text-6xl">
              Contact US             
            </h1>
          </div>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label className='text-xl font-sans'>Name</label>
              <input
                className="p-2 mt-1 rounded outline-none border border-white focus:border-gray-400"
              />
             </div>
            <div className="flex flex-col">
              <label className='text-xl font-sans'>Email</label>
              <input
               
                className="p-2 outline-none mt-1 rounded border border-white focus:border-gray-400"
              />
             
            </div>
            <div className="flex flex-col">
              <label className='text-xl font-sans'>Subject</label>
              <input
               
                className="p-2 outline-none border mt-1 rounded border-white focus:border-gray-400"
              />
            
            </div>
            <div className="flex flex-col">
              <label className='text-xl font-sans'>Message</label>
              <textarea
               
                className="resize-none border border-white mt-1 rounded focus:border-gray-400 outline-none p-2"
              ></textarea>
              
            </div>
            <button className="bg-gray-700 font-bold text-2xl text-white hover:bg-blue-700 hover:text-white uppercase duration-300 rounded-full p-2">
              Send
            </button>
          </form>
    </div>
  )
}

export default Contact