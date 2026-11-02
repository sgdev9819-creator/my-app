"use client"
import { useRef,useEffect,useState } from "react";
import Button from "../components-v8/button"
 const items = [
        {  
           name: "Apple HomeView",
            status:"New",
            info:"Keep the whole home connected,",
            info1:"entertained, and in the know.",
            price:"$299",
            image:"home8.jpg"
        },
        {

            name:"Apple TV 4K",
            status:"New",     
            info:"The ultimate cinematic experience.",      
            price:"$299 or $49.83/mo. for 6 mo.*",
               image:"home9.jpg"

        },
        {  






            name:"HomePod mini 2",  
              status:"New",  
            info:"Room-filling sound",
            info1:"in a compact design.",
            price:"$149",
               image:"home10.jpg"
        },
        {
            name:"HomePod",             
            info:"Immersive, high-fidelity audio",
            info1:"Profound sound.",
            price:"$349",
               image:"home11.jpg"
        },
         {
            name:"Apple Home Collection",  
            status:"Coming later",             
            info:"Easy-to-use accessories that are",
            info1:"simple to set up and that provide a",
            info2:"private Apple Home experience.",
               image:"home12.jpg"
        },
       

         
         
         
         
    ]

export default function NoCase(){

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
        left:-378,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:378,
        behavior:"smooth"
    })
}
    }
return(

         <div className="relative w-full top-[0rem]" >
            <div className="active home-active" ref={containerRef}>
                {items.map((prod,index)=>(
                    <div
                    key={index}
                    className="cases home-case"
                    >
                        <img src={prod.image} alt={prod.name}
                        className="absolute w-[371px] top-4 rounded-[22px] transition-transform duration-500 hover:scale-[1.01] " />
                        <span className="text-orange-700 absolute top-[30rem] text-[14px] w-full justify-center items-center flex">
                            {prod.status}
                        </span>
                       <div className="absolute top-[31rem] flex flex-col gap-0 w-full justify-center items-center">                        
    
                        <h3 className="text-[30px]  text-white font-light w-full absolute top-[0.5rem] flex justify-center items-center " >{prod.name}</h3>
                         <div className="absolute top-[3.5rem] flex flex-col justify-center items-center w-full font-light text-white text-[16.5px]">
                        <span className="">
                            {prod.info}
                        </span>
                       
                        <span className="">{
                            prod.info1}
                       </span>
                        <span className="">{
                            prod.info2}
                       </span>
                        </div>
 <div className="relative w-full justify-center items-center flex flex-col top-29 text-white/90 font-light  text-[12.5px]">
                 <p className=" flex  justify-center items-center w-[300px]  ">{prod.price} </p>
                
                 
</div>
              
                      </div>
                      <div className="relative top-[42%]">
                        {index !== 0 &&(

                       
                           <Button 
                         text1="Learn more"
                          text2="Buy"
                               />
                              ) }

                               {index === 0  &&(

                       
                           <Button 
                         text1="Learn more"
                          text2="Pre-order"
                               />
                              ) }

                      </div>
                             
                        </div>
                ))}
</div>
<div className=" relative top-[-4%] left-[85%] gap-5 flex flex-row  w-max justify-center ">

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






