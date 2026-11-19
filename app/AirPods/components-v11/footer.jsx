"use client"
import Link from "next/link"
export default function footer(){

    return(
        <div className="footer-flex">
            <div className="justify-center  items-center  flex flex-col gap-8  ml-30  ">
                <div className="flex flex-row justify-center items-center gap-0 w-max ml-[-21.4rem] mt-[0rem] font-light text-white text-[1.9rem]"> 
<img src="/apple-logo.svg" alt="" className="h-[2rem] mr-[-0.3rem] " />
<h3>
Music
</h3>
    </div>


<div className="flex flex-col gap-0 w-max font-light  text-5xl mt-[-1rem] ">
<h3>Get 3 months of</h3>
<h3>Apple Music free with </h3>
<h3> your AirPods.*</h3>
</div>


<Link href="#" className="text-blue-400 font-normal text-[16px] no-underline mt-3 ml-[-21.9rem]  hover:underline">
Learn more
</Link>
            </div>




            <div className="w-[400px] flex  justify-center  items-center mr-40">
                <img src="footer9.png" alt="" className="absolute " />
                <img src="footer8.jpg" alt="footer8.jpg" className="absolute top-[9rem] mt-0 rounded-2xl " />
            </div>


        </div>
    )
}