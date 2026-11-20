"use client"


import { useState, } from "react" 
const Footer = {
    firstInfo: {
        id: "firstInfo",
        name: "iPhone and Mac",
        buttonImg: "che1.svg",
        image: "color8.png",
        info: "loading loading loading loading",
        info1: "loading loading loading loading",
        info2: "loading loading loading loading",
        info3: "loading loading loading",
         info4: "loading loading loading loading",
        info5: "loading loading loading loading",
         info6: "loading loading loading loading",
        info7: "loading loading loading loading",
    },
    secondInfo: {
        id: "secondInfo",
        name: "iPhone and ",
        name1:"Apple watch",
        buttonImg: "che1.svg",
        image: "color30.png",
        info: "loading loading loading loading",
        info1: "loading loading loading loading",
        info2: "loading loading loading loading",
        info3: "loading loading loading",
         info4: "loading loading loading loading",
        info5: "loading loading loading loading",
         info6: "loading loading loading loading",
        info7: "loading loading loading loading",
    },
    thirdInfo: {
        id: "thirdInfo",
        name: "iPhone and AirPods",
        buttonImg: "che1.svg",
        image: "color10.png",
       info: "loading loading loading loading",
        info1: "loading loading loading loading",
        info2: "loading loading loading loading",
        info3: "loading loading loading",
         info4: "loading loading loading loading",
        info5: "loading loading loading loading",
         info6: "loading loading loading loading",
        info7: "loading loading loading loading",
    },
}
export default function ShearedFooter(){
const[isactive,setisactive]=useState("firstInfo")
const activeData = Footer[isactive]
const footerItems = Object.values(Footer)

    const handleClick = (id) => {
        if (isactive === id) {
            const currentIndex = footerItems.findIndex(item => item.id === id)
            const nextIndex = (currentIndex + 1) % footerItems.length
            setisactive(footerItems[nextIndex].id)
        } else {
            setisactive(id) 
        }
    }
return(
    <div className="w-[87%] h-[784px] relative flex flex-row  bg-[rgba(14,14,14,1)] shadow-[0px_0px_1px_rgba(255,255,255,0.04)]
    backdrop-blur-[20px] rounded-[22px]">
       <div className="flex flex-col w-[36%]  mt-[8rem] pl-[5rem] h-max justify-center gap-[0.1rem] items-center">
                {Object.values(Footer).map((item, index) => {
                    const activeItem = isactive === item.id
        return(

<div 
    key={index}
    className={`w-full  relative  flex flex-col transition-all duration-500 border-b border-white/60 overflow-hidden ${activeItem ? "h-auto pb-4" : "h-auto"}`}>
<button className="w-full flex flex-row relative h-max  gap-[5rem] pb-[2rem]   cursor-pointer"
 onClick={() => handleClick(item.id)}>
    <div className="flex flex-col text-[28px] text-white font-light ">
    <h3>
        {item.name}
    </h3>
    <h3 className="mt-[-0.5rem]">
        {item.name1}
    </h3>
    </div>

                                    <img src={item.buttonImg} alt="" className=" absolute right-0 w-[18px] h-[20px] mt-[1rem]" />
                               
</button>
<div className={`w-full text-[17px] font-light flex flex-col pb-[1rem] pt-[0rem] text-white transition-transform duration-500 ${activeItem ? "visible opacity-100 flex" : "hidden invisible opacity-0 h-0"}`}>
                                <span>{item.info}</span>
                                <span className="mt-[0.5rem]">{item.info1}</span>
                                <span className="mt-[0.5rem]">{item.info2}</span>
                                <span className="mt-[0.5rem]">{item.info3}</span>
                                 <span className="mt-[0.5rem]">{item.info4}</span>
                                <span className="mt-[0.5rem]">{item.info5}</span>
                                <span className="mt-[0.5rem]">{item.info6}</span>
                            <span className="mt-[0.5rem]">{item.info7}</span>
                            </div>

</div>
        )
})}
</div>
{isactive && activeData && (
                <div className="w-[64%] relative top-[2rem] flex  transition-transform duration">
                    <img
                        src={activeData.image} 
                        alt={activeData.name} 
                        className="h-[13rem] rounded-full object-cover absolute right-[4rem] top-[4rem]" 
                    />
                </div>
            )}
    </div>
)
  
}