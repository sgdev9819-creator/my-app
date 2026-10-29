"use client"

import Button from "./button"
import Button2 from "./button2"

const items=[
    {
        
        info1:"Stream award-winning",
        info2:"Apple Originals on ",
        info3:" every screen.",
        image:"footer-8.png",
    },
    {
       
        info1:"All music. Highest audio ",
        info2:"quality. Zero ads.",
        image:"footer-7.png",
    },

    {
       
         info1:" Best collection of mobile",
        info2:"  games for every player.",
        image:"footer-6.png",
    },
    {
        
        info1:"From HIIT to Meditation,",
        info2:"there’s something ",
        info3:"for everyone.",
        image:"footer-5.png",
    },
 
]

export default function FooterHelper(){

    return(
        <div className="absolute bottom-0 flex flex-row gap-2 justify-center items-center w-full ">
            {items.map((item,index)=>(
                <div
                key={index} 
                className="relative flex flex-col gap-0 justify-center items-center w-[250px]"
                >
                    <img src={item.image} alt={index} className="justify-center items-center flex w-[150px]" />
                    
                       <span className="font-light text-white text-[22px] mt-[-0.3rem]">
                       {
                           item.info1                        }
                       </span>
                       
                       <span className="font-light text-white text-[22px] mt-[-0.3rem]">
                        {
                            item.info2
                        }
                       </span>
                       <span className="font-light text-white text-[22px] mt-[-0.3rem] absolute top-[6.4rem]">
                        {
                            item.info3
                        }
                       </span>
<div className="w-full absolute top-1">
                       
{index !== 2 &&(
    <Button2
   text1="Try it free"
    text2="Learn more"
    />
)}

{ index === 2 &&(

    <Button2
    text1="Get Started"
    text2="Learn more "
    />
)}

    </div>


                    </div>
            ))}
        </div>
    )
}