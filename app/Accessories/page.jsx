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
  <div className="relative top-0 left-0 flex flex-col justify-center w-full">
    <AccessoriesNav/>

<div className="relative  top-0 left-0 w-full h-[99rem] flex flex-col bg-black  ">

<div className="relative top-15 left-0 w-full flex flex-row  gap-[44%] ">
    <h2 className="text-white text-[80px] font-light relative top-10 left-21">Accessories</h2>

 <div className="relative right-0 top-21 flex flex-col gap-4 text-[17px] text-blue-400  ">
    <Link href="#" className="ml-17 font-light hover:underline  ">Connect with a Specialist</Link>
     <Link href="#" className="ml-17 font-light mt-[-0.3rem] hover:underline ">Find an Apple Store</Link>
     </div>
     

 
    </div>
  <AccessoriesHero/>
<div className="relative top-[17rem] z-[40] left-0 w-full flex flex-row gap-[80%] justify-center items-center">
    <h2 className="text-white text-[56px] font-light  absolute  top-10 left-21">Say hello to what’s new.</h2>

</div>

    
  
<Accessoriesslide/>
    </div>

<div className={`fixed top-[0px] w-full  z-[100]  bg-transparent justify-center items-center  flex  transition-show duration-500 
  ${showNav ? "visible opacity-100 flex overflow-hidden" : "invisible opacity-0 hidden"}
 `}> 

 <div
      onClick={() => setshowfull(false)}
      className={`fixed inset-0  z-[90] bg-black/40 backdrop-blur-[16px] transition-all duration-500 ${
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
   ${showfull ? "secondSl":"opacity-0 invisible z-0 "}
  `}>
  <SecondSlide/>
</div>

</div>
 </div>
 
    <Cases/>
  


    <div className="relative left-0 w-full  top-[31.8rem] h-[44.5rem] bg-black   flex flex-col">



<div className=" ml-21 mt-[7rem]  flex flex-row   ">
    <h2 className="text-white text-[56px] font-light   ">Why Apple is the best place to buy accessories.</h2>

</div>
  <FooterImage/>

  </div>
<div className="text-[56px] font-light z-[40]  text-white relative top-[38.5rem] left-21">
  
  <h2>Accessories</h2>
</div>

 
  <Climax/>


  <button className="absolute top-[350rem] justify-center items-center">path</button>
</div>

  )
}




