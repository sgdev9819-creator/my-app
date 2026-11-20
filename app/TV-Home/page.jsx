
"use client"
import HomeSlider from "./components-v8/home-slider"
import TvNav from "./components-v8/tv-nav"
import HeroImages1 from "./components-v8/first-section"
import HeroImages2 from "./components-v8/second-section"
import Case from "./components-v8/case"
import BodyImages from "./components-v8/bodyiage"
import Card from "./components-v8/bottom-cards"
import Link from "next/link"
export default function TVHomePage(){

    return(
        <div className=" relative justify-center iteme-center w-full h-full ">
           <TvNav/>

<div className="relative top-[2.8rem] left-0 w-full h-[385px] bg-black flex  justify-center items-center">
   
    <h2 className="text-white text-[5rem] font-light  absolute  top-[2.9rem] left-21">Home</h2>
<HomeSlider/>
    </div>

<div className="relative left-21 w-max flex top-[11.2rem] font-light text-[47px] text-white">
    <h3> Explore the lineup.</h3>
</div>

<div className="relative top-[11rem] w-full flex">
    <Case/>
</div>

<div className="relative pt-6 top-[15.2rem] flex items-center w-full justify-center w-auto loading-[0.5] ">
    <div className="absolute left-21  w-max flex flex-col">
          <h3 className="font-light text-white text-[47px]  loading-[0.5] w-[500px]" >
        Why Apple is the best
    </h3>
    <h3 className="mt-[-20] font-light  text-white text-[47px]  loading-[0.5]  "> place to shop Apple Home.</h3>

    </div>
  
<Link href="#" className="absolute top-[3.2rem] z-50 right-21 w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
Shop Apple Home.
</Link>

</div>
<div className="relative top-[2.1rem] w-full ">
    <HeroImages1/>
</div>

<div className="w-full h-[158.7rem] relative top-[20.8rem] bg-black flex flex-col">
    
<div className="relative left-21 w-max flex top-[8.2rem] font-light text-[47px] text-white">
    <h3>Get to know Apple Home.</h3>
</div>
<div className="relative top-[6.3rem] w-full ">
    <HeroImages2/>
</div>
<div className="relative left-21 w-max flex top-[9.3rem] font-light text-[47px] text-white">
    <h3>Shop the Apple Home Collection.</h3>
</div>

<div className="relative top-[27.5rem] w-full justify-center items-center  flex">
    <BodyImages/>
</div>

<div className="relative  top-[53.2rem] flex items-center w-full justify-center w-auto loading-[0.5] ">
    <div className="absolute left-21  w-max flex flex-col">
          <h3 className="font-light text-white text-[47px]  loading-[0.5] w-[500px]" >
       Home accessories.
    </h3>
    </div>
  
<Link href="#" className="absolute top-[0.1rem] z-50 right-21 w-max text-blue-400 no-underline font-light text-[17px] hover:underline">
Shop home accessories
</Link>

</div>
<div className="relative top-[68rem] w-full justify-center items-center  flex">
    <Card/>
</div>
</div>

<button className="absolute top-[400rem]  font-light  w-full justify-center items-center  flex">path</button>
        </div>


    )
}