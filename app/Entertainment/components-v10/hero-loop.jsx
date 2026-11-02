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
    <div className="flex flex-row gap-9 w-full justify-center items-center relative  h-[150px] ">
        <div className="flex flex-row gap-13 absolute top-8 left-0 justify-center items-center">




<div  className=" ml-42  mt-[14px] justify-center items-center flex ">
<img src="/logo1.png" alt="0" className="w-full h-full object-cover"  />
</div>
        </div>

<div className="flex justify-center w-max items-center absolute  font-light text-white text-[22px]">
<p>Get up to six services in one subscription with Apple One.</p>
</div>
<Link href="#" className=" w-[137px] h-[45px] rounded-3xl border-1 border-white/90   justify-center items-center inline-flex text-white font-light text-[17px] absolute top-[54px] right-40 ">
Learn more
</Link>

    </div>
)

}
