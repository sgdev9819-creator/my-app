"use client"
import StoreNav from "./components-v1/store-nav"
import HeroSlid from "./components-v1/hero-slide"
import ColorfulCards from "./components-v1/colorful-words"
import HeroImages1 from "./components-v1/hero-images-1"
import HeroImages2 from "./components-v1/hero-images-2"
import BodyImages1 from "./components-v1/body-images-1"
import Images2 from "./components-v1/images-grid2"
import Button from "./components-v1/button"
import Images5 from "./components-v1/image-5"
import BodyImages2 from "./components-v1/body-images-2"
import FooterImage1 from "./components-v1/footer-image-grid-1"
import FooterImage2 from "./components-v1/footer-images-2"
import FooterInfo from "./components-v1/footer-info"
import styles from "./page.module.css"
import Link from "next/link"
export default function Mac(){


    return(
       <div className="relative top-0 left-0 flex flex-col justify-center w-full ">
    <StoreNav/>

<div className={styles["show"]} >
    <div className="w-full inline-flex  justify-center items-center">
<h3 className=" w-max h-max justify-center  font-light  items-center inline-flex text-white">For a limited time get a gift cart up to 150$ when you buy a Mac or iPad with education savings.</h3>
<Link href="#" className="w-max h-max justify-center items-center font-light  inline-flex text-blue-400 ml-5 ">Learn more</Link>
</div>
</div>
<div className="relative top-30 w-full h-[500px] z-50 justify-center items-center">
    <div className="flex flex-row">
    <h2 className="text-white text-[78px] font-light mt-14 ml-21">Store</h2>
    <div className="flex flex-col absolute right-21 mt-14">
     <h3 className="ml-1 text-3xl text-white  font-light ">The best way to buy the</h3>
    <h3 className="ml-22 text-3xl text-white  font-light ">products you love</h3>
    <div className="mt-5 flex flex-col gap-1 text-[17px] text-blue-400  absolute right-0 mt-22">
    <Link href="#" className="ml-17 font-light  ">Connect with a Specialist</Link>
     <Link href="#" className="ml-26 font-light ">Find an Apple Store</Link>
     </div>
     </div>
    
    </div>
  <HeroSlid/>
</div>


<div className="relative top-[6.5rem] left-21 flex flex-row gap-2  ">
    <h3 className=" text-white font-light text-[28px]">The latest.</h3>
    <h3 className="text-white/60 text-[28px] font-light">Take a look at what's new, right now.</h3>
</div>

<HeroImages1/>



<div className="relative top-[8.5rem] h-max z-50 left-21 flex flex-row gap-2  ">
    <h3 className=" text-white font-light text-[28px]">Accessories. </h3>
    <h3 className="text-white/60 text-[27px] font-light">Essentials that pair perfectly with your favorite products.</h3>
</div>



<HeroImages2/>





<div className="relative top-[10.5rem] left-21 flex z-2 flex-row gap-2 ">
    <h3 className=" text-white font-light text-[28px]"> 
Help is here. </h3>
    <h3 className="text-white/50 text-[28px] font-light"> Whenever and however you need it.</h3>
</div>


    <Images5/>


<div className="relative top-[12.5rem] left-21 h-max z-5 flex flex-row gap-2 ">
    <h3 className=" text-white font-light  text-[28px]">The Apple Store difference.</h3>
    <h3 className="text-white/60 text-[28px] font-light ">Even more reason to shop with us.</h3>
</div>

<ColorfulCards/>



<div className="relative top-[10.5rem] left-21 flex flex-row gap-2 ">
    <h3 className=" text-white font-light  text-[28px]"> Loud and clear.</h3>
    <h3 className="text-white/60 text-[28px] font-light "> Unparalleled choices for rich, high-quality sound.</h3>
</div>


<BodyImages2/>





<div className="relative top-[12.5rem] left-21 flex flex-row gap-2  ">
    <h3 className=" text-white font-light text-[28px]"> The Apple experience.</h3>
    <h3 className="text-white/50 text-[28px] font-light"> Do even more with Apple products and services.</h3>
</div>

    <Images2/>




<div className="relative top-[14.5rem] left-21 flex flex-row gap-2">
    <h3 className=" text-white font-light  text-[28px]">Savings and offers.</h3>
    <h3 className="text-white/60 text-[28px] font-light "> Exclusive deals, special stores and more.</h3>
</div>


<FooterImage2/>




<div className="relative top-[16.5rem] left-21 flex flex-col gap-[10px]">
    <h2 className="text-[28px] font-light  text-white ">
        Quick Links
    </h2>

    <Button 
    text1="Find a Store"
    href1="#"
    text2="Order Status"
      href2="#"
      text3="Shopping Help"
        href3="#"
        text4="Returns"
        href4="#"
        text5="Your Saves"
        href5="#"
    />
</div>
{/*

<div className="absolute top-1173  w-full  z-50">
<FooterInfo/>
</div>*/} 

<button className="absolute top-2000 text-white">path</button>
 
      </div>
    )
}