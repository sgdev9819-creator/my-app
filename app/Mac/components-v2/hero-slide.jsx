"use client"
import { useRef,useEffect,useState } from "react";
  const products =[
    {id: 1,name:"MacBook Noe",image:"/nr1.png"},
      {id: 2,name:"MacBook Air",image:"/nr2.png"},
       {id: 3, name:"MacBook Pro",name2:"New",image:"/mac18.png"},
          {id: 4, name:"iMac",name2:"New",image:"/nr4.png"},
            {id: 5, name:"Mac mini",name2:"New",image:"/nr6.png"},
              {id: 6, name:"Mac Studio",name2:"New",image:"/nr7.png"},
                {id: 7, name:"Compare",image:"/nr8.png"},
                  {id: 8, name:"Help Me Choose",image:"/mac6.png"},
                  {id: 9, name:"Displays",image:"/nr9.png"},
                    {id: 10, name:"Accessories",image:"/mac7.png"},
                  {id: 11, name:"Shop Mac",image:"/mac19.png"},
                   {id: 12, name:"Golden Gate",image:"/nr13.png"},
                     

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
    <div className="slider-container">
<div ref={containerRef} className="slider-content">
    {products.map((item)=>(
        <div
        key={item.id}
         className="content-items"
        >
            <img src={item.image} className="item" />
            <span className="item-info">{item.name}</span>
            <span className="text-orange-600 text-[11px] absolute top-[8rem]" >{item.name2}</span>
            </div>
    ))}
</div>
<div className=" absolute top-42  flex flex-row w-full  justify-center items-center">
{ showLeft && (
  <button onClick={handleLeft} className="mac-left">
<img src="lesser.svg" alt="previouse" className="w-[17px] h-auto ml-37" />
<span className="w-[1px] h-full bg-white/20 absolute right-0 top-0"></span>
    </button>
)}

    
 { showRight &&(  <button onClick={handleRight}
 className="mac-right"
    >
        <img src="/greater.svg" alt="next" className="w-[17px] h-auto mr-37"/>
<span className="w-[1px] h-full bg-white/20 absolute left-0 top-0"></span>
    </button>
 )}

</div>





    </div>
)

}