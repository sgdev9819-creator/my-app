"use client"
import Navber from "./components-v3/ipad-nav"
import Hero from "./components-v3/hero-slide"
import NoCase from "./components-v3/no-case"
import HeroImage1 from "./components-v3/hero-images-1"
import HeroImage2 from "./components-v3/hero-images-2"
import HeroImage3 from "./components-v3/hero-images-3"
import styles from "./page.module.css"
import Link from "next/link"
export default function Mac(){


    return(
       <div className="absolute top-0 left-0 flex justify-center w-full h-full ">
    <Navber/>
 <div className={styles["show"]} >
    <div className="w-full  h-full flex flex-row justify-center items-center">
<h3 className=" w-max h-max justify-center  items-center inline-flex text-[15px] text-white font-light ">Introducing Apple Upgrade. Lease a new Mac with low monthly payments for 24 or 36 months and upgrade at the end of your term.◊</h3>
<Link href="#" className="w-max h-max justify-center items-center inline-flex text-blue-400  font-light ">Learn more</Link>
</div>
</div>


<div className="absolute top-24 left-0 w-full h-[400px] bg-black flex  justify-center items-center">
   
    <h2 className="text-white text-[5rem] font-light  absolute  top-[4.6rem] left-21">iPad</h2>
<Hero/>
    </div>



<div className="absolute top-[37.7rem] w-full justify-center flex flex-row ">
<h2 className="font-light text-[47px] text-white absolute  left-21  ">
 Explore the lineup.
</h2>

<Link href="#" className="absolute top-[2.3rem] z-50 right-21 w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
Compare all modles
</Link>
</div>

<div className="absolute top-[30.9rem] w-full ">
    <NoCase/>
</div>

<div className="absolute pt-6 top-[103.6rem] flex items-center w-full justify-center w-[400px] loading-[0.5] ">
    <div className="absolute left-21  w-max flex flex-col">
          <h3 className="font-light text-white text-[47px]  loading-[0.5] w-[500px]" >
        Why Apple is the best
    </h3>
    <h3 className="mt-[-20] font-light  text-white text-[47px]  loading-[0.5] w-[500px] "> place to shop iPad.</h3>

    </div>
  
<Link href="#" className="absolute top-[3.2rem] z-50 right-21 w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
Shop iPad
</Link>

</div>
<div className="absolute top-[100rem] w-full ">
<HeroImage1/>
</div>

<div className="absolute top-[151.7rem] pt-[6rem] bg-black justify-center pb-[9rem] w-full h-268" >
<div className="absolute   left-21 justify-center  w-[400px]">
    <h3 className="relative top-[2.7rem] font-light  text-black text-[47px] w-[500px]" >
       Get to know Mac.
    </h3>
</div>
<div className="absolute top-[-3rem] mt-0 w-full ">
<HeroImage2/>
</div>
</div>

    
<div className="absolute top-[226.4rem] pt-3 top-30 left-21 justify-center w-[400px]">
    <h3 className="font-light  text-white text-[47px]  w-[500px]" >
Switch to iPad.
    </h3>
</div>
<div className="absolute top-[222.4rem] mt-0 w-full ">
<HeroImage3/>
</div>

    <button className="absolute top-[400rem] left-0 justify-center "> path</button>
    </div>
    )
}