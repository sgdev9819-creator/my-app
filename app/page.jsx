"use client"
import Link from "next/link";
import Button from "./components/button"
import Navber from "./components/home-navber"
import MobileNav from "./components/mobilenav"
 import FooterImages from "./components/footer-image"
  import FooterScroll from "./components/footer-scroll"
import { useState } from "react";

const products =[
 { 
  name:"MacBook Pro",
  info:"PROLED XDR Display",
  image:"heroitem.jpg",
 },
 
 {
   name:"MacBook Pro",
  info:" 14-inch model now with M6",
   info1:"Available Starting 11.6",
  image:"/hero-image3.jpg",
 },

 {
   name:"iPad",
  info:"Hello hello",
  image:"/landing2.jpg",
 }
]

export default function Home() {
  return (
  <div className=" relative top-0 left-0 flex flex-col   w-full">
   <div className="hidden lg:block fixed top-0 left-0 w-full z-50">
    <Navber />
</div>
     <div className="block lg:hidden fixed top-0 left-0 w-full z-40">
    <MobileNav />
</div>
<div className="flex flex-col gap-[1rem] w-full h-max relative z-5">
  {products.map((item,index)=>(
    <div
    key={index}
    className={`relative flex w-full ${index !== 0 ? "h-[100vh] bg-black":"h-[100vh] bg-black"}  ${ index === 2 ? "bg-white":""}`}
    >
      <img src={item.image} alt="" className={`absolute w-full object-cover ${index !== 0 ? "h-[510px] top-[5rem]":"h-[510px] bottom-[0px]"} ${ index === 2 ? "top-[8.3rem]":""} `} />
      <div className={`w-full justify-center items-center flex flex-col ${index !== 0?"absolute top-[2rem] text-white":"absolute top-[5rem] text-white"}
  ${index === 2 ? "text-black absolute top-[5rem]":""}
`}>
 <h1 className=" text-[32px] lg:text-[56px] font-light">
  {item.name}
 </h1>
 <p className={`text-[19px] lg:text-[28px] font-light mt-[-0.5rem] ${index === 0 ? "color-text":""}`}>
  {item.info}
 </p>
 <p className="hidden lg:flex text-[17px] text-white/50 font-light ">
  {item.info1}
 </p>
</div>
<div className={`relative w-full justify-center items-center ${index !== 0 ? "top-[11rem]":"top-[12rem]"}

`}><Button
text1="Learn more"
text2="Shop"
/></div>
      </div>
       
  ))}
</div>
<div className=" relative top-[1rem] w-full justify-center items-center">
  <FooterImages/>
</div>
<div className="relative flex justify-center items-center w-full top-[3.5rem] font-light text-white text-[37px] lg:text-[57px]">
  <h2>Endless entertainment.</h2>
</div>
<div className=" w-full relative top-[5.6rem]  ">
  <FooterScroll/>
</div>

</div>  
  );
}
