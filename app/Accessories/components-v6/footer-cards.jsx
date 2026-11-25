"use client"
import { useRef,useEffect,useState } from "react";
const cards =[
    {
        name:" Fast delivery or pickup.",
        button:"plus2.svg",
        info:"Enjoy two-hour delivery from an Apple Store,",
        info2:" free delivery, or easy pickup.",
        image:"#",
    },
   
    {
        name:"    Free and easy returns.",
        button:"/plus2.svg",
        info:"Complete your return online or take it",
        info2:" to an Apple Store.",
        image:"#",
    },


    {
        name:" Shop with Apple Card.",
        button:"/plus2.svg",
        info:"Get 3% Daily Cash back when you",
        info2:" shop at Apple with Apple Card.",
        image:"#",
    },
    {
        name:" Shop with Apple Card.",
        button:"/plus2.svg",
        info:"Get 3% Daily Cash back when you",
        info2:" shop at Apple with Apple Card.",
        image:"#",
    },




]

export default function Cards(){

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
        left:-400,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:400,
        behavior:"smooth"
    })
}
    }

    return(
        <div className="relative w-full top-[0.7rem] ">
        <div 
        ref={containerRef}
        className="  hero-images-content" >
            {cards.map((card,index)=>(
                <div  
                key={index}
                className="relative shrink-0 w-[400px] h-[320px] rounded-3xl bg-[rgb(19,19,19))] flex flex-col
                gap-[2rem] transition-transform duration-500 hover:scale(1.01)"
                >
                    <img src={card.image} alt="" className="absolute top-[1rem] left-[1rem]"/>
                    <div className="flex flex-col absolute pt-20 pb-15 pr-18 pl-10">
                    <h3 className="text-white text-[28px] w-max font-normal ">
                        {card.name}
                    </h3>
                    <span className="text-white text-[17px] font-light w-max" >
                        {card.info}
                    </span>
                    
                    <span className="text-white text-[17px] font-light w-max">
                        {card.info2}
                    </span>
                    </div>
                    <button className="absolute bottom-3 right-3 inline-flex justify-center items-center w-max h-max p-[9px] rounded-full transition-colors duration-300 bg-white/80 hover:bg-white/90 ">
                    <img src={card.button} alt="Image" className="w-[18px] h-auto object-cover inline-flex justify-center items-center" />
                    </button>
                    </div>
            ))}

        </div>
                    <div className=" relative top-[0.7rem] left-[73.5rem] gap-5 flex flex-row  w-max justify-center ">

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

