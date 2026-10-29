"use client"
import{useRef } from "react";
import {motion,useScroll,useTransform}  from "framer-motion"

export default function ScrolVid(){
const currentRef = useRef(null)

const {scrollYProgress} =useScroll({
    target:currentRef,
    offset: ["start start","end end"]
})

const overlayOpacity = useTransform(
    scrollYProgress,[0,0.15,0.75,0.9],[0,0.6,0.6,0]
)


return(
    <div ref={currentRef} className=" w-full justify-center items-center h-[240vh] relative">
        <div className="h-[94vh] sticky top-8   overflow-hidden">
<video
          src="large6.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
         <motion.div 
    style={{
        opacity:overlayOpacity
    }}
    
    className=" absolute inset-0 bg-black/90 z-10 text-white top-0 left-0 justify-center "/>
          </div>
   
<div className="  font-light text-white w-full z-200 justify-center items-center absolute top-50 flex flex-col gap-1" >

<p className="text-3xl ">
    Entertainment
</p>
       <h2 className="text-7xl ">
        The Ultimate theater.
       </h2>
       <h2 className="text-7xl ">Wherever you are</h2>
        </div>
  
    </div>
)
}