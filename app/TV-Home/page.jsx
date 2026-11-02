
"use client"
import HomeSlider from "./components-v8/home-slider"
import TvNav from "./components-v8/tv-nav"
import Case from "./components-v8/case"
import Link from "next/link"
export default function TVHomePage(){

    return(
        <div className=" relative justify-center iteme-center w-full h-full ">
           <TvNav/>

<div className="relative top-[2.8rem] left-0 w-full h-[385px] bg-black flex  justify-center items-center">
   
    <h2 className="text-white text-[5rem] font-light  absolute  top-[2.9rem] left-21">Home</h2>
<HomeSlider/>
    </div>

<div className="relative left-22 w-max flex top-[11.8rem] font-light text-[47px] text-white">
    <h3> Explore the lineup.</h3>
</div>

<div className="relative top-[11.6rem] w-full flex">
    <Case/>
</div>


<button className="absolute top-[400rem]  font-light  w-full justify-center items-center  flex">path</button>
        </div>


    )
}