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
    <div className="absolute w-full h-max flex flex-row font-light gap-1 text-[15px] justify-center items-center">
<h3 className=" w-max h-max justify-center items-center  inline-flex  text-white">Lease a new Apple Watch with low monthly payments for 12 or 24 months and upgrade at the end of your term with Apple Upgrade.◊</h3>
<Link href="#" className="w-auto h-max justify-center items-center  inline-flex text-blue-400 hover:underline">Learn more {'\u003e'}</Link>
</div>
</div>
<div className="absolute top-[5.9rem] w-full  h-[26.3rem] pb-40 pt-40 bg-black flex  justify-center ">

<div className="w-full h-max absolute font-light left-22 top-20 text-white flex text-[4.7rem]">
    <h2>
        Apple Watch
    </h2>
</div>

<div className="w-full absolute top-[7rem] left-0 flex justify-center items-center">
    <HeroSlider/>
</div>

</div>
<div className="flex flex-row absolute top-[39rem] justify-center items-center w-full">
<h2 className="absolute left-21 top-[3px]  text-[45px] w-max text-white font-light">
    Explore the lineup.
</h2>
<Link href="#" className="text-blue-400 text-[17px] font-normal absolute right-22 top-8 no-underline hover:underline">
Compare all models {'\u003e'}
</Link>
</div>
<div className="w-full absolute top-[58.5rem]  flex justify-center items-center">
    <HeroImage1/>
</div>
<div className=" absolute left-20 top-[100rem] w-auto h-auto justify-center">
<h3 className="font-light text-[45px] text-white ">
 Why Apple is the best
place to shop Apple Watch.
</h3>
</div>

<div className=" support-input   absolute top-[90rem] w-full ">
<HeroImage2 />
</div>

<div className="w-full h-[100rem] justify-center items-center flex bg-black absolute top-[167.8rem]">
<div className="absolute flex flex-row gap-120 justify-center items-center w-full absolute top-[8.7rem]">
    <h3 className="font-light text-white text-[45px] ">Apple Watch essentials.</h3>
    <Link href="#" className="text-blue-400 text-[17px] mt-[1.6rem] font-light no-underline hover:underline">
All Apple Watch accessories </Link>
</div>
<div className=" absolute left-20 top-[15rem] w-full h-auto justify-center items-center">
    <FooterImage/>
</div>
</div>

<button className=" absolute top-[400rem]  justify-center items-center flex">path</button>
    </div>
    )
}