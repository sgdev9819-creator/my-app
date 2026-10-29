"use client"
import { useRef,useEffect,useState } from "react";
export default function Images(){
    const items = [
        {
            name: "Apple Vision Pro is the result of decades of high‑performance, mobile, and wearable ",
            name2:"device innovation. Its advanced technology and elegant form deliver an amazing",
            name3:" experience every time you put it on.",
            image:"/v1.jpg"

        },
        {
           
           
            name:"The new Dual Knit Band combines soft, breathable straps with a counterbalanced",
            name2:" design, so you can stay immersed in your favorite spatial experiences longer.",
               image:"/v2.jpg" 

        },
         {
           
            
            name:"The dual-function Fit Dial lets you easily adjust the band’s upper and lower straps ",
            name2:"independently for a comfortable, personalized fit.",
               image:"/v4.jpg"
        },
         {
           
            
            name:"The Light Seal magnetically attaches to the aluminum alloy frame and gently flexes to ",
            name2:"conform to your face, delivering a precise fit while blocking out stray light.",
               image:"/v5.jpg"
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
        left:-806,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:806,
        behavior:"smooth"
    })
}
    }
    return(
        <div className="hero-images-container">
    <div ref={containerRef} className="vision-hero-content">
                {items.map((item,index)=>(
                <div 
                key={index}
               className={`vision-home-items ${index === 4 ?"v-items":"v-items-1"} ${index === 5 ?"v-items":"v-items-1"} ${index === 6 ?"v-items":"v-items-1"}  ${index === 8 ?"v-items":"v-items-1"}`}>
                <div className="absolute w-full h-[500px] justify-center items-center top-0 left-0">
                    <img src={item.image} className="rounded-[20px] w-full h-full  " />
                    </div>
                    
                   <div className="font-light text-1xl text-white/50 flex flex-col gap-0 absolute top-[33rem]">
<h3 >
    {item.name}
</h3>
<h3>
    {item.name2}
</h3>
<h3>
    {item.name3}
</h3>
<h3>
    {item.name4
            }
</h3>
<h3>
    {item.name5}
</h3>


                    </div>
                    </div>
                ))}
            </div>
               <div className=" relative top-[-5rem] left-[70rem] gap-5 flex flex-row  w-max justify-center ">

  <button 
  disabled={!showLeft}
  onClick={handleLeft}
  className={`w-max rounded-full 
      justify-center items-center inline-flex p-[11px] bg-black  
      ${
        showLeft?"opacity-100":"opacity-50"
      }
  `}
  
  >
<img src="less-white (2).svg" alt="previouse" className="w-[15px] h-auto" />
    </button>


    
  <button
    disabled={!showRight}
    onClick={handleRight}
className={`w-max rounded-full 
       justify-center items-center inline-flex p-[11px] bg-black  
      ${showRight?"opacity-100":"opacity-30"}
  `}
    >
        <img src="greater-white (2).svg" alt="next" className="w-[15px] h-auto"/>

    </button>


</div>





    </div>
)
}