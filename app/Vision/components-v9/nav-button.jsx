import Link from 'next/link'
export default function  Button({text1 ,text2,href1,href2}){
    return(
        <div className="flex flex-row gap-2 justify-center w-full items-center  h-max">
            < Link href={href1 ||'#'} className="w-max bg-transparent border-1 border-white text-white text-sm p-1 rounded-3xl justify-center items-center hover:bg-white hover:text-black ">
            <button className="w-[100px] h-full flex rounded border-none justify-center items-center flex ">
                {text1}
            </button>
        </Link>
             
             <Link href={href2 ||'#'} className="w-max h-max  text-white rounded-3xl no-underline p-1 justify-center flex items-center bg-blue-600 text-sm font-light  ">
                <button className="w-[50px] h-full flex border-none justify-center items-center flex ">
                {text2}
            </button>
              </ Link>
        </div>
    )
}