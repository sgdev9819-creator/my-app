"use client"
import  Link from "next/link"
export default function info2(){
return(
<div className="flex w-max justify-center relative flex flex-col gap-[1rem] text-[21px] text-white/40 font-light">


<h3 className="w-[780px]">
        Apple Vision Pro gives you limitless space to do your best work. Bring your Mac
         workflows into view on a massive screen. Multitask across apps and organize them any way you like. And write, express yourself,
          and get things 
        done effortlessly with Apple Intelligence — all with groundbreaking privacy protections.5
    </h3>
    <Link  href="#" className="w-max flex justify-center text-blue-600 no-underline hover:underline">
    Learn more about Apple Intelligence
    </Link>
</div>
)
}