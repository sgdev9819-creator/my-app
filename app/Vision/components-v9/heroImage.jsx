"use client"
import Button from "./button"
export default function HeroImage(){
    return(
        <div className="relative top-0 left-0 w-full h-[112vh] justify-center items-center flex bg-black">
            <img src="/hero1.png" alt="hero" className=" h-full object-cover" />
            <div className="vision-flex ">
                <div className="absolute top-[33rem] left-16 flex flex-col justify-center  gap-0 ">
                <img src="hero3.png" alt="content" className="w-[380px]" />
<h3 className="font-light text-white text-3xl flex mt-[-1rem]">
    New powerful M5 chip and comfortable Dual Knit Band.
</h3>
                </div>
<div className="absolute w-max right-50 top-[40.2rem]  flex justify-center w-max items-center gap-2">

<Button 
text1="Book a demo"
text2="Buy"
/>

</div>

            </div>
           
        </div>
    )
}