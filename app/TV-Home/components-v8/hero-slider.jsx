"use client"
const HomeIcons =[
    {
        name:"Apple TV 4K",
        image:"gc-9.png",
    },
    {
         name:"Apple TV app",
        image:"gc-2.png",
    },
    {
         name:"Apple TV",
        image:"gc-2.png",
    },
    {
         name:"HomePod",
        image:"gc-9.png",
    },
    {
         name:"HomePod mini",
        image:"gc-2.png",
    },
    {
         name:"Home app",
        image:"gc-9.png",
    },
      {
         name:"Accessories",
        image:"gc-2.png",
    },
]


 

 

 

 

 

 

import Link from "next/link";
export default function HeroSlider(){
    return(
        <div className="absoute top-35 flex flex-row gap-6 w-full pt-2 pb-2 justify-center items-center bg-[rgba(0,0,0,0.69)] backdrop-blur-[13px]  ">
{HomeIcons.map((icon,index)=>(
    <div
    key={index}

    className="home-slider ">
          <img src={icon.image} alt={index} className={`h-[40px]  rounded-2xl
            ${index === 0? "w-[75px] h-[70px]":"w-[40px]"} ${index === 3? "w-[75px] h-[70px]":"w-[40px] "}  ${index === 5? "w-[75px] h-[70px]":"w-[40px] ]"}
            `}  />
          <Link 
              href={icon.name}
          className={`relative flex  w-full text-sm text-white font-light  justify-center items-center  
            ${index === 1? "bottom-[0rem] ":"bottom-[0.9rem]"}  ${index === 2? "bottom-[0rem] ":"bottom-[0.9rem]"} ${index === 4? "bottom-[0rem] ":"bottom-[0.9rem]"} ${index === 6? "bottom-[0rem] ":"bottom-[0.9rem]"}
          `}>
            {icon.name}
          </Link>
        </div>
))}



        </div>
    )
}