"use client"
import Navber from "./components-v2/mac-naveber"
import Hero from "./components-v2/hero-slide"
import Case from "./components-v2/case"
import HeroImage from "./components-v2/hero-images-1"
import SecondImages from "./components-v2/second-images"
import ThirdImages from "./components-v2/third-images"
import FourthImage from "./components-v2/fourth-images"
import BodyImages1 from "./components-v2/bodyimage"
import styles from "./page.module.css"
import Link from "next/link"
export default function Mac(){


    return(
       <div className="relative top-0 left-0 flex justify-center w-full  ">
    <Navber/>
 <div className={styles["show"]} >
    <div className="w-full  h-full opacity-100 flex flex-row justify-center items-center">
<h3 className=" w-max h-max justify-center items-center inline-flex text-[15px] font-light  text-white">Introducing Apple Upgrade. Lease a new Mac with low monthly payments for 24 or 36 months and upgrade at the end of your term.◊</h3>
<Link href="#" className="w-max h-max justify-center items-center inline-flex font-light  text-blue-400 ">Learn more</Link>
</div>
</div>


<div className="absolute top-23 left-0 w-full h-[400px] bg-black flex  justify-center items-center">
   
    <h2 className="text-white text-[5rem] font-light  absolute  top-[4.9rem] left-21">Mac</h2>
<Hero/>
    </div>



<div className="absolute top-160 left-[85px] justify-center">
<h2 className="font-light  text-[47px] text-white ">
 Explore the lineup.
</h2>


</div>

<div className="absolute top-170 w-full ">
    <Case/>
</div>

<div className="absolute pt-6 top-[95.5rem] left-21 justify-center w-[400px] loading-[0.5]">
    <h3 className="font-light  text-white text-[47px]  loading-[0.5] w-[500px]" >
        Why Apple is the best
    </h3>
    <h3 className="mt-[-20] font-light  text-white text-[47px]  loading-[0.5] w-[500px] "> place to shop Mac.</h3>
    
</div>
<div className="absolute top-367 w-full ">
<HeroImage/>
</div>

<div className="absolute top-[150.8rem] pt-[6rem] bg-black justify-center pb-[9rem] w-full h-[114rem]" >
<div className="absolute pt-6  left-[84px] justify-center  w-[400px]">
    <h3 className="relative top-[0.5rem] font-light  text-white text-[47px] w-[500px]" >
       Get to know Mac.
    </h3>
</div>
<div className="absolute top-[0rem]  w-full ">
<SecondImages/>
</div>

<div className="absolute top-[66.1rem]  left-[84px] justify-center  w-[400px]">
    <h3 className="relative top-[1.5rem] font-light  text-white text-[47px] w-[500px]" >
   Help me choose.
    </h3>
</div>
<div className="absolute top-[89.9rem] items-center flex  justify-center  w-full ">
<BodyImages1/>
</div>


</div>

    
<div className="absolute top-[272rem] pt-3 top-30 left-21 justify-center w-[400px]">
    <h3 className="font-light  text-white text-[47px]  w-[500px]" >
Switch to Mac.
    </h3>
</div>
<div className="absolute top-[267.9rem] mt-0 w-full ">
<ThirdImages/>
</div>

<div className="absolute top-[329rem] pt-3 top-30 left-21 justify-center w-[400px]">
    <h3 className="font-light  text-white text-[47px]  w-[500px]" >
 Mac eccentials.
    </h3>
</div>

<div className="absolute top-[325.2rem]  mt-0 w-full ">
<FourthImage/>
</div>
<div className="absolute top-2000 text-white left-0 justify-center ">
    <button> path</button>
    </div>
    </div>
    )
}