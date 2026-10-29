"use client"

import { image } from "framer-motion/client"

const products = [
    {   
        golden:"New",
        name:"AirPods 5",
        text:"Discover the magic of",
        text1:"Active Noise Cancellation.",
        price:"$129",
        image:"/air-body.png"
    },
    {    golden:"New",
         name:"AirPods 5",
        text:"Wireless Charging Case",
        text1:"Active Noise Cancellation,",
        text2:" volume swipe, and longer ",
        text3:"battery life.",
        text4:"",
         price:"$149",
        image:"/air-body.png"
    },
    {
         name:"AirPods Pro 3",
        text:"The world’s best in‑ear Active ",
        text1:"Noise Cancellation,◊ with heart ",
        text2:"rate sensing during workouts.◊◊",
         price:"$249",
        image:"/air-body.png"
    },
    {
         name:"AirPods Max 2",
        text:"The ultimate over‑ear personal",
        text1:"listening experience.",
        price:"$549",
        image:"/pods1.png"
    },

   {   
        golden:"New",
        name:"AirPods 5",
        text:"Discover the magic of",
        text1:"Active Noise Cancellation.",
        price:"$129",
        image:"/air-body.png"
    },
    {    golden:"New",
         name:"AirPods 5",
        text:"Wireless Charging Case",
        text1:"Active Noise Cancellation,",
        text2:" volume swipe, and longer ",
        text3:"battery life.",
        text4:"",
         price:"$149",
        image:"/air-body.png"
    },
    {
         name:"AirPods Pro 3",
        text:"The world’s best in‑ear Active ",
        text1:"Noise Cancellation,◊ with heart ",
        text2:"rate sensing during workouts.◊◊",
         price:"$249",
        image:"/air-body.png"
    },
    {
         name:"AirPods Max 2",
        text:"The ultimate over‑ear personal",
        text1:"listening experience.",
        price:"$549",
        image:"/pods1.png"
    },

   {   
        
      
        image:"/air-body.png"
    },
    {   
        image:"/air-body.png"
    },
    {
         name:"AirPods Pro 3",
        text:"The world’s best in‑ear Active ",
        text1:"Noise Cancellation,◊ with heart ",
        text2:"rate sensing during workouts.◊◊",
         price:"$249",
        image:"/air-body.png"
    },
    {
       
        image:"/pods1.png"
    },

   {   
       
        image:"/air-body.png"
    },
    {   
        image:"/air-body.png"
    },
    {
         name:"AirPods Pro 3",
        text:"The world’s best in‑ear Active ",
        text1:"Noise Cancellation,◊ with heart ",
        text2:"rate sensing during workouts.◊◊",
         price:"$249",
        image:"/air-body.png"
    },
    {
         name:"AirPods Max 2",
        text:"The ultimate over‑ear personal",
        text1:"listening experience.",
        price:"$549",
        image:"/pods1.png"
    },

   {   
        golden:"New",
        name:"AirPods 5",
        text:"Discover the magic of",
        text1:"Active Noise Cancellation.",
        price:"$129",
        image:"/air-body.png"
    },
    {    golden:"New",
         name:"AirPods 5",
        text:"Wireless Charging Case",
        text1:"Active Noise Cancellation,",
        text2:" volume swipe, and longer ",
        text3:"battery life.",
        text4:"",
         price:"$149",
        image:"/air-body.png"
    },
    {
         name:"AirPods Pro 3",
        text:"The world’s best in‑ear Active ",
        text1:"Noise Cancellation,◊ with heart ",
        text2:"rate sensing during workouts.◊◊",
         price:"$249",
        image:"/air-body.png"
    },
    {
         name:"AirPods Max 2",
        text:"The ultimate over‑ear personal",
        text1:"listening experience.",
        price:"$549",
        image:"/pods1.png"
    },

   {   
        golden:"New",
        name:"AirPods 5",
        text:"Discover the magic of",
        text1:"Active Noise Cancellation.",
        price:"$129",
        image:"/air-body.png"
    },
    {    golden:"New",
         name:"AirPods 5",
        text:"Wireless Charging Case",
        text1:"Active Noise Cancellation,",
        text2:" volume swipe, and longer ",
        text3:"battery life.",
        text4:"",
         price:"$149",
        image:"/air-body.png"
    },
    {
         name:"AirPods Pro 3",
        text:"The world’s best in‑ear Active ",
        text1:"Noise Cancellation,◊ with heart ",
        text2:"rate sensing during workouts.◊◊",
         price:"$249",
        image:"/air-body.png"
    },
    {
         name:"AirPods Max 2",
        text:"The ultimate over‑ear personal",
        text1:"listening experience.",
        price:"$549",
        image:"/pods1.png"
    },

   {   
        golden:"New",
        name:"AirPods 5",
        text:"Discover the magic of",
        text1:"Active Noise Cancellation.",
        price:"$129",
        image:"/air-body.png"
    },
    {    golden:"New",
         name:"AirPods 5",
        text:"Wireless Charging Case",
        text1:"Active Noise Cancellation,",
        text2:" volume swipe, and longer ",
        text3:"battery life.",
        text4:"",
         price:"$149",
        image:"/air-body.png"
    },
    {
         name:"AirPods Pro 3",
        text:"The world’s best in‑ear Active ",
        text1:"Noise Cancellation,◊ with heart ",
        text2:"rate sensing during workouts.◊◊",
         price:"$249",
        image:"/air-body.png"
    },
    {
         name:"AirPods Max 2",
        text:"The ultimate over‑ear personal",
        text1:"listening experience.",
        price:"$549",
        image:"/pods1.png"
    },

9,10,12,13,14


    ]
import Button  from "./button2"
export default function FooterGrid(){
    return(
        <div className="relative grid grid-cols-4 rel gap-[2.5rem] w-full h-full p-6 pr-12 ">
    {products.map((item,index)=>(
     <div 
                key={index}
                className="relative flex flex-col  justify-center  items-center w-[235px] h-[490px]  font-light text-white " >
                    <img src={item.image} alt={index} className="h-[200px] absolute top-0"/>
                    <div className="w-full flex flex-col gap-0 justify-center items-center">
                        <div className="w-full flex justify-center items-center absolute top-[13.5rem]">
                        <p className="text-sm text-orange-600">
                            {item.golden}
                        </p>
                        </div>
                        <div className="w-full flex flex-col gap-0 justify-center items-center absolute top-[14.7rem]">
                        <h3 className="text-2xl ">
                            {item.name}
                    
                        </h3>


                         <p className="text-white mt-[-0.2rem]">
                            {item.text4}
                        </p>
                        </div>
                      
                        <div className="w-full absolute top-[18.3rem] justify-center white/70 items-center flex  flex-col gap-0">
                        <p >
                            {item.text}
                        </p>
                        <p className="mt-[-0.3rem]">
                             {item.text1}
                        </p>
                        <p className="mt-[-0.3rem]">
                             {item.text2}
                        </p>
                        <p className="mt-[-0.3rem]">
                             {item.text3}
                        </p>
                         <p className="mt-[-0.3rem]">
                             {item.text4}
                        </p>
                        </div>
                        </div>

                            

<div className="absolute flex justify-center items-center bottom-7 w-full">
    <Button
    text1="Buy"
    className1="w-[50px] justify-center text-sm items-center inline-flex h-[1.2rem] bg-blue-600 text-white font-light rounded-2xl no-underline"
    text2="Learn more"
    className2="w-max text-blue-400 text-sm justify-center items-center inline-flex font-light no-underline hover:underline "

    />
</div>
<span className="w-full h-[1px] bg-white/40 justify-center items-center absolute bottom-0 flex"></span>
                    </div>
            ))}
        </div>
    
  
    )
}




