"use client"

import Link from "next/link"
import { useState } from "react"
const dropdownData = {
 Store:{
 leble:"Quick Links",
tittle:"Shop",
path:"Store",
quik:["Find a Store"," Order Status","Apple Trade In","Financial","Personal Setup"],
links:["Shop the Latest","Mac","iPad","iPhone"," Apple Watch"," AirPods"," Apple Vision Pro","Accessories"]
 },

Mac:{
  leble:"Shop Mac",
  tittle:"EXPLORE Mac",
  path:"Mac",
  quik:["Shop Mac"," Mac Accessories","Apple Trade In","Financial","Personal Setup"],
  links:["Explore All Mac","MacBook Neo","MacBook Air","MacBook Pro","iMac","Mac mini","Mac Studio","Displays"]
},

iPhone:{
leble:"Shop Mac",
tittle:"EXPLORE IPhone",
path:"iPhone",
quik:["Shop iPhone"," iPhone Accessories","Apple Trade In","Carear Deals Apple","Financial","Personal Setup"],
links:["Explore All iPhone","iPhone 17 pro","iPhone 17 Air","iPhone 17","iPhone 17e","iPhone 16"]

},

iPad:{
leble:"Shop iPad",
tittle:"EXPLORE IPad",
path:"iPad",
quik:["Shop iPad"," iPad Accessories","Apple Trade In","Financial","Personal Setup"],
links:["Explore All iPads","iPhad pro","iPhad Air","iPhad","iPhad Mini","Apple Pencile","Keyboards"]

},

Watch:{
    leble:"Shop Apple Watch",
  tittle:"EXPLORE watch",
  path:"Watch",
  quik:["Shop Apple Watch","Apple Watch Bands", " Apple Watch Accessories","Apple Trade In","Financial","Personal Setup"],
  links:[
   "Explore All Apple Watch", "Apple Watch Series 11","Apple Watch Ultra","Apple Watch Nike","WatchOS","Apple Watch Hermes"
  ]
},
Vision:{
     leble:"Shop Apple Vision Pro",
   tittle:"EXPLORE Vision",
   path:"Vision",
    quik:["Shop Apple Vision Pro", " Apple Watch Accessories","Book a Demo","Financial","Personal Setup"],
   links:[
     "Explore Apple Vision Pro"
   ]
},
AirPods:{
   leble:"Shop AirPods",
   tittle:"Explore AirPods",
   path:"AirPods",
   quik:["Shop AirPods", "AirPods Accessories"],
   links:[
    "Explore All AirPods","AirPods 4","AirPods Pro 3","AirPods Max 2"
   ]
},
"TV-Home":{
  leble:"TV & Home",
  tittle:"Explore TV & Home",
  path:"TV-Home",
    quik:["Shop TV 4k", "Shop HomePod","Shop HomePod mini","Shop Siri Romote","AirPods Accessories"],
  links:[
    "Explore All TV & Home", "Apple TV 4k","HomePod","HomePod mini"
  ]
},
Entertainment:{
    leble:"Support",
    path:"Entertainment",
  tittle:"Explore Entertainment",
  quik:["Apple TV Support", "Apple Music Support",],
  links:[
   "Explore All Entertainment", "Apple One"," Apple TV","Apple Arcade"," Apple Fitness+"," Apple News+"," Apple Podcast","Apple Books"," Apple Store"
  ]
},
Accessories:{
    leble:"Explore Accessories",
  tittle:"Explore Accessories",
  path:"Accessories",
  quik:["Made by Apple", "Beats","AirTag","Assistive Technologies"],
   links:[
  "Explore All Accessories","Mac"," iPads"," iPhone","Watch Bands","Vision Pro","AirPods","TV & Home"
   ]
},
Support:{
  leble:"Get Help",
  path:"Support",
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
   {name:"Home",path:"TV-Home"},
   { name:"Entertainment",path:"Entertainment"},
   {name: "Accessories",path:"Accessories"},
    {name:"Support",path:"Support"},
  ]



const handleLinkClick = () => {
        setismobile((prev) => !prev);
    };
    
const handleLinkClicks = () => {
        setisactiveLink((prev) => !prev);
    };
return(
  <div className="lg:hidden flex w-full  h-full justify-center  flex absolute top-0 left-0 ">
<nav 
 className="fixed w-full h-auto z-100">
<div className="fixed top-0 left-0 z-184 bg-[rgba(19,19,19,0.8)] backdrop-blur-[28px] w-full h-[44px] justify-center items-center flex flex-row  gap-[53%]">


<div className="flex lg:hidden z-110">
<img src="/apple-logo.svg" alt="Apple Log" className="w-[22px] h-[22px] "/>
</div>

<div className="flex lg:hidden flex-row items-center justify-center gap-[1.7rem] ">
  <img src="search.svg" alt="" className="w-[20px] h-[20px] z-100" />
  <img src="shop.svg" alt="" className="w-[20px] h-[20px] z-100"/>

<div className={`flex flex-col justify-center items-center cursor-pointer z-200 ${ismobile? "activemb":""}  `}
onClick={handleLinkClick}

>
    <span className="w-[20px] h-[1px] bg-white block mb-1"></span>
    <span className="w-[20px] h-[1px] bg-white block mb-1"></span>
   
</div>

</div>
</div>

<div className={`absolute lg:hidden top-0 left-0 w-full flex gap-[22px] bg-[rgba(19,19,19,0.96)] backdrop-blur-[28px] z-200   overflow-y-auto scrollbar-none
${ismobile?
  "h-[120vh] opacity-100 visible  z-180":"h-0 opacity-0 invinsible"
}`}> 
    <div className="py-[3rem] px-[3rem] flex flex-col gap-[14px] ">
{navLinks.map((link,index)=>(
    <div key={index}

onClick={()=>{ 
    
    setisactiveLink(link.path)}}
className={`no-underline text-[28px] text-white/80  w-full font-light flex flex-row  cursor-pointer  hover:text-white ${isactiveLink? "invisible hidden opacity-0 ":"visible flex opacity-100"}`}
>
<span >
    {link.name} 
</span>

<span className=" absolute right-[5%] cursor-pointer " >{'\u003e'}</span>
</div>
))}
</div>
</div>

<div className={` absolute lg:hidden top-0 left-0 w-full flex gap-[22px] bg-[rgba(19,19,19,0.96)] backdrop-blur-[28px] z-200   overflow-y-auto scrollbar-none ${isactiveLink ? "h-[100vh]  opacity-100 visible  z-180":"h-0 opacity-0 invinsible"
}`}

>
   <div 
   onClick={handleLinkClicks}
   className="absolute top-[0px] left-[2rem] text-white text-[18px] font-light">
    back
    </div> 


{isactiveLink && dropdownData[isactiveLink] &&(
<div className="w-full mx-auto px-[3rem] py-[3rem]  bg-transparent flex flex-col gap-20 animation-fadein overflow-y-auto scrollbar-none">
<div className="col-span-8 gap-4">
<Link
href="#"
className="text-white/50 text-[11px] mb-3 font-light uppercase tracking-wider ">
{dropdownData[isactiveLink].tittle}
</Link>
<ul className="flex flex-col gap-2 ">
  {dropdownData[isactiveLink].links.map((item,index)=>(
    <li key={index}
    className={` text-2xl text-white/80 font-light hover:text-white transition-colors duration-200  ${isactiveLink? "visible flex opacity-100":"invisible hidden opacity-0 "}`}
    >
      {item}
    </li>
  ))}
</ul>
</div>

<div className="flex flex-col ">
   <p className="text-white/50 text-[11px] font-light uppercase tracking-wider ">
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


<div className={`fixed top-0 left-0 inset-0 bg-black/70 backdrop-blur-[16px] overflow-hidden 
    ${isoverlay? "opacity-100 visible z-100 ":" opacity-0 invisible z-0" }`}></div>

</div>



)
}