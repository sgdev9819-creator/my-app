"use client"
import Link from "next/link";
import Button from "./components/button"
import Navber from "./components/home-navber"
 import FooterImages from "./components/footer-image"
  import FooterScroll from "./components/footer-scroll"
import { useState } from "react";

const products =[
 { 
  name:"MacBook Pro",
  info:"14-inch model now with M6",
  info1:"Available Starting 11.6",
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
  <div className=" relative top-0 left-0 flex flex-col   w-full">
    <div className="fixed top-[0px] w-full z-30">
    <Navber/>
     </div>
<div className="flex flex-col gap-[1rem] w-full h-max relative z-5">
  {products.map((item,index)=>(
    <div
    key={index}
    className={`relative flex w-full ${index !== 0 ? "h-[100vh] bg-black":"h-[110vh] bg-black"}`}
    >
      <img src={item.image} alt="" className={`absolute w-full object-cover ${index !== 0 ? "h-full":"h-[510px] top-[5rem]"}  `} />
      <div className={`w-full justify-center items-center flex flex-col ${index === 0?"absolute top-[5rem] text-white":"absolute top-[2rem] text-black"}
${index ===2 ? "absolute top-[30rem] text-white":"absolute top-[2rem] text-black"}
`}>
 <h1 className="text-[56px] font-light">
  {item.name}
 </h1>
 <p className="text-[28px] font-light mt-[-0.5rem] ">
  {item.info}
 </p>
 <p className="text-[17px] text-white/50 font-light ">
  {item.info1}
 </p>
</div>
<div className={`relative w-full justify-center items-center ${index !== 0 ? "top-[9rem]":"top-[14rem]"}
${index === 2 ? "top-[37rem]":""}
`}><Button
text1="Learn more"
text2="Shop"
/></div>
      </div>
       
  ))}
</div>
<div className=" relative top-[0.5rem] w-full justify-center items-center">
  <FooterImages/>
</div>
<div className="relative flex justify-center items-center w-full top-[3.5rem] font-light text-white text-[57px]">
  <h2>Endless entertainment.</h2>
</div>
<div className=" w-full relative top-[4.6rem]  ">
  <FooterScroll/>
</div>

</div>  
  );
}
