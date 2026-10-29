"use client"
import Link from "next/link"
export default function FooterVid1(){
    return(
        <div className="w-[92%] h-[46rem] flex flex-col gap-1 justify-center items-center bg-[rgba(49,48,48,0.315)]  font-light text-white">
     
<div className="w-full  justify-center flex items-center ">

<img src="f-10.png" alt="footer-img2" className="h-[10rem] " />
</div>

<div className="flex flex-col mt-[1rem] gap-0 text-5xl  w-full justify-center items-center">
    <h3>An exciting new platform.</h3>
    <h3>A world of new opportunities </h3>
    <h3>for developers.</h3>
</div>
<div  className="flex flex-col gap-0 text-2xl p-[1.5rem] w-full justify-center flex items-center">
    <p>The opportunities for what developers can dream up and build for Apple Vision Pro are</p>
    <p> endless. And with familiar tools and frameworks like Xcode, SwiftUI, RealityKit, and ARKit,</p>
    <p>
 as well as support for Unity and the 3D-content preparation app Reality Composer Pro,</p>
    <p> developers have everything they need to create amazing spatial experiences.</p>
</div>


<Link href="#" className="no-underline text-blue-500 text-2xl  hover:underline">
Learn more about developing for visionOS {'\u003e'}</Link>






</div>
)
}