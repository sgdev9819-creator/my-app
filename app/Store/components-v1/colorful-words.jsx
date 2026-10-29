"use client"
import { useRef,useEffect,useState } from "react";
export default function Divs(){
    const items = [
      {
            info:"Pay in full,pay monthly,or",
            info2:" lease an upgrade at ",
            info3:"the end of your term.",
               image:"/2.jpg"
        },
        {
            info: "Trade in your current",
            info2:" device.",
            info3:"Get credits ",
            info4:"toward a new one.‡",
            image:"/1.jpg"
          




        },
        {
            info5:"Pay in full,pay",
            info6:" monthly,or",
            info7:" lease and ",
            info8:"upgrade at the end of",
            info9:" your term.",
               image:"/2.jpg"
        },
        {  
    
               info10:"Make them yours",
               info11:"Engrave a mix of",
               info12:"  emoji,names and ",
               info13:"numbers for free.",
               image:"/3.jpg"
        },
        {
            info14:"Enjoy",
            info15:"two hour ",
            info16:"delivary",
            info17:"from an Apple ",

            info18:"Store ,",
           info18:"free delivary",
           info19:"or",
           info20:"easy pickup",
               image:"/4.jpg"
        },
        {
             info21:"Get a  ",
             info22:"peronalized",
            info23:"shopping",
            info24:"experience ",
            info25:"in the",
            info26:"Apple Store ",
            info27:"app",
               im6age:"/5.jpg"
        },
        {
            info10:"Customize a Mac and  ",
            info11:"style an Apple Watch  ",
            info12:"just for them",
               image:"/6.jpg"
            
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
           left:-402,
           behavior:"smooth"
       })
   }
       }
       
       const handleRight = ()=>{
   if(containerRef.current){
       containerRef.current.scrollBy({
           left:402,
           behavior:"smooth"
       })
   }
       }
   

    return(
        <div className="relative w-full top-[18.7rem] flex h-max">
    <div ref={containerRef} className="scroll-content-grid">
                {items.map((item,index)=>(
                <div 
                key={index}
                className={`${index === 0 ? "card-wide":"scroll-gid-items"}`}>
                    <img src="#" href={index} />
                    <div className="absolute top-[3.5rem] left-[2rem] flex flex-col h-full font-bold text-[25px] ">
                     
                      <span className="flex w-maxt text-blue-600   " >{item.info}</span>

{/*first and second section */}

                      <div className="flex flex-row w-full text-black mt-[-0.5rem]">
 <span className="flex w-max text-blue-600">{item.info2}</span> 
 <span className="flex w-max">{item.info3}</span>
                      </div>
       <span className="flex w-max text-black  mt-[-0.5rem] w-full">{item.info4}</span>






{/*second */}
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