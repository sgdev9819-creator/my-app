"use client"

import Link from "next/link"
import { useState } from "react"
const dropdownData = {
 Store:{
 leble:"Quick Links",
tittle:"Shop",
quik:["Find a Store"," Order Status","Apple Trade In","Financial","Personal Setup"],
links:["Shop the Latest","Mac","iPad","iPhone"," Apple Watch"," AirPods"," Apple Vision Pro","Accessories"]
 },

Mac:{
  leble:"Shop Mac",
  tittle:"EXPLORE Mac",
  quik:["Shop Mac"," Mac Accessories","Apple Trade In","Financial","Personal Setup"],
  links:["Explore All Mac","MacBook Neo","MacBook Air","MacBook Pro","iMac","Mac mini","Mac Studio","Displays"]
},

iPhone:{
leble:"Shop Mac",
tittle:"EXPLORE IPhone",
quik:["Shop iPhone"," iPhone Accessories","Apple Trade In","Carear Deals Apple","Financial","Personal Setup"],
links:["Explore All iPhone","iPhone 17 pro","iPhone 17 Air","iPhone 17","iPhone 17e","iPhone 16"]

},

iPad:{
leble:"Shop iPad",
tittle:"EXPLORE IPad",
quik:["Shop iPad"," iPad Accessories","Apple Trade In","Financial","Personal Setup"],
links:["Explore All iPads","iPhad pro","iPhad Air","iPhad","iPhad Mini","Apple Pencile","Keyboards"]

},

Watch:{
    leble:"Shop Apple Watch",
  tittle:"EXPLORE watch",
  quik:["Shop Apple Watch","Apple Watch Bands", " Apple Watch Accessories","Apple Trade In","Financial","Personal Setup"],
  links:[
   "Explore All Apple Watch", "Apple Watch Series 11","Apple Watch Ultra","Apple Watch Nike","WatchOS","Apple Watch Hermes"
  ]
},
Vision:{
     leble:"Shop Apple Vision Pro",
   tittle:"EXPLORE Vision",
    quik:["Shop Apple Vision Pro", " Apple Watch Accessories","Book a Demo","Financial","Personal Setup"],
   links:[
     "Explore Apple Vision Pro"
   ]
},
AirPods:{
   leble:"Shop AirPods",
   tittle:"Explore AirPods",
   quik:["Shop AirPods", "AirPods Accessories"],
   links:[
    "Explore All AirPods","AirPods 4","AirPods Pro 3","AirPods Max 2"
   ]
},
"TV-Home":{
  leble:"TV & Home",
  tittle:"Explore TV & Home",
    quik:["Shop TV 4k", "Shop HomePod","Shop HomePod mini","Shop Siri Romote","AirPods Accessories"],
  links:[
    "Explore All TV & Home", "Apple TV 4k","HomePod","HomePod mini"
  ]
},
Entertainment:{
    leble:"Support",
  tittle:"Explore Entertainment",
  quik:["Apple TV Support", "Apple Music Support",],
  links:[
   "Explore All Entertainment", "Apple One"," Apple TV","Apple Arcade"," Apple Fitness+"," Apple News+"," Apple Podcast","Apple Books"," Apple Store"
  ]
},
Accessories:{
    leble:"Explore Accessories",
  tittle:"Explore Accessories",
  quik:["Made by Apple", "Beats","AirTag","Assistive Technologies"],
   links:[
  "Explore All Accessories","Mac"," iPads"," iPhone","Watch Bands","Vision Pro","AirPods","TV & Home"
   ]
},
Support:{
  leble:"Get Help",
  tittle:"Explore Support",
  quik:["Community", "Check Caverage","Gunius Bar","Repair",],
  links:[
   "Explore Support","Mac"," iPads"," iPhone","Watch Bands","Vision Pro","AirPods","TV"
  ]
}
}

export default function Navber(){
  const[isactiveLink,setisactiveLink]=useState(null)
  const[ismobile,setismobile]=useState(false)
  const[isoverlay,setisoverlay]=useState(false)
  const navLinks = [

    {name:"Store",path:"Store"},
    {name:"Mac", path:"Mac"},
    {name:"iPad",path:"iPad"},
   {name: "iPhone",path:"iPhone"},
   {name: "Watch",path:"Watch"},
   {name: "Vision",path:"Vision"},
    {name:"AirPods",path:"AirPods"},
   {name: "Home",path:"TV-Home"},
   { name:"Entertainment",path:"Entertainment"},
   {name: "Accessories",path:"Accessories"},
    {name:"Support",path:"Support"},
  ]



return(
  <div className="w-full  h-full justify-center  flex absolute top-0 left-0 ">
<nav onMouseLeave={()=> {
     setisoverlay(false)
    setisactiveLink(null)
}} className="absolute w-full h-auto z-200">
<div className="absolute top-0 left-0 z-204 bg-transparent backdrop-blur[28px] w-full h-[44px] justify-center items-center flex flex-row  gap-9">


<div className="hidden lg:flex z-200">
<Link href="/">
<img src="/apple-logo.svg" alt="Apple Log" className="lg:w-[22px] lg:h-[22px] "/>
</Link>
</div>

<div className="hidden lg:stickey lg:top-0 lg:left-0 lg:w-max lg:flex lg:flex-row gap-9  justify-center items-center">
{navLinks.map((link,index)=>(
<Link key={index}
href={`/${link.path}`}
onMouseEnter={()=>{ 
    setisoverlay(true)       
    setisactiveLink(link.path)}}
className="no-underline text-xs text-white/90 z-200 justify-center items-center w-auto font-light  hover:text-white"
>
    {link.name}
  
</Link>


))}

</div>
{/*Mobile section here we go damn it */}
<div className="w-full  px-12 py-12   flex flex-row  animation-fadein z-100 lg:hidden">
<div  className="absolute left-3 z-10 lg:hidden">
  <img src="appl.svg" alt="" className="w-[22px] z-70 h-[22px]"/>
</div>
<div className="fixed right-0 flex flex-row gap-4 lg:hidden">
  <img src="zoom.svg" alt=""  className="w-[20px] h-[20px]"/>
    <img src="bag.svg" alt=""  className="w-[20px] h-[20px]"/>
<button className="justify-center items-center z-100" onClick={()=> setismobile(true)}>
{`${ismobile ? <img src="x.svg" alt="close"  className="w-[20px] h-[20px]"/>:<img src="bars.svg" alt="bars"  className="w-[20px] h-[20px]"/> }`}
</button>
</div>
{/*Dropdown for mobile and T so i dont get confused*/}
<div className={`"absolute top-[-100] left-0 z-10 w-full flex flex-col gap-5 overflow-hidden bg-white/90 lg:hidden "${ismobile ? "h-max opacity-100":"h-[0px] opacity-0"}`}>
<ul className="absolute w-full  flex flex-col justify-center ">
  {navLinks.map((lesser,index)=>(
    <li key={index}
    className="text-1xl w-max text-black-90"
    href={
     `/${lesser.path}`
    }
    >
      {lesser.name}
    </li>
  ))}
</ul>
</div>
</div>
<div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[2rem] ">
  <img src="search.svg" alt="" className="w-[20px] h-[20px]" />
  <img src="shop.svg" alt="" className="w-[20px] h-[20px]"/>
</div>
</div>

<div className={`" mt-0 left-0 w-full bg-[rgba(14,14,14,0.9)] translate-all duration-500 ease-in-out norder-b norder-white/5  z-100 lg:block"${isactiveLink?
  "h-screen opacity-100 visible  z-190":"h-0 opacity-0 invinsible"
}`}
onMouseLeave={()=> {
    setisoverlay(false)
    setisactiveLink(null)}}
>
    


{isactiveLink && dropdownData[isactiveLink] &&(
<div className="max-w-[1024px] mx-auto px-17 py-17 bg-[rgba(14, 14 ,14, 0.94)]  flex flex-row gap-20 animation-fadein z-100">
<div className="col-span-8 gap-4">
<p className="text-white/50 text-[11px] mb-3 font-light uppercase tracking-wider ">
{dropdownData[isactiveLink].tittle}
</p>
<ul className="flex flex-col gap-2">
  {dropdownData[isactiveLink].links.map((item,index)=>(
    <li key={index}
    className=" text-2xl text-white/80 font-light hover:text-white transition-colors duration-200"
    >
      {item}
    </li>
  ))}
</ul>
</div>

<div className="flex flex-col">
   <p className="text-black/50 text-[11px] font-light uppercase tracking-wider ">
{dropdownData[isactiveLink].leble}
</p>

<ul className="flex flex-col gap-1 mt-3">
    {dropdownData[isactiveLink].quik.map((next)=>(
        <li key={next}
    className=" text-[12px] text-white/80 font-light hover:text-white transition-colors duration-300"
    >
            {next}
        </li>
    ))}
</ul>
     </div>

  </div>


)}

</div>

</nav>

<div className={`fixed top-0 left-0 inset-0 bg-black/40 backdrop-blur-[16px] overflow-hidden 
    ${isoverlay? "opacity-100 invincible z-100 ":" opacity-0 visible z-0" }`}></div>

</div>



)
}