"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Button from "../components-v2/button"
const items = { 
  
  "All products":{ 
    id: "All products",
    name: "All products",
    product:[ 
   {leble:"MacBook Neo",image:"pk1.jpg",color:"mac1.png", info:"The magic of Mac at a suprising price.",price:"From $699 or $58.25/mofor 12 mo.**"},

   {leble:"MacBook Air 13 and 15",image:"pk2.jpg",color:"mac2.png",info:"Thin. Fast. Powerful and portable.",
price:"From $1299 or $108.25/mo. for 12 mo. "
,price1:"Lease from $24.99/mo. for 36 mo. with",
price2:"Apple Upgrade◊Learn more"
   },
   {leble:"MacBook Air 14 and 16",image:"pk3.jpg",color:"mac3.png",info:"The most advanced MacBook Pro with",
    info2:" the world’s best laptop display. ",
price:"From $1999 or $166.58/mo. for 12 mo. ",
price1:"Lease from $38.99/mo. for 36 mo. with",
price2:"Apple Upgrade◊",
   },
    {leble:"iMac",image:"pk4.jpg", info:"An all-in-one desktop for creativity ",color:"mac4.png",
      info2:"and productivity.",
price:"From $1499 or $124.91/mo. for 12 mo."
,price1:"Lease from $28.99/mo. for 36 mo. with",
price2:"Apple Upgrade◊"
    },
    {leble:"Mac mini",image:"pk5.jpg",info:"The mini-est, most affordable ",
      info2:"Mac desktop.", hight:"New",
      price:"From $799 or $66.58/mo. for 12 mo.**"
    },
     {leble:"Mac Studio",image:"pk6.jpg",info:"Powerful performance and connectivity ",
      info2:"for pros.",   hight:"New",
         price:"From $2499 or $208.25/mo. for 12 mo.*"
,price1:"Lease from $48.99/mo. for 36 mo. with",
price2:"Apple Upgrade◊"
     },
    {leble:"Studio Display",image:"pk7.jpg",info:"A 5K Retina display that’s perfect",
      info2:" for Mac.",
price:"From $1599 or $133.25/mo. for 12 mo.**"
    },  
      {leble:"Studio Display XDR",image:"pk8.jpg",info:"The ultimate 5K Retina XDR display for",
        info2:" creative and pro workflows.",
        price:"From $3299 or $274.91/mo. for 12 mo.**"
      },

    ]
},
 
  laptop:{
    id: "laptop",
    name: "Laptops",
   product:[ 
 {leble:"MacBook Neo",image:"pk1.jpg",color:"mac1.png", info:"The magic of Mac at a suprising price.",price:"From $699 or $58.25/mofor 12 mo.**"},

   {leble:"MacBook Air 13 and 15",image:"pk2.jpg",color:"mac2.png",info:"Thin. Fast. Powerful and portable.",
price:"From $1299 or $108.25/mo. for 12 mo. "
,price1:"Lease from $24.99/mo. for 36 mo. with",
price2:"Apple Upgrade◊Learn more"
   },
   {leble:"MacBook Air 14 and 16",image:"pk3.jpg",color:"mac3.png",info:"The most advanced Mac laptop for ",
    info2:"demanding tasks.",
price:"From $1999 or $166.58/mo. for 12 mo. ",
price1:"Lease from $38.99/mo. for 36 mo. with",
price2:"Apple Upgrade◊",
   },
]
  },
  
  
  desktop:{
    id: "desktop",
    name: "Desktops",
     product:[ 
         {leble:"iMac",image:"pk4.jpg", info:"An all-in-one desktop for creativity ",color:"mac4.png",
      info2:"and productivity.",
price:"From $1499 or $124.91/mo. for 12 mo.**Lease from $28.99/mo. for 36 mo. with Apple Upgrade◊"
  },
    {leble:"Mac mini",image:"pk5.jpg",info:"The mini-est, most affordable ",
      info2:"Mac desktop.", hight:"New",
      price:"From $799 or $66.58/mo. for 12 mo.**"
    },
     {leble:"Mac Studio",image:"pk6.jpg",info:"Powerful performance and connectivity ",
      info2:"for pros.",   hight:"New",   price:"From $2499 or $208.25/mo. for 12 mo.**Lease from $48.99/mo. for 36 mo. with Apple Upgrade◊"
     },]
  },
 display: {
    id: "display",
    name: "Displays",
   product:[ 
     {leble:"Studio Display",image:"pk7.jpg",info:"A 5K Retina display that’s perfect",
      info2:" for Mac.",
price:"From $1599 or $133.25/mo. for 12 mo.**"
    },  
      {leble:"Studio Display XDR",image:"pk8.jpg",info:"The ultimate 5K Retina XDR display for",
        info2:" creative and pro workflows.",
        price:"From $3299 or $274.91/mo. for 12 mo.**"
      },

,]
  }
}


export default function categoryJunk() {
  const [isActive, setIsActive] = useState("All products")
    

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
                  {item.name}
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
                        <img src={prod.image} alt={prod.leble}
                        className="w-full h-[240px] absolute top-0" />
                         <div className="w-full justify-center items-center flex absolute top-[18rem]"><img src={prod.color} alt="" className="" /></div>
                       <div className="absolute bottom-[19rem] flex flex-col gap-0 w-full justify-center items-center">                        
                        <p className="text-[13px] text-orange-700 w-full justify-center items-center flex absolute top-[0rem]">{prod.hight}</p>
                       
                        <h3 className="text-[30px]  text-white font-light justify-center w-full justify-center items-center flex  gap-0 absolute top-[1.4rem] " >{prod.leble}</h3>

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
                               />
                             
                        </div>
                ))}
</div>
            )
        })}

    </div>
    {isActive === "All products" && (
                    <div className={` relative top-[0rem] left-[73.5rem] gap-5 flex flex-row  w-max justify-center `}>

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



    )}
    </div>
)
}