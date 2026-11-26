"use client"
import Link from "next/link"
import { div } from "framer-motion/client"
import { useState,useEffect, useRef } from "react"
const quickLinks = [
    {lebel:"Mac",path:"/Mac"},
    {lebel:"iPad",path:"/iPad"},
    {lebel:"iPhone",path:"/iPhone"},
    {lebel:"Watch",path:"/Watch"},

]
export default function Search(){
    const[isquery,setisquery] = useState("")
    const[products,setproducts]=useState([])
    const[isSearchdrop,setisSearchdrop]= useState(false)
    const inputRef = useRef(null)

    useEffect(()=>{
        fetch("/api/products")
        .then((res)=> res.json())
        .then((data)=> setproducts(data.products || data || []))
        .catch((err)=> console.log("failed to fetch items:",err))
    },[])

useEffect(()=>{
    if(isSearchdrop){
        setisquery("")
        setTimeout(()=> inputRef.current?.focus(), 50 )
    
    }
},[])

const trimmed =  isquery.trim().toLowerCase()
const results = trimmed
? products.filter((item)=>
  item.name?.toLowerCase().includes(trimmed)
   || item.category?.toLowerCase().includes(trimmed)
    
   
)
.slice(0,6):[]

return(
    <div className="flex flex-col w-full">
<div className="flex flex-row relative  gap-[10%] ">
    <div className="flex flex-row gap-4 w-full px-[1rem]">
     <img src="search.svg" alt="" className="w-[20px] h-[20px] justify-center items-center inline-flex  mt-[0.5rem]" />
    <input ref={inputRef}
     value={isquery} 
    onChange={(e)=>{setisquery(e.target.value)}}
     type="text" 
     placeholder="Search"
     className="w-full text-white bg-transparent text-[24px] font-light placeholder-white/60 focus:outline-none" />
     </div>
     {isquery && ( 
        <button 
        onClick={()=> setisquery("")}
        className="w-max h-max p-[5px] justify-center items-center inline-flex bg-white-80 rounded-full  relative right-0 inline-flex hover:bg-white/90">
            <img src="x.svg" alt="closing svg" className="w-[13px] h-[13px] object-cover" />
            </button>
     )}
</div>
<div className="flex flex-col relative top-[2rem]">
<p className="text-white/60 text-[12px] font-lighr">
    {trimmed ? "Suggested Links":"Quick Links"}
</p>
{!trimmed ? (
    <div className="flex flex-col relative top-[1rem] ">
        {quickLinks.map((lin,index)=>(
          
            <Link
            key={index}
            href={lin.path}
            className="flex flex-row gap-4 w-full py-[0.3rem] pl-[0.3rem] text-white/80 text-[12px] hover:bg-white/5 hover:text-white"
            >
           &rarr;  {lin.lebel}
            
            </Link>
          
        ))}
            </div>
    ):results.length > 0 ? (
        <div className="flex flex-col relative top-[1rem]">
            {results.map((res,index)=>(
                <Link
                key={index}
                href={`/${res.category}`}
                onClick={()=> setisSearchdrop(false)}
                className="flex flex-row gap-4 w-full py-[0.3rem] pl-[0.3rem] text-white/80 text-[12px] hover:bg-white/5 hover:text-white"
                >
                     &rarr;  {res.name}

                    </Link>
            ))}
            </div>
    ):(
        <div className="relative top-[1rem] text-[12px] text-white font-light ">
            <p>no matching results for "{isquery}"</p>
        </div>
    )}


</div>

    </div>
)






}

