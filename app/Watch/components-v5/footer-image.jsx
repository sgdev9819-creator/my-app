"use client"
import Link from "next/link"
export default function FooterImages(){
    return(
     
<div className="w-[87%] h-[30.5rem] rounded-3xl bg-[rgba(122,122,122,0.1)]   justify-center items-center absolute flex flex-row transition-colors duration-700 hover:scale-[1.01]">
    <div className="flex flex-col gap-2 absolute left-20 ">

<div className="flex flex-col font-light text-white text-[31px] ">
    <h3>Make it personal.</h3>
    <h3 className="mt-[-0.5rem]" > Make it pop.</h3>
     





</div>
<div  className="flex flex-col  font-light text-white text-[17px]">
    <p>Discover new bands in a fresh mix of</p>
    <p className="mt-[-0.3rem]">materials, colors, and patterns.</p>
</div>
<Link href="#" className="text-blue-400 no-underline font-light text-[17px] hover:underline">
Shop Apple Watch bands</Link>
    </div>
    <div className="absolute right-[-0.2rem]  w-[43rem] h-full rounded-r-2xl">
        <img src="belt.png" alt="" className="rounded-r-4xl w-full h-full" />
    </div>
</div>

        
    )
}

