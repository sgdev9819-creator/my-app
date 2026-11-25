import Link from 'next/link'
import {useStore} from "../../context/StoreContext"
export default function  Button({text1 ,text2,href1,href2,item}){
    const{AddtoCart}=useStore()
    return(
        <div className="absolute flex flex-row gap-4 justify-center w-full items-center bottom-2 w-full h-max">
            < Link href={href1 ||'#'} className='w-[130px] h-11  rounded-4xl no-underline bg-blue-600 text-1xl text-white/90 font-normal'>
            <button className="w-full h-full rounded border-none ">
                {text1}
            </button>
        </Link>
             
             <button 
             type="button"

             onClick={()=>{
                console.log("add cart:",item)
                AddtoCart(item)}
             }
             className="w-max h-max border-none pl-7 pr-7 pt-3 pb-3 text-blue-400 rounded-4xl no-underline text-[17px] font-normal hover:underline rounded-4xl transition-colors duration-300 ">
                  {text2}
              </ button>
        </div>
    )
    
}