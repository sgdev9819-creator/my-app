"use client"

const Accessories =[
    {
        name:"Your AirPods. Your way.",
        image:"air2.png",
         info:"Get to know the whole family of AirPods and AirPods accessories. And get ",
          info2:"free engraving",
            link:"Shop all",
    },
    {
         name:"Find your study buddies.",
        image:" /two.png",
         info:"Make it the best year ever with the latest accessories.",
         link:"Shop college essentials",
    },
  

]

import Link from "next/link"
import { useRef } from "react"
import { useState } from "react"
export default function AccessoriesHero(){
    const[activeImage,setactiveImage]=useState(0)
    const containerRef = useRef(null)

    const handleScroll = ()=>{
const container = containerRef.current
if(!container) return

        const scrollLeft = containerRef.scrollLeft
        const imageWidth = container.offset
        const newIndex = Math.round(scrollLeft/imageWidth)
        if(newIndex!== activeImage){
            setactiveImage(newIndex)
        }

    }
return(
    <div className="Accessories-container">
        <div ref={containerRef}
        onScroll={handleScroll}
        className="Accessories-content-slide">
 {Accessories.map((items,index)=>(
<div className="Accessories-slid"
key={index}
>
    <img src={items.image} alt={index} className="rounded-3xl  w-full h-full " />
    <div className="absolute top-[3rem] left-[3rem] w-[500px] flex flex-col ">
    <span className={`font-light  w-full text-3xl text-black ${index===1? "text-white":"text-white"}`}>
        {items.name}
    </span>

    <p className={`font-light text-black text-1xl ${index===1? "text-white":"text-white"}`} > {items.info} </p>
     <p className={`font-light text-black text-1xl  ${index===1? "text-white":"text-white"}`}> {items.info2} </p>
      <p className="font-light text-blue-600 mt-[1rem] text-1xl hover:underline "> {items.link} </p>
    </div>
    </div>

 ))}



        </div>

    </div>
)

}