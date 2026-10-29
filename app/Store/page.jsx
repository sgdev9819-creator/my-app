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
       <div className="absolute top-0 left-0 flex justify-center w-full ">
    <StoreNav/>

<div className={styles["show"]} >
    <div className="w-full inline-flex  justify-center items-center">
<h3 className=" w-max h-max justify-center  font-light  items-center inline-flex text-white">For a limited time get a gift cart up to 150$ when you buy a Mac or iPad with education savings.</h3>
<Link href="#" className="w-max h-max justify-center items-center font-normal  inline-flex text-blue-400 ml-5 ">Learn more</Link>
</div>
</div>
<div className="relative top-30 w-full h-[500px] z-50 justify-center items-center">
    <div className="flex flex-row">
    <h2 className="text-white text-[78px] font-light mt-14 ml-27">Store</h2>
    <div className="flex flex-col absolute right-30 mt-14">
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


<div className="absolute top-150 left-27 flex flex-row gap-2 justify-center items-center ">
    <h3 className=" text-white font-light text-[28px]">The latest.</h3>
    <h3 className="text-white/60 text-[28px] font-light">Take a look at what's new, right now.</h3>
</div>
<div className="absolute top-88 w-full ">
<HeroImages1/>
</div>


<div className="absolute top-307 z-50 left-27 flex flex-row gap-2 justify-center items-center ">
    <h3 className=" text-white font-light text-[28px]">Accessories. </h3>
    <h3 className="text-white/60 text-[27px] font-light">Essentials that pair perfectly with your favorite products.</h3>
</div>


<div className="absolute top-244 z-50 w-full ">
<HeroImages2/>
</div>




<div className="absolute top-[115.6rem] left-27 flex z-2 flex-row gap-2 justify-center items-center ">
    <h3 className=" text-white font-light text-[28px]"> 
Help is here. </h3>
    <h3 className="text-white/50 text-[28px] font-light"> Whenever and however you need it.</h3>
</div>

<div className=" flex absolute top-[100rem] z-4 w-full ">
    <Images5/>
</div>

<div className="absolute top-[154.8rem] left-27 h-max z-5 flex flex-row gap-2 justify-center items-center ">
    <h3 className=" text-white font-light  text-[28px]">The Apple Store difference.</h3>
    <h3 className="text-white/60 text-[28px] font-light ">Even more reason to shop with us.</h3>
</div>

<div className=" absolute top-[140rem] w-full  flex z-60 ">
<ColorfulCards/>
</div>


<div className="absolute top-[193.4rem] left-27 flex flex-row gap-2 justify-center items-center ">
    <h3 className=" text-white font-light  text-[28px]"> Loud and clear.</h3>
    <h3 className="text-white/60 text-[28px] font-light "> Unparalleled choices for rich, high-quality sound.</h3>
</div>

<div className="absolute top-[181.8rem] w-full  z-50">
<BodyImages2/>
</div>




<div className="absolute top-[232.5rem] left-27 flex flex-row gap-2 justify-center items-center ">
    <h3 className=" text-white font-light text-[28px]"> The Apple experience.</h3>
    <h3 className="text-white/50 text-[28px] font-light"> Do even more with Apple products and services.</h3>
</div>
<div className="w-full flex absolute top-[196.5rem] ">
    <Images2/>
</div>



<div className="absolute top-[271.8rem] left-27 flex flex-row gap-2 justify-center items-center ">
    <h3 className=" text-white font-light  text-[28px]">Savings and offers.</h3>
    <h3 className="text-white/60 text-[28px] font-light "> Exclusive deals, special stores and more.</h3>
</div>

<div className="absolute top-[255.8rem] w-full  z-50">
<FooterImage2/>
</div>



<div className="absolute top-[310.5rem] left-27 flex flex-col gap-[10px]">
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