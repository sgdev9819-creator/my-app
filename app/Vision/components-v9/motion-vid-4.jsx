"use client"
import { useRef,useState,useEffect } from "react"
import {motion,useScroll,useTransform}  from "framer-motion"

export default function ScrolVid(){
const currentRef = useRef(null)

  const[isplaying,setisplaying]=useState(false)
  const vidRef = useRef(null)

  const togglePlay = async ()=>{
if(!vidRef.current)return
if(isplaying){
  vidRef.current.pause()
  setisplaying(false)
}else{
  try{
await vidRef.current.play(
  setisplaying(true)
)
  }catch(err){
console.log("vid not playing")
  }

}

  }

useEffect(()=>{
const observer = new IntersectionObserver(
    ([entry])=>{
        const video =vidRef.current
        if(!vidRef.current)  return

        if(entry.isIntersecting){
          video.currentTime = 0
          video.play()
          .then(()=> setisplaying(true))
          .catch((err)=> console.log("cant pause this vid bc of internal bug"))
        }else{
          video.pause()
            setisplaying(false)
        }
     },{threshold:0.5}
)
if(vidRef.current){
  observer.observe(vidRef.current)
}
return ()=>{
  if(vidRef.current){
    observer.unobserve(vidRef.current)
  }
}
},[])

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
          ref={vidRef}
          src="large4.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <button onClick={togglePlay}
aria-label={isplaying ? "Pause video" : "Play video"}
className="w-max absolute  top-5 right-5  p-3 rounded-full border-1 border-white/70 bg-white/10 backdrop-blur-[20px] z-50"
>
    {
isplaying ? <img src="pause.svg" alt="Pause video" className="w-[15px] h-auto object-cover"/> : <img src="play.svg" alt="Play video" className="w-[15px] h-auto object-cover" />
    }

</button>
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