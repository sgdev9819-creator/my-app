"use client"

import Link from "next/link"
import Button from "./button2"

export default function Footer(){
    return(
        <div className="bg-[rgba(49,48,48,0.315)] w-full h-[500px]  justify-center items-center flex  flex-col lg:flex-row gap-4">

<div className="flex flex-col gap-4  font-light  text-white absolute left-46 ">

<h3 className="text-4xl">   Bundle up to six Apple </h3>
<h3 className="text-4xl mt-[-0.5rem]"> services and enjoy more</h3>
<h3  className="text-4xl mt-[-0.5rem]"> for less.</h3>
<div className="ml-[-1.7rem]">
<Button 
                text1="Try Apple One free6"
                className1='w-[190px] h-[2.7rem]  rounded-4xl no-underline bg-white text-[18px] text-black font-light justify-center items-center inline-flex'
                text2=" Learn more"
                className2="w-[125px] h-[2.7rem]  text-white rounded-4xl no-underline text-1xl font-light border-1 border-white justify-center items-center flex hover:bg-white hover:text-black "
                />
</div>

</div>
<div className="absolute right-64 "> 
    <img src="footer-i-2.png" alt="" />
</div>

        </div>
    )
}