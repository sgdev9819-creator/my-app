"use client"
import { useState } from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
const items = { 
  "Your New Wordrobe": { 
    id: "Your New Wordrobe",
    name: "Your New Wordrobe",
    product: [ 
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg"], leble: "MacBook Neo", info: "The magic of Mac at a surprising price", price: "From $699 or $58.25/mo for 12 mo.**" },
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], leble: "MacBook Air 13 and 15", info: "Thin. Fast. Powerful and portable.", price: "From $1299 or $108.25/mo. for 12 mo.**" },
      { image: ["pk3.jpg"], leble: "MacBook Air 14 and 16", info: "The most advanced Mac laptop for demanding tasks.", price: "From $1999 or $166.58/mo. for 12 mo.**" },
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], leble: "iMac", info: "All-in-one desktop for creativity and productivity.", price: "From $1499 or $124.91/mo. for 12 mo.**" },
      { image: ["pk5.jpg"], leble: "Mac mini", info: "The mini-est most affordable Mac desktop.", price: "From $799 or $66.58/mo. for 12 mo.**" },
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], leble: "Mac Studio", info: "Powerful performance and connectivity for pros.", price: "From $2499 or $208.25/mo. for 12 mo.**" },
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], leble: "Studio Display", info: "A 5K Retina display that’s perfect for Mac.", price: "From $1599 or $133.25/mo. for 12 mo.**" },
      { image: ["pk8.jpg"], leble: "Studio Display XDR", info: "The ultimate 5K Retina XDR display for creative and pro workflows.", price: "From $3299 or $274.91/mo. for 12 mo.**" },
    ]
  },
  "Smart Home Accessories": {
    id: "Smart Home Accessories",
    name: "Smart Home Accessories",
    product: [ 
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg"], leble: "MacBook Neo", info: "The magic of Mac at a surprising price", price: "From $699 or $58.25/mo for 12 mo.**" },
    ]
  },
  "Power Picks": {
    id: "Power Picks",
    name: "Power Picks",
    product: [ 
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg"], leble: "MacBook Neo", info: "The magic of Mac at a surprising price", price: "From $699 or $58.25/mo for 12 mo.**" },
    ]
  },
  "Travel Ready": {
    id: "Travel Ready",
    name: "Travel Ready",
    product: [ 
      { image: ["pk7.jpg"], leble: "Studio Display", info: "A 5K Retina display that’s perfect for Mac." },  
      { image: ["pk8.jpg"], leble: "Studio Display XDR", info: "The ultimate 5K Retina XDR display for creative and pro workflows." }
    ]
  },
  "Work from Home": {
    id: "Work from Home",
    name: "Work from Home",
    product: [ 
      { image: ["pk7.jpg"], leble: "Studio Display", info: "A 5K Retina display that’s perfect for Mac." },  
      { image: ["pk8.jpg"], leble: "Studio Display XDR", info: "The ultimate 5K Retina XDR display for creative and pro workflows." }
    ]
  }
}



export default function Cases(){
  const [isActive, setIsActive] = useState("Student Life")

    return(
        <div className="relative w-full h-max justify-center items-center flex flex-col ">
      <h2 className="text-white text-4xl font-light  justify-center absolute top-34 left-21 ">
        Our top picks. Your next favorites.
      </h2>
    <div className="absolute left-0 top-57 ">
 <div className="flex flex-row w-[723px] h-[44px] p-1 ml-21 bg-white/5 rounded-full z-100">
    {Object.values(items).map((item,index)=>{ 
      const activeMode = isActive === item.id
      return(
       <button key={item.id}
              onClick={() => setIsActive(item.id)}
            className="relative w-max px-5 py-2 flex flex-row rounded-3xl text-[14px] transition-colors duration-100"
           
              >
            {activeMode && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/89 text-white justify-center items-center rounded-3xl shadow-sm"
                    transition={{ type: "spring", stiffness: 105, damping: 26 }}
                  />
                
                )}
             <span className={`relative z-10 transition-colors duration-800 font-light  ${activeMode ? "text-black" : "text-white"}`}>
                  {item.name}
                  </span>
              </button>
      )
})}
</div>



         <div className="Acc-case-container" >
        {Object.values(items).map((category,index)=>{
            const activeMode = isActive === category.id

            return(
                <div
                 key={index}
            className={`${activeMode ? "activeAcc":"not-active"
            }`}>




                {category.product.map((prod,index)=>(
                    <div
                    key={index}
                    className="Acc-cases"
                    >
                        <img src={prod.image} alt={prod.leble}
                        className="w-full h-[240px] absolute top-0" />
                       <div className="absolute bottom-[15rem] flex flex-col gap-0 w-full justify-center items-center">                        
                        <h3 className="text-[28px]  text-white font-light  inline-flex items-center" >{prod.leble}</h3>
                        <p className="text-white font-light  text-[17px] inline-flex justify-self-center items-center justify-center w-full pl-[15px] pr-[15px]" >{prod.info}</p>
                     
                      </div>
                      <div className="relative w-full justify-center items-center flex top-33">
                 <p className=" flex  justify-center items-center w-[300px] font-light  text-white text-sm ">{prod.price} </p>
</div>
                      
                             
                        </div>
                ))}
</div>
            )
        })}

    </div>
    

</div>
        </div>
    )
}
