import Link from 'next/link'
export default function  Button({text1 ,href1,image1 ,imageStyle}){
    return(
        <div className=" flex gap-4 justify-center  items-center w-full h-full  flex z-300">
            < Link href={href1 ||'#'} className="button1">
             {text1}
           <img src={image1} alt='image' className={imageStyle}/>
               
            
        </Link>
             
           
        </div>
    )
}