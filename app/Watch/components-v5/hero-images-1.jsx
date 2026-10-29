"use client"
import { useRef,useEffect,useState } from "react";
import Buttom from "./buttom";
  const products =[
    {id: 1,
      color:"wc.png",
      golden:"New",
      name:"Apple Watch Series 12",
        info:"The ultimate way to ",
        info1:"watch your health.",
        price:"From $399 or $33.25/mo. for 12 mo.*",
        price2:"Lease from $11.99/mo. for 24 mo. with",
        price3:" Apple Upgrade◊◊",
        image:"watch-i1.png"},

      {id: 2,
        color:"wc1.png",
        golden:"New",
        name: "Apple Watch Ultra 4",
        info:"The ultimate sports",
        info1:"and adventure watch.",
        price:"From $799 or $66.58/mo. for 12 mo.*",
         price2:"Lease from $24.99/mo. for 24 mo. with",
        price3:" Apple Upgrade◊◊",
        image:"/watch-i2.png"},

       {id: 3,
         color:"wc2.png",
         golden:"New",
         name:"Apple Watch SE 3",
        info:"Essential health features",
        info1:"at a great value.",
        price:"From $249 or $20.75/mo. for 12 mo.*",
       
        image:"/watch-i3.png"},
  ]


  export default function WatchImages(){
return(
   
        <div className="w-full h-max absolute flex flex-row justify-center items-center gap-[1.2rem] ">
            {products.map((items)=>(
              <div 
              key={items.id}
              className="watch-hero-info">
                <img src={items.image} alt="" className="w-full h-[398px] rounded-3xl hover:scale-[1.01] transition-transform duration-300" />
 <div className="w-full absolute flex justify-center items-centger top-[38.4rem] ">
  <img src={items.color} alt={items.id} className="" /></div>
                <div className="hero-info-content">
                 <p className="text-[12px] text-orange-700 absolute top-[-1.2rem]">{items.golden}</p>
                <h3 className="text-white text-[28px]  font-light  justify-center items-center flex w-full mt-0" >{items.name}</h3>
               <div className=" w-full absolute top-[2.5rem] font-light gap-0 text-white text-[18px] flex flex-col justify-center items-center ">
                <p>
                  {items.info}
                </p>
                <p className="mt-[-0.5rem]">
                                    {items.info1}
                </p>
                </div>
                <div className="w-full absolute top-[6rem] font-light gap-0 text-white text-[15px] flex flex-col gap-0 justify-center items-center ">
                  <p>{items.price}</p>
                  <p>{items.price2}</p>
                  <p>{items.price3}</p>
                </div>
                </div>
                <div className="w-full justify-center items-center flex absolute top-[59rem]">
                <Buttom 
                   text1="Learn more"
                    text2="Buy"
                      />
                      </div>
                </div>
            ))}
        </div>
    
)
  }