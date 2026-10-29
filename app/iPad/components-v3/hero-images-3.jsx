"use client"
import { useRef,useEffect,useState } from "react";
import Link from "next/link";
export default function Images(){
    const items = [
        {
            name: "Apple Pencil",
            info:"Dream it up. Join it down.",
            link:"Lern more",
            image:"mac9.png"
        },
        {
           
            
            name:"Keyboards for iPad",
            info:"Type it out. Take it with you.",
            link:"Learn more",
               image:"mac10.png"
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
        <div className="hero-images-container">
    <div ref={containerRef} className="climax-images-1">
                {items.map((item,index)=>(
                <div 
                key={index}
               className="climax-contents " >
                <div className="absolute top-[2rem] flex flex-col justify-center items-center w-full h-max  ">
                    <div className="absolute top-[0rem] flex flex-col justify-center items-center w-full h-max text-white text-[29px] font-semibold ">
                        <h2>
                            {item.name}
                        </h2>
                        
                    </div>
                    <div className={`absolute w-full h-max   flex flex-col justify-center items-center text-white text-[15px] font-normal ${index === 1 ?"top-[3.4rem]":"top-[3.3rem]"}`}>
                        <p className="">
                            {item.info}
                        </p>
                       
                    </div>
<Link href="#" className={`absolute w-full h-max   flex  justify-center items-center text-blue-400  text-[15px] font-light hover:underline ${index === 1 ?"top-[5.5rem]":"top-[5.7rem]"}`}>
                    
{item.link}
</Link>
                   </div>
                    <img src={item.image} className={`
                         absolute bottom-1 w-full rounded-b-[20px] ${index === 1?"h-[375px]":"h-[343px]"}`} />

                    </div>
                ))}
            </div>
           <div className=" relative top-[0rem] left-[70rem] gap-5 flex flex-row  w-max justify-center ">

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