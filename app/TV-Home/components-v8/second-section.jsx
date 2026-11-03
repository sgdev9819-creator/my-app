"use client"

const products =[
    {   
        important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"",
    },

]
import { useRef,useEffect,useState } from "react";


export default function Mac(){
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
        left:-470,
        behavior:"smooth"
    })
}
    }
      
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:470,
        behavior:"smooth"
    })
}
    }


return(
  
        <div className="relative w-full top-[0.7rem]">
    <div ref={containerRef} className="hero-images-content">
                {products.map((item,index)=>(
                <div 
                key={index}
               className="hero-items-1 tv-hero1">
                    <img src={item.image} />
                    <div className= "hero-images-info-1">
                        <p  className={`absolute text-[11px] top-[-20px] text-black-800  ${index === 3 ? "text-white/70":"text-black-800"}`}>{item.top}</p>
       

           
                   <div className="container-info" >
                       <h3 className={`"text-black font-semibold space-y-1 leading-tight text-[25px] w-[310px] " ${index === 3 ? "text-white":"text-black"}`}>{item.name}</h3>
                      <p className="text-sm">{item.down2}</p>
                       </div>
                    </div>
                  <div className="absolute bottom-3 right-3 inline-flex justify-center items-center w-[28px] h-[28px] p-2 rounded-full bg-black/10">
                    {index === 0 && (
                        <img src="/greater.svg" alt="Image" className="w-full h-full object-cover inline-flex justify-center items-center" />
                    )}
                    {index !== 0 && (
                        <img src="/plus.svg" alt="Image" className="w-full h-full object-cover inline-flex justify-center items-center" />
                    )}
            
                    </div>
                      
                 
                       

                        </div>
               
                ))}
            </div>

<div className=" relative top-[-2rem] left-[85%] gap-5 flex flex-row  w-max justify-center ">

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