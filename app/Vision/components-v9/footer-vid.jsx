"use client"

export default function Footervid(){
    return(
        <div className="relative w-full justify-center flex font-light ">


<video src="large7.mp4" autoPlay muted 
loop
 playsInline className=" w-full"  />

<div className="absolute top-[31rem] right-[5rem] flex w-[400px] flex-col gap-4">
    
<div className="text-white text-4xl">
    <h3>
        Our most advanced Spatial Audio system ever.
    </h3>
</div>

<div className="text-white/50 text-[20px] ">
    
       <p> Dual-driver audio pods positioned next to</p> 
       <p> each ear deliver personalized sound while</p>
      <p>   letting you hear what’s around you.</p>
          <div className="w-full flex flex-row gap-1">
            <p className="text-white">Spatial Audio </p>
            <p>makes sounds feel like</p>
          </div>
           <p>
            they’re coming from your surroundings.
            </p>
           <p> Audio ray tracing analyzes your room’s</p>
           <p>  acoustic properties to adapt and match </p>
            <p> sound to your space. And if you want to use</p>
              <p>headphones with Apple Vision Pro,</p>
               <p>AirPods Pro 3 and AirPods 4 offer the</p>
               <p> perfect experience — featuring Lossless</p>
                 <p>Audio with ultra-low latency, supported by</p>
                  <p>the H2‑to‑H2 connection across devices.</p>
    
</div>


</div>

        </div>
    )
}