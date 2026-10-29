import Link from 'next/link'
export default function  Button({text1 ,text2,href1,href2, className1, className2}){
    return(
        <div className=" flex flex-row gap-4 justify-center  items-center bottom-4 w-full h-max">
            < Link href={href1 ||'#'} className={className1}>
           
                {text1}
            
        </Link>
             
             <Link href={href2 ||'#'} className={className2} >
                  {text2}
              </ Link>
        </div>
    )
}