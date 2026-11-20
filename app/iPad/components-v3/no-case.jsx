"use client"
import { useRef,useEffect,useState } from "react";
import Button from "../components-v3/button"
 const items = [
        {  
           name: "iPad Pro",
            info:"The ultimate iPad experience with the",
            info1:" most advanced technology.",
            price:"From $1199 or $99.91/mo. for 12 mo.*",
            price1:"Lease from $24.99/mo. for 36 mo. ",
            price2:"with Apple Upgrade◊◊",
            image:"ie1.png"
        },
        {

            name:"iPad Air",     
            info:"Serious performance in a thin and ",      
            info1:"light design.",
            price:"From $749 or $62.41/mo. for 12 mo.*",
            price1 :"Lease from $15.99/mo. for 36 mo. ",
             price2:"with Apple Upgrade◊◊",
               image:"/ie2.png"

        },
        {  






            name:"iPad",  
            info:"The colorful, all‑screen iPad for the",
            info1:" things you do every day.",
            price:"From $449 or $37.41/mo. for 12 mo.*",
               image:"/ie3.png"
        },
        {
            name:"    iPad mini",             
            info:"The full iPad experience in an",
            info1:"ultraportable design.",
            price:"From $599 or $49.91/mo. for 12 mo.*",
            price1:"Lease from $11.99/mo. for 36 mo. ",
             price2:"with Apple Upgrade◊◊",
               image:"/ie4.png"
        },
       

         
         
         
         
    ]

export default function NoCase(){

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
        left:-378,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:378,
        behavior:"smooth"
    })
}
    }
return(

         <div className="hero-images-container" >
            <div className="active" ref={containerRef}>
                {items.map((prod,index)=>(
                    <div
                    key={index}
                    className="cases ipad"
                    >
                        <img src={prod.image} alt={prod.name}
                        className="absolute w-[371px] top-4 " />
                       <div className="absolute top-[33rem] flex flex-col gap-0 w-full justify-center items-center">                        
    
                        <h3 className="text-[30px]  text-white font-light w-full absolute top-[0.5rem] flex justify-center items-center " >{prod.name}</h3>
                         <div className="absolute top-[3.5rem] flex flex-col justify-center items-center w-full font-light text-white text-[16.5px]">
                        <span className="">
                            {prod.info}
                        </span>
                        <span className="">{
                            prod.info1}
                       </span>
                        </div>
 <div className="relative w-full justify-center items-center flex flex-col top-31 text-white/90 font-light  text-[12.5px]">
                 <p className=" flex  justify-center items-center w-[300px]  ">{prod.price} </p>
                 <p className="">
                    {prod.price1}
                 </p>
                  <p className="">
                    {prod.price2}
                 </p>
</div>
              
                      </div>
                                <Button 
                         text1="Learn more"
                          text2="Buy"
                               />
                             
                        </div>
                ))}
</div>
<div className=" relative top-[-0.5rem] left-[73.5rem] gap-5 flex flex-row  w-max justify-center ">

  <button 
  disabled={!showLeft}
  onClick={handleLeft}
  className={`w-max rounded-full 
      justify-center items-center inline-flex p-[11px] bg-white/90 backdrop-blur-[10px]
      ${
        showLeft?"opacity-100":"opacity-50"
      }
  `}
  
  >
<img src="l-black.svg" alt="previouse" className="w-[15px] h-auto" />
    </button>


    
  <button
    disabled={!showRight}
    onClick={handleRight}
className={`w-max rounded-full 
       justify-center items-center inline-flex p-[11px] bg-white/90 backdrop-blur-[10px]
      ${showRight?"opacity-100":"opacity-30"}
  `}
    >
        <img src="g-black.svg" alt="next" className="w-[15px] h-auto"/>

    </button>


</div>



</div>
            
    
)

}






