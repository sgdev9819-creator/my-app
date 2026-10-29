"use client"

const Accessories =[
   {
        name:"iPhone",
        image:"jr0.png",

    },
    {
         name:"iPad",
        image:"jr2.png",
    },
    {
         name:"Mac",
        image:"jr1.png",
    },
    {  name:" Apple Watch",
        image:"jr3.png",},
    {
         name:"Apple Vision Pro",
        image:"jr4.png",
    },
    {  name:"AirPods",
        image:"jr5.png",},
    {
         name:"TV & Home",
        image:"jr6.png",
    },
    {
        name:"AirTag",
        image:"jr7.png",
    },
     {
        name:"Beats",
        image:"jr8.png",
    },


]

import Link from "next/link"
import {useEffect,useState,useRef} from "react"
export default function AccessoriesHero(){
         const[showLeft,setshowLeft]=useState(false)
        const[showRight,setshowRight]=useState(true)
        const containerRef = useRef(null)

     const checkCurrentState = ()=>{
                if(containerRef.current){    
                    const{scrollLeft, scrollWidth,clientWidth} = containerRef.current
                    setshowLeft(scrollLeft > 10)
        
                    setshowRight(scrollLeft < scrollWidth - clientWidth - 10)
                }     
            }
            useEffect(() =>{
                const container = containerRef.current
                if(container){
                    checkCurrentState()
                    container.addEventListener("scroll", checkCurrentState);
                }
            return () => {
              if (container) {
                container.removeEventListener("scroll", checkCurrentState);
              }
            };
          }, []);
        
            const handleLeft = ()=>{
        if(containerRef.current){
            containerRef.current.scrollBy({
                left:-127,
                behavior:"smooth"
            })
        }
            }
            
            const handleRight = ()=>{
        if(containerRef.current){
            containerRef.current.scrollBy({
                left:127,
                behavior:"smooth"
            })
        }
            }
    
    
return(
<div className="relative w-full p-[3.5rem] pt-[2rem] pb-[1rem] flex">
<div className="Accessories-second-content" ref={containerRef}>
 {Accessories.map((items,index)=>(
<div className="Accessories-second-item"
key={index}
>
    <img src={items.image} alt={index} className={` h-[4.2rem] transition-scales duration-500 hover:scale-[1.03]   ${index === 1  ?"w-[49px]":"w-[100px]"}
    ${index === 2?"w-[59px]":"w-[50px]"}  ${index === 5 || index === 6 || index === 7 || index === 8?"w-[49px]":"w-[40px]"} 
    `} />
    <span className="w-full font-light relative top-2 text-[15px] text-white justify-center items-center inline-flex">
        {items.name}
    </span>
    </div>


 ))}


        </div>


   <div className=" absolute top-23  flex flex-row w-full  justify-center items-center">
{ showLeft && (
  <button onClick={handleLeft} className="acc-left">
<img src="lesser.svg" alt="previouse" className="w-[17px] h-auto ml-4" />
<span className="w-[1px] h-full bg-white/20 absolute right-0 top-0"></span>
    </button>
)}

    
 { showRight &&(  <button onClick={handleRight}
 className="acc-right"
    >
        <img src="/greater.svg" alt="next" className="w-[17px] h-auto mr-4"/>
<span className="w-[1px] h-full bg-white/20 absolute left-0 top-0"></span>
    </button>
 )}

</div>




 </div>
)

}