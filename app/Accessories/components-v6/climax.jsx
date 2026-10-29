
"use client"
const ClimaxItems =[
    { name:"Shop by Product",
        itemsInfoPrime:[
            {
                name:"iPhone",
            },
              {
                name:"iPad",
            },
              {
                name:"Mac",
            },
              {
                name:"Apple Watch",
            },
              {
                name:"Apple Vision Pro",
            },
              {
                name:"AirPods",
            },
              {
                name:"TV & Home",
            },
              {
                name:"AirTag",
            },
              {
                name:"Beats",
            },
            
        ]
    },
    {
        name:"Shop by Category",
         itemsInfo:[
            {
                name:"Smart Home Accessories",
            },
              {
                name:"Chargers & Adapters",
            },
              {
                name:"Hard Drives & Storage",
            },
              {
                name:"Content Creation",
            },
              {
                name:"Cases & Protection",
            },
              {
                name:"Gaming",
            },
              {
                name:"Software",
            },
              {
                name:"Headphones & Speakers",
            },
              {
                name:"Health & Fitness",
            },
             {
                name:"Office Accessories",
            },
              {
                name:"Mice & Keyboards",
            },
            
        ]
    },
    {
        name:"Explore More Accessories",
 itemsInfo:[
            {
                name:"College Essentials",
            },
              {
                name:"New Arrivals",
            },
              {
                name:"Made by Apple",
            },
              {
                name:"Accessibility",
            },
            
    ]
    },
   
]

export default function ClimaxAcc(){

return(

    <div className="w-full h-max absolute bottom-20 left-21 flex">
        <div className="w-full flex flex-row gap-27  ">
{ClimaxItems.map((items,index)=>(
    <div
    key={index}
    className="flex flex-col relative gap-4 justify-center w-max h-auto"
    > 
    <p className="text-1xl w-max font-light  text-white/50">
        {items.name}
    </p>
     <ul
        className="flex flex-col w-max  gap-4 absolute top-11"
        >
    {items?.itemsInfoPrime?.map((item,index)=>(
       
            <li 
             key={index}
            className="text-2xl text-white/80 font-light  hover:text-white transition-colors duration-100"
    > 
                {
                    item.name
                }
            </li>
    

    ))}
        </ul>

         <ul
        className="w-max flex flex-col gap-4 absolute top-11">
{items?.itemsInfo?.map((info,index)=>( 
       
            <li 
            key={index}
            className="text-[15px] text-white/80 font-light hover:text-white transition-colors duration-100" > 
                {
                    info.name
                }
            </li>
           
))}    
 </ul>
    </div>


))}
            

        </div>
    </div>
)



}
