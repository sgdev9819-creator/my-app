"use client"

const items=[
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
        image:"e-i-1.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-2.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-2.jpg"
    },
    {
         name:"    Maximum Pleasure Guaranteed",
        text:"Thriller",
        image:"e-i-2.jpg"
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
        image:"e-i-1.jpg"
    },

]


import Link from "next/link"
import Button2 from "./button3"
import Button from "./button2"
import { useState,useRef,useEffect } from "react"
export default function heroVids1(){
     const[isplaying,setisplaying]=useState(true)
     const[ishovered,setishovered]=useState(false)
     const marqueRef = useRef(null)
  const vidRef = useRef(null)

const positionRef = useRef(0)
const animationIdRef = useRef(null)
const speedRef = useRef(80)



const togglePlay = () => {
    setisplaying((prev) => !prev);
  };
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
        <div className="w-full h-[100rem]   flex flex-col absolute font-light">
<div className="flex flex-raw  juatify-center w-full h-auto absolute top-30 gap-20 ">

    <div className="flex flex-col absolute left-40  ">
        <div className="flex flex-raw gap-2   text-white font-light text-[16px]">
             <img src="icon6.png" alt="" />
            <p className="mt-1">  Apple Books </p>

        </div>
        <div className=" flex flex-col w-max text-white text-4xl ">
    <h3> Read, listen, discover.</h3>
    <h3>All in one place.</h3>




</div>
    </div>









    
         <div className="flex z-200 absolute right-10 w-[50%] top-22 flex flex-row gap-10 ">
                <Button 
                text1="Open the App"
                 className1='w-[130px] h-11  rounded-4xl no-underline bg-white text-1xl text-black font-light justify-center items-center inline-flex'
                text2=" Learn more"
                className2="w-max h-max  text-white rounded-4xl no-underline text-1xl font-light hover:underline  "
                />

<button  onClick={togglePlay}
aria-label={isplaying ? "Pause video" : "Play video"}
className="w-max absolute right-0  z-200 p-4 rounded-full border-1 border-white/70 bg-white/10 backdrop-blur-[20px]"
>
    {
isplaying ? <img src="pause.svg" alt="Pause video" className="w-[15px] h-auto object-cover"/> : <img src="play.svg" alt="Play video" className="w-[15px] h-auto object-cover" />
    }
    </button> 

    </div>
</div>

<div className="entern-infinite1"
onMouseEnter={()=>setishovered(true)}
onMouseLeave={() =>setishovered(false)}>
            <div ref={marqueRef} className="w-max flex gap-4 will-change-transform"
            style={{animationPlayState: isplaying ? "running" : "paused"}}
            >
                {[...items,...items].map((item,index)=>(
                    <div
                    key={index}
                    className="entern-infinit-item infinity-3"
                    >
                      <div className="w-full h-[307px] rounded-lg relative top-0 left-0">
                        <img src={item.image} alt={index} className="w-full h-full rounded-lg "/>
                         <div className="item-overlay">
                                             <Button2 
                                             text1="Read now"
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