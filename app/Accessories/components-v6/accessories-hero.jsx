"use client"

const Accessories =[
    {
        name:"iPhone",
        image:"jr1.png",

    },
    {
         name:"iPad",
        image:"jr1.png",
    },
    {
         name:"Mac",
        image:"jr1.png",
    },
    {  name:" Apple Watch",
        image:"jr3.png",},
    {
         name:"Apple Vision Pro",
        image:"jr4.png",
    },
    {  name:"AirPods",
        image:"jr5.png",},
    {
         name:"TV & Home",
        image:"jr6.png",
    },
    {
        name:"AirTag",
        image:"jr7.png",
    },
     {
        name:"Beats",
        image:"jr8.png",
    },

]

import Link from "next/link"
import { useState } from "react"
export default function AccessoriesHero(){
return(
    
        <div className="relative top-[10rem]  flex flex-row gap-[1rem]  pl-[80px]">
 {Accessories.map((items,index)=>(
<div className="shrink-0 relative w-[100px] h-[120px] flex flex-col "
key={index}
>
    <img src={items.image} alt={index} className="w-[88px]  absolute top-[0]" />
    <span className="w-full font-light absolute  top-[4.7rem] text-[14px] text-white justify-center items-center inline-flex">
        {items.name}
    </span>
    </div>

 ))}


        </div>

    
)

}