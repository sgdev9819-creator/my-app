"use client"
import { useRef,useEffect,useState } from "react";
  const products =[
    {id: 1,name:"Apple HomeView",name2:"New",image:"/home1.png"},
      {id: 2,name:"Apple TV 4K",name2:"New",image:"/home2.png"},
       {id: 3, name:"HomePod mini 2",name2:"New",image:"/home3.png"},
          {id: 4, name:"HomePod",image:"/home4.png"},
            {id: 5, name:"Accessories",image:"/home5.png"},
             {id: 6, name:"Shop Home",image:"/home6.png"},
              {id: 7, name:"Home app",name2:"New",image:"/home7.png"},
               
                  

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
    <div className="relative w-full top-[4rem]">
<div ref={containerRef} className="home-slider">
    {products.map((item)=>(
        <div
        key={item.id}
         className="home-items"
        >
            <img src={item.image} className="item" />
            <span className="absolute top-[4.6rem] text-white font-light text-[14px] w-full justify-center items-center flex ">{item.name}</span>
            <span className="text-orange-600 text-[14px] absolute top-[6rem] justify-center items-center flex" >{item.name2}</span>
            </div>
    ))}
</div>




    </div>
)

}