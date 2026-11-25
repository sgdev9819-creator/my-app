"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Button from "../components-v2/button"
import {useStore} from "../../context/StoreContext";



export default function categoryJunk() {
  const [isActive, setIsActive] = useState("All products")
      const{isproducts,cart,AddtoCart}=useStore()

const list = Array.isArray(isproducts) ? isproducts : []

const items = { 
  
  "All products":{ 
    id: "All products",
    name1: "All products",
    product:list.filter((item)=> item.category === "Mac")
},
 
  laptop:{
    id: "laptop",
    name1: "Laptops",
   product:list.filter((item)=> item.subcategory === "laptop")
   
  },
  
  
  desktop:{
    id: "desktop",
    name1: "Desktops",
     product:list.filter((item)=> item.subcategory === "desktop")
  },
 display: {
    id: "display",
    name1: "Displays",
   product:list.filter((item)=> item.subcategory === "display")
  }
}








 const containerRef = useRef(null);
    const[showRight,setshowRight]=useState(0)
    const[showLeft,setshowLeft]=useState(0)
const showButtons = ()=>{
          if(containerRef.current && isActive === "All products"){    
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
        left:-380,
        behavior:"smooth"
    })
}
    }
    
    const handleRight = ()=>{
if(containerRef.current){
    containerRef.current.scrollBy({
        left:380,
        behavior:"smooth"
    })
}
    }
  return (
    <div className="relative top-9 ">
<div className="flex flex-row w-[460px] h-[57px] p-2 ml-21 bg-white/5 rounded-full z-100">
    {Object.values(items).map((item)=>{ 
      const activeMode = isActive === item.id
      return(
       <button key={item.id}
              onClick={() => setIsActive(item.id)}
            className="relative w-max px-5 py-2 flex flex-row rounded-3xl text-[17px] transition-colors duration-100"
           
              >
                {activeMode && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/89 text-white justify-center items-center rounded-3xl shadow-sm"
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                
                )}
             <span className={`relative z-10 transition-colors duration-900 font-light  ${activeMode ? "text-black" : "text-white"}`}>
                  {item.name1}
                  </span>
              </button>
      )
})}
</div>



         <div className="case-container" >
        {Object.values(items).map((category)=>{
            const activeMode = isActive === category.id
            const isAllProducts = category.id === "All products"
            return(
                <div
                key={category.id}
            className={`${activeMode ? "active mac1":"not-active"
            }`}  ref={activeMode && isAllProducts ? containerRef : null}>




                {category.product.map((prod,index)=>(
                    <div
                    key={index}
                    className="cases"
                    >
                        <img src={prod.image} alt={prod.leble1}
                        className="w-full h-[240px] absolute top-0" />
                         <div className="w-full justify-center items-center flex absolute top-[18rem]"><img src={prod.color} alt="" className="" /></div>
                       <div className="absolute bottom-[19rem] flex flex-col gap-0 w-full justify-center items-center">                        
                        <p className="text-[13px] text-orange-700 w-full justify-center items-center flex absolute top-[0rem]">{prod.hight}</p>
                       
                        <h3 className="text-[28px]  text-white font-normal justify-center w-full justify-center items-center flex  gap-0 absolute top-[1.4rem] " >{prod.name}</h3>

                     <div className="w-full full justify-center items-center flex flex-col gap-0 absolute top-[4rem] font-light text-[16.5px] text-white"> 
                         <p>{prod.info}</p>
                         <p className="mt-[-0.2rem]">
                          {prod.info2}
                         </p>
                       </div>
                      </div> 
                      <div className="absolute w-full justify-center items-center flex flex-col top-[28.4rem] font-light text-white text-[12.5px] ">
                 <p >{prod.price} </p>
                 <p className="mt-[2px]">
                  {prod.price1}
                 </p>
                 <p className="mt-[-3.5px]">
                  {prod.price2} 
                 </p>
</div >
                         <Button 
                         text1="Learn more"
                          text2="Buy"
                          item={prod}
                               />
                             
                        </div>
                ))}
</div>
            )
        })}

    </div>
    {isActive === "All products" && (
                    <div className={` relative top-[0rem] left-[73.5rem] gap-5 flex flex-row  w-max justify-center z-30 `}>

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



    )}
    </div>
)
}