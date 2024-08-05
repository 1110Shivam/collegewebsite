"use-client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Courses from "@/Components/Courses";
import Title from "@/Components/Title";
import About from "@/Components/About";
import Gallery from "@/Components/Gallery";
import Contact from "@/Components/Contact";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div> */}
        <Title subTitle="Our Courses" title="What We Offer" />
        <Courses />
        <About/>
        <Title subTitle="Gallery" title="College Photos" />
        <Gallery/>
        <Contact/>
      {/* </div> */}
    </div>
  );
};

export default page;
