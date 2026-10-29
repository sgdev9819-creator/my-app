"use client"
const HomeIcons =[
    {   
        name:"Apple One",
        text:"New",
        image:"s-f10.png",
    },
    {
         name:"Apple TV",
        image:"s-f1.png",
    },
    {
         name:"Apple Music",
        image:"s-f2.png",
    },
    {
         name:"Apple Arcade",
        image:"s-f3.png",
    },
    {
         name:"Apple Fitness+",
        image:"s-f9.png",
    },
    {
         name:"Apple News+",
        image:"s-f5.png",
    },
   
]



import Link from "next/link";
export default function HeroSlider(){
    return(
        <div className="absoute top-32 flex flex-row gap-0 w-full  justify-center items-center   ">
{HomeIcons.map((icon,index)=>(
    <div
    key={index}

    className="air-hero-slide ">
          <img src={icon.image} alt={index} className="h-[4.4rem] object-cover"  />
          <Link 
              href={icon.name}
          className="relative flex  w-full text-sm text-white/80 font-light  justify-center items-center  

          ">
            {icon.name}
          </Link>
          <span className="orange-600 text-sm font-light w-full ">
            {icon.text}
          </span>
        </div>
))}



        </div>
    )
}