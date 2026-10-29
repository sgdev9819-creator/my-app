"use client"
import Link from "next/link";
import Button from "../components/button"
import { useState } from "react";

const products =[
 { 
  name:"iPhone",
  info:"Meet the latest iPhone lineup.",
  image:"/grid-first.jpg",
 },
 
 {
   name:"MacBook Air",
  info:"Now supercharged by M5.",
  image:"/grid-second.jpg",
 },

 {
   name:"iPad",
  info:"Now supercharged by M4.",
  image:"/home5.jpg",
 },
 {
   name:"iPad",
  info:"Now supercharged by M4.",
  image:"/home6.jpg",
 },
 {
   name:"iPad",
  info:"Now supercharged by M4.",
  image:"/home7.jpg",
 },
 {
   name:"iPad",
  info:"Now supercharged by M4.",
  image:"/grid-fith.jpg",
 },
]

export default function FooterImages() {
  return (
  
<div  className="relative  grid grid-cols-1 lg:grid lg:grid-cols-2  justify-center items-center gap-3 w-full h-max  overflow-hidden ">
{products.map((items,index)=>(
<div key={index}
className=" relative object-cover justify-center items-center flex flex-col w-full h-full"
>

<img src={items.image} className="h-[600px] object-cover" />
<div className={` absolute top-[2rem] w-full justify-center items-center flex flex-col font-light ${index === 0 || index === 3 ? "text-white":"text-black"}`}>
  <h1 className="text-5xl">
    {items.name}
  </h1>
  <p className="text-[18px] mt-[0.5rem]">
    {items.info}
  </p>
<Button text1="Learn More" text2="Shop" />

</div>
  </div>
))}

</div>






  );
}
