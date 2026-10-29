"use client"
import Link from "next/link";
import Button from "./components/button"
import Navber from "./components/home-navber"
 import FooterImages from "./components/footer-image"
import { useState } from "react";

const products =[
 { 
  name:"iPhone 18 Pro",
  info:"Pro further",
  image:"/hero-image3.jpg",
 },
 
 {
   name:"iPhone Duo",
  info:"Hello hello",
  image:"/landing2.jpg",
 },

 {
   name:"iPad",
  info:"The most accurate heart rate sensing in a waerable.",
  image:"/landing3.jpg",
 }
]

export default function Home() {
  return (
  <div className="absolute top-0 left-0 flex justify-center w-full ">
    <Navber/>

<div className="absolute w-full left-0 top-[-3rem] flex flex-col gap-3 justify-center items-center">
{products.map((items,index)=>(
<div key={index}
className={` relative left-0 w-full  ${index === 0? "h-[45rem] bg-black":" h-[37.8rem] jstify-center items-center" } 
${index === 2?"h-[45rem] bg-black":" h-[37.8rem] jstify-center items-center"}
`}
>
<img src={items.image} className={` w-full h-[510px] lg:h-[600px] object-cover ${index ===0? "absolute top-[6rem] ":" relative top-0"} `}/>
<div className={`w-full justify-center items-center flex flex-col ${index === 0?"absolute top-[8rem] text-white":"absolute top-[2rem] text-black"}
${index ===2 ? "absolute top-[30rem] text-white":"absolute top-[2rem] text-black"}
`}>
 <h1 className="text-6xl font-light">
  {items.name}
 </h1>
 <p className="text-[19px] font-light mt-[0.5rem]">
  {items.info}
 </p>
<div className="relative top-1"><Button
text1="Learn more"
text2="Shop"
/></div>
</div>
  </div>
))}

</div>

<div className=" absolute top-[127rem]">
  <FooterImages/>
</div>



</div>  
  );
}
