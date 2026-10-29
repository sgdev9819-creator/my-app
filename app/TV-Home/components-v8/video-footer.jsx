"use client"
import { useState,useEffect,useRef } from "react"
const wordLoop=[
    {
        name:"The Studio",
        image:"footer-6.png",
    },
     {
        name:"Neo",
        image:"footer-6.png",
    },
     {
        name:"WHAT THE CLASH?",
        image:"footer-7.png",
    },
     {
        name:"Hit with Bakari",
        image:"footer-8.png",
    }

]

export default function vidFooter(){
    const[isplaying,setisplaying]=useState(false)
    const [isActive,setisActive]=useState(0)
    const videoRef = useRef(null)
    

useEffect(()=>{
    const timer = setInterval(()=>{
setisActive((prevImage)=>{
return prevImage === wordLoop.length -1?0 : prevImage +1
})
    },3000)

    return ()=>clearInterval(timer)
},[])









    const togglesPlay =async ()=>{
        if(!videoRef.current) return
            if(isplaying){
                videoRef.current.pause()
                  setisplaying(false)
            }else{
            
try {
        await videoRef.current.play()
        setisplaying(true)
      } catch (err) {
        console.error("Video playback failed:", err)
      }
        }
    
    }








return(
    <div className="w-full absolute  flex justify-center items-center" >

    <div className="relative w-[81%] h-max border-4 border-black flex  justify-center items-center">
       <video
          src="first-vid.mp4"
          ref={videoRef}
          muted
          loop
          playsInline
        className="w-full h-full border-r-[1px] border-r-white/10"
        />
<div className="w-full absolute bottom-25 z-200 flex flex-row justify-center ">

<div className="absolute left-15 w-[600px] flex flex-col ">
    {wordLoop.map((item,index)=>(
        <div 
      
        key={index}
        className={`${isActive === index? "activeLoop":"loop-item"}`}>
            <img src={item.image} alt={index} className="w-[140px]  object-cover" />
            <span className="w-[2px] h-[32px] bg-white flex  justify-center items-center  " ></span>
            <span className="text-white/70 font-light text-[30px] ">
                {item.name}
            </span>
            </div>
    ))}
</div>






<button onClick={togglesPlay}
aria-label={isplaying ? "Pause video" : "Play video"}
className="w-max absolute right-15   p-4 rounded-full border-1 border-white/70 bg-white/10 backdrop-blur-[20px]"
>
    {
isplaying ? <img src="pause.svg" alt="Pause video" className="w-[17px] h-auto object-cover"/> : <img src="play.svg" alt="Play video" className="w-[17px] h-auto object-cover" />
    }

</button>

</div>

    </div>

    </div>
)

}