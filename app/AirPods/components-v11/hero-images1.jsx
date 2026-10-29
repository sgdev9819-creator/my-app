"use client"

const images = [
    {image:"/pods1.png"},
  
     {image:"/pods3.png"},
    {image:"/pods4.png"} ,
    {image:"/pods5.png"}
  
]
import Button  from "./button"
import { useEffect,useState } from "react"
 export default function ImagesLoop(){
const [isActive,setisActive]=useState(0)

useEffect(()=>{
    const timer = setInterval(()=>{
setisActive((prevIndex)=>{
    return prevIndex === images.length -1?0:prevIndex +1
})
    },1000)
    return ()=> clearInterval(timer)
    },[])



   
        return(
            <div className="w-full h-[46rem] justify-center items-center flex ">
              
                    <div
                    
                    className="flex relative font-light text-white bg-black rounded-2xl w-[96%] h-full "
                    >
                        <div className="w-full justify-center items-center inline-flex absolute top-[15rem]">
                        <h2 className="text-[10rem] z-10 w-full justify-center items-center flex">
                            AirPods Max 2
                        </h2>
                          {images.map((image,index)=>(
                        <div
                        key={index}
                        className={` ${isActive === index? "loopItems":"airpods-loop-item"}`}>
                             <img src={image.image} alt="" className="h-[35rem] object-cover "  />
                            </div>
                               ))}
                       </div >
                       <div className="absolute top-[37rem] flex flex-row w-full ">
                        <div className="absolute left-10 flex flex-col gap-5 text-2xl">
                             <p>
                            Listening. Remastered.
                        </p>
                            <p>$549</p>
                        </div>
                       

 <div className="absolute top-12 right-10">
        <Button
         text1="Learn more"
        className1="p-2 pr-4 pl-4 justify-center items-center flex text-sm text-white font-light bg-blue-600 rounded-2xl"
        text2="Buy"
        className2="p-2 pr-4 pl-4 justify-center items-center flex text-sm text-blue-600 font-light border-1 border-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white"
        />
        </div>
</div>
                        </div>
             
            </div>
        )
    }