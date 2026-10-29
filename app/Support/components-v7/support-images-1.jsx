"use client"
import Link from "next/link"
export default function supportImages(){

    return(
<div className=" absolute flex flex-col justify-center items-center w-full gap-6">
    <div className=" w-[70%] relative flex flex-row justify-center items-center gap-0">
        <div  className="w-[50%] h-[460px] ">
              <img src="/hero-images-10.png"  alt="" className="w-[100%] h-full rounded-l-2xl "/>
        </div>
   <div className="w-[50%] h-[460px] rounded-r-2xl flex flex-col justify-center bg-black items-center gap-4 ">
<div className="absolute right-35 flex flex-col gap-4">
    <h3 className="text-white text-4xl font-light ">
   Handled with 
    </h3>
    <h3 className="text-white text-3xl font-font-light  mt-[-1rem]">
AppleCare
    </h3>
    <p className="text-white text-1xl font-light w-[250px]">
plan provides one-stop service for your Apple products, 
with quick and easy repairs for accidents like drops and spills.
 You’re also covered if your iPhone, iPad, or Apple Watch is lost or stolen.

    </p>
   </div>
<Link href="#"
className="text-blue-400 text-1xl font-light  absolute bottom-18 left-139">
Learn more {'\u003e'}
</Link>
   </div>   

    </div>


   <div className=" w-[72.6%] relative   flex flex-row justify-center items-center gap-0">

   <div className="w-[50%] h-[390px] rounded-l-2xl flex flex-col justify-center bg-black  gap-4 ">
<div className="absolute left-21 flex flex-col gap-4">
    <h3 className="text-white text-4xl font-light ">
   Apple Repair and 
    </h3>
    <h3 className="text-white text-4xl font-light  mt-[-1rem]">
Service
    </h3>
    <p className="text-white text-1xl font-light w-[280px]">

We can help you find an Apple-certified repair,
 performed by trusted experts who use genuine Apple parts. 

    </p>
   
<Link href="#"
className="text-blue-400 font-light  text-1xl">
Start a repair {'\u003e'}
</Link>
   </div>  
   </div> 
 <div  className="w-[50%] h-[390px] ">
              <img src="/hero-images-11.png"  alt="" className="w-[100%] h-full rounded-r-2xl"/>
        </div>
    </div>








</div>
    )
}