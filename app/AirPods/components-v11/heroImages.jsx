"use client"
const items=[

 {
    name:" AirPods 5",
    text:"Discover the magic of Active Noise Cancellation.",
    images:"air2.png"
 },
 {
     name:"  AirPods Pro 3",
    text:"The world’s best in-ear Active Noise Cancellation.",
    images:"air1.png"
 },



]

import Button  from "./button"
export default function HeroImage(){
    return(
        <div className="abbsolute w-full justify-center items-center flex flex-col gap-5 h-[100%]">
            {items.map((item,index)=>(
<div
key={index}
className="w-[96%] rounded-2xl h-[47rem] flex justify-center  relative"
>
    <img src={item.images} alt={index} className="w-full h-full rounded-2xl object-cover  " />
    <div className=" absolute top-[33rem] flex flex-row w-full h-full">
    <div className="absolute left-13 flex flex-col w-max font-light text-[5rem] text-white w-[50%] ">
        <h3>
{item.name}
        </h3>
        <p className="text-[21px] mt-[-0.6rem]">
{item.text}
        </p>
        </div>

<div className="  flex absolute top-33 right-6">
{index === 0 &&(
    <div>
        <Button
         text1="Learn more"
        className1="p-2 pr-4 pl-4 justify-center items-center flex text-sm text-black font-light bg-white rounded-2xl"
        text2="Buy"
        className2="p-2 pr-4 pl-4 justify-center items-center flex text-sm text-white font-light border-1 border-white rounded-2xl hover:bg-white hover:text-black"
        />
        </div>
)}

{index === 1 &&(
    <div>
        <Button
         text1="Learn more"
        className1="p-2 pr-4 pl-4 justify-center items-center flex text-sm text-white font-light bg-blue-600 rounded-2xl"
        text2="Buy"
        className2="p-2 pr-4 pl-4 justify-center items-center flex text-sm text-blue-600 font-light border-1 border-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white"
        />
        </div>
)}
</div>
        </div>


    </div>

            ))}

        </div>
    )
}