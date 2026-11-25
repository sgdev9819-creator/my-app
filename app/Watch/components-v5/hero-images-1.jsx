"use client"
import { useRef,useEffect,useState } from "react";
import {useStore} from "../../context/StoreContext";
import Buttom from "./buttom";
 

  export default function WatchImages(){
     const{isproducts,AddtoCart}=useStore()

const watchproducts = (Array.isArray(isproducts) ? isproducts : []).filter((item)=>item.category === "Watch")

return(
   
        <div className="w-full h-max relative top-[5rem] flex flex-row justify-center items-center gap-[1.2rem] ">
            {watchproducts.map((items)=>(
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
                       item={items}
                      />
                      </div>
                </div>
            ))}
        </div>
    
)
  }