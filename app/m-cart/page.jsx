"use client"
import Link from "next/link"
export default function Mcart() {

    return (
        <div className="relative flex flex-col w-full">
            <h3 className="text-white font-normal text-[27px] ml-21
            mt-5">

                Your bag is coming soon...
            </h3>
            <Link
                href="/Store"
                className="ml-21 text-[17px] font-light text-blue-400 hover:underline">Continue shoping</Link>
        </div>
    )
}