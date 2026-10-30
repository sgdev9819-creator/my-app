"use client";
import { useRef,useEffect,useState } from "react";
const products =[
    {id: 1,name:"Mac",image:"/st1.png"},
      {id: 2,name:"iPhone",image:"/st2.png"},
       {id: 3, name:"iPad",image:"/st3.png"},
          {id: 4, name:"Apple-watch",image:"/st4.png"},
            {id: 5, name:"vision-Pro",image:"/st5.png"},
              {id: 6, name:"Air-Pods",image:"/six.png"},
                {id: 7, name:"Airtags",image:"/seven.png"},
                  {id: 8, name:"AppleTV",image:"/eight.png"},
                  {id: 9, name:"homePod",image:"/nine.png"},
                   {id: 10, name:"Accesories",image:"/ten.png"},
                      {id: 11, name:"Apple gift card",image:"/11.png"},

]
export default function Slide(){
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
        left:-127,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:127,
        behavior:"smooth"
    })
}
    }
return(
    <div className="relative w-full top-[4rem]">
<div ref={containerRef} className="slider-content">
    {products.map((pic)=>(
     

        <div
        key={pic.id}
        className="content-items">
        <img src={pic.image} className="item" />
        <p className="item-info">{pic.name}</p>
        </div>
    ))}
    
</div>


<div className=" absolute top-26  flex flex-row w-full  justify-center items-center">
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