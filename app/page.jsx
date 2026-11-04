"use client"
import Link from "next/link";
import Button from "./components/button"
import Navber from "./components/home-navber"
 import FooterImages from "./components/footer-image"
import { useState } from "react";

const products =[
 { 
  name:"MacBook Pro",
  info:"14-inch model now with M6",
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

<div className="relative w-full left-0 top-[0rem] flex flex-col gap-3 justify-center items-center">
{products.map((items,index)=>(
<div key={index}
className={` relative top-0 left-0 w-full   ${index === 0? "h-[110vh] bg-black":" h-[95vh] bg-white/98 " } 
${index === 2?"h-[110vh] bg-black":" h-[95vh] "}
`}
>
<img src={items.image} className={` w-full h-[510px]  object-cover ${index === 0? "absolute top-[6rem] lg:h-[600px] ":" absolute top-[0%] lg:h-[95vh]"} 
${index === 2? "lg:h-hull absolute top-[0%]":"" }
`}/>
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

<div className=" absolute top-[123rem] w-full justify-center items-center">
  <FooterImages/>
</div>



</div>  
  );
}
