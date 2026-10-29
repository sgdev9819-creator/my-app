"use client"

const SupportItems=[
    {
        name:"iPhone",
        image:"support-1.png",
    },
    {
          name:"Mac",
        image:"support-2.png",
    },
    {
          name:"iPad",
        image:"support-3.png",
    },
    {
          name:"Watch",
        image:"support-4.png",
    },
    {
          name:"Vision",
        image:"support-5.png",
    },
    {
          name:"AirPods",
        image:"support-6.png",
    },

]
import Link from "next/link"
export default function heroImages(){
    return(
        <div className="absolute w-full h-max justify-center items-center flex flex-row gap-23" >
            { SupportItems.map((items,index)=>(
                <Link
                href={items.name}
                key={index}
                   className={`relative flex flex-col gap-3 w-[35px] h-auto justify-center items-center no-underlline font-light 
                   hover:underline ${ index===1 ? "w-[110px] top-1":"w-[35px]"} ${index===2 ? "w-[72px] top-3":"w-[35px]"} ${index===3 ? "top-1 w-[40px]":"w-[35px]"} ${index===4 ? "w-[70px]":"w-[35px]"} ${index===5 ? "w-[65px] top-1":"w-[35px]"}
                   `}
                >
                    <img src={items.image} alt={index} className="w-full h-auto object-cover" />
                    <span className="text-white text-1xl font-light hover-underline">
                        {items.name}
                    </span>
                </Link>

                )) }
        </div>
    )
}