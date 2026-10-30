"use client"
import { useRef,useEffect,useState } from "react";
  const products =[
    {id: 1,name:"iPad Pro",image:"/ipad1.png"},
      {id: 2,name:"iPad Air",image:"/ipad2.png"},
       {id: 3, name:"iPad",image:"/ipad3.png"},
          {id: 4, name:"iPad mini",image:"/ipad4.png"},
            {id: 5, name:"compare",image:"/ipad10.png"},
             {id: 6, name:"Apple Pencil",image:"/ipad6.png"},
              {id: 7, name:"Keyboard",image:"/ipad11.png"},
                {id: 8, name:"Compare",image:"/ipad8.png"},
                {id: 9, name:"Accessories",image:"/ipad12.png"},

                  {id: 10, name:"Displays",image:"/ipad9.png"},
                  

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
<div ref={containerRef} className="ipad-slid">
    {products.map((item)=>(
        <div
        key={item.id}
         className="content-items ipad-items"
        >
            <img src={item.image} className="item" />
            <span className="item-info">{item.name}</span>
            <span className="text-orange-600 text-sm" >{item.name2}</span>
            </div>
    ))}
</div>
<div className=" absolute top-36  flex flex-row w-full  justify-center items-center">
{ showLeft && (
  <button onClick={handleLeft} className="mac-left">
<img src="lesser.svg" alt="previouse" className="w-[17px] h-auto ml-37" />
    </button>
)}

    
 { showRight &&(  <button onClick={handleRight}
 className="mac-right"
    >
        <img src="/greater.svg" alt="next" className="w-[17px] h-auto mr-37"/>

    </button>
 )}

</div>





    </div>
)

}