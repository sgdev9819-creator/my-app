"use client"
import AccessoriesNav from "./components-v6/Accessories-nav"
import Accessoriesslide from "./components-v6/accessories-images-1"
import Cases from "./components-v6/Accessories-cases"
import FooterImage from "./components-v6/footer-cards"
import Climax from "./components-v6/climax"
import AccessoriesHero from "./components-v6/accessories-hero"
import Link from "next/link"

import SecondSlide from "./components-v6/second-nav-slider"
import { useEffect,useState } from "react"
export default function Accessories(){
const[showNav,setshowNav]=useState(false)
const[showfull,setshowfull]=useState(false)
useEffect(()=>{
    const handleShow =()=>{
        if(window.scrollY > 400){
          setshowNav(true)
        }else{
   setshowNav(false)
        }
    }
    window.addEventListener('scroll',handleShow)
    return ()=> window.removeEventListener('scroll',handleShow)
},[])

  return( 
  <div className="absolute top-0 left-0 flex justify-center w-full">
    <AccessoriesNav/>

<div className="absolute  top-0 left-0 w-full h-[99rem] justify-center flex bg-black  ">

<div className="absolute top-15 left-2 w-full flex flex-row gap-[80%] justify-center items-center">
    <h2 className="text-white text-[5rem] font-light  absolute  top-10 left-20">Accessories</h2>

 <div className="absolute right-50 top-21 flex flex-col gap-4 text-[17px] text-blue-400  ">
    <Link href="#" className="ml-17 font-light  ">Connect with a Specialist</Link>
     <Link href="#" className="ml-17 font-light mt-[0.5rem]  ">Find an Apple Store</Link>
     </div>
     
  <div className="absolute top-[36rem] w-full z-100 "><Accessoriesslide/></div>

    </div>


<div className={`fixed top-[0px] w-full  z-200  bg-transparent justify-center items-center  flex  transition-show duration-500 
  ${showNav ? "visible opacity-100 flex overflow-hidden" : "invisible opacity-0 hidden"}
 `}> 

 <div
      onClick={() => setshowfull(false)}
      className={`fixed inset-0  z-40 bg-black/40 backdrop-blur-[16px] transition-all duration-500 ${
        showfull ? "opacity-100 visible overflow-y-hidden" : "opacity-0 invisible pointer-events-none overflow-y-flex"
      }`}
    />

<div className={`second-nav  ${showfull?"isfull":"not-full"}`}>
<h3 className={`secondnav-text
  ${showfull?"active-text":"text "}
  `}>
Accessories
</h3>

<button
onClick={()=> setshowfull((prev) => !prev)}
className={`acc-button ${showfull?"activebutton":"button"}`}>
{showfull ? (
  <img src="/x.svg" alt="Close" className=" justify-ceter items-center flex w-[15px] h-[15px] object-cover" />
) : (
  <span>Explore</span>
)}


</button>

<div className={`absolute w-full  mt-[5rem] justify-center items-center flex z-100 transition-colors duration-500
   ${showfull ? "opacity-100 visible z-50 ":"opacity-0 invisible z-0 "}
  `}>
  <SecondSlide/>
</div>

</div>
 </div>


<div className="absolute top-[31rem] z-100 left-2 w-full flex flex-row gap-[80%] justify-center items-center">
    <h2 className="text-white text-[2.7rem] font-light  absolute  top-10 left-20">Say hello to what’s new.</h2>

</div>

    <div className="absolute top-50 z-100 w-full ">
    <AccessoriesHero/>
</div>
    </div>


  <div className="absolute top-[99rem] z-100 justify-center w-full "><Cases/></div>






    <div className="absolute left-2 w-full z-100 top-[181rem] h-[43rem] bg-black  justify-center items-center flex flex-col">



<div className="absolute top-[5.5rem] left-2 w-full flex flex-row gap-[80%] justify-center items-center z-100">
    <h2 className="text-white text-[2.7rem] font-light z-100  absolute  top-10 left-20">Why Apple is the best place to buy accessories.</h2>

</div>

  <div className="absolute top-[17rem] z-100 justify-center w-full "><FooterImage/></div>
  </div>
<div className="text-5xl font-light z-100  text-white absolute top-[233.3rem] left-21">
  
  <h2>Accessories</h2>
</div>
<div className="absolute top-[249rem] justify-center w-full z-100">
 
  <Climax/>
</div>

  <button className="absolute top-[300rem] justify-center items-center">path</button>
</div>

  )
}




