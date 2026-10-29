"use client"
import { useRef,useState } from "react";
import {motion,useScroll,useTransform } from "framer-motion"
export default function(){
    const currentRef = useRef(null)
    const {scrollYProgress} =useScroll({
        target:currentRef,
        offset: ["start start","end end"]
    })

    const imageOpacity = useTransform(
        scrollYProgress,
  [0, 1],
  [0.2, 1]
    )

    const imageScale = useTransform(
        scrollYProgress,
  [0, 1],
  [0.8, 1]
    )

    return(
        
        <div className="w-full justify-center items-center flex flex-col gap-5 font-light text-white/95">
<p className="text-3xl">
 Technology
</p>

<h2 className="text-8xl">
Innovation you can 
</h2>

<h2 className="mt-[-10px] text-8xl">
    see, hear, and feel.
</h2>
<div className="w-full flex flex-col text-2xl gap-0 relative top-11 justify-center items-center  font-light text-white/50">

<div className="w-full flex flex-row gap-0 justify-center items-center text-2xl font-light text-white/50">
    <p className="text-white">Pushing boundaries from the inside out.
        </p>
        <p>Spatial experiences on</p>
</div>

<p>
    Apple Vision Pro are only possible through groundbreaking Apple
</p>
<p>
     technology. Displays that deliver more pixels than a 4K TV to each eye. 
</p>
<p>
    Incredible Spatial Audio. A revolutionary dual‑chip design featuring the
</p>
<p>
     powerful M5 chip. A sophisticated array of cameras and sensors. All the
</p>
<p>
     elements work together to create an unprecedented experience you have to 
</p>
<p>
    see to believe.
</p>

</div>

<div
ref={currentRef}
className="w-full h-[110vh] relative top-50 flex justify-center items-center">
    
    <motion.img 
        src="hero4.png" 
        alt="footer image" 
        className="h-[34rem] mt-0 object-cover duration-500 " 
        style={{ opacity: imageOpacity, scale: imageScale }}
    />
</div>

        </div>

  

    )
}