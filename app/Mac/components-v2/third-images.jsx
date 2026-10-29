"use client"
import { useRef,useEffect,useState } from "react";
import Link from "next/link";
export default function Images(){
    const items = [
        {
            name: "Give us the old. Save on",
            name2:"The new.",
            info:"With Apple Trade In, you can get a great value for",
            info1:" your current device and apply it toward a new one.",
            info2:"If your device isn’t eligible for credit, we’ll recycle it ",
            info3:" for free.9",
            link:"See what your device is worth",
            image:"mac9.png"
        },
        {
           
            
            name:"Mac does that",
            info:"See how easy it is to move to Mac",
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
                    <div className="absolute top-[0rem] flex flex-col justify-center items-center w-full h-max text-white text-[29px] font-light ">
                        <h2>
                            {item.name}
                        </h2>
                        <h2 className="mt-[-0.6rem]">
                            {item.name2}
                        </h2>
                    </div>
                    <div className={`absolute w-full h-max   flex flex-col justify-center items-center text-white text-[15px] font-light ${index === 1 ?"top-[3.4rem]":"top-[5.3rem]"}`}>
                        <p className="">
                            {item.info}
                        </p>
                        <p className="">
                            {item.info1}
                        </p>
                        <p className="">
                            {item.info2}
                        </p>
                        <p className="">{item.info3}</p>
                    </div>
<Link href="#" className={`absolute w-full h-max   flex  justify-center items-center text-blue-400  text-[15px] font-light hover:underline ${index === 1 ?"top-[5.5rem]":"top-[11.7rem]"}`}>
                    
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