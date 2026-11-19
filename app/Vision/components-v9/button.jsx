import Link from 'next/link'
export default function  Button({text1 ,text2,href1,href2}){
    return(
        <div className="absolute flex flex-row gap-3 justify-center w-full items-center  w-full h-max">
            < Link href={href1 ||'#'} className="w-max bg-transparent border-1 border-white text-white p-3 rounded-3xl justify-center items-center hover:bg-white hover:text-black ">
            <button className="w-[130px] h-full flex rounded border-none justify-center items-center flex ">
                {text1}
            </button>
        </Link>
             
             <Link href={href2 ||'#'} className="w-max h-max  text-black rounded-3xl no-underline p-3 justify-center flex items-center bg-white text-1xl font-light  ">
                <button className="w-[50px] h-full flex border-none justify-center items-center flex ">
                {text2}
            </button>
              </ Link>
        </div>
    )
}