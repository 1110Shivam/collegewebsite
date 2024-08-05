import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <nav className="fixed h-16 w-full px-5 bg-slate-500 flex items-center justify-between z-50">
      <h1 class="italic font-extrabold text-[22px] select-none text-cyan-50 font-mono tracking-wide">
        FIT College
      
      </h1>
      <div className="flex gap-8 mx-16 text-black tracking-wide items-center ">
        <Link className="hover:text-white" href="/Home">Home</Link>
        <Link className="hover:text-white" href="/Courses">Courses</Link>
        <Link className="hover:text-white" href="/About">About Us</Link>
        <Link className="hover:text-white" href="/Campus">Campus</Link>
        <Link href="/Contact"><button className="bg-black text-white p-2 text-base font-bold rounded hover:bg-white hover:text-black">Contact Us</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
