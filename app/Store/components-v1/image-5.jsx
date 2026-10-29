"use client"
import { useRef,useEffect,useState } from "react";
export default function Images(){
    const items = [
        {   hight:"APPLE SPECIALIST", 
            name: "Shop one on one with a Specialist.",
            name2:"Online or in a store.",
            image:"1.jpg"
        },
        {
            name:"Shop with a Specialist over video.",
            info:"Choose your next device in a guided, one-way video",
            info1:" session.",
               image:"/2.jpg"
        },
        {   

            hight:"Today at Apple",
            name:"Explore Apple Intelligence",
           
             info:"Come try it for yourself in a free session at the Apple",
             info1:" Store.",
             image:"3.jpg"
        },
        {
             hight:"Today at Apple",
            name:"Join free sessions at your",
             name2:" Apple Store.",
             info:"Learn about the latest features and how to go further with your ",
             info1:" Apple devices.",
               image:"/4.jpg"
        },
        {
           hight:"PERSONAL SETUP",
            name:"Set up your new device with help",
             name2:" from a Specialist.",
             info:"Let us guide you through data transfer, the latest features, and",
             info1:"more in an online, one-on-one session.",
               image:"/5.jpg"
        },
        {

            name:"Get expert service and",
              name2:" support at the Genius Bar.",
               image:"/6.jpg",
              
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
        left:-465,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:465,
        behavior:"smooth"
    })
}
    }

    return(
        <div className="relative w-full top-[19.6rem]">
    <div ref={containerRef} className="scroll-content">
                {items.map((item,index)=>(
                <div 
                key={index}
               className="scroll-item-5 store-image">
                    <img src={item.image} className="h-full w-full" />
                    <div className= "flex flex-col absolute w-full top-[2.9rem] left-[1.8rem] ">
                        <p  className="absolute text-[13px] top-[-20px] text-black-800 ">{item.hight}</p>
                      


           
         
                       <div className="text-black font-semibold text-[28px] w-max ">
                       <h3  >
                        {item.name} 
                        </h3>
                        
                       <h3 className=" mt-[-0.6rem]" >{item.name2}</h3>
                      
                    </div >
                    <div className={`text-black/90 font-normal text-[15px] flex flex-col absolute top-[2.9rem] ${index === 3 || index === 4? "top-[4.9rem]":"top-[2.9rem]"}`}>
<p className="">{item.info}</p>
<p className="mt-[-0.3rem]">
    {item.info1}
</p>
                    </div>
                        
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