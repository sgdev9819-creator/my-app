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
        <div className="hero-images-container">
    <div ref={containerRef} className="hero-images-content">
                {products.map((item,index)=>(
                <div 
                key={index}
               className="relative top-[15.7rem] w-full" >
                    <img src={item.image} className="rounded-5xl" />
                   
                   <div className= "scroll-item-text-4">
                        <p  className="absolute text-[11px] top-[-20px] text-black-800 ">{item.top}</p>                   
                       <h3 className={` font-semibold ${index === 0 ? "name-text1":"name-text2"}`}>{item.name}</h3>
                       <div className="text-black font-semibold text-[26px] w-max ">

                       
                       <h3 className="text-black font-semibold  " >
                        {item.name2} 
                        </h3>
                        
                       <h3 className=" text-black  font-semibold" >{item.name3}</h3>
                      
                    </div>
                    
                        <p className="text-black/100 font-[1px] w-[330px]  text-[14px]">{item.down}</p>
                        <h3>{item.title2}</h3>
                       

                        </div>
                          <p className="text-sm absolute bottom-6 left-5">{item.price} </p>
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