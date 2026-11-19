"use client"
import Link from "next/link"
export default function FooterVid1(){
    return(
        <div className="w-[92%] h-[44rem] flex flex-row gap-1 justify-center items-center bg-[rgba(49,48,48,0.315)]  font-light text-white">
     
            <div className=" p-13 pt-4 flex flex-col gap-0 justify-center  text-6xl font-light text-white">
                <h2>  Explore</h2>
            <h2>Apple Vision Pro</h2>
            <h2>accessories.</h2>
          <Link  
          href="#" className="no-underline text-blue-500 text-3xl  hover:underline"
          >
shop {'\u003e'}

          </Link>


            </div>
            <div className="w-[47%] flex">
                <img src="ac3.png" alt="footer image" className=" object-cover rounded-[20px]" />
            </div>

            </div>

            )}