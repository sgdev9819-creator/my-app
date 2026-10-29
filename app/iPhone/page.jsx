"use client"
import Navber from "./components-v4/iphone-nav"
import Hero from "./components-v4/hero-slies"
import styles from "./page.module.css"
import HeroImage1 from "./components-v4/hero-images-1"
import HeroImage2 from "./components-v4/hero-images-2"
import HeroImage3 from "./components-v4/hero-images-3"
import NoCase from "./components-v4/no-case"
import Link from "next/link"
export default function Mac(){


    return(
       <div className="absolute top-0 left-0 flex justify-center w-full h-full ">
    <Navber/>
 <div className={styles["show"]} >
    <div className="w-full  h-full flex flex-row justify-center items-center">
<h3 className=" w-max h-max justify-center 
 items-center inline-flex text-[15px] text-white font-light ">Introducing Apple Upgrade. Lease a new Mac with low monthly payments for 24 or 36 months and upgrade at the end of your term.◊</h3>
<Link href="#" className="w-max h-max justify-center items-center inline-flex text-blue-400 mt-[-0.4rem] font-light  ">Learn more</Link>
</div>
</div>


<div className="absolute top-24 left-0 w-full h-[400px] bg-black flex  justify-center items-center">
   
    <h2 className="text-white text-[5rem] font-light  absolute  top-20 left-21">iPhone</h2>
<Hero/>
    </div>

<div className="absolute top-160 left-21 justify-center">
<h2 className="font-light  text-5xl text-white ">
 Explore the lineup.
</h2>
 </div>


<div className="absolute top-110 w-full ">
    <NoCase/>
</div>


<div className="absolute pt-6 top-[95rem] left-21 justify-center w-[400px] loading-[0.5]">
    <h3 className="font-light  text-white text-[47px]  loading-[0.5] w-[500px]" >
        Why Apple is the best
    </h3>
    <h3 className="mt-[-20] font-light  text-white text-[47px]  loading-[0.5] w-[500px] "> place to shop Mac.</h3>
    
</div>
<div className="absolute top-350 w-full ">
<HeroImage1/>
</div>

<div className="absolute top-[156rem] pt-[6rem] bg-black justify-center pb-[9rem] w-full h-300" >
<div className="absolute pt-6  left-21 justify-center  w-[400px]">
    <h3 className="relative top-[1.5rem] font-light  text-white text-[47px] w-[500px]" >
       Get to know Mac.
    </h3>
</div>
<div className="absolute top-[-3rem] mt-0 w-full ">
<HeroImage2/>
</div>
</div>

    
<div className="absolute top-[240rem] pt-3 top-30 left-21 justify-center w-[400px]">
    <h3 className="font-light  text-white text-[47px]  w-[500px]" >
Switch to Mac.
    </h3>
</div>
<div className="absolute top-940 mt-0 w-full ">
<HeroImage3/>
</div>

    <button className="absolute top-600 left-0 justify-center "> path</button>
    </div>
    )
}