"use client"

export default function FooterVid1(){
    return(
        <div className="relative flex flex-col gap-12 justify-center items-center w-full">
            <img src="f-5.jpg" alt="second image" className="h-[32rem] object-cover" />
            <div className=" w-full flex text-white/50 text-[21px] font-light flex-col gap-0 justify-center items-center ">
                <h3 className="text-white text-4xl">
                    Responsive, precision eye tracking.
                    </h3>



                    <p className="mt-[1rem]">A high‑performance eye‑tracking system of LEDs and infrared </p>
                    <p>cameras projects invisible light patterns onto each eye. This </p>
                    <p >advanced system provides ultraprecise input, so you can accurately </p>
                    <p>select elements just by looking at them.</p>
            </div>
        </div>
    )
}