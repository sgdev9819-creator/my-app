"use client"


import { useState, } from "react" 
const Footer = {
    firstInfo: {
        id: "firstInfo",
        name: "iPhone and Mac",
        buttonImg: "g-black.svg",
        image: "color8.png",
        info: "loading loading loading loading",
        info1: "loading loading loading loading",
        info2: "loading loading loading loading",
        info3: "loading loading loading",
    },
    secondInfo: {
        id: "secondInfo",
        name: "iPhone and watch",
        buttonImg: "g-black.svg",
        image: "color30.png",
        info: "loading loading loading loading12",
        info1: "loading loading loading loading",
        info2: "loading loading loading loading",
        info3: "loading loading loading",
    },
    thirdInfo: {
        id: "thirdInfo",
        name: "iPhone and Air",
        buttonImg: "g-black.svg",
        image: "color10.png",
        info: "loading loading loading loading13",
        info1: "loading loading loading loading",
        info2: "loading loading loading loading",
        info3: "loading loading loading",
    },
}
export default function ShearedFooter(){
const[isactive,setisactive]=useState("firstInfo")
const activeData = Footer[isactive]
return(
    <div className="w-[87%] h-[784px] relative flex flex-row  bg-black/80 
    backdrop-blur-[20px] rounded-[22px]">
       <div className="flex flex-col w-[36%]  mt-[8rem] pl-[5rem] h-max justify-center gap-[2rem] items-center">
                {Object.values(Footer).map((item, index) => {
                    const activeItem = isactive === item.id
        return(

<div 
    key={index}
    className={`w-full  relative  flex flex-col transition-all duration-500 overflow-hidden ${activeItem ? "h-auto pb-4" : "h-[3rem]"}`}>
<button className="w-full flex flex-row relative  gap-[5rem] py-4 pb-[2rem] cursor-pointer"
 onClick={() => setisactive(item.id)}>
    <h3 className="text-[28px] text-white font-light ">
        {item.name}
    </h3>

                                    <img src={item.buttonImg} alt="" className="w-[18px] h-[18px] mt-[1rem]" />
                               
</button>
<div className={`w-full flex flex-col pb-[1rem] text-white transition-transform duration-500 ${activeItem ? "visible opacity-100 flex" : "hidden invisible opacity-0 h-0"}`}>
                                <span>{item.info}</span>
                                <span className="mt-[0.5rem]">{item.info1}</span>
                                <span className="mt-[0.5rem]">{item.info2}</span>
                                <span className="mt-[0.5rem]">{item.info3}</span>
                            </div>
<span className="w-full h-[1px] bg-black/60 absolute bottom-0  "></span>
</div>
        )
})}
</div>
{isactive && activeData && (
                <div className="w-[64%] relative top-[6rem] flex justify-center items-center">
                    <img
                        src={activeData.image} 
                        alt={activeData.name} 
                        className="h-[13rem] rounded-full object-cover" 
                    />
                </div>
            )}
    </div>
)
  
}