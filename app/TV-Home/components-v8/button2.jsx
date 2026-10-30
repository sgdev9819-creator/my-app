import Link from 'next/link'
export default function  Button({text1 ,text2,href1,href2}){
    return(
        <div className="absolute flex flex-col gap-0 justify-center  items-center top-35 w-full h-max">
            < Link href={href1 ||'#'} className='w-[114px] h-10  rounded-4xl no-underline bg-blue-600 text-[17px] text-white font-normal'>
            <button className="w-full h-full rounded border-none ">
                {text1}
            </button>
        </Link>
             
             <Link href={href2 ||'#'} className="w-max h-max pl-7 pr-7 pt-3 pb-3 text-blue-400 rounded-4xl no-underline text-[17px] font-normal hover:underline rounded-4xl transition-colors duration-300 ">
                  {text2} {'\u003e'}
              </ Link>
        </div>
    )
}