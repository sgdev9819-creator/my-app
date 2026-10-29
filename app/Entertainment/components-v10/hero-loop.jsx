"use client"
import { useEffect ,useState} from "react"
const images=[
    {image:"/l-1.png"},{image:"/l-2.png"}
]




import Link from "next/link"
export default function loop(){
    const[isactive,setisactive]=useState(0)

useEffect(()=>{
const timer = setInterval(()=>{
setisactive((previmage)=>{
    return previmage === images.length -1? 0 : previmage +1
} )
},5000)
return ()=> clearInterval(timer)

},[])  



return(
    <div className="flex flex-row gap-5 w-full justify-center items-center absolute ">
        <div className="flex flex-row gap-13 absolute top-8 left-0 justify-center items-center">




<div  className="mt-38 ml-45 justify-center items-center flex ">
<img src="/logo1.png" alt="0" className="w-full h-full object-cover"  />
</div>
        </div>

<div className="flex justify-center w-max items-center absolute top-48  font-light text-white text-[22px]">
<p>Get up to six services in one subscription with Apple One.</p>
</div>
<Link href="#" className=" w-[137px] h-[3rem] rounded-3xl border-1 border-white/70   justify-center items-center inline-flex text-white font-light text-lg absolute top-47 right-46 ">
Learn more
</Link>

    </div>
)

}
