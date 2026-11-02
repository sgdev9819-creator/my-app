"use client"
import { useState ,useEffect,useRef} from "react"
const Accessories =[
    {
        name:"Your AirPods. Your way.",
        image:"air2.png",
         info:"Get to know the whole family of AirPods and AirPods accessories. And get ",
          info2:"free engraving",
            link:"Shop all",
    },
    {
         name:"Find your study buddies.",
        image:" /two.png",
         info:"Make it the best year ever with the latest accessories.",
         link:"Shop college essentials",
    },
     {
         name:"Find your study buddies.",
        image:" /two.png",
         info:"Make it the best year ever with the latest accessories.",
         link:"Shop college essentials",
    },
     {
         name:"Find your study buddies.",
        image:" /two.png",
         info:"Make it the best year ever with the latest accessories.",
         link:"Shop college essentials",
    },
     {
         name:"Find your study buddies.",
        image:" /two.png",
         info:"Make it the best year ever with the latest accessories.",
         link:"Shop college essentials",
    },
     {
         name:"Find your study buddies.",
        image:" /two.png",
         info:"Make it the best year ever with the latest accessories.",
         link:"Shop college essentials",
    },
     {
         name:"Find your study buddies.",
        image:" /two.png",
         info:"Make it the best year ever with the latest accessories.",
         link:"Shop college essentials",
    },
    {
         name:"Eighth Item Title",
         image:"/two.png",
         info:"Description for the eighth item.",
         link:"Shop now",
    },
    
  

]

import Link from "next/link"
export default function AccessoriesHero(){
 const containerRef = useRef(null);
 const [activeImage, setActiveImage] = useState(0)
    const[showLeft,setshowLeft]=useState(false)
    const[showRight,setshowRight]=useState(true)

    const checkCurrentState = ()=>{
        if(containerRef.current){    
            const{scrollLeft, scrollWidth,clientWidth} = containerRef.current
            setshowLeft(scrollLeft > 10)

            setshowRight(scrollLeft < scrollWidth - clientWidth - 10)
        const newIndex = Math.round(scrollLeft / clientWidth)
      if (!isNaN(newIndex)) {
        setActiveImage(newIndex)
      }
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
    const container = containerRef.current

       const newIndex = Math.max(activeImage - 1, 0)
            scrollToSlide(newIndex)
    
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    const container = containerRef.current
    const newIndex = Math.min(activeImage + 1, Accessories.length - 1)
            scrollToSlide(newIndex)
    
}
}
const scrollToSlide = (index) => {
        const container = containerRef.current
        if (container && container.children[index]) {
            const targetSlide = container.children[index]
           container.scrollTo({
                left: targetSlide.offsetLeft,
                behavior: "smooth"
            })
            setActiveImage(index)
        }
    }

return(
    <div className="Accessories-container">
        <div ref={containerRef}
        className="Accessories-content-slide">
 {Accessories.map((items,index)=>(
<div className="Accessories-slid"
key={index}
>
    <img src={items.image} alt={index} className="rounded-3xl  w-full h-full " />
    <div className="absolute top-[3rem] left-[3rem] w-[500px] flex flex-col ">
    <span className={`font-light  w-full text-3xl text-black ${index===1? "text-white":"text-white"}`}>
        {items.name}
    </span>

    <p className={`font-light text-black text-1xl ${index===1? "text-white":"text-white"}`} > {items.info} </p>
     <p className={`font-light text-black text-1xl  ${index===1? "text-white":"text-white"}`}> {items.info2} </p>
      <p className="font-light text-blue-600 mt-[1rem] text-1xl hover:underline "> {items.link} </p>
    </div>
    </div>

 ))}



        </div>

      <div className=" relative top-[1.9rem]  gap-5 flex flex-row  w-full justify-center items-center ">

  <button 
  disabled={!showLeft}
  onClick={handleLeft}
  className={`w-max rounded-full 
      justify-center items-center inline-flex p-[11px] bg-white/80 backdrop-blur-[10px] hover:bg-white/70  transition-colors duration-500
      ${
        showLeft?"opacity-100":"opacity-50"
      }
  `}
  
  >
<img src="l-black.svg" alt="previouse" className="w-[15px] h-auto" />
    </button>


<div className="w-max px-[20px] py-[15px] rounded-[20px] h-max  bg-white/80 flex flex-row justify-center items-center gap-3">
    {Accessories.map((_, index) => (
        <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`relative w-[10px] h-[10px] rounded-full transition-colors duration-500 ${activeImage === index ? "bg-black" : "bg-black/30 hover:bg-black/40"}`}
        />
    ))} 
</div>












    
  <button
    disabled={!showRight}
    onClick={handleRight}
className={`w-max rounded-full 
       justify-center items-center inline-flex p-[11px] bg-white/80 backdrop-blur-[10px] hover:bg-white/70 transition-colors duration-500
      ${showRight?"opacity-100":"opacity-30"}
  `}
    >
        <img src="g-black.svg" alt="next" className="w-[15px] h-auto"/>

    </button>


</div>

  

    </div>
)

}