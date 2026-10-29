"use client"
const cards =[
    {
        name:" Fast delivery or pickup.",
        button:"plus.svg",
        info:"Enjoy two-hour delivery from an Apple Store,",
        info2:" free delivery, or easy pickup.",
        image:"#",
    },
   
    {
        name:"    Free and easy returns.",
        button:"plus.svg",
        info:"Complete your return online or take it",
        info2:" to an Apple Store.",
        image:"#",
    },


    {
        name:" Shop with Apple Card.",
        button:"plus.svg",
        info:"Get 3% Daily Cash back when you",
        info2:" shop at Apple with Apple Card.",
        image:"#",
    },




]

export default function Cards(){

    return(
        <div className=" absolute flex flex-row w-full justify-center 
        items-center overflow-x-auto scrollbar-none gap-4" >
            {cards.map((card,index)=>(
                <div  
                key={index}
                className="relative w-[400px] h-[250px] rounded-3xl bg-[rgba(49,48,48,0.315)] flex flex-col
                gap-[2rem] transition-card duration-500"
                >
                    <img src={card.image} alt="" className="absolute top-[1rem] left-[1rem]"/>
                    <div className="flex flex-col absolute pt-20 pb-15 pr-18 pl-10">
                    <h3 className="text-white text-[33px] w-max font-light ">
                        {card.name}
                    </h3>
                    <span className="text-white text-[17px] font-light w-max" >
                        {card.info}
                    </span>
                    
                    <span className="text-white text-[17px] font-light w-max">
                        {card.info2}
                    </span>
                    </div>
                    <button className="w-max rounded-full justify-center items-center p-2 bg-white absolute bottom-[2rem] right-[2rem] ">
                    <img src={card.button} alt={index}  className="w-[20px] h-[20px] object-cover"/>
                    </button>
                    </div>
            ))}

        </div>
    )
}

