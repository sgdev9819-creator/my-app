"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link";

const topArray = [
    { id: 1, name: "iPhone and Mac", image: "top1.jpg", info: "Footer this is a footer message i left right" },
    { id: 2, name: "iPhone and Watch", image: "top2.jpg", info: "Footer this is a footer message i left right" },
    { id: 3, name: "iPhone and Air", image: "top3.jpg", info: "Footer this is a footer message i left right" },
    { id: 4, name: "iPhone and Mac", image: "top4.jpg", info: "Footer this is a footer message i left right" },
    { id: 5, name: "iPhone and Watch", image: "top5.jpg", info: "Footer this is a footer message i left right" },
    { id: 6, name: "iPhone and Air", image: "top6.jpg", info: "Footer this is a footer message i left right" },
];

const bottomArray = [
    { id: 1, name: "iPhone and Mac", image: "down1.jpg", info: "Footer this is a footer message i left right" },
    { id: 2, name: "iPhone and Watch", image: "down2.jpg", info: "Footer this is a footer message i left right" },
    { id: 3, name: "iPhone and Air", image: "down3.jpg", info: "Footer this is a footer message i left right" },
    { id: 4, name: "iPhone and Mac", image: "down4.jpg", info: "Footer this is a footer message i left right" },
    { id: 5, name: "iPhone and Watch", image: "down5.jpg", info: "Footer this is a footer message i left right" },
    { id: 6, name: "iPhone and Air", image: "down6.jpg", info: "Footer this is a footer message i left right" },
];

const duplicatedTop = [...topArray, ...topArray];
const duplicatedBottom = [...bottomArray, ...bottomArray];

export default function FooterScroll() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const isSyncingRef = useRef(false);
    const isAutoScrollingRef = useRef(false);

    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % duplicatedTop.length;
                    scrollToIndex(nextIndex);
                    
                    if (topRef.current && nextIndex === 0) {
                        topRef.current.scrollTo({ left: 0, behavior: "auto" });
                    }
                    if (bottomRef.current && nextIndex === 0) {
                        bottomRef.current.scrollTo({ left: 0, behavior: "auto" });
                    }

                    return nextIndex;
                });
            }, 5000);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isPlaying]);

    const scrollToIndex = (index) => {
        isAutoScrollingRef.current = true;
        setCurrentIndex(index);
        
        if (topRef.current) {
            const child = topRef.current.children[index];
            if (child) {
                topRef.current.scrollTo({
                    left: child.offsetLeft,
                    behavior: "smooth"
                });
            }
        }

        if (bottomRef.current) {
            const child = bottomRef.current.children[index];
            if (child) {
                bottomRef.current.scrollTo({
                    left: child.offsetLeft,
                    behavior: "smooth"
                });
            }
        }

        setTimeout(() => {
            isAutoScrollingRef.current = false;
        }, 600);
    };

    const handleDotClick = (index) => {
        setIsPlaying(false);
        scrollToIndex(index);
    };

    const handleScroll = (sourceRef, targetRef) => {
        if (isAutoScrollingRef.current) return;
        
        setIsPlaying(false);

        if (isSyncingRef.current || !sourceRef.current || !targetRef.current) return;
        isSyncingRef.current = true;

        const source = sourceRef.current;
        const target = targetRef.current;

        const maxSourceScroll = source.scrollWidth - source.clientWidth;
        const maxTargetScroll = target.scrollWidth - target.clientWidth;

        if (maxSourceScroll > 0) {
            const scrollPercentage = source.scrollLeft / maxSourceScroll;
            target.scrollLeft = scrollPercentage * maxTargetScroll;
        }

        setTimeout(() => {
            isSyncingRef.current = false;
        }, 50);
    };

    const handlePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
    };

    const activeDotIndex = currentIndex % topArray.length;

    return (
        <div className="absolute w-full flex flex-col gap-[1rem] h-max">
            <div 
                ref={topRef}
                onScroll={() => handleScroll(topRef, bottomRef)}
                className="footer-scroll flex overflow-x-auto scrollbar-none"
            >
                {duplicatedTop.map((top, index) => (
                    <div 
                        key={index}
                        className="relative justify-center items-center  w-[800px] h-[520px] flex-shrink-0"
                    >
                        <img src={top.image} alt="" className="w-full h-full object-cover" />
                        <div className="landing-footer-scroll">
                          
                        </div>
                    </div>
                ))}
            </div>

            <div 
                ref={bottomRef} 
                onScroll={() => handleScroll(bottomRef, topRef)} 
                className="footer-scroll flex overflow-x-auto scrollbar-none"
            >
                {duplicatedBottom.map((bottom, index) => (
                    <div
                        key={index}
                        className="relative flex flex-row w-[372px] h-[220px] flex-shrink-0"
                    >
                        <img src={bottom.image} alt="" className="w-full relative h-full object-cover" />
                        <div className="landing-footer-scroll"> 
                            
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative top-[0rem]  left-0 w-full flex flex-row justify-center items-center p-4">
                <div className="w-max flex flex-row gap-[1rem] justify-center items-center px-[1rem] py-[0.5rem]  backdrop-blur-[20px] rounded-[22px]">
                    {topArray.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={` h-[10px] bg-white/70 rounded-full overflow-hidden cursor-pointer  transition-transition duration-500 hover:bg-white/80 ${activeDotIndex === index ? "w-[50px]":"w-[10px]" }`}
                        >
                            <span
                                key={`${currentIndex}-${index}`}
                                className={`block h-full bg-black/70 ${activeDotIndex === index ? "animate-fill-progress" : index < activeDotIndex ? "w-full" : "w-0"}`}
                                style={{
                                    animationPlayState: isPlaying ? "running" : "paused"
                                }}
                            />
                        </div>
                    ))}
                </div>

                <button 
                    onClick={handlePlayPause}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    className="w-max absolute right-[1%] z-20 p-4 rounded-full border border-white/70 bg-white/10 backdrop-blur-[20px]"
                >
                    {isPlaying ? (
                        <img src="pause.svg" alt="Pause video" className="w-[15px] h-auto object-cover"/>
                    ) : (
                        <img src="play.svg" alt="Play video" className="w-[15px] h-auto object-cover" />
                    )}
                </button>
            </div>
        </div>
    );
}