"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
const items = {
  "Your New Wordrobe": {
    id: "Your New Wordrobe",
    name: "Your New Wordrobe",
    path:"#",
    product: [
      { image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
         status:"New",
         Id:0,
         info: "iPhone 18 Pro Max Silicone",
         classname:"Acc-cases",
         info1:"Case with MagSafe – Crisp...",
         price: "$49.00 or $4.08/mo. for 12 mo." },

      { image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case ",
         info1:"for AirPods",
            classname:"Acc-cases",
         price: "$24.95" 
        },

      { 
        images: ["#"], 
        imagesclass:"absolute top-0 left-0 w-full h-full",
        leble2: "AirPods 5", 
        classname:"spanClass",
        tag: "$129" 
      },

      { 
        images: ["#",], 
          classname:"spanClass1", 
          leble:"Everything's",
          leble1:"better together.",
          imagesclass:"absolute top-0 left-0 w-full h-full",
          current:"Holiday Picks",
          button: "che3.svg"
         },
      
      {  image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],        
         status:"Only at Apple",
            classname:"Acc-cases",
         info: "Herschel Ripstop Zip Case  ",
         info1:"for AirPods",
         price: "$24.95"  },

     
      { image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
   classname:"Acc-cases",
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case  ",
         info1:"for AirPods",
         price: "$24.95" },

      {  image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
           classname:"Acc-cases",
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case ",
         info1:"for AirPods",
         price: "$24.95"  },

      { image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
           classname:"Acc-cases", 
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case ",
         info1:"for AirPods",
         price: "$24.95" },

      {  image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
          classname:"Acc-cases", 
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case ",
         info1:"for AirPods",
         price: "$24.95" },

         {  image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
          classname:"Acc-cases", 
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case ",
         info1:"for AirPods",
         price: "$24.95" },

      { images: ["#", ],
          classname:"spanClass", 
          leble2: "Crossbody Strap", 
          imagesclass:"absolute top-0 left-0 w-full h-full",
      tag: "$59 " },
    ]
    
  },
  "Smart Home Accessories": {
    id: "Smart Home Accessories",
    name: "Smart Home Accessories",
      path:"#",
    product: [
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg"],
            classname:"Acc-cases",
          info: "The magic of Mac at a surprising price", 
          price: "From $699 or $58.25/mo for 12 mo.**" },

       { image: ["pk7.jpg"],
           classname:"Acc-cases",
         info: "A 5K Retina display that’s perfect for Mac." },

       { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], 
        classname:"Acc-cases",
        info: "All-in-one desktop for creativity and productivity.", 
        price: "From $1499 or $124.91/mo. for 12 mo.**" },

      { image: ["pk5.jpg"],
           classname:"Acc-cases",
          info: "The mini-est most affordable Mac desktop.",
           price: "From $799 or $66.58/mo. for 12 mo.**" },

      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], 
         classname:"Acc-cases",
         info: "Powerful performance and connectivity for pros.", 
        price: "From $2499 or $208.25/mo. for 12 mo.**" },

      { image: ["pk8.jpg"], 
         classname:"Acc-cases", 
      info: "The ultimate 5K Retina XDR display for creative and pro workflows." }
    
    ]
  },
  "Power Picks": {
    id: "Power Picks",
    name: "Power Picks",
      path:"#",
    product: [
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg"],
           classname:"Acc-cases",
         info: "The magic of Mac at a surprising price",
          price: "From $699 or $58.25/mo for 12 mo.**" },

       { image: ["pk7.jpg"],  
          classname:"Acc-cases",
         info: "A 5K Retina display that’s perfect for Mac." },

       { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], 
          classname:"Acc-cases", 
          info: "All-in-one desktop for creativity and productivity.",
           price: "From $1499 or $124.91/mo. for 12 mo.**" },
      { image: ["pk5.jpg"],
         classname:"Acc-cases",
         info: "The mini-est most affordable Mac desktop.",
          price: "From $799 or $66.58/mo. for 12 mo.**" },
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], 
       classname:"Acc-cases",   
         info: "Powerful performance and connectivity for pros.",
          price: "From $2499 or $208.25/mo. for 12 mo.**" },

      { image: ["pk8.jpg"],   
         classname:"Acc-cases",
         info: "The ultimate 5K Retina XDR display for creative and pro workflows." }
    
    ]
  },
  "Travel Ready": {
    id: "Travel Ready",
    name: "Travel Ready",
      path:"#",
    product: [
      { image: ["pk7.jpg"], 
           classname:"Acc-cases",
        info: "A 5K Retina display that’s perfect for Mac.",
        info1:"",
        status:"New"
      },
       { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"],
            classname:"Acc-cases",
             info: "All-in-one desktop for creativity and productivity.", 
             price: "From $1499 or $124.91/mo. for 12 mo.**" },

      { image: ["pk5.jpg"],
           classname:"Acc-cases",
           info: "The mini-est most affordable Mac desktop.", 
           price: "From $799 or $66.58/mo. for 12 mo.**" },

      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"],  
          classname:"Acc-cases",
         info: "Powerful performance and connectivity for pros.", 
         price: "From $2499 or $208.25/mo. for 12 mo.**" },

      { image: ["pk8.jpg"], 
           classname:"Acc-cases",
            info: "The ultimate 5K Retina XDR display for creative and pro workflows." }
    
      
    ]
  },
  "Work from Home": {
    id: "Work from Home",
    name: "Work from Home",
      path:"#",
    product: [
      { image: ["pk7.jpg"],
          classname:"Acc-cases",
          info: "A 5K Retina display that’s perfect for Mac." },

       { image: ["pk7.jpg"],    classname:"Acc-cases",
         info: "A 5K Retina display that’s perfect for Mac." },
       { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], 
           classname:"Acc-cases",
           info: "All-in-one desktop for creativity and productivity.", 
           price: "From $1499 or $124.91/mo. for 12 mo.**" },
      { image: ["pk5.jpg"], 
           classname:"Acc-cases",
           info: "The mini-est most affordable Mac desktop.",
            price: "From $799 or $66.58/mo. for 12 mo.**" },
      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], 
          classname:"Acc-cases",
          info: "Powerful performance and connectivity for pros.",
           price: "From $2499 or $208.25/mo. for 12 mo.**" },
      { image: ["pk8.jpg"], 
          classname:"Acc-cases",
         info: "The ultimate 5K Retina XDR display for creative and pro workflows." }
    
      
    ]
  }
}

function ProductCard({ prod, activeMode }) {
  const [showleft, setshowleft] = useState(false)
  const [showright, setshowright] = useState(false)
  const scrollRef = useRef(null)

  const showButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setshowleft(scrollLeft > 10)
      setshowright(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container && activeMode) {
      showButtons()
      container.addEventListener("scroll", showButtons)
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", showButtons)
      }
    }
  }, [activeMode])

  const handleLeft = () => {
    scrollRef.current?.scrollBy({ left: -256, behavior: "smooth" })
  }

  const handleRight = () => {
    scrollRef.current?.scrollBy({ left: 256, behavior: "smooth" })
  }

  return (
    <div className={prod.classname}>
     
      <div className="relative w-full">
        <div ref={scrollRef} className="mini-scrollbar">
          {prod?.image?.map((img, index) => (
            <div key={index} className={`shrink-0 w-full h-[200px] relative justify-center items-center flex top-0 `}>
            <img
              key={index}
              src={img}
              alt={prod.leble}
              onLoad={showButtons}
              className="w-[150px] h-[234px] object-cover rounded-2xl p-[0.5rem]"
            />
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row gap-[80px] justify-center items-center absolute top-[8rem]">
          {showleft && (
            <button
              onClick={handleLeft}
              className="absolute left-[1.5rem] z-[100] w-max h-max rounded-full justify-center items-center inline-flex p-[9px] bg-[rgba(255,255,255,0.747)] backdrop-blur-[10px] transition-colors duration-300 hover:bg-white/90"
            >
              <img src="che4.svg" alt="previous" className="w-[18px] h-auto" />
            </button>
          )}
          {showright && (
            <button
              onClick={handleRight}
              className="absolute right-[1.5rem] z-[100] w-max h-max rounded-full justify-center items-center inline-flex p-[9px] bg-[rgba(255,255,255,0.747)] backdrop-blur-[10px] transition-colors duration-300 hover:bg-white/90"
            >
              <img src="che4.svg" alt="next" className="w-[18px] h-auto scale-x-[-1]" />
            </button>
          )}
        </div>
        
        


<div className="flex flex-col w-full absolute top-[20rem]  pl-[2rem]">
<span className="text-orange-600 text-[14px] font-light">
  {prod.status}
</span>
  <div className="flex flex-col text-white text-[20px] font-light">
    <span >{prod.info}</span>
    <span className=" mt-[-0.5rem]">{prod.info1}</span>
  </div>
  <span className="text-[13px] text-white/60 mt-[0.5rem] font-light">
    {prod.price}
  </span>

</div>

<div className="flex flex-col w-full absolute top-[48rem]   pl-[2rem]">
  <span className="text-white text-[14px] font-light">
  {prod.current}
  </span>
  <div className="flex flex-row w-full ">
<div className="flex flex-col text-white text-[26px] font-light">
    <span >{prod.leble}</span>
    <span className=" mt-[-0.5rem]">{prod.leble1}</span>
  </div>
  <button
              className="absolute top-[4rem] right-[1.5rem] z-[100] w-max h-max rounded-full justify-center items-center inline-flex p-[9px] bg-[rgba(255,255,255,0.747)] backdrop-blur-[10px] transition-colors duration-300 hover:bg-white/90"
            >
              <img src={prod?.button} alt="previous" className="w-[18px] h-auto" />
            </button>

  </div>
  
</div>

<div className="flex flex-col w-full absolute top-[21rem]  pl-[2rem]">
  <div className="flex flex-col text-white text-[26px] font-light">
    <span >{prod.leble2}</span>
   
  </div>
  <span className="text-[13px] text-white/60 mt-[0.5rem] font-light">
    {prod.tag}
  </span>
      </div>
      </div>

      
        
          <img src={prod?.images} alt="" className={prod.imagesclass} />
      

    </div>
  )
}

export default function Cases() {
  const [isActive, setIsActive] = useState("Your New Wordrobe")

  return (
    <div className="relative w-full h-max justify-center items-center flex flex-col">
      <h2 className="text-white text-[56px] font-light justify-center absolute top-34 left-21">
        Our top picks. Your next favorites.
      </h2>
      <div className="absolute left-0 top-57 w-full h-max">
        <div className="flex flex-row w-[723px] h-[44px] p-1 ml-21 bg-white/5 rounded-full z-[100]">
          {Object.values(items).map((item, index) => {
            const activeMode = isActive === item.id
            return (
              <button
                key={index}
                onClick={() => setIsActive(item.id)}
                className="relative w-max px-5 py-2 flex flex-row rounded-3xl text-[14px] transition-colors duration-100"
              >
                {activeMode && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/80 justify-center items-center rounded-3xl shadow-sm"
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-800 font-light ${activeMode ? "text-black" : "text-white"}`}>
                  {item.name}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative top-[1rem] w-full ">
          {Object.values(items).map((category, index) => {
            const activeMode = isActive === category.id
            return (
              <div key={index} className={activeMode ? "activeAcc" : "not-active"}>
                {category.product.map((prod, prodIndex) => (
                  <ProductCard key={prodIndex} prod={prod} activeMode={activeMode} />
                ))}

       <div className="w-full h-max  justify-center items-center flex absolute top-[120rem] z-[60] ">
        <Link href={category.path} className="py-[0.8rem] px-[2rem] rounded-[26px] text-white border-1 border-white justify-center items-center flex text-[17px] hover:text-black  hover:bg-white  ">
          Shop All
        </Link>
       </div>


              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}