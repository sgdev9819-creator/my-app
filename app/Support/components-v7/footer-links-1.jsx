"use client"
import Link from "next/link"

export default function footerLinks(){
 return(
<div className="absolute w-full h-[300px] bg-black flex-flex-col gap-4">
    <div className="pt-18 pl-50 flex flex-col gap-2 absolute">
<h3 className="text-white  text-2xl font-light">
Apple Service Programs
</h3>
<Link href="#"  
className="text-blue-400  text-[16px] font-light no-underline hover:underline"
>
Mac mini Service Program for No Power Issue
</Link>


<Link href="#"
className="text-blue-400  text-[16px] font-light  no-underline hover:underline"
>
iPhone 14 Plus Service Program for Rear Camera Issue
</Link>


<Link href="#"
className="text-blue-400  text-[16px] font-light  no-underline hover:underline"
>
15-inch MacBook Pro Battery Recall Program
</Link>


<Link href="#"
className="text-blue-400  text-[16px] font-light  no-underline hover:underline"
>
See all programs
</Link>
    </div>


</div>


 )


}