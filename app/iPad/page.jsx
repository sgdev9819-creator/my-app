"use client"
import Navber from "./components-v3/ipad-nav"
import Hero from "./components-v3/hero-slide"
import NoCase from "./components-v3/no-case"
import HeroImage1 from "./components-v3/hero-images-1"
import HeroImage2 from "./components-v3/hero-images-2"
import HeroImage3 from "./components-v3/hero-images-3"
import Climax from "./components-v3/climax"
import styles from "./page.module.css"
import Footer from "./components-v3/footer"
import Link from "next/link"
export default function Mac(){


    return(
       <div className="relative top-0 left-0 flex flex-col w-full h-full ">
    <Navber/>
 <div className={styles["show"]} >
    <div className="w-full  h-full flex flex-row justify-center items-center">
<h3 className=" w-max h-max justify-center  items-center inline-flex text-[15px] text-white font-light ">Introducing Apple Upgrade. Lease a new Mac with low monthly payments for 24 or 36 months and upgrade at the end of your term.◊</h3>
<Link href="#" className="w-max h-max justify-center items-center inline-flex text-blue-400  font-light ">Learn more</Link>
</div>
</div>


<div className="relative top-24 left-0 w-full h-[400px] bg-black flex  flex-col">
   
    <h2 className="text-white text-[5rem] font-light  relative top-[4.6rem] left-21">iPad</h2>
<Hero/>
    </div>



<div className="relative top-[12.7rem] w-full  flex flex-row ">
<h2 className="font-light text-[47px] text-white absolute  left-21  ">
 Explore the lineup.
</h2>

<Link href="#" className="absolute top-[2.3rem] z-50 right-21 w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
Compare all modles
</Link>
</div>


    <NoCase/>


<div className="relative pt-6 top-[19.5rem] flex  w-full w-full loading-[0.5] gap-[51.5%] ">
    <div className="relative left-21  w-max flex flex-col">
          <h3 className="font-light text-white text-[47px]  loading-[0.5] w-[500px]" >
        Why Apple is the best
    </h3>
    <h3 className="mt-[-20] font-light  text-white text-[47px]  loading-[0.5] w-[500px] "> place to shop iPad.</h3>

    </div>
  
<Link href="#" className=" mt-[5.4rem]  w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
Shop iPad
</Link>

</div>

<HeroImage1/>

    
<div className="relative top-[22.5rem] pt-3 top-30 left-21  w-[400px]">
    <h3 className="font-light  text-white text-[47px]  w-[500px]" >
iPad essentials.
    </h3>
</div>

<HeroImage3/>

<div className="relative top-[71rem] pt-3 top-30 left-21  w-[400px]">
    <h3 className="font-light  text-white text-[47px]  w-[500px]" >
Significant others.
    </h3>
</div>

<div className="relative top-[73.2rem] flex w-full justify-center items-center">
    <Footer/>
</div>

<div className="absolute top-[277.4rem] mt-0 w-full justify-center items-center flex ">
<Climax/>
</div>
    <button className="absolucte top-[400rem] left-0 justify-center "> path</button>
    </div>
    )
}