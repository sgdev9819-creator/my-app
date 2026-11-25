"use client"

const products =[
    {   
        important:"#",
        name:"",
        info:"",
        additional:"#",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    },
    {
          important:"",
        name:"",
        info:"",
        additional:"",
        image:"#",
    }
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
  
        <div className="relative w-full top-[18.7rem]">
    <div ref={containerRef} className="hero-images-content">
                {products.map((item,index)=>(
                <div 
                key={index}
               className="hero-items-1 tv-hero">
                    <img src={item.image} />
                    <div className= "hero-images-info-1">
                        <p  className={`absolute text-[11px] top-[-20px] text-black-800  ${index === 3 ? "text-white/70":"text-black-800"}`}>{item.top}</p>
       

           
                   <div className="container-info" >
                       <h3 className={`"text-black font-normal space-y-1 leading-tight text-[28px] w-[310px] " ${index === 3 ? "text-white":"text-black"}`}>{item.name}</h3>
                      <p className="text-sm">{item.down2}</p>
                       </div>
                    </div>
                  <div className="absolute bottom-3 right-3 inline-flex justify-center items-center w-max h-max p-[9px] rounded-full transition-colors duration-300 bg-white/80 hover:bg-white/90">
                    {index === 0 && (
                        <img src="/che3.svg" alt="Image" className="w-[18px] h-auto object-cover inline-flex justify-center items-center" />
                    )}
                    {index !== 0 && (
                        <img src="/plus2.svg" alt="Image" className="w-[18px] h-auto object-cover inline-flex justify-center items-center" />
                    )}
            
                    </div>
                      
                      
                 
                       

                        </div>
               
                ))}
            </div>

<div className=" relative top-[1rem] left-[85%] gap-5 flex flex-row  w-max justify-center ">
 <button 
  disabled={!showLeft}
  onClick={handleLeft}
  className={`w-max rounded-full 
      justify-center items-center inline-flex p-[9px] bg-white/80 backdrop-blur-[10px] transition-colors duration-300  hover:bg-white/90 
      ${
        showLeft?"opacity-100":"opacity-50"
      }
  `}
  
  >
<img src="che4.svg" alt="previouse" className="w-[18px] h-auto" />
    </button>


    
  <button
    disabled={!showRight}
    onClick={handleRight}
className={`w-max rounded-full 
       justify-center items-center inline-flex p-[9px] bg-white/80 backdrop-blur-[10px] transition-colors duration-300 hover:bg-white/90
      ${showRight?"opacity-100":"opacity-30"}
  `}
    >
        <img src="che3.svg" alt="next" className="w-[18px] h-auto"/>

    </button>



</div>





    </div>
)
}