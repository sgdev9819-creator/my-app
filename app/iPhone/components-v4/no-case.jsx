"use client"
import { useState } from "react"
import Button from "../components-v4/button"
 const items = [
        {  top:"  Apple Upgrade",
           name: " Love it. Lease it. Upgrade it.",
            info:"Lease a new Mac with low monthly payments for 24 or 36 months and upgrade at the end of your term.◊◊",
            image:"pk1.jpg"
        },
        {
           
            top:"Ways to Buy",
            name:"Pay over time, interest‑free.",     
            info:"When you choose to check out at Apple with Apple Card Monthly Installments.◊◊◊",      
               image:"/pk2.jpg"

        },
        {   top:"CERTIFIRD REFURBISHED",
            name:"Shop refurbished Apple products backed by a one‑year warranty.",         
               image:"/pk4.jpg"
        },
        {
             top:"SMALL BUSINESS",
            name:"Simple solutions for all the ways you work.",             
               image:"/pk5.jpg"
        },
        {
           top:"GOVERNMENT",
            name:"Special pricing is available for state, local,  and federal agencies. ",                
               image:"/pk6.jpg"
        },
        {
            top:"VETERANS AND MILITARY",
            name:"Active and veteran members may be eligible for exclusive savings.",            
               image:"/pk8.jpg",
              
        },

         
         
         
         
    ]

export default function NoCase(){

return(

         <div className="hero-images-container" >
            <div className="active">
                {items.map((prod,index)=>(
                    <div
                    key={index}
                    className="cases"
                    >
                        <img src={prod.image} alt={prod.name}
                        className="w-full h-[240px] absolute top-0" />
                       <div className="absolute bottom-[13rem] flex flex-col gap-0 w-full justify-center items-center">                        
                        <h3 className="text-[38px]  text-white font-light justify-center w-full items-center" >{prod.name}</h3>
                        <p className="text-white font-light text-[17px] justify-center w-full justify-self-center items-center justify-center w-full pl-[15px] pr-[15px]" >{prod.info}</p>
                     
                      </div>
                      <div className="relative w-full justify-center items-center flex top-33">
                 <p className=" flex  justify-centerv font-light items-center w-[300px] text-white text-sm ">{prod.price} </p>
</div>
                         <Button 
                         text1="Learn more"
                          text2="Buy"
                               />
                             
                        </div>
                ))}
</div>
</div>
            
    
)

}






