"use client"
import { useRef,useEffect,useState } from "react";
export default function Images(){
    const items = [
        {
            name: "Here and wow.",
            down:"the accesories you love",
            down2:"In a fresh mix of colors.",
            image:"/12.jpg",
           
        },
        {
           
            top:"NEW",
            name:"iPhone 17 Pro Silicone Case",
            title2:"with Magsafe Bright-Guava.",
            price:"$49.00 ",
               image:"/13.jpg",
            colorVariants:[
                {
                  id:1, images:"/color1.png"
                },
                {
                 id:2,  images:"/color3.png"
                },
                {
                  id:3,   images:"/color5.png"
                },
                {
                   id:4,  images:"/color6.png"
                },
                  {
                     id:5,images:"/plus.svg"
                },
        ]
        },
        {   top:"NEW",
            name:"Crossbaby Strap Bright-Guava.",
            price:"$59.00 ",
               image:"/14.jpg",
            colorVariants:[
                {
                    id:6, images:"/color7.png"
                },
                {
                 id:7,    images:"/color9.png"
                },
                {
                  id:8,     images:"/color11.png"
                },
                {
                   id:9,   images:"/color12.png",

                },
                {
                    id:10, images:"/plus.svg"
                }
            ]
        },
        {
             top:"NEW",
            name:"Megsafe Charger (1 m).",
               price:"$39.00 ",
               image:"/15.jpg",
           
        },
        {
             top:"NEW",
            name:"iPone 17e Clear Case with.",
            title:"Magsafe",
              price:"$49.00 ",
               image:"/16.jpg",
           
        },
        {
            name:"46mm Clementain Sport Band- Ml",
              price:"$49.00 ",
               image:"/17.jpg",
            colorVariants:[
                {
                 id:11,  images:"/color30.png"
                },
                {
                  id:12,  images:"/color32.png"
                },
                {
                  id:13,    images:"/color34.png"
                },
                {
                   id:14,   images:"/color35.png"
                },
                {
                    id:15, images:"/plus.svg"
                }
            ]
              
        },

          {
            name: "Magic Keyboard for iPad Air 13inch  (M4) US English-...",
             price:"$319.00 ",
            image:"/18.jpg",
            colorVariants:[
                 {
                  id:16, images:"/color36.png"
                },
                {
                  id:17,  images:"/color37.png"
                },
              
            ]
        },
         
          {
            name: "iPhone Air Mgasafe Battery.",
                       price:"$99.00 ",
            image:"/21.jpg",
            
        },
          {
            name: "iPhone Air Bumper-Tan.",          
           price:"$39.00 ",
            image:"/22.jpg",
            colorVariants:[
                {
                 id:18,  images:"/color38.png"
                },
                {
                  id:19,  images:"/color39.png"
                },
                {
                   id:20,   images:"/color40.png"
                },
                {
                     id:21, images:"/color41.png"
                },
                
            ]
        },
          {
            name: "mophie Check Case for.",
               price:"$59.95 ",
            title:"iPhone Air",
            image:"/23.jpg",
          
        },
          {
            name: "Hershcle Cloude Sling for iPhone .",
               price:"$59.95 ",
            image:"/24.jpg",
            colorVariants:[
                {
                   id:22, images:"/color42.png"
                },
                {
                    id:23, images:"/color43.png"
                },
               
            ]
        },
          {
            name: "40W Dainamic Power Adapter.",
            title:"with 60W max",
               price:"$39.00 ",
            image:"/25.jpg",
          
        },
          {
           name: "20W USB-C Power Adapter.",
               price:"$19.00 ",
            image:"/26.jpg",
           
        },
         
          {
            name: "Explor All Assecories.",
            image:"/12.jpg",
           
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
        <div className="hero-images-container">
    <div ref={containerRef} className="hero-images-content">
                {items.map((item,index)=>(
                <div 
                key={index}
                className={`${index === 0 || index === 13 ? "body-images-content1 hero" : "body-images-content hero"}`}>
                    <img src={item.image} className={`${index === 0 || index === 13 ?   "h-max":"h-[220px] absolute top-18"}`} />
                    <div className={`${index === 0 || index === 13 ? "scroll-item-text-4" : "scroll-item-text-5"}`}>
                        <p  className="absolute text-[11px] top-[-20px] text-orange-800 ">{item.top}</p>
                     
                     
                     
                      <ul className="w-full absolute top-40 flex flex-row gap-2 justify-center items-center">
                       {(item?.colorVariants?? []).map((color)=>( 
                    <li
                    key={color.id}
                    className="rounded-full w-max"
                    >
                       <img src={color.images} alt="" className="w-[13px] h-[13px] rounded-full" />
                      </li>

                       ))}
                         </ul>

                       <h3 className={` text-black font-semibold text-1xl  ${index === 0 || index === 13  ? "w-[510px] text-3xl":"w-[400px] text-[17px] mt-0"}`}>{item.name}</h3>
                       <div className=" flex flex-col gap-0">
                       <p className="text-sm">
                        {item.down} 
                        </p>
                        <p className="text-sm">
                        {item.down2}
                    </p>
                    </div>
                  
                      
                        <h3>{item.title}</h3>
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