"use client"
import Link from "next/link";
import Button from "../components/button"
import { useState } from "react";

const products =[
 { 
  name:"MacBook Air",
  info:"Now supercharged by M5.",
  image:"/grid-first.jpg",
 },
 
 {
   name:"AirPods Pro 3",
  info:"The world's best in-ear",
  info1:"Active Noice Cancellation.",
  image:"/grid-second.jpg",
 },

 {
   name:"WATCH  SERIES 12",
   imginfo:"/apple-logo.svg",
  info:"The most accurate heart rate",
  info1:" sensing in a wearable.1",
  image:"/f-l5.jpg",
 },
 {
   name:"iPad",
  info:"Now with the speed of the A16 chip ",
   info1:"and double the starting storage.",
  image:"/f-l4.jpg",
 },
 {
   name:"iPhone 18 Pro",
  info:"Pro further",
  image:"/f-l3.jpg",
 },
 {
   name:"Card",
    imginfo:"/apple-logo.svg",
  info:"Get up to 3% Daily Cash back ",
  info1:"with every purchase.",
  image:"/f-l6.jpg",
 },
]

export default function FooterImages() {
  return (
  
<div  className="relative  grid grid-cols-1 lg:grid lg:grid-cols-2  justify-center items-center gap-3 w-full h-max  overflow-hidden bg-black">
{products.map((items,index)=>(
<div key={index}
className=" relative object-cover justify-center items-center flex flex-col w-full h-[100vh]"
>

<img src={items.image} className="h-full object-cover" />
<div className={` absolute top-[2rem] w-full justify-center items-center flex flex-col font-light ${index === 0 || index === 2 || index === 4? "text-white":"text-black"}
${index === 2 ? "relative bottom-[9%]  h-full":""}
`}>
  <h1 className="text-[32px] lg:text-[40px] ">
    {items.name}
  </h1>
  <p className="text-[19px] lg:text-[21px] mt-[0.5rem]">
    {items.info}
  </p>
  <p className=" text-[19px] lg:text-[21px] mt-[-0.5rem]">
    {items.info1}
  </p>
  <div className=" mt-[1rem] w-full justify-center">
    <Button text1="Learn More" text2="Shop" />
  </div>


</div>
  </div>
))}

</div>






  );
}
