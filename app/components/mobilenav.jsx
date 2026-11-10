"use client"

import Link from "next/link"
import { useState } from "react"
const dropdownData = {
 Store:{
 leble:"Quick Links",
tittle:"Shop Gifts",
moreinfo:["Certified Refurbished","Education","Business","Veteran and military","Government"],
extra:"Shop Special Stores",
 followUp:["Compare Mac","Switch from PC to Mac"],
path:"Store",
quik:["Find a Store"," Order Status","Apple Trade In","Financial","Personal Setup"],
links:["Mac","iPad","iPhone"," Apple Watch"," AirPods"," Apple Vision Pro","Accessories"]
 },

Mac:{
  leble:"Shop Mac",
  tittle:"Explore All Mac",
    extra:"More From Mac",
  moreinfo:["Mac Support","Apple Care","MacOS 27","Apple Intelligence and Siri ","Apps by Apple","Apple Creator Studio","Better with iPhone  ","iCloud+","Mac for Business","Eduction ","Apple at Work"],
  followUp:["Compare Mac","Switch from PC to Mac"],
  path:"Mac",
  quik:["Shop Mac"," Help Me Choose"," Mac Accessories","Apple Trade In","Financial","Personal Setup"],
 links:[,"MacBook Neo","MacBook Air","MacBook Pro","iMac","Mac mini","Mac Studio","Displays"]
},

iPhone:{
leble:"Shop Mac",
tittle:"Explore All iPhone",
  extra:"More From iPhone",
  moreinfo:["iPhone Support","Apple Care","iPhoneOS 27","Apple Intelligence and Siri ","Apps by Apple","Apple Privacy","Better with Mac","iCloud+","Walet,Pay,Card ","Apple at Work"],
followUp:["Compare iPhone","Switch from Android"],
path:"iPhone",
quik:["Shop iPhone"," iPhone Accessories","Apple Upgrade","Apple Trade In","Carear Deals at Apple","Financial","Personal Setup"],
links:[,"iPhone Duo","iPhone 18 pro","iPhone Air","iPhone 17","iPhone 17e","iPhone 16"],

},

iPad:{
leble:"Shop iPad",
tittle:"Explore All iPad",
extra:"More From iPad",
moreinfo:["iPad Support","Apple Care","iPadOS 27","Apple Intelligence and Siri ","Apps by Apple","Apple Creator Studio","iCloud+","Eduction ","Apple at Work"],
 followUp:["Compare iPad"],
path:"iPad",
quik:["Shop iPad"," iPad Accessories","Apple Upgrade","Apple Trade In","Financial","Personal Setup"],
links:["iPad pro","iPad Air","iPad","iPad Mini","Apple Pencile","Keyboards"],
 
},

Watch:{
    leble:"Shop Apple Watch",
  tittle:"Explore All Apple Watch",
   extra:"More From Watch",
moreinfo:["iPad Support","Apple Care","iPadOS 27","Apple Watch For Your Kids","Apps by Apple","Apple fitness+","Education"],
  followUp:["Compare Watch","Why Apple Watch"],
  path:"Watch",
  quik:["Shop Apple Watch","Apple Watch Bands", " Apple Watch Accessories","Apple Upgrade","Apple Trade In","Financial","Personal Setup"],
  links:[
   , "Apple Watch Series 12","Apple Watch Ultra 4","Apple Watch SE 3","Apple Watch Nike","Apple Watch Hermes"
  ],
},
Vision:{
     leble:"Shop Apple Vision Pro",
   tittle:"Shop Apple Vision Pro",
    extra:"More From Vision",
     moreinfo:["Apple Vision Pro Support","Apple Care","VisionOS 27","Apple Vision Pro for Enterprise"],
   followUp:["Tech Specs",],
   path:"Vision",
    quik:[, " Apple Watch Accessories","Book a Demo","Financial","Personal Setup"],
   links:[
     "Explore Apple Vision Pro"
   ]
},
AirPods:{
   leble:"Shop AirPods",
   tittle:"Explore All AirPods",
    extra:"More From AirPod",
  moreinfo:["AirPords Support","Apple Care","Hearing Health","Apple Muscic","Apple Fitness+"],
   followUp:["Compare AirPods",],
   path:"AirPods",
   quik:["Shop AirPods", "AirPods Accessories"],
   links:[
    ,"AirPods 4","AirPods Pro 3","AirPods Max 2"
   ]
},
"TV-Home":{
  leble:"TV & Home",
  tittle:"Explore  Home",
   extra:"More From Home",
   moreinfo:["Apple TV Support","HomePod Support","AppleCare for Apple TV","AppleCare for HomePod","AppleTV App ","Home App","Apple Music","AirPlay" ],
  path:"TV-Home",
   quik:["Shop Home", "Shop Apple Home Collection","Shop Accessories","Personal Setup",],
  links:[
    ,"Apple HomeView", "Apple TV 4k","HomePod","HomePod mini"
  ],
},
Entertainment:{
    leble:"Support",
    path:"Entertainment",
  tittle:"Explore All Entertainment",
  quik:["Apple TV Support", "Apple Music Support",],
  links:[
   , "Apple One"," Apple TV","Apple Arcade"," Apple Fitness+"," Apple News+"," Apple Podcast","Apple Books"," Apple Store"
  ]
},
Accessories:{
    leble:"Explore Accessories",
  tittle: "Explore All Accessories",
  extra:"More To Explore",
  moreinfo:["New Arrivals","Made By Apple","Accesibility","Assistive Technologis",],
  path:"Accessories",
 quik:["Apple Headphone & Speakers", "Chargers & Adapters","AirTag","Smart Home Essencials","Cases & Protection","Content Creation","Gamming","Hard Deive & Storage","Mic & Keyboard","Health & Fitness+","Office Accessories","Software"],
   links:[
 ,"Mac"," iPads"," iPhone","Watch Bands","Vision Pro","AirPods","TV & Home"
   ],
},
Support:{
  leble:"Get Help",
    extra:"Helpful Topics",
moreinfo:["Get AppleCare","Apple Account & Password","Billing & Subscriptions","Assesibility"],
 followUp:["Explore Support",],
  path:"Support",
  tittle:"Explore Support",
  quik:["Community", "Check Caverage","Gunius Bar","Repair",],
  links:[
   ,"Mac"," iPads"," iPhone","Watch Bands","Vision Pro","AirPods","TV"
  ]
}
}

export default function MobileNavber(){
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
setisactiveLink(null);
    };

    const handleAll=()=>{
      setismobile((prev)=> !prev)
      setisactiveLink(null);
    }
return(
  <div className="lg:hidden flex w-full  h-full justify-center  flex absolute top-0 left-0 ">
<nav 
 className="fixed w-full h-auto z-110">
<div className={`fixed top-0 left-0 z-174  backdrop-blur-[28px] w-full h-[50px] justify-center items-center  flex flex-row ${ismobile? "bg-transparent":"bg-[rgba(19,19,19,0.8)]"}  `}>


<div className={` lg:hidden absolute left-[0.9rem] z-110 ${ismobile? "invisible hidden":"visible flex"} `}>
<img src="/apple-logo.svg" alt="Apple Log" className="w-[22px] h-[22px] "/>
</div>

<div className={` lg:hidden flex-row items-center justify-center gap-[1.7rem] absolute right-[4rem] ${ismobile? "invisible hidden":"visible flex"}  `}>
  <img src="search.svg" alt="" className="w-[20px] h-[20px] z-100" />
  <img src="shop.svg" alt="" className="w-[20px] h-[20px] z-100"/>


</div>

<div className={`absolute top-[1.2rem] right-[1rem] flex flex-col justify-center items-center cursor-pointer z-200 ${ismobile? "activemb":""}  `}
onClick={handleLinkClick}

>
    <span className="w-[16px] h-[1px] bg-white block mb-1"></span>
    <span className="w-[16px] h-[1px] bg-white block mb-1"></span>
   
</div>
</div>

<div className={`absolute lg:hidden top-0 left-0 w-full flex gap-[22px] bg-[rgba(19,19,19,0.99)] backdrop-blur-[28px] z-100   overflow-y-auto scrollbar-none 
${ismobile?
  "activemobile":"h-0 hidden invinsible"
}`}> 
    <div className={`w-full py-[3.5rem] pl-[3.5rem] flex flex-col gap-[9px]  `}>
{navLinks.map((link,index)=>(
    <div key={index}

onClick={()=>{ 
    
    setisactiveLink(link.path)}}
className={` mb-content no-underline text-[28px] text-white/80  w-full font-light flex flex-row  cursor-pointer  hover:text-white ${isactiveLink? "navlinksac":" flex opacity-100"}`}
>
<span >
    {link.name} 
</span>

<span className=" movef" >{'\u003e'}</span>
</div>
))}
</div>
</div>

<div className={` absolute lg:hidden top-0 left-0 w-full flex gap-[22px] bg-[rgba(19,19,19,0.96)] backdrop-blur-[28px] z-200   overflow-y-auto scrollbar-none transition-transform duration-500 ${isactiveLink ? "h-[100vh]  opacity-100 visible  z-180":"h-0 opacity-0 invinsible"
}`}

>

<div className={`absolute top-[1%] left-0  w-full flex flex-row justify-center items-center gap-[82%]  z-200`}>
   <button 
   onClick={handleLinkClicks}
   className={`${isactiveLink ? "backbt":"opacity-0 invinsible"}`}>
   
<img src="lesser.svg" alt="previouse" className="w-[17px] h-auto " />
    </button> 
<button 
onClick={handleAll}
className=" border-none  w-max p-[0.5rem] z-200  text-white ">
 <img src="/x.svg" alt="Close" className=" w-[17px] h-[17px] object-cover" />
</button>

</div>

{isactiveLink && dropdownData[isactiveLink] &&(
<div className={` mbnavcon`}>
<div className="col-span-8 gap-4">
<Link
href={dropdownData[isactiveLink].path}
className={`text-[28px] text-white/80 font-light hover:text-white transition-colors duration-200 ${isactiveLink? "visible flex opacity-100":"invisible hidden opacity-0 "}`}>
{dropdownData[isactiveLink].tittle}
</Link>
<ul className="flex flex-col gap-2 ">
  {dropdownData[isactiveLink].links.map((item,index)=>(
    <li key={index}
    className={` text-[28px] text-white/80 font-light hover:text-white transition-colors duration-200  ${isactiveLink? "visible flex opacity-100":"invisible hidden opacity-0 "}`}
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

<div className="flex flex-col ">
   <p className="text-white/50 text-[14px] font-light  tracking-wider ">
{dropdownData[isactiveLink].leble}
</p>

<ul className="flex flex-col gap-1 mt-3">
    {dropdownData[isactiveLink].quik.map((next)=>(
        <li key={next}
    className=" text-[17px] text-white/80 font-light hover:text-white transition-colors duration-300"
    >
            {next}
        </li>
    ))}
</ul>
     </div>

<div className="flex flex-col">
   <p className="text-white/50 text-[14px] font-light  tracking-wider ">
{dropdownData[isactiveLink]?.extra}
</p>

<ul className="flex flex-col gap-1 mt-3">
    {dropdownData[isactiveLink]?.moreinfo?.map((next)=>(
        <li key={next}
    className=" text-[17px] text-white/80 font-light hover:text-white transition-colors duration-300"
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