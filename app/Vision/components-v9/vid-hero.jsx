"use client"

import { useRef,useState,useEffect } from "react"


export default function VidHero(){
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
  return(
    <div className="w-full relative  flex justify-center items-center" >

    <div className="relative w-[100%] h-max   justify-center items-center">
    
<video src="large.mp4"
ref={vidRef}
muted loop playsInline
className="w-full h-full justify-center items-center  "
/>



<button onClick={togglePlay}
aria-label={isplaying ? "Pause video" : "Play video"}
className="w-max absolute  top-5 right-5  p-3 rounded-full border-1 border-white/70 bg-white/10 backdrop-blur-[20px] z-50"
>
    {
isplaying ? <img src="pause.svg" alt="Pause video" className="w-[15px] h-auto object-cover"/> : <img src="play.svg" alt="Play video" className="w-[15px] h-auto object-cover" />
    }

</button>

</div>
    </div>
  )
}