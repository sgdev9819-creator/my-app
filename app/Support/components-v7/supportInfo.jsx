"use client"
import Link from "next/link"

export default function   supportInfo(){
    return(
<div className="flex flex-col justify-center items-center w-[72.6%] h-max absolute gap-[28px]">
<div className="w-full h-[312px] justify-center items-center flex flex-col bg-black rounded-[21px]" >
<h3 className="justify-center absolute flex top-[2.2rem] w-full text-[24px] font-light text-white ">
Designing for longevity
</h3>
<div className="justify-center items-center  flex flex-col w-full text-[17px] absolute top-[5.2rem] font-light text-white " >
<p>
At Apple, we are always working to create the best experience for our customers,
 which is why we design
 </p>

 <p>
  products that last.
  Designing for longevity is a company-wide effort,
   informing our earliest decisions long
   </p>
   <p>
    before the first prototype is built and guided
    by historical customer-use data and predictions on future 
    </p>
<p>
    usage.
     It requires striking a balance between durability and repairability while not compromising on safety,
</p>
      security, and privacy.
      <div className=" absolute bottom-[-2.5rem] justify-center items-center  flex flex-col w-full text-[17px] absolute  font-light text-white ">

<p>
    Learn more about Apple's approach to designing for longevity, which includes access to safe and reliable 
</p>
<div className="flex flex-row gap-2 w-full text-[17px] justify-center items-center absolute text-white top-[1.5rem]">
<p>
     repairs.
</p >
<Link href="#" className="text-blue-400 text-[17px] flex ">
 View (PDF)</Link>

</div>
      </div>

</div>
</div>


<div className="flex flex-row w-full h-auto   gap-6 ">
   

<div className="  flex w-[65.8%] h-[365px] bg-black rounded-[22px] absolute ">
    <div className="flex flex-col absolute left-13 top-8 flex gap-[9px] text-white w-max">
  <h3 className="font-light text-white text-[23.9px] ">
Beware of counterfeit parts
    </h3>
<div  className="font-normal text-white/90 text-[17px] flex flex-col gap-0   ">
<div>

<p> Some counterfeit and third party power adapters and batteries may </p>
<p>   not be designed properly and could result in safety issues. To ensure</p>
<p> you receive a genuine Apple battery during a battery replacement,  we</p>
</div>
<div className="flex flex-row gap-1 w-full" >
<p>recommend visiting an</p>
<Link href="#" className="flex text-[17px] text-blue-400 font-normal hover:underline">
 Apple Store 
</Link>
<p>or</p>
<Link  href="#" className="flex text-[17px] text-blue-400 font-normal hover:underline ">
Apple Authorized Service
</Link>
</div>
<div className="flex flex-row gap-1 w-full">
    <Link href="#"  className="flex text-[17px] text-blue-400 font-normal hover:underline ">Provider.</Link>
    <p> If you need a replacement adapter to charge your Apple</p>
</div>

<p>device, we recommend getting an Apple power adapter.</p>



      
</div>


<div className="text-white/90 absolute top-[13.2rem] w-full flex flex-col gap-0 font-light text-[16.8px] ">
    <p> Also non-genuine replacement displays may have compromised visual</p>
    <p>quality and may  fail to work correctly. Apple-certified screen repairs</p>
    <p>are performed by trusted experts who use genuine Apple parts.</p>
   
      
</div>

    </div>
  
</div>






    <div className=" w-[31.8%] h-[365px]  justify-center items-center flex flex-col bg-black absolute right-0
     rounded-[21px]">
        <div className=" flex-flex-col gap-4 absolute left-[24px] top-[3.1rem]">
        <img src="/icon1.svg" alt="#" className=" w-[60px]  mt-[-0.6rem] ml-[1.5px]"/>
        <div className="font-light text-white text-[24px] mt-2 flex flex-col ">

       
        <h3>
            Be aware of gift card
        </h3>
        <h3 className="mt-[-0.5rem]"> scams</h3>
         </div>
        <div className="font-light text-white flex flex-col gap-0 mt-[11px] text-[17px]  ">

<p>Be aware of scams involving</p> 
<p>Apple Gift Cards, App Store &</p> 
<p>iTunes Gift Cards, and Apple</p>
<p> Store Gift Cards.</p>
        </div>
        <div className="absolute top-[15.5rem]">
        <Link className="text-blue-600 text-[17px] font-normal no-underline mt-[17px] hover:underline" href="#">
        Learn more {'\u003e'}
        </Link>
        </div>
    </div>
    </div>
</div>
</div>

    )
}