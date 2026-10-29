"use client"

const Accessories =[
    {
        name:"iPhone",
        image:"jr0.png",

    },
    {
         name:"iPad",
        image:"jr2.png",
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
    <div className="Accessories-container acc-hero">
        <div className="Accessories-content">
 {Accessories.map((items,index)=>(
<div className="Accessories-item"
key={index}
>
    <img src={items.image} alt={index} />
    <span className="w-full font-light relative top-2 text-1xl text-white justify-center items-center inline-flex">
        {items.name}
    </span>
    </div>

 ))}


        </div>

    </div>
)

}