"use client"
import { useRef,useEffect,useState } from "react";
  const products =[
    {   id: 1,
        name:"Apple Watch",
        name2:"New",
        name3:"Series 12",
        image:"/nav1.png"},

      {  id: 2,
          name:"Apple Watch",
          name2:"New Colors",
          name:"Ultra 4",
          image:"/nav2.png"},

       {   id: 3, 
        name:"Apple Watch",
        name:"SE 3",
        name:"Nike",
        image:"/nav3.png"},
          {id: 4,
             name:"Apple Watch",
             name2:"New",
             name:"Hermès",
             image:"/nav4.png"},

            {id: 5, 
                name:"Apple Watch",
                name2:"New Colors",
                image:"/nav5.png"},
             
                {id: 7, name:"Compare",image:"/nav7.png"},
                  {id: 8, name:"Bands",name2:"New Colors",image:"/nav8.png"},
                  {id: 9, name:"Accessories",image:"/nav9.png"},
                   {id: 10, name:"Apple Fitness+",image:"/nav10.png"},
                     {id: 11, name:"Shop Watch",image:"/nav11.png"},
                   {id: 12, name:"watchOS 27",image:"/nav12.png"},
                    


]
export default function firstSlider(){
     const containerRef = useRef(null);
        const[showLeft,setshowLeft]=useState(false)
        const[showRight,setshowRight]=useState(true)
    
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
    <div className="watch-slider-container ">
<div ref={containerRef} className="watch-slider-content">
    {products.map((item)=>(
        <div
        key={item.id}
         className="watch-slider-item"
        >
            <img src={item.image} className="watch-slider-image" />
            <div className="absolute w-full flex flex-col gap-[2px] top-36 justify-center items-center text-[13px] text-white font-light ">
            <span >{item.name}</span>
            <span  className="mt-[-0.5rem] " >
                {item.name3}
            </span>
            </div>
             <span className="text-orange-700 text-[11px] absolute top-[11rem]" >{item.name2}</span>
            </div>
    ))}
</div>
<div className=" absolute top-49  flex flex-row  w-full  justify-center items-center">
{ showLeft && (
  <button onClick={handleLeft} className="watch-left">
<img src="lesser.svg" alt="previouse" className="w-[17px] h-auto ml-[6rem]" />
<span className="w-[1px] h-full bg-white/20 absolute right-0 top-0"></span>
    </button>
)}

    
 { showRight &&(  <button onClick={handleRight}
 className="watch-right"
    >
        <img src="/greater.svg" alt="next" className="w-[17px] h-auto "/>
<span className="w-[1px] h-full bg-white/20 absolute left-0 top-0"></span>
    </button>
 )}

</div>







    </div>
)

}