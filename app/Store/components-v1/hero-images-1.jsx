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
  
        <div className="relative w-full top-[15.7rem]">
    <div ref={containerRef} className="hero-images-content">
                {products.map((item,index)=>(
                <div 
                key={index}
               className="hero-items-1 hero">
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