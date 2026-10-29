"use client"
const cards =[
    {
        name:"Reset Apple Account password",
        image:"cards-11.svg",
    },
   
    {
        name:"Change a subscription",
        image:"cards-2.svg",
    },


    {
        name:"Billing and payments",
        image:"cards-1.svg",
    }




]

import Link from "next/link"

export default function Cards(){

    return(
        <div className=" absolute flex flex-row w-full justify-center 
        items-cente gap-6" >
            {cards.map((card,index)=>(
              <div  key={index}
                 className="cover-support-card"
                 >
                <div  
               
                className="support-card"
                ><div className="flex flex-col absolute top-[2rem] justify-content items-center w-full h-full gap-4">
                    <img src={card.image} alt={card.name} className=" w-[80px] h-[60px] "/>
                    
                    <Link  href="#" className="text-blue-600 text-[18px] w-max font-normal no-underline">
                        {card.name}
                    </Link>
                  </div>
                    </div>
                    </div>
            ))}

        </div>
    )
}

