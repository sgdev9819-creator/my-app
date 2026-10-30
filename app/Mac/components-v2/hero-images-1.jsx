"use client"
import { useRef,useEffect,useState } from "react";
export default function Images(){
    const items = [
        {  top:"  Apple Upgrade",
            name: " Love it. Lease it. Upgrade it.",
            down2:"Lease a new Mac with low monthly payments for 24 or 36 months and upgrade at the end of your term.◊◊",
            image:"grid20.webp"
        },
        {
           
            top:"Ways to Buy",
            name:"Pay over time, interest‑free.",     
            down2:"When you choose to check out at Apple with Apple Card Monthly Installments.◊◊◊",      
               image:"/grid21.webp"

        },
        {   top:"CERTIFIRD REFURBISHED",
            name:"Shop refurbished Apple products backed by a one‑year warranty.",         
               image:"/grid22.webp"
        },
        {
             top:"SMALL BUSINESS",
            name:"Simple solutions for all the ways you work.",             
               image:"/grid23.webp"
        },
        {
           top:"GOVERNMENT",
            name:"Special pricing is available for state, local,  and federal agencies. ",                
               image:"/grid24.webp"
        },
        {
            top:"VETERANS AND MILITARY",
            name:"Active and veteran members may be eligible for exclusive savings.",            
               image:"/grid25.webp",
              
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
        left:-496,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:496,
        behavior:"smooth"
    })
}
    }

    return(
        <div className="hero-images-container">
    <div ref={containerRef} className="hero-images-content mac1">
                {items.map((item,index)=>(
                <div 
                key={index}
               className="hero-items-1 hero">
                    <img src={item.image} className="h-full" />
                    <div className= "hero-images-info-1">
                        <p  className={`absolute text-[11px] top-[-20px] text-black-800 font-light  ${index === 3 ? "text-white/70":"text-black-800"}`}>{item.top}</p>
       

           
                   <div className="container-info" >
                       <h3 className={`"text-black  space-y-1 font-light leading-tight text-[25px] w-[310px] " ${index === 3 ? "text-white":"text-black"}`}>{item.name}</h3>
                      <p className="text-sm font-light ">{item.down2}</p>
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
              <div className=" relative top-[0rem] left-[73.5rem] gap-5 flex flex-row  w-max justify-center ">

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