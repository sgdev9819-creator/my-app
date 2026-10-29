"use client"
import { useState,useRef,useEffect } from "react"
import VisionNav from "./components-v9/vision-nav"
import HeroImage from "./components-v9/heroImage"
import HeroInfo from "./components-v9/heroInfo"
import VidHero from "./components-v9/vid-hero"
import Button from"./components-v9/nav-button"
import Heroimages1 from"./components-v9/hero-images-1"
import Heroimages2 from"./components-v9/hero-images-2"
import Heroimages3 from"./components-v9/hero-images-3"
import Heroimages4 from"./components-v9/hero-images-4"
import MotionVid from"./components-v9/motion-vid"
import MotionVid2 from"./components-v9/motion-vid-2"
import MotionVid3 from"./components-v9/motion-vid-3"
import MotionVid4 from"./components-v9/motion-vid-4"
import MotionVid5 from"./components-v9/motion-vid-5"
import MotionVid6 from"./components-v9/motion-vid-6"
import Heroimages5 from"./components-v9/hero-images-5"
import Heroimages6 from"./components-v9/hero-images-6"
import Heroimages7 from"./components-v9/hero-images-7"
import Link from "next/link"
import Info1 from"./components-v9/info-1"
import Info2 from"./components-v9/info2"
import Info3 from"./components-v9/info3"
import Info4 from"./components-v9/info4"
import Info5 from"./components-v9/info5"
import Info6 from"./components-v9/info6"
import FooterImages1 from"./components-v9/footer-images-1"
import FooterVid from"./components-v9/footer-vid"
import FooterImage1 from"./components-v9/footer-image-1"
import FooterImage3 from"./components-v9/footer-image-3"
import FooterImage4 from"./components-v9/footer-image-4"
import FooterInfo from"./components-v9/footer-info"
import TrackFlex from "./components-v9/track-flex"
import FooterFlex from "./components-v9/footer-flex"
import MainF1 from "./components-v9/main-footer"
import MainF1Image1 from "./components-v9/main-footer-flex-1"
import FooterCard from "./components-v9/footer-card-1"
import FooterCard1 from "./components-v9/footer-card-2"
export default function VisionPage(){
const[showNav,setshowNav]=useState(false)

useEffect(()=>{
    const handleShow =()=>{
        if(window.scrollY > 650){
          setshowNav(true)
        }else{
   setshowNav(false)
        }
    }
    window.addEventListener('scroll',handleShow)
    return ()=> window.removeEventListener('scroll',handleShow)
})



    return(
        <div className=" relative justify-center iteme-center w-full h-full ">
<VisionNav/>
<div className="absolute w-full h-max ">
    <HeroImage/>
</div>

<div className="absolute top-[50.3rem] w-full h-max ">
    <HeroInfo/>
</div>

<div className={`w-full h-[54px] fixed top-0 left-0 p-4 z-400 bg-black/50 backdrop-blur-[30px]
 text-white/80 flex flex-row  justify-center items-center font-light 
  transition-colors transition-transform duration-500  
  ${showNav? "opacity-100 visible translate-y-0 ":
  "opacity-0 invinsible translate-y-[100%]"}`}>

<div className="absolute left-40 flex justify-center items-center">
 <h3 className="text-2xl  ">
Apple Vision Pro
  </h3>
</div>

<div className="absolute right-40 flex flex-row gap-5 justify-center items-center ">

<div className=" w-max flex text-sm  flex-row gap-5 justify-center items-center">
<Link href="#" className="hover:text-white">
Overview
</Link>
<Link href="#" className="hover:text-white">
Tech specs</Link>

<Link href="#" className="hover:text-white">
visionOS
</Link>
</div>

<div className=" justify-center items-center">
<Button 
text1="Book a demo"
text2="Buy"
/>
</div>

</div>
</div>
<div>

</div>
<div className=" absolute top-[110rem] w-full h-full justify-center items-center flex z-200">
    <VidHero/>
</div>

<div className="absolute top-[147.4rem] left-[12rem]  h-max justify-center items-center flex">
    <h3 className="text-[60px] text-white font-light"> 
        Take a closer look.
    </h3>
</div>

<div className=" absolute top-[167.8rem] w-full h-full justify-center items-center flex z-200">
   <Heroimages1/>
</div>


<div className=" absolute top-[270.8rem] w-full h-full justify-center  items-center flex z-200">
   <MotionVid/>
</div>
<div className=" absolute top-[326rem] left-[12rem] flex z-200">
<Info1/>
</div>
<div className=" absolute top-[351rem]  w-full h-full justify-center  items-center flex z-200">
<Heroimages2/>
</div>

<div className=" absolute top-[461rem]  w-full h-full justify-center  items-center flex z-200">
<MotionVid2/>
</div>

<div className=" absolute top-[516rem] left-[12rem] flex z-200">
<Info2/>
</div>

<div className=" absolute top-[541rem]  w-full h-full justify-center  items-center flex z-200">
<Heroimages3/>
</div>

<div className=" absolute top-[634rem]  w-full h-full justify-center  items-center flex z-200">
<MotionVid3/>
</div>

<div className=" absolute top-[689rem] left-[12rem] flex z-200">
<Info3/>
</div>
<div className=" absolute top-[717rem]  w-full h-full justify-center  items-center flex z-200">
<Heroimages4/>
</div>

<div className=" absolute top-[811rem]  w-full h-full justify-center  items-center flex z-200">
<MotionVid4/>
</div>

<div className=" absolute top-[866rem] left-[12rem] flex z-200">
<Info4/>
</div>
<div className=" absolute top-[891rem]  w-full h-full justify-center  items-center flex z-200">
<Heroimages5/>
</div>




<div className=" absolute top-[986rem]  w-full h-full justify-center  items-center flex z-200">
<MotionVid5/>
</div>

<div className=" absolute top-[1041rem] left-[12rem] flex z-200">
<Info5/>
</div>
<div className=" absolute top-[1066rem]  w-full h-full justify-center  items-center flex z-200">
<Heroimages6/>
</div>




<div className=" absolute top-[1211rem]  w-full h-full justify-center  items-center flex z-200">
<MotionVid6/>
</div>

<div className=" absolute top-[1266rem] left-[12rem] flex z-200">
<Info6/>
</div>
<div className=" absolute top-[1291rem]  w-full h-full justify-center  items-center flex z-200">
<Heroimages7/>
</div>
<div className="mother-footer">

<div className="w-full absolute top-[12rem] justify-center items-center">
    <FooterImages1/>
</div>

<div className="w-full absolute top-[102rem] justify-center items-center">
    <FooterInfo/>
</div>

<div className="w-full absolute top-[120rem] justify-center items-center">
    <FooterVid/>
</div>
<div className="w-full absolute top-[197rem] justify-center items-center">
    <FooterImage1/>
</div>
<div className="w-full absolute top-[251rem] justify-center items-center">
    <FooterImage3/>
</div>

<div className="w-full absolute top-[322rem] justify-center items-center">
    <FooterImage4/>
</div>

<div className="w-full absolute top-[387rem] justify-center items-center">
    <TrackFlex/>
</div>

<div className="w-full absolute top-[387rem] justify-center items-center">
    <FooterFlex/>
</div>

</div>




<div className="absolute top-[1795rem] w-full h-[199rem] justify-center items-center bg-black flex z-200">
   <div className="w-full flex absolute top-[0.2rem] justify-center h-[700px] bg-transparent items-center">
    <MainF1/>
   </div>
<div className="w-full flex absolute top-[23rem] justify-center items-center">
    <MainF1Image1/>
</div>
<div className="w-full flex absolute top-[103rem] justify-center items-center">
    <FooterCard/>
</div>
<div className="w-full flex absolute top-[150rem] justify-center items-center">
    <FooterCard1/>
</div>
    </div>
<button className="absolute top-10000"  >path</button>

        </div>
    )
}