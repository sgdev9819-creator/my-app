"use client"
import { useRef,useEffect,useState } from "react";
import Button from "../components-v8/button"
import Button2 from "../components-v8/botton-3"
export default function Images(){
    const items = [
        {
            name: "HomePod",
            name2:"Profound sound.",
            image:"tv-1.jpg"
        },
        {
           
            
            name:" HomePod mini",
            name2:"Surprising sound for",
            name3:" its size",
               image:"/tv-2.jpg"
        },
 
        {
            name2:"The Apple experience.",
            name3:"Cinematic in every sense.",
               image:"/tv-3.jpg"
        },
        {
           
          
            name:"Home app",
            name2:"The foundation",
            name3:"for a smarter home.",
               image:"tv-4.jpg"
        },
        







    ]

return(
    

    <div className="relative grid grid-cols-2 rel gap-[2rem] w-full h-full p-6 pr-12  " >
{items.map((item,index)=>(

<div className={`relative w-[636px] h-[710px]  flex flex-col items-center pt-2  rounded-3xl ${index === 0? "bg-black":"bg-white" }  `}
key={index} >
<img src={item.image} alt={index} className="w-full mt-70 object-cover rounded-3xl justify-center "  />
<div className="absolute top-[4.8rem] justify-center items-center flex flex-col gap-1">
    <p className={`font-light text-[28px] ${
        index === 0? "text-white":" text-black"
    }`}>
        {
            item.name
        }
    </p>
<div className="flex flex-col w-full justify-center items-center">
    <h3 className={`font-light text-[40px] ${
        index === 0? "text-white":" text-black"
    }`}>
        {item.name2}
    </h3>

    <h3 className={`font-light text-[40px] mt-[-1.2rem] ${
        index === 0? "text-white":" text-black"
    }`}>
        {item.name3}
    </h3>
    </div>
    <div className={`absolute w-full h-max justify-center items-center flex ${index ===0 ? "top-[-2.1rem]":"top-[0.5rem]"}`}>
    {index !== 3 && (
        
        <Button 
text1=" Buy"
 text2="Learn more"
 />
    )}

     {index === 3 && (
        
        <Button2
text1=" Learn more"
 
 />
    )}
    </div>
          
    </div>

</div>

))}

    </div>

 
)







}