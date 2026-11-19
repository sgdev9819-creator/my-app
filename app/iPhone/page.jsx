"use client"
import Navber from "./components-v4/iphone-nav"
import Hero from "./components-v4/hero-slies"
import Interval from "./components-v4/hero-interval"
import styles from "./page.module.css"
import HeroImage1 from "./components-v4/hero-images-1"
import HeroImage2 from "./components-v4/hero-images-2"
import HeroImage3 from "./components-v4/hero-images-3"
import FooterSwitch from "./components-v4/footer-switch"
import Climax from "./components-v4/climax"
import NoCase from "./components-v4/no-case"
import Link from "next/link"
export default function Mac(){


    return(
       <div className="relative top-0 left-0 flex flex-col justify-center w-full h-full ">
    <Navber/>
 <div className={styles["show"]} >
    <div className="w-full  flex flex-row justify-center items-center">
<h3 className=" w-max h-max justify-center items-center inline-flex text-[15px] text-white font-light ">Introducing Apple Upgrade. Lease a new Mac with low monthly payments for 24 or 36 months and upgrade at the end of your term.◊</h3>
<Link href="#" className="w-max h-max justify-center items-center inline-flex text-blue-400 font-light  ">Learn more</Link>
</div>
</div>


<div className="relative flex flex-col top-24 left-0 w-full h-[84rem] bg-black   ">
   
    <h2 className="text-white text-[80px] font-light  relative  top-18 left-21">iPhone</h2>
<Hero/>

    <Interval/>


    </div>

<div className="relative top-[11.5rem] left-21 ">
<h2 className="font-light  text-5xl text-white ">
 Explore the lineup.
</h2>
 </div>



    <NoCase/>




<div className="relative pt-6 top-[15.6rem] flex flex-row gap-[47%] w-full  loading-[0.5] ">
    <div className="relative left-21  w-max flex flex-col">
          <h3 className="font-light text-white text-[47px]  loading-[0.5] w-[500px]" >
        Why Apple is the best
    </h3>
    <h3 className="mt-[-20] font-light  text-white text-[47px]  loading-[0.5] w-[500px] "> place to shop iPhone.</h3>

    </div>
  
<Link href="#" className="mt-[5.7rem] w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
Shop iPhone
</Link>

</div>

<HeroImage1/>


<div className="relative top-[25rem] flex flex-col pt-[6rem] bg-black pb-[9rem] w-full h-535" >
<div className="relative pt-6   w-full flex flex-row">
    <h3 className="relative left-21 top-[0.5rem] font-light  text-white text-[47px] w-[500px]" >
       iPhone essentials.
    </h3>
    
<Link href="#" className="absolute top-[4.2rem] z-50 right-21 w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
All iPhone accessories
</Link>
</div>

<HeroImage3/>


<div className="relative pt-6  top-[61rem] left-21  w-full flex flex-row">
    <h3 className=" font-light  text-white text-[47px] " >
     Significant others.
    </h3>
</div>

<div className="relative top-[63rem] flex  justify-center items-center w-full ">
<FooterSwitch/>
</div>


</div>


<div className="relative top-[30.9rem] left-21 ">
<h2 className="font-light  text-[48px] text-white ">
    iPhone
</h2>
 </div>
 
<div className="relative top-[39.5rem] flex  justify-center items-center w-full ">
<Climax/>
</div>
    
    <button className="absolute top-[700rem] left-0 justify-center "> path</button>
    </div>
    )
}