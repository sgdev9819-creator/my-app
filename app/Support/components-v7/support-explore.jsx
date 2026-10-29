
"use client"

import Link from "next/link"

const supItems = [

{
 name:"Apple Support on YouTube",
 info:"Watch videos to get the most out of the latest",
 info2:" features, devices, and services.",
 image:"ex-1.png",
 link:"Visit Apple Support on YouTube",
},

{
 name:"Today at Apple",
 info:"Learn, create, and be inspired in hands-on sessions",
  info2:" at your Apple Store.",
 image:"ex-2.png",
 link:"Sign up",
},

]




export default function SupportExport(){

    return(
        <div className="absolute top-10 w-full h-max flex flex-row justify-center items-center gap-38 mt-12 mb-12">
            {supItems.map((item,index)=>(
  <div key={index}
  className="w-[350px] h-[360px] justify-center items-center flex flex-col relative gap-10  "
  >

    <img src={item.image} alt={index} className=" w-full h-200px rounded-3xl mt-0 object-cover justify-center items-center" />
<h3 className="absolute flex bottom-30 text-white text-[25px] font-light  justify-center items-center w-full">
    {item.name}
</h3>
    <div  className="relative top-5 justify-center items-center w-full relative top-3 flex flex-col gap-0">
        <p className="text-white text-1xl flex font-light justify-center items-center w-full">
{item.info}
        </p>
        <p className="text-white text-1xl flex font-light justify-center items-center w-full">
{
    item.info2
}
        </p>
        </div>
<Link href="#" className="text-blue-400 text-1xl font-light no-underline mt-[-10px] hover:underline" >
{item.link} {'\u003e'}
</Link>
            </div>
            ))}
          
        </div>
    )




}



