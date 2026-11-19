"use client"


const itemflex =[
{
    name:"120Hz",
    text:"Enables up to",
    text1:"refresh rates"
},
{
     name:"10%",
    text:"Renders",
    text1:"more pixels8"
},
{
     name:"3 hours",
    text:"Delivers up to",
    text1:"video playback1"
},
]

export default function trackflex(){ 
return(
    <div className=" relative flex flex-row gap-[3rem] justify-center items-center w-full">
     {itemflex.map((item,index)=>(
        <div key={index} className="flex flex-col gap-3 justify-center items-center w-[250px] h-[300px]">
            <span className="w-full h-[1px] flex bg-white/50" ></span>
             <p className="text-white/50 font-light text-[20px] ">
                {item.text} 
            </p>

            <span className="text-white font-light text-[44px] ">
                {item.name}
            </span>

            <p className="text-white/50 font-light text-[20px] ">
                 {item.text1}
            </p>
        </div>

     ))}
     </div>
)


}