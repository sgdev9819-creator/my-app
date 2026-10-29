"use client"
import Button3 from "./botton-3"

const items=[
    {
        
        name:"Fast, free delivery",
        info1:"Or pick up available items at an ",
        info2:"Apple Store.",
        image:"footer-8.png",
    },
    {
        name:"Get help buying",
        info1:"Have a question? Call a Specialist",
        info2:" or chat online.",
        image:"footer-7.png",
    },



 
]





export default function HelperTwo(){
return(
     <div className="absolute bottom-0 flex flex-row gap-8 justify-center items-center w-full ">
                {items.map((item,index)=>(
                  <div
                  key={index} 
                  className="relative flex flex-col gap-6 justify-center items-center w-[400px]"
                  >
                      <img src={item.image} alt={index} className="justify-center items-center flex w-[150px] " />
                      
                         <h3 className="font-light text-white text-[22px] mt-[-1rem]">
                         {
                             item.name                       }
                         </h3>
                         
                         <span className="font-light text-white text-1xl mt-[2rem] flex w-full absolute 
                         top-[3.8rem]
                         justify-center items-center">
                          {
                              item.info1
                          }
                         </span>
                         <span className="font-light text-white text-1xl mt-[-0.3rem] ">
                          {
                              item.info2
                          }
                         </span>
  <div className="w-full absolute top-0">
                         
  {index !== 1 &&(
      <Button3
     text1="Learn more"
      
      />
  )}
  
  { index === 1 &&(
  
      <Button3
      text1="contact us"
      
      />
  )}
  
      </div>
  
  
                      </div>
              ))}
              </div>
)
}