"use client"
import AirpodsNav from "./components-v10/entertainment-nav"
import HeroSlider from "./components-v10/hero-slider"
import HeroWords from "./components-v10/hero-heading"
import Herovid from "./components-v10/vid-autoScrol"
import Herovid2 from "./components-v10/vid-autoScrol2"
import Herovid3 from "./components-v10/vid-autoScrol3"
import Herovid4 from "./components-v10/vid-autoScrol4"
import Herowords2 from "./components-v10/hero-loop"
import ImageLoop1 from "./components-v10/image-loop"
import ImageLoop2 from "./components-v10/image-loop1"
import ImageLoop3 from "./components-v10/image-loop2"
import Footer from "./components-v10/footer"
export default function AirPodsPage(){

    return(
 <div className=" relative justify-center  w-full h-full ">  


    <AirpodsNav/>
<div className="w-full h-[100vh] absolute bg-black top-0 flex flex-col justify-center">

<div className="w-full absolute top-[3rem]  flex  items-center">
    <HeroSlider/>
</div>
<div className="w-full absolute top-[26rem]  flex  items-center">
    <HeroWords/>
</div>
</div>
<div className="w-full absolute top-[31rem]  flex  items-center">
    <Herowords2/>
</div>
<div className="w-full relative top-[48rem]  items-center justify-center flex flex-col h-[410rem] bg-black">
<div className="w-full absolute top-[25.5rem]  flex  items-center">
    <Herovid/>
</div>

<div className="w-full absolute top-[86.5rem]  flex  items-center">
    <Herovid2/>
</div>

<div className="w-full absolute top-[147.5rem]  flex  items-center">
    <Herovid3/>
</div>

<div className="w-full absolute top-[208.5rem]  flex  items-center">
    <Herovid4/>
</div>


<div className="w-full absolute top-[236rem]  flex  items-center">
    <ImageLoop1/>
</div>

<div className="w-full absolute top-[280rem]  flex  items-center">
    <ImageLoop2/>
</div>

<div className="w-full absolute top-[318rem]  flex  items-center">
    <ImageLoop3/>
</div>

<div className="w-full absolute top-[368rem]  flex  items-center">
    <Footer/>
</div>
</div>

<button className="w-full justify-center items-center flex absolute top-[500rem]">path</button>
        </div>
    )
}