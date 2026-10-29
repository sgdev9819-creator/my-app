"use client"
import Link from "next/link"
import Button from "./button"
export default function FooterImages(){
    return(
     
<div className="w-[87%] h-[30.5rem] rounded-3xl bg-[rgba(122,122,122,0.1)]   justify-center items-center absolute flex flex-row transition-colors duration-700 hover:scale-[1.01]">
    <div className="flex flex-col gap-2 absolute left-[5.7rem] top-[10rem] w-[30%] justify-center items-center  flex  ">

<div className="flex flex-col font-light text-white text-[31px] ">
    <h3>Answer a few questions to</h3>
    <h3 className="mt-[-0.5rem]" > Find the best Mac for you.</h3>
     


</div>

<button className="w-[130px] h-11  rounded-4xl no-underline bg-blue-600  text-white font-lighti text-[15px] bg-blue-600  justify-center items-center  flex">
    Get Started
</button>
    </div>
    <div className="absolute right-[0.5rem] top-[-0.5rem]  w-[43rem] h-full rounded-r-2xl">
        <img src="mac8.png" alt="" className="rounded-r-4xl w-full h-full" />
    </div>
</div>

        
    )
}

