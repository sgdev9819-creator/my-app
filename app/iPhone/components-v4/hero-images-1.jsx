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
    <div ref={containerRef} className="hero-images-content">
                {items.map((item,index)=>(
                <div 
                key={index}
               className="hero-items-1 hero">
                    <img src={item.image} />
                    <div className= "hero-images-info-1">
                        <p  className={`absolute text-[11px] top-[-20px] text-black-800 font-light  ${index === 3 ? "text-white/70":"text-black-800"}`}>{item.top}</p>
       

           
                   <div className="container-info" >
                       <h3 className={`"text-black font-light space-y-1 leading-tight text-[25px] w-[310px] " ${index === 3 ? "text-white":"text-black"}`}>{item.name}</h3>
                      <p className="text-sm font-light ">{item.down2}</p>
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
             <div className=" relative top-[-2.5rem] left-[73.5rem] gap-5 flex flex-row  w-max justify-center ">
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