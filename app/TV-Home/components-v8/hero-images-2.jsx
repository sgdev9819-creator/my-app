
"use client"
import { useRef,useEffect,useState } from "react";
export default function Images(){
    const items = [
        {
            name: "Apple Intelligence.",
            name2:"Creat,Communicate and get.",
            name3:"thing done effortlessly",
            image:"/dv-1.jpg"
        },
        {
           
            top:"CONTINUITY",
            name:"Powerful alone.",
            name2:"Superpowerd together",
               image:"/dv-2.jpg" 
        },
         {
           
            top:"CONTINUITY",
            name:"Powerful alone.",
            name2:"Superpowerd together",
               image:"/dv-2.jpg"
        },
         {
           
            top:"CONTINUITY",
            name:"Powerful alone.",
            name2:"Superpowerd together",
               image:"/dv-4.jpg"
        },
       
          
        
         
    ]
 const containerRef = useRef(null);
    const[currentIndex,setcurrentIndex]=useState(0)
   
const showLeft = currentIndex > 0
const showRight = currentIndex < items.length -1

const scrollTo =(index)=>{
if(!containerRef.current)return


const itemsWidth =380

containerRef.current.scrollTo({
    left: index * itemsWidth,
    behavior:"smooth",
})
setcurrentIndex(index)

}

const handleLeft =()=>{
    if(showLeft){
        scrollTo(currentIndex -1)
    }
}

const handleRight =()=>{
    if(showRight){
        scrollTo(currentIndex +1)
    }
}

    return(
        <div className="hero-images-container">
    <div ref={containerRef} className="tv-hero-content">
                {items.map((item,index)=>(
                <div 
                key={index}
               className="tv-home-items">
                    <img src={item.image} className="rounded-[20px] w-full mt-[10rem] " />
                   
                    </div>
                ))}
            </div>
               <div className=" relative top-8 gap-5 flex flex-row w-full  justify-center items-center">

  <button onClick={handleLeft}
  disabled={!showLeft}
  className={`w-max rounded-full border border-white 
      justify-center items-center inline-flex p-[11px] hover:bg-white/20 backdrop-blur-[12px]  ${
   showLeft ? "opacity-100 cursor-pointer" : "opacity-30 cursor-not-allowed"
  }`}
  
  >
<img src="lesser.svg" alt="previouse" className="w-[15px] h-auto" />
    </button>


    
  <button onClick={handleRight}
  disabled={!showRight}
className={`w-max rounded-full border border-white 
      ] justify-center items-center inline-flex p-[11px] hover:bg-white/20 backdrop-blur-[12px]  ${
   showRight ? "opacity-100 cursor-pointer" : "opacity-30 cursor-not-allowed"
  }`}
    >
        <img src="tv-right.svg" alt="next" className="w-[15px] h-auto"/>

    </button>


</div>





    </div>
)
}