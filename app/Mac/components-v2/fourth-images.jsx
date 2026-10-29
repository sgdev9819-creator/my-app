"use client"
import { useRef,useEffect,useState } from "react";
import Link from "next/link";
export default function Images(){
    const items = [
        {
            name: "Mac accessories",
            info:"Explore keyboards, mice, and other essentials.",
            link:"Shop Mac accessories",
            image:"mac12.png",







        },
        {
           
            
            name:"Studio Display",
            info:"The 27-inch 5K Retina display pairs beautifully ",
info1:"with Mac.",
            link:"Learn more",
               image:"mac13.png",
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
                    <div className={`absolute w-full h-max   flex flex-col justify-center items-center text-white text-[15px] font-light ${index === 1 ?"top-[3.2rem]":"top-[3.3rem]"}`}>
                        <p className="">
                            {item.info}
                        </p>
                        <p className="">
                            {item.info1}
                        </p>
                    </div>
<Link href="#" className={`absolute w-full h-max   flex  justify-center items-center text-blue-400  text-[15px] font-light hover:underline ${index === 1 ?"top-[6.5rem]":"top-[5.1rem]"}`}>
                    
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