"use client"

import Link from "next/link"
import { useState } from "react"
const dropdownData = {
 Store:{
 leble:"Quick Links",
tittle:"Shop",
quik:["Find a Store"," Order Status","Apple Upgrade","Apple Trade In","Financial","Personal Setup"],
moreinfo:["Certified Refurbished","Education","Business","Veteran and military","Government"],
extra:"Shop Special Stores",
links:["Shop Gift","Mac","iPad","iPhone"," Apple Watch"," AirPods"," Apple Vision Pro","Accessories"]
 },

Mac:{
  leble:"Shop Mac",
  tittle:"Explore Mac",
  extra:"More From Mac",
  moreinfo:["Mac Support","Apple Care","MacOS 27","Apple Intelligence and Siri ","Apps by Apple","Apple Creator Studio","Better with iPhone  ","iCloud+","Mac for Business","Eduction ","Apple at Work"],
  quik:["Shop Mac"," Help Me Choose"," Mac Accessories","Apple Trade In","Financial","Personal Setup"],
  followUp:["Compare Mac","Switch from PC to Mac"],
  links:["Explore All Mac","MacBook Neo","MacBook Air","MacBook Pro","iMac","Mac mini","Mac Studio","Displays"]
},

iPhone:{
leble:"Shop iPhone",
tittle:"Explore iPhone",
  extra:"More From iPhone",
quik:["Shop iPhone"," iPhone Accessories","Apple Upgrade","Apple Trade In","Carear Deals at Apple","Financial","Personal Setup"],
links:["Explore All iPhone","iPhone Duo","iPhone 18 pro","iPhone Air","iPhone 17","iPhone 17e","iPhone 16"],
moreinfo:["iPhone Support","Apple Care","iPhoneOS 27","Apple Intelligence and Siri ","Apps by Apple","Apple Privacy","Better with Mac","iCloud+","Walet,Pay,Card ","Apple at Work"],
followUp:["Compare iPhone","Switch from Android"],
},

iPad:{
leble:"Shop iPad",
tittle:"Explore IPad",
  extra:"More From iPad",
moreinfo:["iPad Support","Apple Care","iPadOS 27","Apple Intelligence and Siri ","Apps by Apple","Apple Creator Studio","iCloud+","Eduction ","Apple at Work"],
quik:["Shop iPad"," iPad Accessories","Apple Upgrade","Apple Trade In","Financial","Personal Setup"],
links:["Explore All iPad","iPad pro","iPad Air","iPad","iPad Mini","Apple Pencile","Keyboards"],
 followUp:["Compare iPad"],
},

Watch:{
    leble:"Shop Apple Watch",
  tittle:"Explore watch",
    extra:"More From Watch",
  quik:["Shop Apple Watch","Apple Watch Bands", " Apple Watch Accessories","Apple Upgrade","Apple Trade In","Financial","Personal Setup"],
  links:[
   "Explore All Apple Watch", "Apple Watch Series 12","Apple Watch Ultra 4","Apple Watch SE 3","Apple Watch Nike","Apple Watch Hermes"
  ],
moreinfo:["iPad Support","Apple Care","iPadOS 27","Apple Watch For Your Kids","Apps by Apple","Apple fitness+","Education"],
  followUp:["Compare Watch","Why Apple Watch"],
},
Vision:{
     leble:"Shop Apple Vision Pro",
       extra:"More From Vision",
   tittle:"Explore Vision",
    quik:["Shop Apple Vision Pro", " Apple Watch Accessories","Book a Demo","Financial","Personal Setup"],
   links:[
     "Explore Apple Vision Pro"
   ],
  moreinfo:["Apple Vision Pro Support","Apple Care","VisionOS 27","Apple Vision Pro for Enterprise"],
   followUp:["Tech Specs",],
},
AirPods:{
   leble:"Shop AirPods",
   tittle:"Explore AirPods",
     extra:"More From AirPod",
   quik:["Shop AirPods 5", "Shop AirPods Pro","Shop AirPods Pro Max"," AirPods Accessories"],
   links:[
    "Explore All AirPods","AirPods 4","AirPods Pro 3","AirPods Max 2"
   ],
  moreinfo:["AirPords Support","Apple Care","Hearing Health","Apple Muscic","Apple Fitness+"],
   followUp:["Compare AirPods",],
},
"TV-Home":{
  leble:"TV & Home",
    extra:"More From Home",
  tittle:"Explore TV & Home",
    quik:["Shop Home", "Shop Apple Home Collection","Shop Accessories","Personal Setup",],
  links:[
    "Explore  Home","Apple HomeView", "Apple TV 4k","HomePod","HomePod mini"
  ],
  moreinfo:["Apple TV Support","HomePod Support","AppleCare for Apple TV","AppleCare for HomePod","AppleTV App ","Home App","Apple Music","AirPlay" ]
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
      extra:"More To Explore",
  tittle:"Explore Accessories",
  quik:["Apple Headphone & Speakers", "Chargers & Adapters","AirTag","Smart Home Essencials","Cases & Protection","Content Creation","Gamming","Hard Deive & Storage","Mic & Keyboard","Health & Fitness+","Office Accessories","Software"],
   links:[
  "Explore All Accessories","Mac"," iPads"," iPhone","Watch Bands","Vision Pro","AirPods","TV & Home"
   ],
  moreinfo:["New Arrivals","Made By Apple","Accesibility","Assistive Technologis",],
},
Support:{
  leble:"Get Help",
  tittle:"Explore Support",
  quik:["Community", "Check Caverage","Gunius Bar","Repair",],
  links:[
   "Explore Support","Mac"," iPads"," iPhone","Watch Bands","Vision Pro","AirPods","TV"
  ],
  extra:"Helpful Topics",
moreinfo:["Get AppleCare","Apple Account & Password","Billing & Subscriptions","Assesibility"],
 followUp:["Explore Support",],
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



return(
  <div className="  w-full  h-full justify-center lg:flex absolute top-0 left-0 ">
<nav onMouseLeave={()=> {
     setisoverlay(false)
    setisactiveLink(null)
}} className="absolute w-full h-auto z-200">
<div className="absolute top-0 left-0 z-204 bg-transparent backdrop-blur-[28px] w-full h-[44px] justify-center items-center flex flex-row  gap-9">


<div className="hidden lg:flex z-200">
<Link href="/">
<img src="/apple-logo.svg" alt="Apple Log" className="lg:w-[22px] lg:h-[22px] "/>
</Link>
</div>

<div className="hidden lg:stickey lg:top-0 lg:left-0 lg:w-max lg:flex lg:flex-row gap-[42px]  justify-center items-center">
{navLinks.map((link,index)=>(
<Link key={index}
href={link.path}
onMouseEnter={()=>{ 
    setisoverlay(true)
    setisactiveLink(link.path)}}
className="no-underline text-xs text-white/90 z-200 justify-center items-center w-full font-light  hover:text-white"
>
    {link.name} 
  
</Link>


))}

</div>

<div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-[2rem] ">
  <img src="search.svg" alt="" className="w-[20px] h-[20px]" />
  <img src="shop.svg" alt="" className="w-[20px] h-[20px]"/>
</div>
</div>

<div className={`" mt-0 left-0 w-full bg-[rgb(19,19,19)] translate-all duration-500 ease-in-out norder-b norder-white/5  z-100 lg:block"${isactiveLink?
  "h-screen opacity-100 visible  z-190":"h-0 opacity-0 invinsible"
}`}
onMouseLeave={()=> {
    setisoverlay(false)
    setisactiveLink(null)}}
>
    


{isactiveLink && dropdownData[isactiveLink] &&(
<div className="max-w-[1084px] mx-auto px-14 py-17  bg-[rgb(19, 19, 19)] flex flex-row gap-20 animation-fadein z-100">
<div className="col-span-8 gap-4">
<p className="text-white/50 text-[11px] mb-3 font-light  tracking-wider ">
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

<div className="flex flex-col gap-[0.2rem] mt-[1rem] text-white text-[12px] font-light">
  {dropdownData[isactiveLink]?.followUp?.map((item,idx)=>(
  <span key={idx} >
    {item}
    </span>


  ))}
  </div>
</div>

<div className="flex flex-col">
   <p className="text-white/50 text-[11px] font-light  tracking-wider ">
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

<div className="flex flex-col">
   <p className="text-white/50 text-[11px] font-light  tracking-wider ">
{dropdownData[isactiveLink]?.extra}
</p>

<ul className="flex flex-col gap-1 mt-3">
    {dropdownData[isactiveLink]?.moreinfo?.map((next)=>(
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