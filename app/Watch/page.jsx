"use client"
import Link from "next/link";
import WatchNav from "./components-v5/watch-nav"
import styles from "./page.module.css"
import HeroSlider from "./components-v5/hero-slider"
import HeroImage1 from "./components-v5/hero-images-1"
import HeroImage2 from "./components-v5/hero-images-2"
import FooterImage from "./components-v5/footer-image"
import { useState } from "react";

export default function Watch(){
    return(
   
<div className=" relative justify-center w-full font-semibold h-full ">
    <div>
     <WatchNav/>
</div>

<div className={styles["show"]} >
    <div className="relative w-full flex flex-row font-light gap-1 text-[15px] justify-center items-center">
        <h3 className="  text-white">Lease a new Apple Watch with low monthly payments for 12 or 24 months and upgrade at the end of your term with Apple Upgrade.◊</h3>
<Link href="#" className="  text-blue-400 hover:underline">Learn more {'\u003e'}</Link>
</div>
</div>
<div className="relative top-23 left-0 w-full h-[400px] bg-black flex flex-col ">

<div className="w-full h-max relative font-light left-21 top-[4.9rem] text-white flex text-[4.7rem]">
    <h2>
        Apple Watch
    </h2>
</div>


    <HeroSlider/>


</div>
<div className="flex flex-row relative top-[14rem]  w-full gap-[56%]">
<h2 className="relative left-21 top-[0px]  text-[47px] w-max text-white font-light">
    Explore the lineup.
</h2>
<Link href="#" className="text-blue-400 text-[17px] font-normal relative top-8 no-underline hover:underline">
Compare all models {'\u003e'}
</Link>
</div>
 <HeroImage1/>

<div className=" relative left-21 top-[22rem] w-auto h-auto justify-center">
<h3 className="font-light text-[47px] text-white ">
 Why Apple is the best
place to shop Apple Watch.
</h3>
</div>


<HeroImage2 />


<div className="w-full h-[100rem]  flex bg-black relative top-[41rem] flex flex-col">
<div className="relative flex flex-row gap-[46.2%]  w-full  top-[8.7rem]">
    <h3 className="font-light text-white text-[45px] relative left-21">Apple Watch essentials.</h3>
    <Link href="#" className="text-blue-400 text-[17px] mt-[1.6rem] font-light no-underline hover:underline">
All Apple Watch accessories </Link>
</div>
<div className=" relative flex top-[26rem] w-full h-auto justify-center items-center">
 <FooterImage/>
</div>
</div>

<button className=" absolute top-[400rem]  justify-center items-center flex">path</button>
    </div>
    )
}