import Link from 'next/link'
export default function  Button({text1 ,href1}){
    return(
        <div className="absolute flex flex-row gap-4 justify-center w-full items-center top-35 w-full h-max">
             
             <Link href={href1 ||'#'} className="w-max h-max pl-7 pr-7 pt-3 pb-3 text-blue-400 rounded-4xl no-underline text-[17px]  font-normal hover:underline rounded-4xl transition-colors duration-300 ">
                  {text1} {'\u003e'}
              </ Link>
        </div>
    )
}