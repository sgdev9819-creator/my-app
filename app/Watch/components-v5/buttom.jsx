import Link from 'next/link'
export default function  Button({text1 ,text2,href1,href2}){
    return(
        <div className="absolute flex flex-row gap-4 justify-center w-full items-center bottom-5 w-full h-max">
            < Link href={href1 ||'#'} className='w-[130px] h-11  rounded-4xl no-underline bg-blue-600 text-1xl text-white font-normal'>
            <button className="w-full h-full rounded border-none ">
                {text1}
            </button>
        </Link>
             
             <Link href={href2 ||'#'} className="w-max h-max pl-7 pr-7 pt-3 pb-3 text-blue-700 rounded-4xl no-underline text-1xl font-normal hover:underline rounded-4xl transition-colors duration-300 ">
                  {text2}
              </ Link>
        </div>
    )
}