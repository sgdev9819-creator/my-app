
"use client"
import { useRef,useEffect,useState } from "react";
export default function Images(){
    const items = [
        {
            name: "Apple Vision Pro is the result of decades of high‑performance, mobile, and wearable ",
            name2:"device innovation. Its advanced technology and elegant form deliver an amazing",
            name3:" experience every time you put it on.",
            image:"/card1.jpg"

        },
        {
           
           
            name:"The new Dual Knit Band combines soft, breathable straps with a counterbalanced",
            name2:" design, so you can stay immersed in your favorite spatial experiences longer.",
               image:"/card2.jpg" 

        },
         {
           
            
            name:"The dual-function Fit Dial lets you easily adjust the band’s upper and lower straps ",
            name2:"independently for a comfortable, personalized fit.",
               image:"/card3.jpg"
        },
         {
           
            
            name:"The Light Seal magnetically attaches to the aluminum alloy frame and gently flexes to ",
            name2:"conform to your face, delivering a precise fit while blocking out stray light.",
               image:"/card4.jpg"
        },
        {
           
            
             name:" Speakers positioned close to your ears ",
            name2:"deliver rich Spatial Audio that seamlessly",
             name3:" blends with real‑world sounds, keeping ",
                name4:"you aware of your surroundings.",
               image:"/card5.jpg"
    
        },
          
        
         
    ]
 const containerRef = useRef(null);
    const[showRight,setshowRight]=useState(0)
    const[showLeft,setshowLeft]=useState(0)
const showButtons = ()=>{
          if(containerRef.current){    
            const{scrollLeft, scrollWidth,clientWidth} = containerRef.current
            setshowLeft(scrollLeft > 10)

            setshowRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
}

    
    useEffect(() =>{
        const container = containerRef.current
        if(container){
            showButtons()
            container.addEventListener("scroll", showButtons);
        }
    return () => {
      if (container) {
        container.removeEventListener("scroll", showButtons);
      }
    };
  }, []);

    const handleLeft = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:-426,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:426,
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
               className="hero-items-1 airScroll">
                    <img src={item.image} className="h-full w-full" />
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