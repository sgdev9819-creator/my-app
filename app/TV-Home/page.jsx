
"use client"
import HomeSlider from "./components-v8/hero-slider"
import HeroImages1 from "./components-v8/hero-images-1"
import HeroImages3 from "./components-v8/hero-images-3"
import HeroImages2 from "./components-v8/hero-images-2"
import Helper1 from "./components-v8/helper-2"
import TvNav from "./components-v8/tv-nav"
import FooterVid from "./components-v8/video-footer"
import FooterHelper from "./components-v8/footer-helper"

import Link from "next/link"
export default function TVHomePage(){

    return(
        <div className=" relative justify-center iteme-center w-full h-full ">
           <TvNav/>

<div className="absolute w-full h-auto top-11 justify-center">
    <HomeSlider/>
</div>

<div className="absolute top-[11.5rem] w-full justify-center items-center ">
    <HeroImages1 />
</div>

<div  className="absolute top-[114rem] w-full justify-center items-center flex flex-col ">
<h2 className="text-[70px] text-white font-light  w-full justify-center items-center flex ">
    Every reason to turn your house 
</h2>
<h2 className="text-[70px] text-white font-light mt-[-2rem] w-full justify-center items-center  flex">
into a smart home.
</h2>

</div>

<div className="absolute top-[114.7rem] w-full justify-center items-center ">
    < HeroImages2 />
</div>

<div  className="absolute top-[172rem] w-full justify-center items-center flex flex-col ">
<h2 className="text-[70px] text-white font-light  w-full justify-center items-center flex ">
Accessories. Around your home
</h2>
<h2 className="text-[70px] text-white font-light mt-[-2rem] w-full justify-center items-center  flex">
 and across your devices.
</h2>
<Link href="#" className="text-blue-400 text-[17px] mt-[0.6rem] no-underline font-light mt-[-2rem]  justify-center items-center  flex hover:underline ">
Shop accessories {'\u003e'}
</Link>
</div>

<div className="absolute top-[176rem] w-full justify-center items-center ">
    < HeroImages3 />
</div>


<div  className="absolute top-[232rem] w-full justify-center items-center flex flex-col ">
<h2 className="text-[70px] text-white font-light  w-full justify-center items-center flex ">
Watch, sing, play, and work out.
</h2>
<h2 className="text-[70px] text-white font-light mt-[-2rem] w-full justify-center items-center  flex">
On the big screen.
</h2>
</div>

<div className="absolute top-[246rem] w-full justify-center items-center ">
    < FooterVid/>
</div>

<div className="absolute top-[296rem] z-300 w-full justify-center items-center ">
    < FooterHelper/>
</div>

<div className="absolute top-[316rem] z-300 w-full justify-center items-center ">
    < Helper1/>
</div>



<button className="absolute top-[400rem]  font-light  w-full justify-center items-center  flex">path</button>
        </div>


    )
}