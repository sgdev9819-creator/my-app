"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
const items = {
  "Holiday Picks": {
    id: "Holiday Picks",
    name: "Holiday Picks",
    path:"#",
    product: [
      { image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
         status:"New",
         Id:0,
         info: "iPhone 18 Pro Max Silicone",
         classname:"Acc-cases",
         info1:"Case with MagSafe – Crisp...",
         price: "$49.00 or $4.08/mo. for 12 mo." },

      { image: ["mini1.webp", ],
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case ",
         info1:"for AirPods",
            classname:"Acc-cases",
         price: "$24.95" 
        },

      { 
        images: ["ac2"], 
        imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
        leble2: "AirPods 5", 
        classname:"spanClass",
        tag: "$129" 
      },

      { 
        images: ["ac1",], 
          classname:"spanClass1", 
          leble:"Everything's",
          leble1:"better together.",
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
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

      { images: ["ac", ],
          classname:"spanClass", 
          leble2: "Crossbody Strap", 
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
      tag: "$59 " },
    ]
    
  },




  "Colorful Finds": {
    id: "Colorful Finds",
    name: "Colorful Finds",
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
        imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
        leble2: "AirPods", 
        classname:"spanClass",
        tag: "$129" 
      },

      { 
        images: ["#",], 
          classname:"spanClass1", 
          leble:"Lot's of",
          leble1:"bright ideas.",
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
          current:"Colorful Finds",
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
          leble2: "Smart Folio", 
        
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
      tag: "$59 " },
    ]
  },




  "Travel Ready": {
    id: "Travel Ready",
    name: "Travel Ready",
      path:"#",
    product: [
       { image: ["mini1.webp",],
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
        imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
        leble2: "AirPods 5", 
        classname:"spanClass",
        tag: "$129" 
      },

      { 
        images: ["#",], 
          classname:"spanClass1", 
          leble:"Everything's",
          leble1:"better together.",
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
          current:"Holiday Picks",
          button: "che3.svg"
         },
      
      {  image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],        
         status:"Only at Apple",
            classname:"Acc-cases",
         info: "Herschel Ripstop Zip Case  ",
         info1:"for AirPods",
         price: "$24.95"  },

     
      { image: ["mini1.webp", ],
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

      {  image: ["mini1.webp",],
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
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
      tag: "$59 " },
    ]
  },




  "Home Essentials": {
    id: "Home Essentials",
    name: "Home Essentials",
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
        imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
        leble2: "AirPods 5", 
        classname:"spanClass",
        tag: "$129" 
      },

      { 
        images: ["#",], 
          classname:"spanClass1", 
          leble:"Everything's",
          leble1:"better together.",
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
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
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
      tag: "$59 " },
    ]
  },






  "Power Picks": {
    id: "Power Picks",
    name: "Power Picks",
      path:"#",
    product: [
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

      

      { image: ["pk1.jpg", "pk1.jpg", "pk1.jpg", "pk1.jpg"], 
          classname:"Acc-cases",
          info: "Powerful performance and connectivity for pros.",
           price: "From $2499 or $208.25/mo. for 12 mo.**" },

      { images: ["#",], 
          classname:"spanClass1", 
          leble:"Everything's",
          leble1:"better together.",
          imagesclass:"absolute top-0 left-0 w-full h-full rounded-[22px] z-[5]",
          current:"Holiday Picks",
          button: "che3.svg"
      },
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
         
      {  image: ["mini1.webp", "mini2.webp", "mini3.webp","mini4.webp"],
          classname:"Acc-cases", 
         status:"Only at Apple",
         info: "Herschel Ripstop Zip Case ",
         info1:"for AirPods",
         price: "$24.95" },

      
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
    scrollRef.current?.scrollBy({ left: -236, behavior: "smooth" })
  }

  const handleRight = () => {
    scrollRef.current?.scrollBy({ left: 236, behavior: "smooth" })
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

<div className="flex flex-col w-full absolute top-[48rem]  z-[10] pl-[2rem]">
  <span className="text-black text-[14px] font-light">
  {prod.current}
  </span>
  <div className="flex flex-row w-full ">
<div className="flex flex-col text-black text-[26px] font-light">
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

<div className="flex flex-col w-full absolute top-[21rem]  pl-[2rem] z-[10]">
  <div className="flex flex-col text-black text-[26px] font-light">
    <span >{prod.leble2}</span>
   
  </div>
  <span className="text-[13px] text-black/60 mt-[0.5rem] font-light">
    {prod.tag}
  </span>
      </div>
      </div>

      
        
          <img src={prod?.images} alt="" className={prod.imagesclass} />
      

    </div>
  )
}

export default function Cases() {
  const [isActive, setIsActive] = useState("Holiday Picks")

  return (
    <div className="relative top-[0rem]  w-full h-max justify-center items-center flex flex-col">
      <h2 className="text-white text-[56px] font-light justify-center absolute top-34 left-21">
        Our top picks. Your next favorites.
      </h2>
      <div className="relative left-0 top-[15.2rem] w-full h-max">
        <div className="flex flex-row w-[603px] h-[44px] p-1 ml-21 bg-white/5 rounded-full z-[100]">
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
                <span className={`relative z-10 transition-colors duration-800 font-light hover:text-white ${activeMode ? "text-black" : "text-white/70"}`}>
                  {item.name}
                </span>
              </button>
            )
          })}
        </div>

        <div className="relative top-[2.5rem] w-full ">
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