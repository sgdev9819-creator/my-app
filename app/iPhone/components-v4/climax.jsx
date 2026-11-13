
"use client"
const ClimaxItems =[
    { name:"Explore iPhone",

        itemsInfoPrime:[
            {
                name:"Explore All iPhone",
            },
              {
                name:"iPhone Duo",
            },
              {
                name:"iPhone 18 Pro",
            },
              {
                name:"iPhone Air",
            },
              {
                name:"iPhone 17",
            },
              {
                name:"iPhone 17e",
            },
              {
                name:"iPhone 16",
            },
              
             
            
        ],
moreinfo:[
   {info:"compare iPhone"},
   {info:"Switch from Android  "}
]

    },
    {
        name:"Shop iPhone",
         itemsInfo:[
            {
                name:"Shop iPhone",
            },
              {
                name:"iPhone Accessories",
            },
              {
                name:"Apple Upgrade",
            },
              {
                name:"Apple Trade In",
            },
              {
                name:"Carrier Deals at Apple",
            },
              {
                name:"Financing",
            },
              {
                name:"Personal Setup",
            },

        ]
    },
    {
        name:"More from iPhone",
 itemsInfo:[
            {
                name:"iPhone Support",
            },
              {
                name:"AppleCare",
            },
              {
                name:"iOS 27",
            },
              {
                name:"Apple Intelligence and Siri",

            },
             {
                name:"Apps by Apple",
                
            },
             {
                name:"iPhone Privacy",
                
            },
             {
                name:"Better with Mac",
                
            }, {
                name:"iCloud+",
                
            }, {
                name:"Wallet, Pay, Card",
                
            },
             {
                name:"Apple at Work",
                
            },
            
    ]
    },
   
]

export default function ClimaxAcc(){

return(

    <div className="w-full h-max absolute bottom-20 left-21 flex">
        <div className="w-full flex flex-row gap-[12rem]  ">
{ClimaxItems.map((items,index)=>(
    <div
    key={index}
    className="flex flex-col relative gap-4 justify-center w-max h-auto "
    > 
    <p className="text-[17px] w-max font-light  text-white/50">
        {items.name}
    </p>
     <ul
        className="flex flex-col w-max  gap-4 absolute top-11 pr-[13rem]"
        >
    {items?.itemsInfoPrime?.map((item,index)=>(
       
            <li 
             key={index}
            className="text-[28px] text-white/80 font-light  hover:text-white transition-colors duration-100"
    > 
                {
                    item.name
                }
            </li>
    

    ))}


    
        </ul>

         <ul
        className="w-max flex flex-col gap-4 absolute top-11 ">
{items?.itemsInfo?.map((info,index)=>( 
       
            <li 
            key={index}
            className="text-[17px] text-white/80 font-light hover:text-white transition-colors duration-100" > 
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
