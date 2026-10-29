"use client"
import AirpodsNav from "./components-v11/AirPods-nav"
import HeroImage from "./components-v11/heroImages"
import HeroImage1 from "./components-v11/hero-images1"
import FooterFlex from "./components-v11/footer-flex"
import FooterFlex2 from "./components-v11/footer-flex2"
import FooterGrid from "./components-v11/footer-grid"
import Footer from "./components-v11/footer"
import HeroScroll from "./components-v11/heroScroll"
export default function AirPodsPage(){

    return(
 <div className=" relative justify-center  w-full h-full ">  
    <AirpodsNav/>

    <div className="w-full justify-center items-center flex  absolute top-[20rem]">
        <HeroImage/>
    </div>
    <div>
         <div className="w-full justify-center items-center flex  absolute top-[116.6rem]">
        <HeroImage1/>
    </div>
    <div className=" absolute top-[169.6rem] w-full justify-center items-center flex font-light text-7xl text-white ">
        <h3>
            Compare AirPods models
        </h3>
    </div>
    </div>
<div  className=" absolute top-[192.5rem] w-full justify-center items-center flex  ">
    <FooterFlex/>
    </div>

<div  className=" absolute top-[218.5rem] w-full h-full justify-center items-center flex  ">
    <FooterGrid/>
    </div>

    <div className="absolute top-[447rem] h-[76rem] w-full justify-center flex flex-col font-light text-white bg-black  ">
<h3 className="text-5xl w-full justify-center items-center flex absolute top-40">
Get to know AirPods.
</h3>


<div  className=" absolute top-[-2.5rem] w-full justify-center items-center flex  ">
    <HeroScroll/>
    </div>
    </div>
    
<div  className=" footer-mother  ">
    <Footer/>
    </div>

<div  className=" absolute top-[575rem] w-full justify-center items-center flex  ">
    <FooterFlex2/>
    </div>

    <button className="absolute top-[600rem] flex  w-full justify-center items-center ">path</button>
    </div>
)
}