"use client"

import { image } from "framer-motion/client"

const products = [
    {   
        golden:"",
        name:"",
        text:"",
        text1:"",
        price:"",
        image:""
    },
    {    golden:"",
         name:"",
        text:"",
        text1:"",
        text2:"",
        text3:"",
         price:"",
        image:""
    },
    {
         name:"",
        text:"",
        text1:"",
        text2:"",
         price:"",
        image:""
    },
    {
         name:"",
        text:"",
        text1:"",
        price:"",
        image:""
    },
]
import Button  from "./button2"
export default function flex(){
    return(
        <div>
            {products.map((item,index)=>(
                <div 
                key={index}
                className="" >
                    <img src="" alt="" />
                    <div className="">
                        <p>
                            {item.golden}
                        </p>
                        <h3>
                            {item.name}
                        </h3>
                        <p>
                            {item.text}
                        </p>
                        <p>
                             {item.text1}
                        </p>
                        <p>
                             {item.text2}
                        </p>
                        <p>
                             {item.text3}
                        </p>
                        </div>

<div>
    <Button
    text2="Learn more"
    className2=""

    />
</div>

                    </div>
            ))}
        </div>
    )
}