"use client"

import { useRef,useEffect,useState } from "react";

export default function Images(){
    const items = [
        {
            name: "Get 3 months of.",
            name2:"Apple Music free.",
           
            down2:"Included with the purchase of selected Apple devices #.",
            image:"/40.webp"
        },
        {
           
            top:"FREE ENGRAVING",
            name:"AirPods Max 2 - Midnight.",
           
            price:"$549.00 ",
               image:"/41.jpg"
        },
        {   top:"FREE ENGRAVING",
            name:"AirPods Pro 3.",
            price:"$249.00 ",
               image:"/42.jpg"
        },
        {
             top:"FREE ENGRAVING",
            name:"AirPods 4 with Active Noise cancellation.",
               price:"$39.00 ",
               image:"/43.jpg"
        },
        {
           
            name:"Powerbeats Pro 2.-- Hight",
             name:"Performance Earbuds.",
         
              price:"$249.00 ",
               image:"/44.jpg"
        },
        {
            name:"Homepod - Midnight.",
              price:"$349.00 ",
               image:"/46.jpg",
              
        },

          {
            name: "Beats Solo 4 -- on wierless",
                name2:"Hadphones -- Cloud- Pink.",
             price:"$199.00 ",
            image:"/47.jpg"
           
        },
         
          {
            name: "Beats -- Pill Wireless",
            name2:"Bluetooth Speaker.",
                       price:"$149.00 ",
        
             image:"/49.jpg"
        },
         
         
    ]

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
           left:-402,
           behavior:"smooth"
       })
   }
       }
       
       const handleRight = ()=>{
   if(containerRef.current){
       containerRef.current.scrollBy({
           left:402,
           behavior:"smooth"
       })
   }
       }
   
       return(
        <div className="relative w-full top-[40rem]">
    <div ref={containerRef} className="scroll-content">
                {items.map((item,index)=>(
                <div 
                key={index}
                className={`scroll-item-5  store-image1`}>
                    <img src={item.image} className={`${index === 0 ?   "h-max":"h-[220px] absolute top-18"}`} />
                    <div className={`${index === 0 ? "scroll-item-text-4" : "scroll-item-text-5"}`}>
                        <p  className="absolute text-[11px] top-[-20px] text-orange-800 ">{item.top}</p>
                      
               
                       <h3 className={` text-black font-semibold text-1xl  ${index === 0 ? "w-[510px] text-2xl":"w-[400px] text-[17px] mt-0"}`}>{item.name}</h3>
                       <div className={` text-black font-semibold text-1xl  ${index === 0 ? "w-[510px] text-2xl":"w-[400px] text-[17px] mt-0"}`}>
                       <h3 className={` text-black font-semibold text-1xl  ${index === 0 ? "w-[510px] text-2xl":"w-[400px] text-[17px] mt-0"}`}>
                        {item.name2} 
                        </h3>
                       
                    </div>
                  
                      
                        <h3>{item.title}</h3>
                        <h3>{item.title2}</h3>
                       

                        </div>
                          <p className="text-sm absolute bottom-6 left-5">{item.price} </p>
                    </div>
                ))}
            </div>
<div className=" absolute top-76  flex flex-row w-full  justify-center items-center">
{ showLeft && (
  <button onClick={handleLeft} className="storeleft">
<img src="lesser.svg" alt="previouse" className="w-[35px] h-auto" />
    </button>
)}

    
 { showRight &&(  <button onClick={handleRight}
 className="storeright"
    >
        <img src="/greater.svg" alt="next" className="w-[35px] h-auto"/>

    </button>
 )}

</div>







    </div>
)
}