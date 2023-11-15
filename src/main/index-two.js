import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Project";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import HeroTwo from "../components/HeroTwo";
import Clients from "../components/Clients";

export default function IndexTwo(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
      }, []);
    return(
        <>
            <Navbar/>
            <HeroTwo/>
            <AboutUs/>
           {/* ß */}
            <CTABanner/>
            <Experience/>
            <Projects/>
            <Clients/>  
            <Blogs/>
            <GetInTouch/>
            <Footer/>
            
        </>
    )
}