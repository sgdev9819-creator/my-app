"use client"

const items=[
    {
        name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"foot-2.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-1.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-1.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"foot-2.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"h2.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"foot-2.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-1.jpg"
    },

    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-1.jpg"
    },


    { name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-2.jpg"
    },
    {
          name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"h2.jpg"
    },

]


import Link from "next/link"
import Button from "./button"
import Button2 from "./button3"
import { useState,useRef,useEffect } from "react"
export default function heroVids1(){
     const[isplaying,setisplaying]=useState(false)
     const[ishovered,setishovered]=useState(false)
     const marqueRef = useRef(null)
  const vidRef = useRef(null)

const positionRef = useRef(0)
const animationIdRef = useRef(null)
const speedRef = useRef(80)


  const togglePlay = async ()=>{
if(!vidRef.current)return
if(isplaying){
  vidRef.current.pause()
  setisplaying(false)
}else{
  try{
await vidRef.current.play()
  setisplaying(true)

  }catch(err){
console.log("vid not playing")
  }

}

  }

useEffect(()=>{
  const video =vidRef.current
const observer = new IntersectionObserver(
    ([entry])=>{
        
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
if(video){
  observer.observe(video)
}
return ()=>{
  if(video){
    observer.unobserve(video)
  }
}
},[])


useEffect(()=>{
  const speedChange = ishovered ? 40:90;
  let speedanimationID;
const TargertSpeed =()=>{
const diff = speedChange - speedRef.current


if(Math.abs(diff)>0.5){
speedRef.current += diff *0.05

speedanimationID = requestAnimationFrame(TargertSpeed)

}else{
  speedRef.current = speedChange
}
}
TargertSpeed()
return ()=> cancelAnimationFrame(speedanimationID)
},[ishovered])

useEffect(()=>{
  let LastStop =null

const animateMaque = (timeStamp)=>{
  if(!LastStop) LastStop = timeStamp
  const deltaTime = (timeStamp-LastStop)/1000
  LastStop = timeStamp
if(isplaying && marqueRef.current){
  positionRef.current += speedRef.current * deltaTime

const halfwidth = marqueRef.current.scrollWidth / 2
if(positionRef.current >= halfwidth){
  positionRef.current %= halfwidth
}
marqueRef.current.style.transform = `translateX(-${positionRef.current}px)`
}
animationIdRef.current = requestAnimationFrame(animateMaque)

}
animationIdRef.current = requestAnimationFrame(animateMaque)
return ()=> cancelAnimationFrame(animationIdRef.current)
},[isplaying])


    return(
        <div className="w-full h-[130rem] justify-center  flex flex-col absolute ">
<div className="relative flex flex-col h-max w-full justify-center gap-2" >
<video src="large9.mp4"  ref={vidRef} muted loop autoPlay playsInline className=" w-full"/>
<div className="entern-overlay">
    <div className="absolute top-[23rem] justify-center items-center flex flex-row ">
    <div className="flex flex-col gap-5 w-max ml-44 ">
    <div className="absolute top-[-3rem] flex flex-row gap-3 text-white font-light text-sm justify-center items-center   ">
<img src="icon.png" alt="" />
<p>  Apple TV   </p>
<Link href="#" className="text-sm text-white w-[160px] justify-center items-center flex flex-row
 border-1 border-white rounded-2xl gap-0 ">
<p className="mr-[0.5px]">Bundles with </p>
<img src="/apple-logo.svg" alt=""className="w-[16px] mr-[-0.1rem]" />
<p> One</p>
</Link>
        </div>
<div className=" flex flex-col w-max text-white text-4xl ">
    <h3>  Stream award-winning</h3>
    <h3> Apple Originals on every screen.</h3>
  

</div>
<p className="letter ">SEVERANCE </p>
</div>
<div className="flex z-200 ">
    <Button 
    text1="Try it free"
    text2=" Learn more"
    />
</div>
</div>

</div>



<button onClick={togglePlay}
aria-label={isplaying ? "Pause video" : "Play video"}
className="w-max absolute right-15 top-[27rem] z-200 p-4 rounded-full border-1 border-white/70 bg-white/10 backdrop-blur-[20px]"
>
    {
isplaying ? <img src="pause.svg" alt="Pause video" className="w-[15px] h-auto object-cover"/> : <img src="play.svg" alt="Play video" className="w-[15px] h-auto object-cover" />
    }
    </button> 

</div>

<div className="entern-infinite"
onMouseEnter={()=>setishovered(true)}
onMouseLeave={() =>setishovered(false)}>
            <div ref={marqueRef} className="w-max flex gap-4 will-change-transform"
          
            >
                {[...items,...items].map((item,index)=>(
                     <div
                    key={index}
                    className="entern-infinit-item"
                    >
                      <div className="w-full h-[224px] rounded-lg relative top-0 left-0">
                        <img src={item.image} alt={index} className="w-full h-full rounded-lg "/>
                        <div className="item-overlay">
                   <Button2 
                   text1="Stream now"
                   image1="playButton.svg"
                   imageStyle="w-[16px] flex "
                   
                   />
                          </div>
                        </div>
                        
                        <div  className="relative top-2 flex flex-col gap-1 font-light text-white text-sm">

                             <span>
                            {item.name}
                        </span>
                        <span  className="">
                            {item.text}
                        </span>
                            </div>  
                       
                        </div>
                ))}
            </div>
</div>

        </div>
    )
}