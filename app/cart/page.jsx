"use client"
import Link from "next/link";
import {useStore} from "../context/StoreContext";

export default function CartPage(){
const{cart,removeCart} = useStore()

    const item = Array.isArray(cart) ? cart :[]


return(
    <div className="flex flex-col w-full">
        {item.length === 0 ?(  <div>
<h3 className="text-[24px] font-light text-white relative">
    Your Bag is empty.
</h3>
<Link
href="/Mac"
className="text-blue-400 text-[14px] font-light relative top-[0.5rem] hover:underline "
>
    Shop Now 
</Link>

        </div>)
        :(
            <div className="w-full flex flex-col relative gap-[2rem] ">
                <div className="cartScroll">
{cart.map((item)=>(
<div
key={item.cartkey}
className="w-full flex flex-row gap-4 shrink-0 border-b border-white/20  h-[60px] "
>
    <img src={item.image} alt={item.id} className="w-16 h-16 object-contain rounded-[2px] p-[0.5rem] relative" />
    <div className="flex flex-row  gap-[50%] w-full">
    <div className="flex flex-col gap-[20px] w-[300px]"> 
      <h3 className="text-[15px] text-white font-normal">
        {item.name}
    </h3>
      
    </div>
     <button
    onClick={()=> removeCart(item.cartkey)}
    className="border-none text-white relative mr-0 right-0 w-max h-max p-[9px]  ">
     <img src="/x.svg" alt="Close" className=" justify-ceter items-center flex w-[15px] h-[15px] object-cover" />
    </button>
      
  </div>

    </div>

))}
</div>
<Link
href="/m-cart"
    className="text-white font-light bg-blue-600 px-[2rem] py-[0.7rem] w-full justify-center items-center flex rounded-[22px] mt-[2rem]  "
>
    Review Bag
</Link>
            </div>
        )}
        
<div className="flex flex-col relative top-[1.5rem] w-full ">
    <p className="text-white/60 font-light text-[14px] relative">
        My Profile
    </p>
    <div className="relative top-[1rem] flex flex-col gap-[0.5rem] w-full text-white text-[14px] font-light">
        <Link
          href="#"
        className="flex flex-row gap-4 w-full py-[0.3rem] text-[12px]
            text-white/80  hover:bg-white/5 hover:text-white">
           &rarr;   Orders
        </Link>
         <Link
          href="#"
         className="flex flex-row gap-4 w-full py-[0.3rem] text-[12px]
            text-white/80  hover:bg-white/5 hover:text-white">
            &rarr;   Your Saves
         </Link>
          <Link
            href="#"
          className="flex flex-row gap-4 w-full py-[0.3rem] text-[12px]
            text-white/80  hover:bg-white/5 hover:text-white">
           &rarr;   Account
          </Link>
           <Link
             href="#"
           className="flex flex-row gap-4 w-full py-[0.3rem] text-[12px]
            text-white/80  hover:bg-white/5 hover:text-white">
           &rarr;   Sign in
           </Link>
    </div>
</div>
    </div>
)

}