"use client"
import Link from "next/link"
import { useState } from "react"
import SupportNav from "./components-v7/Support-nav"
import SupportImages from "./components-v7/support-images-hero"
import SupportImages1 from "./components-v7/support-images-1"
import SupportDiv from "./components-v7/support-div"
import SupportInfo from "./components-v7/supportInfo"
import FooterLinks from "./components-v7/footer-links-1"
import SupportEplore from "./components-v7/support-explore"
export default function SupportPage() {

    return(
        <div className=" relative top-0 left-0 flex justify-center w-full">
<SupportNav/>
<div className="bg-black w-full h-[72.2rem] absolute top-0 left-0 justify-center items-center ">
    <div className="absolute top-24 justify-center items-center w-full h-max flex flex-col">
        <img src="/support-logo.png" alt="#" className=" w-[10rem] justify-center items-center " />
<h3 className="font-light  text-white text-6xl mt-9" >
    Apple Support
</h3>
<p className="font-light text-white text-2xl mt-10">
    Need help? Start here.
</p>
<div className="mt-16 w-full h-auto" >
    <SupportImages/>
</div>

    </div>

    <div className="absolute top-[41.3rem] w-full h-max justify-center items-center ">
<SupportDiv/>
    </div>
<div className="absolute top-[58.3rem] w-full h-max justify-center items-center flex flex-col gap-12">
    <h3 className=" text-white text-[40px] font-light">
        Search for More Topics 
    </h3>
    <div className="flex flex-row w-[70%] h-[3rem] rounded-[10px]  text-white
  text-1xl font-light border border-[rgba(255,255,255,0.11)] focus-within:ring-3 focus-within:ring-blue-500 focus-within:border-transparent">
    <div className="w-10% p-3">
         <img src="/search.svg" className="w-[22px] justify-center items-center flex a" />
    </div>
       
<input type="search" placeholder="  Search Support"
 className="search-input "/>
</div>
</div>
</div>
<div className="absolute top-[73.7rem] w-full h-max justify-center items-center">
    < SupportImages1/>
</div>
<div className="absolute top-[132.5rem] w-full h-max justify-center flex flex-col items-center" >
    <h3 className="text-[40px] text-white font-light ">
        More to Explore
    </h3>
    <SupportEplore/>
    </div>
    <div  className="absolute top-[174.5rem] w-full h-max justify-center flex  items-center">
        <SupportInfo/>
    </div>
    <div  className="absolute top-[219rem] w-full h-max justify-center flex  items-center">
            <FooterLinks/>
    </div>


<button className="absolute top-[300rem]">path</button>
            </div>
    )
}

