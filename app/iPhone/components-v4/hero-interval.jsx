"use client"
import { useState, useEffect, useRef } from "react"
import Button from "./button"

const Accessories = [
    {
        name: "Your AirPods. Your way.",
        image: "/ip3.png",
        info: "Get to know the whole family of AirPods and AirPods accessories. And get ",
        info2: "free engraving",
        link: "Shop all",
    },
    {
        name: "Find your study buddies.",
        image: "ip5.png",
        info: "Make it the best year ever with the latest accessories.",
        link: "Shop college essentials",
    },
]

export default function Interval() {
    const [isplaying, setisplaying] = useState(true)
    const [isfinished, setfinished] = useState(false)
    const [current, setcurrent] = useState(0)
    const containerRef = useRef(null)

    const scrollToSlide = (index) => {
        const container = containerRef.current
        if (container && container.children[index]) {
            const targetSlide = container.children[index]
            container.scrollTo({
                left: targetSlide.offsetLeft,
                behavior: "smooth"
            })
            setcurrent(index)
        }
    }

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft
            const children = Array.from(container.children)
            let closestIndex = 0
            let minDistance = Infinity

            children.forEach((child, index) => {
                const distance = Math.abs(child.offsetLeft - scrollLeft)
                if (distance < minDistance) {
                    minDistance = distance
                    closestIndex = index
                }
            })

            if (closestIndex !== current) {
                setcurrent(closestIndex)
            }
        }

        container.addEventListener("scroll", handleScroll, { passive: true })
        return () => container.removeEventListener("scroll", handleScroll)
    }, [current])

    useEffect(() => {
        let interv = null
        if (isplaying && !isfinished) {
            interv = setInterval(() => {
                const nextIndex = current === Accessories.length - 1 ? 0 : current + 1
                
                if (current === Accessories.length - 1) {
                    setisplaying(false)
                    setfinished(true)
                } else {
                    scrollToSlide(nextIndex)
                }
            }, 5000)
        }
        return () => {
            if (interv) clearInterval(interv)
        }
    }, [isplaying, isfinished, current])

    const handlePlayPause = () => {
        if (isfinished) {
            scrollToSlide(0)
            setisplaying(true)
            setfinished(false)
        } else {
            setisplaying((prev) => !prev)
        }
    }

    const activeDotIndex = current % Accessories.length

    return (
        <div className="relative w-full top-0">
            <div 
                ref={containerRef}
                className="hero-images-content"
            >
                {Accessories.map((item, index) => (
                    <div 
                        key={index}
                        className="Accessories-slid"
                    >
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <div className="flex flex-row w-full absolute top-[10%] justify-center items-center">
                            <div className="flex flex-col gap-0 absolute left-[2rem] font-light text-white">
                                <h3 className="text-[2.4rem]">{item.name}</h3>
                                <p className="text-[18px]">{item.info}{item.info2}</p>
                            </div>
                            <div className="flex absolute right-[2rem]">
                                <button className="px-[2rem] py-[0.5rem] rounded-[22px] bg-blue-700 justify-center items-center flex text-[17px] font-light text-white transition-transform duration-500 hover:bg-blue-600">
                                    Book order
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative top-[0rem] left-0 w-full flex flex-row gap-[2rem] justify-center items-center p-4">
                <div className="w-max flex flex-row gap-[1rem] justify-center items-center px-[1rem] py-[1rem] bg-white/70 backdrop-blur-[20px] rounded-[22px]">
                    {Accessories.map((_, index) => (
                        <div 
                            key={index}
                            onClick={() => {
                                scrollToSlide(index)
                                setfinished(false)
                            }}
                            className={`h-[10px] bg-white/70 rounded-full overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white/80 ${activeDotIndex === index ? "w-[50px]" : "w-[10px]"}`}
                        >
                            <span
                                className={`block h-full bg-black/70 ${activeDotIndex === index ? "animate-fill-progress" : index < activeDotIndex ? "w-full" : "w-0"}`}
                                style={{
                                    animationPlayState: isplaying ? "running" : "paused"
                                }}
                            />
                        </div>
                    ))}
                </div>

                <button 
                    onClick={handlePlayPause}
                    aria-label={isfinished ? "Restart slideshow" : isplaying ? "Pause slideshow" : "Play slideshow"}
                    className="w-max z-25 p-3 rounded-full border border-white/70 bg-white/10 backdrop-blur-[20px] flex items-center justify-center"
                >
                    {isfinished ? (
                        <img src="rotate.svg" alt="Restart" className="w-[15px] h-auto object-cover"/>
                    ) : isplaying ? (
                        <img src="pause.svg" alt="Pause" className="w-[15px] h-auto object-cover"/>
                    ) : (
                        <img src="play.svg" alt="Play" className="w-[15px] h-auto object-cover" />
                    )}
                </button>
            </div>
        </div>
    )
}