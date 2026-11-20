"use client"
const HomeIcons =[
    {
        name:"Apple One",
        image:"ent1.png",
    },
    {
         name:"Apple TV",
        image:"ent2.png",
    },
    {
         name:"Apple Music",
        image:"ent3.png",
    },
    {
         name:"Apple Arcade",
        image:"ent4.png",
    },
    {
         name:"Apple Fitness+",
        image:"ent5.png",
    },
    {
         name:"Apple News+",
        image:"ent16.png",
    },
      {
         name:"Apple Podcasts",
        image:"ent7.png",
    },
    {
         name:"Apple Books",
        image:"ent8.png",
    },
]



import Link from "next/link";
export default function HeroSlider(){
    return(
        <div className="absolute top-[0.6rem] flex flex-row gap-[0.rem] w-full pt-2 pb-2 justify-center items-center   ">
{HomeIcons.map((icon,index)=>(
    <div
    key={index}

    className="entertainment-slide">
          <img src={icon.image} alt={index} className={`h-max object-cover w-auto`}  />
          
          <Link 
              href={icon.name}
          className={` absolute flex w-full  text-[13px] text-white font-light  justify-center items-center  
${index === 0  ? "top-[38px] ":"top-[2.8rem] "}
${index === 1  ? "top-[38px] ":"top-[2.8rem] "}

          `}>
            {icon.name}
          </Link>
        
        </div>
))}



        </div>
    )
}